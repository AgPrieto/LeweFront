// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect, useState } from "react";
import { getAnalytics } from "../../redux/actions/analyticsActions";
import { useSelector,useDispatch } from "react-redux";
import loader from "./loader.gif";
import styles from "./analytics.module.css";


const Analytics = () => {
    const totalArticles = useSelector((state) => state.analyticsReducer.totalArticles);
    const totalOrders = useSelector((state) => state.analyticsReducer.totalOrders);
    const grossIncome = useSelector((state) => state.analyticsReducer.grossIncome);
    const mostSold = useSelector((state) => state.analyticsReducer.mostSold);
    const allCategories = useSelector((state) => state.analyticsReducer.allCategories);
    const categoriesData = useSelector((state) => state.analyticsReducer.categoriesData);
    const disabledArticles = useSelector((state) => state.analyticsReducer.disabledArticles);
    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAnalytics()).then(() => {
            setIsLoading(false);
        });
    }, [dispatch]);

    if (isLoading) {
        return (
          <div className={styles.loaderContainer}>
            <img src={loader} alt="Loading..." className={styles.loader} />
          </div>
        );
      }

    return (
        <div>
            <h1>Analytics</h1>
            <h2>Total Articles: {totalArticles}</h2>
            <h2>Total Orders: {totalOrders}</h2>
            <h2>Gross Income: {grossIncome}</h2>
            <h2>Most Sold:</h2>
            <ul>
                {mostSold.map((item) => (
                    <li key={item._id}>
                        {item.name} - {item.sold}
                    </li>
                ))}
            </ul>
            <h2>All Categories: {allCategories}</h2>
            <h2>Categories Data:</h2>
            <ul>
                {categoriesData.map((item) => (
                    <li key={item._id}>
                        {item.category} - Active: {item.actives} - Disabled: {item.inactives}
                    </li>
                ))}
            </ul>
            <h2>Disabled Articles:</h2>
            <ul>
                {disabledArticles.map((item) => (
                    <li key={item._id}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );

    };

export default Analytics;