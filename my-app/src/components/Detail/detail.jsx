import React from 'react'
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getArticlesById } from '../../redux/actions/articlesActions';
import style from "./detail.module.css";
import { InputNumber } from 'antd';

const SizeButtons = ({ stock }) => {
    const sizes = ['XS','S', 'M', 'L', 'XL', 'XXL'];
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(0);

    const handleSizeClick = (size) => {
      setSelectedSize(size);
      setQuantity(0); // reset quantity when size is changed
    };

    const handleQuantityChange = (event) => {
        const value = event.target.value;
        const stockKey = `stock${selectedSize}`;
        if (value <= stock[stockKey]) {
          setQuantity(value);
        } else {
          alert(`Only ${stock[stockKey]} items in stock for size ${selectedSize}`);
        }
      };

      
  
    return (
      <div>
        {sizes.map((size) => {
          const stockKey = `stock${size}`;
          if (stock[stockKey] > 0) {
            return <button key={size} style={{ 
                marginLeft: '10px',
                width: '15%',
                textAlign: "center",
                borderRadius: "0px",
                marginTop: '40px',
                outline: 'none',
                backgroundColor: selectedSize === size ? 'red' : 'white',
                color: selectedSize === size ? 'white' : 'initial',
              }} 
              onClick={() => handleSizeClick(size)}
              >{size}</button>;
          }
          return null;
            })}
            {selectedSize && (
            <div>    
                <label>Cantidad</label>
                
    <InputNumber 
    
        min={1} 
        max={stock[`stock${selectedSize}`]} 
        value={quantity} 
        onChange={value => setQuantity(value)} 
        style={{ marginLeft: '10px', height: '40px', width: '100px', fontSize: '20px', borderRadius: "0px", marginTop: "10px", }}
    />
    </div>
    )}
        </div>

        );
    };

const detail = () => {

const dispatch = useDispatch();
const { id } = useParams();
const detail = useSelector((state) => state.articlesReducer.detail);
console.log(detail);
const imgRef = useRef(null);

useEffect(() => {
    dispatch(getArticlesById(id));
  }, [id]);

  useEffect(() => {
    if (imgRef.current) {
      const img = imgRef.current;
      const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;

        const scaleFactor = 1.4;
        img.style.transformOrigin = `${x}% ${y}%`;
        img.style.transform = `scale(${scaleFactor})`;
      };

      const handleMouseOut = () => {
        img.style.transformOrigin = "center center";
        img.style.transform = "scale(1)";
      };

      img.addEventListener("mousemove", handleMouseMove);
      img.addEventListener("mouseout", handleMouseOut);

      return () => {
        img.removeEventListener("mousemove", handleMouseMove);
        img.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [imgRef.current]);
  
  return (
    <div className={style.detailsContainer}>
         <div className={style.imgContainer}>
         <img
            ref={imgRef}
            src={detail.image}
            alt="ej"
            style={{ transform: "scale(1.2)" }}
          />
      </div>
        <div className={style.infoContainer}>
      <h2>{detail.name}</h2>
      <h2>${detail.price}</h2>
      <div className={style.sizeButtons}>
      <SizeButtons stock={detail} />
      </div>
      <h3>DESCRIPCION</h3>

      <p>{detail.description}</p>
      <button className={style.cartButton}>AGREGAR AL CARRITO</button>
      </div>
    </div>
  )
}


export default detail