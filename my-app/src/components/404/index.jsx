// eslint-disable-next-line no-unused-vars
import React from "react";
import style from "./style.module.css";
import svg from "./404.png";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className={style.container}>
      <img src={svg} alt="404" className={style.imagen}/>
      <h1 className={style.title}>Page Not Found</h1>
      <Link to="/" className={style.link}>Go to Home</Link>
    </div>
);
};

export default NotFoundPage;