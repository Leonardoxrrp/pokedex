import React from 'react';
import './views.css';

function Views() {
  return (
    <div className="views-container">
      <div className="views-vertical">
        <div className="views-vertical-bar" />
        <div className="views-vertical-bar" />
        <div className="views-vertical-bar" />
        <div className="views-vertical-bar" />
      </div>
      <div className="views-divider" />
      <div className="views-square">
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
