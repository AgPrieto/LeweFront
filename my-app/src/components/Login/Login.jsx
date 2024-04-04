// eslint-disable-next-line no-unused-vars
import React from "react";
import { loginRequest } from "../../redux/actions/loginActions";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./login.module.css";
import { validateUser } from "../../utils/userValidation";
import leweIcon from './lewe.png'
import 'hover.css/css/hover-min.css';
import { ThreeDots } from 'react-loading-icons';

const Login = () => {

  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.loginReducer.isLoggedIn);
  console.log(isLoggedIn);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/admin");
    }
  }, [isLoggedIn]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
    setErrors(validateUser({ ...user, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Establece isLoading en true al inicio de la solicitud
    dispatch(loginRequest(user))
      .then(() => {
        setIsLoading(false); // Establece isLoading en false una vez que la promesa se resuelve
        if (isLoggedIn) {
          navigate("/admin");
        }
      })
      .catch((error) => {
        setIsLoading(false); // También establece isLoading en false si la promesa se rechaza
        alert(error.message);
      });
  };
  

  return (
    <div className={style.form}>
      <form onSubmit={handleSubmit}>
        <div>
        <div className={style.formContainer}>
          <img src={leweIcon} alt="leweIcon" />
          <h1>ADMIN LOGIN</h1>
        </div>
        <div className={style.inputContainer}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
            className={style.input}
          />
          {errors.email && <p>{errors.email}</p>}

          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className={style.input}
          />
          {errors.password && <p>{errors.password}</p>}

          <button type="submit" className={`${style.formButton} hvr-sweep-to-right`}>
          {isLoading ? <ThreeDots fill="#ffffff" height="25" width="40"  /> : 'Ingresar'}
        </button>
        </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
