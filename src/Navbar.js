// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const getCurrentDateTime = () => {
    const currentDateTime = new Date();
    return currentDateTime.toLocaleString();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
      ruMitra Farmer
      </Link>
      <button
        className="navbar-RuNitratoggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/user-profile">
              User Profile
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
    Login
  </button>
</form>
        <div className="navbar-text">
          <p>{getCurrentDateTime()}</p>
          <p>Country: YourCountry</p>
        </div>
      </div>
  </nav>
    
  );
};

export default Navbar;
