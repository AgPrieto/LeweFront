import "./App.css";

import { Routes, Route } from "react-router-dom";


//COMPONENTS

import Home from "./components/home/home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer"
import Categories from "./components/Categories/Categories";



const App = () => {
  return (
    <div>
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