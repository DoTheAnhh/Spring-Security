import React, { useState } from "react";
import { Layout, Menu, Button } from 'antd';
import { HomeOutlined, MenuFoldOutlined, MenuUnfoldOutlined, ProductOutlined } from "@ant-design/icons";
import { Link, Route, Routes } from "react-router-dom";
import ListProduct from "../Product/ListProduct";

const { Header, Sider, Content } = Layout;

const Layouts: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<HomeOutlined />} >
            <Link to="/home">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<ProductOutlined />}>
            <Link to="/list-product">Product</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: "16px", width: 64, height: 64 }}
          />
        </Header>
        <Content style={{ margin: "24px 16px", padding: 24, minHeight: 280 }}>
          <Routes>
            <Route path="/home" element={<h1>Home Page</h1>} />
            <Route path="/list-product" element={<ListProduct />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Layouts;
