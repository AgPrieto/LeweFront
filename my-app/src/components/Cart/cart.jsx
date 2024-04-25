// eslint-disable-next-line no-unused-vars
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./cart.module.css";
import "hover.css/css/hover-min.css"; // Importa hover.css directamente
import { MdOutlineError, MdDelete } from "react-icons/md";
import { removeFromCart } from "../../redux/actions/cartActions";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CustomerForm from "../CustomerForm/CustomerForm";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoMdClose } from "react-icons/io";
import { GrShop } from "react-icons/gr";
import EmblaCarousel from "../EmblaCarousel/EmblaCarousel.jsx";

const Cart = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
    });
  }, []);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);
  const savedArticlesBackup = localStorage.getItem("articlesBackup");
  const articlesBackup = JSON.parse(savedArticlesBackup);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    // Evita el scroll
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Permite el scroll
    document.body.style.overflow = "auto";
  };

  const availableProducts = articlesBackup.product.filter(
    (product) => !cart.some((cartItem) => cartItem.id === product.id)
  );

  const recommendedProducts = availableProducts
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  return (
    <div className={styles.cartContainer}>
      <h1>CARRITO</h1>
      {cart.length === 0 ? (
        <div>
          <div className={styles.errorContainer}>
            <MdOutlineError />
            <p>No hay productos en el carrito.</p>
            <p>Una vez añadas algo, aparecerá acá. Empecemos!</p>
            <Link to={"/"}>
              <button className={styles.shop}>
                {" "}
                <GrShop />
              </button>
            </Link>
          </div>
          <div className={styles.recommendedProductsContainer}>
            <h2>TE PUEDE INTERESAR!</h2>
            {window.innerWidth < 790 ? (
              <EmblaCarousel items={recommendedProducts} />
            ) : (
              <ul className={styles.recommendedProductsList}>
                {recommendedProducts.map((item) => (
                  <div data-aos="fade-up" key={item.id}>
                    <li className={styles.recommendedProductItem}>
                      <Link
                        to={`/details/${item.id}`}
                        className={styles.recommendedLink}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className={styles.recommendedImage}
                        />
                        <h2 className={styles.recommendedName}>{item.name}</h2>
                        <p className={styles.recommendedPrice}>
                         ${item.price}
                        </p>
                      </Link>
                    </li>
                  </div>
                ))}
              </ul>
            )}
          </div>
        </div>
      ) : (
        <div className={styles.superContainer}>
          <div className={styles.productListContainer}>
            <ul className={styles.productList}>
              {cart.map((item) => (
                <div key={item.id} className={styles.productItem}>
                  <Link
                    to={`/details/${item.id}`}
                    className={styles.productLink}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className={styles.productImage}
                    />
                  </Link>
                  <div className={styles.productInfo}>
                    <Link
                      to={`/details/${item.id}`}
                      className={styles.productLink}
                    >
                      <h2 className={styles.productName}>{item.name}</h2>
                    </Link>
                    {window.innerWidth < 768 ? (
                      <div className={styles.mobileData}>
                        <div className={styles.priceAndQtity}>
                          <p className={styles.productPrice}>
                            Precio: ${item.price}
                          </p>
                          <p className={styles.productQuantity}>
                            Cantidad: {item.quantity}
                          </p>
                        </div>
                        <div className={styles.mobileSizeAndDelete}>
                          {item.size ? (
                            <p className={styles.productSize}>
                              Tamaño: {item.size}
                            </p>
                          ) : (
                            <p className={styles.productSize}>&nbsp;</p> // Espacio reservado para 'size' cuando no está presente
                          )}
                          <button
                            title="Eliminar del carrito"
                            className={`${styles.deleteButton} hvr-icon-float`}
                            onClick={() => handleRemoveFromCart(item)}
                          >
                            <MdDelete className="hvr-icon" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <p className={styles.productPrice}>
                          Precio: ${item.price}
                        </p>
                        <p className={styles.productQuantity}>
                          Cantidad: {item.quantity}
                        </p>
                        {item.size ? (
                          <p className={styles.productSize}>
                            Tamaño: {item.size}
                          </p>
                        ) : (
                          <p className={styles.productSize}>&nbsp;</p> // Espacio reservado para 'size' cuando no está presente
                        )}
                        <button
                          title="Eliminar del carrito"
                          className={`${styles.deleteButton} hvr-icon-float`}
                          onClick={() => handleRemoveFromCart(item)}
                        >
                          <MdDelete className="hvr-icon" />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </ul>
            <div
              className={
                window.innerWidth < 790
                  ? styles.mobileTotalPriceContainer
                  : styles.totalPriceContainer
              }
            >
              <h2>Total: ${totalPrice}</h2>
              <button
                className={`${styles.buyButton} hvr-sweep-to-right`}
                onClick={handleOpenModal}
              >
                INICIAR COMPRA
              </button>
            </div>
            {isModalOpen && (
              <div
                data-aos="fade-down"
                className={styles.modal}
                style={
                  window.innerWidth < 790
                    ? {
                        position: "fixed",
                        width: "300px",
                        height: "75%",
                        top: 50,
                        left: 45,
                        right: 0,
                        bottom: 50,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "transparent",
                        color: "black",
                        zIndex: 2,
                        backdropFilter: "blur(4px)",
                        overflowY: "hidden",
                        overflow: "hidden",
                        overflowX: "hidden",
                      }
                    : window.innerWidth >= 770 && window.innerWidth <= 1024
                    ? {
                        position: "fixed",
                        width: "2000px",
                        height: "100%",
                        marginLeft: "0px",
                        top: 20,
                        left: 0,
                        right: 0,
                        bottom: 50,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "transparent",
                        color: "black",
                        zIndex: 0,
                        backdropFilter: "blur(4px)",
                        overflowY: "auto",
                      }
                     : {
                        position: "fixed",
                        width: "2000px",
                        height: "100%",
                        marginLeft: "0px",
                        top: 20,
                        left: 0,
                        right: 0,
                        bottom: 50,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "transparent",
                        color: "black",
                        zIndex: 10000,
                        backdropFilter: "blur(4px)",
                        overflowY: "auto",
                      }
                }
              >
                <div
                  className={styles.modalContent}
                  style={
                    window.innerWidth < 790
                      ? {
                          backgroundColor: "#161616",
                          padding: "0px",
                          borderRadius: "4px",
                          color: "white",
                          height: "auto",
                          maxHeight: "500px",
                          width: "600px",
                          border: "1px solid",
                          overflowY: "scroll",
                        }
                      : window.innerWidth >= 770 && window.innerWidth <= 1024
                      ? {
                          backgroundColor: "#161616",
                          padding: "20px",
                          borderRadius: "4px",
                          color: "white",
                          height: "auto",
                          maxHeight: "700px",
                          width: "600px",
                          border: "1px solid",
                          overflowY: "auto",
                          marginRight: "960px",
                          marginBottom: "500px",
                          zIndex: "10000",
                        }
                      : {
                          backgroundColor: "#161616",
                          padding: "20px",
                          borderRadius: "4px",
                          color: "white",
                          height: "auto",
                          maxHeight: "700px",
                          width: "600px",
                          border: "1px solid",
                          overflowY: "auto",
                        }
                  }
                >
                  {/* Contenido del modal, en este caso el componente CustomerForm */}
                  <button
                    className={`${styles.formButton} hvr-icon-spin`}
                    onClick={handleCloseModal}
                  >
                    <IoMdClose className="hvr-icon" />
                  </button>
                  <CustomerForm cart={cart} />
                  {/* Botón para cerrar el modal */}
                </div>
                {/* Fondo oscurecido que cubre el contenido detrás del modal */}
                <div className="modal-overlay" onClick={handleCloseModal}></div>
              </div>
            )}
          </div>
          {window.innerWidth < 790 ? (
            <div>
              <div className={styles.recommendedProductsContainer}>
                <p>TE PUEDE INTERESAR!</p>
              </div>
              <EmblaCarousel items={recommendedProducts} />
            </div>
          ) : (
            <div className={styles.recommendedProductsContainer}>
              <h2>TAMBIEN TE PUEDE INTERESAR</h2>
              <ul className={styles.recommendedProductsList}>
                {recommendedProducts.map((item) => (
                  <div data-aos="fade-up" key={item.id}>
                    <li className={styles.recommendedProductItem}>
                      <Link
                        to={`/details/${item.id}`}
                        className={styles.recommendedLink}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className={styles.recommendedImage}
                        />
                        <h2 className={styles.recommendedName}>{item.name}</h2>
                        <p className={styles.recommendedPrice}>
                          ${item.price}
                        </p>
                      </Link>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
