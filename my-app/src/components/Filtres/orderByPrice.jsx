// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./orderByPrice.module.css";
import { useDispatch } from "react-redux";
import { orderByPrice } from "../../redux/actions/categoriesActions";

const OrderByPrice = () => {
    const dispatch = useDispatch();
    
    const handleSelectChange = (e) => {
        dispatch(orderByPrice(e.target.value));
    };
    
    return (
        <div className={styles.price}>
        <h4>Ordenar por precio: </h4>
        <select onChange={handleSelectChange} className={styles.selectStyle}>
            <option value="ASC">Menor a mayor</option>
            <option value="DESC">Mayor a menor</option>
        </select>
        </div>
    );
};
export default OrderByPrice;
