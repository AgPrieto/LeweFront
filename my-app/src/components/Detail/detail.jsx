import React from 'react'
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getArticlesById } from '../../redux/actions/articlesActions';
import style from "./detail.module.css";
import { InputNumber } from 'antd';
import { addToCart } from '../../redux/actions/cartActions';
import loader from "./loader.gif";

const SizeButtons = ({ detail, quantity, setQuantity, selectedSize, setSelectedSize }) => {
  const sizes = ['XS','S', 'M', 'L', 'XL', 'XXL'];
  
 
  const detail1 = useSelector((state) => state.articlesReducer.detail);
  
  const handleSizeClick = (size) => {
    if (selectedSize === size) {
      setSelectedSize(null); // Deselecciona el tamaño si se vuelve a hacer clic en el mismo
      setQuantity(0); // reset quantity when size is deselected
    } else {
      setSelectedSize(size);
      setQuantity(0); // reset quantity when size is changed
    }
  };

  const handleQuantityChange = (event) => {
      const value = event.target.value;
      const stockKey = `stock${selectedSize}`;
      if (value <= detail1[stockKey]) {
        setQuantity(value);
      } else {
        alert(`Only ${detail1[stockKey]} items in stock for size ${selectedSize}`);
      }
    };

  const noSizeCategories = ['108312e1-bed1-4468-aaed-657307fb2267', '4567773c-ab96-41aa-b9fa-ffa331fe4d7f', 'd5033fd4-8d56-4e02-b816-78b4f65ee660'];

  if (noSizeCategories.includes(detail1.CategoryId)) {
      return (
          <div>
              <label>Cantidad</label>
              <InputNumber 
                  min={1} 
                  max={detail1[`stock${selectedSize}`]} 
                  value={quantity} 
                  onChange={value => setQuantity(value)} 
                  style={{ marginLeft: '10px', height: '40px', width: '100px', fontSize: '20px', borderRadius: "0px", marginTop: "10px", }}
              />
          </div>
      );
  } else {
      return (
          <div>
              {sizes.map((size) => {
                  const stockKey = `stock${size}`;
                  if (detail1[stockKey] > 0) {
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
                          max={detail1[`stock${selectedSize}`]} 
                          value={quantity} 
                          onChange={value => setQuantity(value)} 
                          style={{ marginLeft: '10px', height: '40px', width: '100px', fontSize: '20px', borderRadius: "0px", marginTop: "10px", }}
                      />
                  </div>
              )}
          </div>
      );
  }
};


const detail = () => {

const dispatch = useDispatch();
const { id } = useParams();
const detailArticle = useSelector((state) => state.articlesReducer.detail);
const [detail, setDetail] = useState({});
const cart = useSelector((state) => state.cartReducer.cart);
const [quantity, setQuantity] = useState(0);
const [selectedSize, setSelectedSize] = useState(null);
const imgRef = useRef(null);
const [isLoading, setIsLoading] = useState(true);


useEffect(() => {
    setIsLoading(true); // Muestra la imagen de carga al iniciar la carga de la categoría
    dispatch(getArticlesById(id)).then(() => {
      setIsLoading(false); // Oculta la imagen de carga después de cargar la categoría
    })
    setDetail(detailArticle);
     return () => {
      setDetail({});
    };
  }, [detailArticle, dispatch, id]);

  useEffect(() => {
    if (imgRef.current) {
      const img = imgRef.current;
      const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;
  
        // Solo aplica el zoom si el cursor está en la parte superior de la imagen
        // Ajusta este valor para cambiar la región donde se aplica el zoom
          const scaleFactor = 1.2;
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
        setDetail({});
      };
    }
  }, [imgRef.current]);

  const handleAddToCart = () => {
    const hasSizes = detail.sizes && detail.sizes.length > 0;
    if (quantity > 0 && (!hasSizes || selectedSize)) {
      const productToAdd = {
        id: detail.id,
        name: detail.name,
        image: detail.image,
        quantity: quantity,
        size: selectedSize,
        price: detail.price,
      };

      dispatch(addToCart(productToAdd));
    } else {
      alert("Por favor, ingresa una cantidad antes de agregar al carrito.");
    }
  };
  
  const isButtonDisabled = quantity === 0;
  if (isLoading) {
    return (
      <div className={style.loaderContainer}>
        <img src={loader} alt="Loading..." className={style.loader} />
      </div>
    );
  }

  return (
    <div className={style.detailsContainer}>
         <div className={style.imgContainer} style={{ overflow: 'hidden' }}>
         <img
            ref={imgRef}
            src={detail.image}
            alt="ej"
            style={{ transform: "scale(1)" }}
          />
      </div>
        <div className={style.infoContainer}>
      <h2>{detail.name}</h2>
      <h2>${detail.price}</h2>
      <div className={style.sizeButtons}>
      <SizeButtons stock={detail} quantity={quantity} setQuantity={setQuantity} selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
      </div>
      <h3>DESCRIPCION</h3>

      <p>{detail.description}</p>
      <Link to="/cart">
      <button 
        className={style.cartButton} 
        onClick={handleAddToCart} 
        disabled={isButtonDisabled}
        style={{
          backgroundColor: isButtonDisabled ? 'gray' : 'red', // Cambia el color de fondo a gris si el botón está deshabilitado
          borderColor: isButtonDisabled ? 'gray' : 'red', // Cambia el color del borde a gris si el botón está deshabilitado
          cursor: isButtonDisabled ? 'not-allowed' : 'pointer', // Cambia el cursor a "prohibido" si el botón está deshabilitado
        }}
      >
        AGREGAR AL CARRITO
      </button>
      </Link>
      {isButtonDisabled && <p style={{ color: 'red', marginLeft: "5px" }}>Debes ingresar una cantidad</p>} {/* Muestra el mensaje de error si el botón está deshabilitado */}
      </div>
    </div>
  )
}


export default detail