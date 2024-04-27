import React from "react";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getArticlesById } from "../../redux/actions/articlesActions";
import style from "./detail.module.css";
import { InputNumber } from "antd";
import { addToCart } from "../../redux/actions/cartActions";
import loader from "./loader.gif";
import { useCallback } from "react";

const SizeButtons = ({
  detail,
  quantity,
  setQuantity,
  selectedSize,
  setSelectedSize,
}) => {
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

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

  const noSizeCategories = [
    "108312e1-bed1-4468-aaed-657307fb2267",
    "4567773c-ab96-41aa-b9fa-ffa331fe4d7f",
    "d5033fd4-8d56-4e02-b816-78b4f65ee660",
  ];

  if (noSizeCategories.includes(detail1.CategoryId)) {
    return (
      <div>
        <label>Cantidad</label>
        <InputNumber
          min={1}
          max={detail1[`stock${selectedSize}`]}
          value={quantity}
          onChange={(value) => setQuantity(value)}
          className={style.cantidadInput}
        />
      </div>
    );
  } else {
    return (
      <div>
        {sizes.map((size) => {
          const stockKey = `stock${size}`;
          if (detail1[stockKey] > 0) {
            return (
              <button
                key={size}
                style={{
                  marginLeft: "10px",
                  width: "15%",
                  textAlign: "center",
                  borderRadius: "0px",
                  marginTop: "40px",
                  outline: "none",
                  backgroundColor: selectedSize === size ? "red" : "white",
                  color: selectedSize === size ? "black" : "black",
                }}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </button>
            );
          }
          return null;
        })}
        {selectedSize && (
          <div>
            <label className={style.cantidadLabel}>Cantidad</label>
            <InputNumber
              min={1}
              max={detail1[`stock${selectedSize}`]}
              value={quantity}
              onChange={(value) => setQuantity(value)}
              className={style.cantidadInput}
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
  console.log(detail);
  const cart = useSelector((state) => state.cartReducer.cart);
  const [quantity, setQuantity] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  if (detailArticle !== detail) {
    setDetail(detailArticle);
  }

  useEffect(() => {
    setIsLoading(true);
    dispatch(getArticlesById(id)).then(() => {
      setIsLoading(false);
    });
    return () => {
      setDetail({});
    };
  }, [dispatch, id]);

  const imgRef = useCallback((node) => {
    if (node !== null) {
      const img = node;
      const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;
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
      };
    }
  }, []);

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

  const isButtonDisabled =
    quantity === 0 ||
    isNaN(parseInt(quantity)) ||
    /^.*[0-9].*[a-zA-Z].*$/.test(quantity) ||
    /^.*[a-zA-Z].*[0-9].*$/.test(quantity);

  if (isLoading) {
    return (
      <div className={style.loaderContainer}>
        <img src={loader} alt="Loading..." className={style.loader} />
      </div>
    );
  }

  return (
    <div className={style.detailsContainer}>
      <div className={style.imgContainer} style={{ overflow: "hidden" }}>
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
          <SizeButtons
            stock={detail}
            quantity={quantity}
            setQuantity={setQuantity}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
        </div>
        <h3>DESCRIPCION</h3>
        <p className={style.description}>{detail.description}</p>
        <button
          className={`${style.cartButton} ${
            isButtonDisabled && window.innerWidth <= 768
              ? style.mobileButton
              : ""
          }`}
          onClick={handleAddToCart}
          disabled={isButtonDisabled}
          style={{
            backgroundColor: isButtonDisabled ? "gray" : "red",
            borderColor: isButtonDisabled ? "gray" : "red",
            cursor: isButtonDisabled ? "not-allowed" : "pointer",
            width:
              window.innerWidth >= 770 && window.innerWidth <= 1024
                ? isButtonDisabled
                  ? "330px"
                  : "auto" // Ajusta el ancho aquí para pantallas entre 770px y 1024px
                : isButtonDisabled
                ? "435px"
                : "auto",
            height: isButtonDisabled ? "45px" : "auto",
          }}
        >
          <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
            AGREGAR AL CARRITO
          </Link>
        </button>
        {isButtonDisabled && (
          <p style={{ color: "red", marginLeft: "5px" }}>
            Debes ingresar una cantidad
          </p>
        )}{" "}
        {/* Muestra el mensaje de error si el botón está deshabilitado */}
      </div>
    </div>
  );
};

export default detail;
