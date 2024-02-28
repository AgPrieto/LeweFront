import "./App.css";

import { Routes, Route } from "react-router-dom";


//COMPONENTS

import Home from "./components/home/home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer"



const App = () => {
  return (
    <div>
       <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;