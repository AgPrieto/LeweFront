import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import Home from "./components/home/home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer"
import Categories from "./components/Categories/Categories";

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
        <Route path="/category/:id" element={<Categories/>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

