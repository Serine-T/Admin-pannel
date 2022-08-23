import { Menu } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import routeItems from '../../../helpers/routesItems';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  const isCurrentRoute = useSelector(state => state.routes?.currentRoute);

  return (
    <> 
      <Menu      
        mode="inline" 
        selectedKeys={[isCurrentRoute.key]}
        defaultOpenKeys={['learn']}
        className="main-nav"
      >
        {
          routeItems.map((item)=> {
            if(item.isMenuItem) {
              if(!item.children) {
                return (
                  <Menu.Item key={item.key} icon={item.icon}>
                    <Link to={item.path}>
                      <span>{item.title}</span>
                    </Link>
                  </Menu.Item>
                );  
              } else {
                return  (
                  <Menu.SubMenu mode="inline" key={item.key} title={item.title} icon={item.icon}>
                    {
                      item.children.map((child) => {
                        return (
                          <Menu.Item key={child.key}>
                            <Link to={child.path}>
                              {child.title}
                            </Link>
                          </Menu.Item>
                        );
                      })
                    }
                  </Menu.SubMenu>
                );
              }
            }
          })}
      </ Menu> 
    </>
  );
};

export default NavbarComponent;
