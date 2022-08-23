import { Badge, Drawer, Avatar, Space } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React, { useState } from 'react';
import { BarsOutlined, UserOutlined, BellOutlined, SearchOutlined } from '@ant-design/icons';
import './styles.scss';
import NavbarComponent from './../Sidebar/Navbar';

const HeaderComponent = () => {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const showNavbar = () => {
    setNavbarVisible(true);
  };
  const hideNavbar = () => {
    setNavbarVisible(false);
  };
  
  return <Header
    className="main-header d-flex align-items-center justify-content-end"
  >
    <div className="d-flex align-items-center">
      <Space>
        <SearchOutlined />
        <Badge count={1} color="#407EFF" size="small" className="badge-count">
          <BellOutlined style={{ fontSize: '18px' }} />
        </Badge>
        <Badge dot color="#7BD500" size="small" placement="start" className="badge-dot">
          <Avatar icon={<UserOutlined />} />
        </Badge>
      </Space>
      <div 
        className="toggle-btn"      
        onClick={showNavbar}
      >
        <BarsOutlined className="p-2 mr-2" /> 
      </div>
    </div>   
    <Drawer
      onClose={hideNavbar}
      visible={navbarVisible}
      width={200}
      className="main_navbar_container"
      placement='left'
    >
      <NavbarComponent />
    </Drawer> 
  </Header>;
};

export default HeaderComponent;
