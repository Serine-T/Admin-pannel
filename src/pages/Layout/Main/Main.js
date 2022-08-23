import { Content } from 'antd/lib/layout/layout';
import React, { useEffect } from 'react';
import './styles.scss';
import { useDispatch } from 'react-redux';
import routeItems from '../../../helpers/routesItems';
import { setRoute } from '../../../store/slices/routesSlice';

const MainComponent = ({ isStandard, children }) => {
  const dispatch = useDispatch();
  const path = window.location.pathname;

  const currentRouteInfo = routeItems.find((route) => {
    if(route.children) {
      return route.children.find((child) => child.path === path);
    }
    
    return route.path === path;
  });

  useEffect(() => {
    if (currentRouteInfo) {
      dispatch(setRoute({
        key: currentRouteInfo.key,
        title: currentRouteInfo.title,
      }));
    }
  }, []);
  
  return ( 
    <Content className="main-container">
      {isStandard && <h3 className="page-main-title">{currentRouteInfo.title}</h3>}
      { children } 
    </Content>
  );
};

export default MainComponent;
