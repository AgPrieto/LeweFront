import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import Home from "./components/home/home";
import NavBar from "./components/NavBar/NavBar";

import Footer from "./components/Footer/Footer"
import Categories from "./components/Categories/Categories";
import Detail from "./components/Detail/detail";
import Cart from "./components/Cart/cart";
import UpdateArticleForm from "./components/UpdateForm/UpdateForm";
import AdminDashboard from "./adminComponents/Dashboard/AdminDashboard";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/privateRoute";
import Invoice from "./components/Invoice/Invoice";
import Contact from "./components/Contact/Contact";
import NotFoundPage from "./components/404/index";

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
        <Route path="/details/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin/update/:id" element={<UpdateArticleForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={
          <PrivateRoute>
            <AdminDashboard />
          </PrivateRoute>
        } />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

