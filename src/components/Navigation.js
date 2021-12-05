import React from 'react';
import Dropdown from './Dropdown';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand">Navigate through widgets:</span>
        <button className="navbar-toggler">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Dropdown />
      </div>
    </nav>
  );
};

export default Navigation;
