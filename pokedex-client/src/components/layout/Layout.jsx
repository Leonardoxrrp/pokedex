import React from 'react';
import './layout.css';

function Layout({ children }) {
  return (
    <div className="layout-container">
      { children }
    </div>
  );
}

export default Layout;
