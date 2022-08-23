import React from 'react';
import SidebarComponent from './Sidebar/Sidebar';
import HeaderComponent from './Header/Header';
import Layout from 'antd/lib/layout/layout';
import MainComponent from './Main/Main';

const LayoutContainer = ({ children, isStandard }) => {
  
  return (
    <>
      <SidebarComponent />
      <HeaderComponent />
      <Layout className="main-content">
        <MainComponent isStandard={isStandard}>
          <div>{children}</div>
        </MainComponent>
      </Layout>
    </>

  );
};

export default LayoutContainer;
