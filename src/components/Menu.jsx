import React, { Children, useState } from 'react';
import '../App.css';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';
import ProfilePage from '../pages/ProfilePage';
import OrdersPage from '../pages/OrdersPage';

const items = [
  {
    key: '1',
    icon: <PieChartOutlined />,
    label: 'Home',
    // children: <HomePage />
  },
  {
    key: '2',
    icon: <DesktopOutlined />,
    label: 'Orders',
    // children: <OrdersPage/>
  },
  {
    key: '3',
    icon: <ContainerOutlined />,
    label: 'Cart',
    // children: <CartPage />
  },
  {
    key: '4',
    icon: <ContainerOutlined />,
    label: 'Profile',
  },
];
const Nav = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div
      style={{
        width: 120, 
      }}
    >

            <Button
                type="primary"
                onClick={toggleCollapsed}
                style={{
                marginBottom: 16, margin:16, marginTop:16, backgroundColor:'#1E90FF'
                }}
            >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="light"
                inlineCollapsed={collapsed}
                items={items}
                style={{ backgroundColor:'transparent'}}
            />
    </div>
  );
};
export default Nav;