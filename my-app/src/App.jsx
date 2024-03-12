import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import Home from "./components/home/home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer"
import Categories from "./components/Categories/Categories";
import Indumentaria from "./components/Indumentaria/Indumentaria";
import Detail from "./components/Detail/detail";


const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="appContent">
       <NavBar />
       <div className="mainContent"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/indumentaria" element={<Indumentaria/>} />
        <Route path="/category/:id" element={<Categories/>} />
        <Route path="/details/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

