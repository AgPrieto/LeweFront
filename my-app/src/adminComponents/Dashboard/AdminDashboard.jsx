// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  LineChartOutlined,
  PlusOutlined,
  LeftOutlined,
  RightOutlined,
  FileTextOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

import styles from "./AdminDashboard.module.css";
import ArticleForm from "../../components/ArticleForm/ArticleForm";
import HandleArticles from "../HandleArticles/HandleArticles";
import Invoice from "../../components/Invoice/Invoice";
import Orders from "../Orders/Orders";
import Analytics from "../Analytics/Analytics";
import AOS from 'aos';
import 'aos/dist/aos.css';

const { Sider, Content } = Layout;


const AdminDashboard = () => {
  const [selectedKey, setSelectedKey] = useState("analytics");
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
    });
  }, []);

  const handleMenuClick = (key) => {
    setSelectedKey(key);
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed); // Cambia el estado cuando se hace clic en el botón
  };
  const renderContent = () => {
    switch (selectedKey) {
      case "analytics":
        return <Analytics />;
      case "productos":
        return <HandleArticles/>;
      case "ordenes":
        return <Orders />;
      case "crearProducto":
        return <ArticleForm />
      case "invoice":
        return <Invoice />;
    
      default:
        return null;
    }
  };

  return (
    <Layout style={{ margin: 0, padding: 0 }}>
      
      <Sider 
        width={280}
        theme="light"
        collapsible
        collapsed={collapsed}
        onCollapse={toggleCollapsed}
        trigger={null}
        style={{
          height: "1100px", 
          background: "#161616", 
          margin: 0,
          position: "fixed",
          top: 0,
          left: 0,
        }}
        className={styles.sider}
      >
        <Menu
  theme="light"
  mode="vertical"
  selectedKeys={[selectedKey]}
  onClick={({ key }) => {
    if (key === 'toggle') {
      toggleCollapsed();
    } else {
      handleMenuClick(key);
    }
  }}
  style={{ 
    position: collapsed ? 'relative' : 'fixed', 
    top: '150px', 
    left: '0', 
    background: "#161616", 
    margin: 0,
    zIndex: 1, 
    textAlign: "start",
    marginTop: "20px"
  }}
>
<Menu.Item key="toggle" style={{ marginBottom: '60px', background: "#161616", color: "white"   }}>
    {React.createElement(collapsed ? RightOutlined : LeftOutlined)}
  
    
  </Menu.Item>
          <Menu.Item key="analytics" icon={<PieChartOutlined />} title="Estadísticas Generales" style={{ marginBottom: '30px', color: selectedKey === "analytics" ? "red" : "white", background: "#161616"   }}>
            Estadísticas Generales
          </Menu.Item>
          <Menu.Item key="productos" icon={<AppstoreOutlined />} title="Gestionar Productos" style={{ marginBottom: '30px', color: selectedKey === "productos" ? "red" : "white", background: "#161616"   }}>
            Gestionar Productos
          </Menu.Item>
          <Menu.Item key="ordenes" icon={<LineChartOutlined />} title="Registro de Ventas" style={{ marginBottom: '30px', color: selectedKey === "ordenes" ? "red" : "white", background: "#161616"   }}>
            Registro de Ventas
          </Menu.Item>
          <Menu.Item key="crearProducto" icon={<PlusOutlined />} title="Agregar Nuevo Producto" style={{ marginBottom: '30px', color: selectedKey === "crearProducto" ? "red" : "white", background: "#161616"   }}>
            Agregar Nuevo Producto
          </Menu.Item>
          <Menu.Item key="invoice" icon={<FileTextOutlined />} title="Generar Comprobante" style={{ marginBottom: '30px', color: selectedKey === "invoice" ? "red" : "white", background: "#161616"   }}>
            Generar Comprobante
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