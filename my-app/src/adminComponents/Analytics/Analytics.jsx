// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  ResponsiveContainer,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  Cell,
} from "recharts";
import { useEffect, useState } from "react";
import { getAnalytics } from "../../redux/actions/analyticsActions";
import { useSelector, useDispatch } from "react-redux";
import styles from "./analytics.module.css";
import { Link } from "react-router-dom";
import { ThreeCircles } from 'react-loader-spinner'


const Analytics = () => {

  const dispatch = useDispatch();

  const totalArticles = useSelector(
    (state) => state.analyticsReducer.totalArticles
  );
  const totalOrders = useSelector(
    (state) => state.analyticsReducer.totalOrders
  );
  const grossIncome = useSelector(
    (state) => state.analyticsReducer.grossIncome
  );
  const mostSold = useSelector((state) => state.analyticsReducer.mostSold);

  const categoriesData = useSelector(
    (state) => state.analyticsReducer.categoriesData
  );
  const disabledArticles = useSelector(
    (state) => state.analyticsReducer.disabledArticles
  );
  const monthlySales = useSelector(
    (state) => state.analyticsReducer.monthlySales
  );
  const [isLoading, setIsLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const selectedCategoryDetails = categoriesData.find(
    (category) => category.category === selectedCategory
  );

  useEffect(() => {
    dispatch(getAnalytics()).then(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className={styles.loader}>
<ThreeCircles
  visible={true}
  height="100"
  width="100"
  color="red"
  ariaLabel="three-circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
      </div>
    );
  }
  const colors = ["#FF9999", "#FF6666", "#FF3333", "#CC0000", "#990000"]; // Paleta de colores con tonos rojos

  return (
    <div className={styles.totalContainer}>
      <h1>Analytics</h1>
      <div className={styles.containerBar}>
        <ResponsiveContainer width="50%" height={300}>
          <BarChart
            width={500}
            height={400}
            data={monthlySales}
            margin={{
              right: 30,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fillOpacity={0.6} fill="#FF9999">
              {monthlySales.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className={styles.containerBar}>
        <ResponsiveContainer width="50%" height={300}>
          <BarChart
            width={500}
            height={400}
            data={mostSold}
            margin={{
              right: 30,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="sold"
              fill="#FF9999" // Cambia el color de la barra de acuerdo a tus preferencias
              fillOpacity={0.6}
            >
              {mostSold.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <h2>Datos</h2>
      <div className={styles.containerData}>
        <table className={styles.table}>
          <tbody>
            <tr>
              <th>Total de Artículos</th>
              <td>{totalArticles}</td>
            </tr>
            <tr>
              <th>Total de Órdenes</th>
              <td>{totalOrders}</td>
            </tr>
            <tr>
              <th>Ingresos Brutos</th>
              <td>{`$${grossIncome}`}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.containerTable}>
        <h2>Selecciona una categoría</h2>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className={styles.select}
        >
          <option value="">Selecciona una categoría...</option>
          {categoriesData.map((category, index) => (
            <option key={index} value={category.category}>
              {category.category}
            </option>
          ))}
        </select>

        {selectedCategory && (
          <div className={styles.details}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>CATEGORIA</th>
                  <th>CANTIDAD DE PRODUCTOS</th>
                  <th>PRODUCTOS ACTIVOS</th>
                  <th>PRODUCTOS INACTIVOS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{selectedCategoryDetails.category}</td>
                  <td>{selectedCategoryDetails.products}</td>
                  <td>{selectedCategoryDetails.actives}</td>
                  <td>{selectedCategoryDetails.inactives}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        <h2>Artículos Desactivados</h2>
        <div className={styles.disabledArticlesContainer}>
          {disabledArticles.map((item) => (
            <Link to={`/admin/update/${item.id}`} key={item.id} className={styles.link}>
            <div className={styles.disabledArticle}>
              <img
                src={item.image} // Asegúrate de que `item.image` contenga la URL de la imagen del artículo
                alt={item.name}
                className={styles.disabledArticleImage}
              />
            </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Analytics;
