// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./filterBySize.module.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterBySize } from "../../redux/actions/categoriesActions";
import { Checkbox } from 'antd';

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
    
    <div className={styles.container}>
      <h4>Filtrar por talle:</h4>
    <div className={`${styles.checkboxContainer}`}>
      <Checkbox
      className={styles.checkboxStyle}
        checked={selectedTalles.includes("stockXS")}
        onChange={() => handleTalleChange("stockXS")}
      >
        XS
      </Checkbox>
      <Checkbox
      className={styles.checkboxStyle}
        checked={selectedTalles.includes("stockS")}
        onChange={() => handleTalleChange("stockS")}
      >
        S
      </Checkbox>
      <Checkbox
      className={styles.checkboxStyle}
        checked={selectedTalles.includes("stockM")}
        onChange={() => handleTalleChange("stockM")}
      >
        M
      </Checkbox>
      <Checkbox
      className={styles.checkboxStyle}
        checked={selectedTalles.includes("stockL")}
        onChange={() => handleTalleChange("stockL")}
      >
        L
      </Checkbox>
      <Checkbox
      className={styles.checkboxStyle}
        checked={selectedTalles.includes("stockXL")}
        onChange={() => handleTalleChange("stockXL")}
      >
        XL
      </Checkbox>
      <Checkbox
      className={styles.checkboxStyle}
        checked={selectedTalles.includes("stockXXL")}
        onChange={() => handleTalleChange("stockXXL")}
      >
        XXL
      </Checkbox>
      </div>
    </div>
    
  );
};
export default FilterBySize;
