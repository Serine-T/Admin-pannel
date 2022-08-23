import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routeItems from './helpers/routesItems';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {
            routeItems.map((route) => {
              if(route.children){
                return route.children.map((child)=> (
                  <Route
                    key={child.key}
                    path={child.path}
                    element={child.component}
                  />
                ));
              }
              
              return (
                <Route
                  key={route.key}
                  path={route.path}
                  element={route.component}
                />
              );
            })
          }
        </Routes>
      </Router>
    </>
  );
}

export default App;
