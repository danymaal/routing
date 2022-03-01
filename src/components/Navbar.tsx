import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../scss/Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <Link to="/" className="navbar__heading">
          <h3>COMPANY</h3>
        </Link>
      </div>
      <div className="navbar-right">
        <ul className="navbar__list">
          <li>
            <Link to="/contact" className="navbar__list-elem">
              Contacts
            </Link>
          </li>
          <li>
            <Link to="/about" className="navbar__list-elem">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navbar__list-elem">
              Feedback
            </Link>
          </li>
          <li>
            <button className="navbar__button">Become a member</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
