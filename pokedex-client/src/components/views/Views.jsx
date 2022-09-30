import React, { useContext } from 'react';
import { Context } from '../../context/AppContext';
import './views.css';

function Views() {
  const { setView } = useContext(Context);
  const handleView = (type) => setView(type);
  return (
    <div className="views-container">
      <div className="views-vertical" onClick={() => handleView('rows')}>
        <div className="views-vertical-bar" />
        <div className="views-vertical-bar" />
        <div className="views-vertical-bar" />
        <div className="views-vertical-bar" />
      </div>
      <div className="views-divider" />
      <div className="views-square" onClick={() => handleView('square')}>
        <div className="views-square-group">
          <div className="views-square-bar" />
          <div className="views-square-bar" />
          <div className="views-square-bar" />
        </div>
        <div className="views-square-group">
          <div className="views-square-bar" />
          <div className="views-square-bar" />
          <div className="views-square-bar" />
        </div>
      </div>
    </div>
  );
}

export default Views;
