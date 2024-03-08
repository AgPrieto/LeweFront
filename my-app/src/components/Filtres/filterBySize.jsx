// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./orderByPrice.module.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterBySize } from "../../redux/actions/categoriesActions";

const FilterBySize = () => {
    const [selectedTalles, setSelectedTalles] = useState([]); // Estado para almacenar los talles seleccionados
    const dispatch = useDispatch();
    
    useEffect(() => {
            dispatch(filterBySize(selectedTalles)); // Envía la acción cada vez que cambia la selección de talles
    }, [selectedTalles, dispatch]);

    const handleTalleChange = (talle) => {
      
      if (selectedTalles.includes(talle)) {
        setSelectedTalles(selectedTalles.filter((selectedTalle) => selectedTalle !== talle));
      } else {
        setSelectedTalles([...selectedTalles, talle]);
      }

      dispatch(filterBySize(selectedTalles)); // Envía la acción cada vez que cambia la selección de talles
    };
  console.log(selectedTalles)

    return (
      <div className={styles.price}>
        <h4>Filtrar por talle:</h4>
        <div>
          <label>
            <input
              type="checkbox"
              value="stockXS"
              checked={selectedTalles.includes("stockXS")}
              onChange={() => handleTalleChange("stockXS")}
            />
            XS
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="stockS"
              checked={selectedTalles.includes("stockS")}
              onChange={() => handleTalleChange("stockS")}
            />
            S
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="stockM"
              checked={selectedTalles.includes("stockM")}
              onChange={() => handleTalleChange("stockM")}
            />
            M
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="stockL"
              checked={selectedTalles.includes("stockL")}
              onChange={() => handleTalleChange("stockL")}
            />
            L
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="stockXL"
              checked={selectedTalles.includes("stockXL")}
              onChange={() => handleTalleChange("stockXL")}
            />
            XL
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="stockXXL"
              checked={selectedTalles.includes("stockXXL")}
              onChange={() => handleTalleChange("stockXXL")}
            />
            XXL
          </label>
        </div>
      </div>
    );
};
export default FilterBySize;
