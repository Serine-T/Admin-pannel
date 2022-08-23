import Sider from 'antd/lib/layout/Sider';
import React from 'react';
import './styles.scss';
import NavbarComponent from './Navbar';

const SidebarComponent = () =>  {
  return (
    <Sider className="sidebar-container">
      <NavbarComponent />
    </Sider>
  );
};

export default SidebarComponent;
