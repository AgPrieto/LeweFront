import React from "react";
import {useEffect} from 'react';
import {
  FileSearchOutlined,
  EyeOutlined,
  CreditCardFilled,
  SmileFilled,
} from "@ant-design/icons";
import { IoCart } from "react-icons/io5";
import { Avatar } from "antd";
import styles from "./franja.module.css";

const HowToBuyContainer = () => {

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", bottom: 0 });
      }
    }
  }, []);

  return (
    <div id="como-comprar" className={styles.container}>
      

      <div>
        <div>
          <Avatar
            style={{
              backgroundColor: "#a01c0e",
              marginTop: "50px",
            }}
            size={70}
            icon={
              <FileSearchOutlined
                style={{
                  color: "white",
                  fontSize: "40px",
                }}
              />
            }
          />

<p style={{
                  color: "white",
                  fontSize: "17px",
                }}>BUSCÁ TU PRODUCTO EN LA TIENDA</p>
        </div>

        <div>
          <Avatar
            style={{
              backgroundColor: "#a01c0e",
              marginTop: "50px",
            }}
            size={70}
            icon={
              <IoCart
                style={{
                  color: "white",
                  fontSize: "40px",
                }}
              />
            }
          />

<p style={{
                  color: "white",
                  fontSize: "17px",
                }}>AGREGALO AL CARRITO</p>
        </div>

        <div>
          <Avatar
            style={{
              backgroundColor: "#a01c0e",
              marginTop: "50px",
            }}
            size={70}
            icon={
              <CreditCardFilled
                style={{
                  color: "white",
                  fontSize: "40px",
                }}
              />
            }
          />

          <p style={{
                  color: "white",
                  fontSize: "17px",
                }}>COMPLETÁ EL FORMULARIO CON TUS DATOS</p>
        </div>

        <div>
          <Avatar
            style={{
              backgroundColor: "#a01c0e",
              marginTop: "50px",
            }}
            size={70}
            icon={
              <SmileFilled
                style={{
                  color: "white",
                  fontSize: "40px",
                }}
              />
            }
          />

<p style={{
                  color: "white",
                  fontSize: "17px",
                }}>COORDINA EL ENVIO POR WHASTAPP Y DISFRUTÁ DE TU COMPRA</p>
        </div>
      </div>
    </div>
  );
};

export default HowToBuyContainer;