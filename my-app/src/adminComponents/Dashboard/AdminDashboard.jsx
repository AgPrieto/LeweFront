// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  LineChartOutlined,
  PlusOutlined,
  BarsOutlined,
} from "@ant-design/icons";


import styles from "./AdminDashboard.module.css";
import ArticleForm from "../../components/ArticleForm/ArticleForm";
import HandleArticles from "../HandleArticles/HandleArticles";

const { Sider, Content } = Layout;

const AdminDashboard = () => {
  const [selectedKey, setSelectedKey] = useState("1");

  const handleMenuClick = (key) => {
    setSelectedKey(key);
  };

  const renderContent = () => {
    switch (selectedKey) {
      case "1":
        return <HandleArticles/>;
      case "2":
        return "hola2"
      case "3":
        return <ArticleForm />
      case "4":
        return "hola4"
    
      default:
        return null;
    }
  };

  return (
    <Layout className={styles.container}>
    <Sider
      width={300}
      theme="light"
      style={{
        left: 0, // Ajusta según sea necesario
        height: "100vh", // Ajusta según sea necesario
        background: "black", // Aquí puedes cambiar el color de fondo
      }}
    >
      <Menu
        theme="light"
        mode="vertical"
        selectedKeys={[selectedKey]}
        onClick={({ key }) => handleMenuClick(key)}
        style={{ marginTop: "10px", background: "black" }}
      >
          
          <Menu.Item key="1" icon={<AppstoreOutlined />} title="Gestionar Productos" style={{ marginBottom: '30px', color: selectedKey === "1" ? "red" : "white", background: "black"   }}>
            Gestionar Productos
          </Menu.Item>
          <Menu.Item key="2" icon={<LineChartOutlined />} title="Registro de Ventas" style={{ marginBottom: '30px', color: selectedKey === "2" ? "red" : "white", background: "black"   }}>
            Registro de Ventas
          </Menu.Item>
          <Menu.Item key="3" icon={<PlusOutlined />} title="Agregar Nuevo Producto" style={{ marginBottom: '30px', color: selectedKey === "3" ? "red" : "white", background: "black"   }}>
            Agregar Nuevo Producto
          </Menu.Item>
          <Menu.Item key="4" icon={<BarsOutlined />} title="Gestionar Categorías" style={{ marginBottom: '30px', color: selectedKey === "4" ? "red" : "white", background: "black"   }}>
            Gestionar Categorías
          </Menu.Item>
        
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ background: "black", padding: "auto", minHeight: 800, color:"white" }}>
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;