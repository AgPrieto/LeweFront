import "./App.css";

import { Routes, Route } from "react-router-dom";


//COMPONENTS

import Home from "./components/home/home";



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;