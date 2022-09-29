import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './filters.css';

function Filters() {
  return (
    <div className="filters-container">
      <div className="filters-buttons">
        <Button variant="success">All</Button>
        <Button variant="success">Favorites</Button>
      </div>
      <div className="filters-options">
        <input placeholder="search" />
        <select name="example" id="example">
          <option value="example">example</option>
          <option value="example">example</option>
          <option value="example">example</option>
          <option value="example">example</option>
        </select>
        <div className="filters-views">
          <div className="filters-vertical-view">
            <div className="filters-vertical-view-bar" />
            <div className="filters-vertical-view-bar" />
            <div className="filters-vertical-view-bar" />
            <div className="filters-vertical-view-bar" />
          </div>
          <div className="filters-square-view">
            <div className="filters-square-view-group">
              <div className="filters-square-view-bar" />
              <div className="filters-square-view-bar" />
              <div className="filters-square-view-bar" />
            </div>
            <div className="filters-square-view-group">
              <div className="filters-square-view-bar" />
              <div className="filters-square-view-bar" />
              <div className="filters-square-view-bar" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Filters;
