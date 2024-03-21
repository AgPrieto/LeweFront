// eslint-disable-next-line no-unused-vars
import React from "react";
import { loginRequest } from "../../redux/actions/loginActions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./login.module.css";
import { validateUser } from "../../utils/userValidation";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.loginReducer.isLoggedIn);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

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
    dispatch(loginRequest(user))
      .then(() => {
        // Verifica si el usuario está autenticado
        if (isLoggedIn) {
          // Redirige a la página de administrador después de que se haya completado el inicio de sesión
          navigate("/admin");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className={style.label}>Email</label>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
            className={style.input}
          />
          {errors.email && <p>{errors.email}</p>}

          <label className={style.label}>Contraseña</label>
          <input
            type="text"
            name="password"
            value={user.password}
            onChange={handleChange}
            className={style.input}
          />
          {errors.password && <p>{errors.password}</p>}

          <button type="submit" className={style.button}>
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
