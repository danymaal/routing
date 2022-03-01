import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import '../scss/Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <div>
          {/* <NavLink to="/" className="navbar__heading"> */}
          <NavLink to="/" className="non-active">
            <h3>COMPANY</h3>
          </NavLink>
        </div>
        <div className="navbar-right">
          <ul className="navbar__list">
            <li>
              {/* <NavLink to="/contact" className="navbar__list-elem" > */}
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? 'active' : 'non-active')}>
                Contacts
              </NavLink>
            </li>
            <li>
              {/* <NavLink to="/about" className="navbar__list-elem"> */}
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? 'active' : 'non-active')}>
                About
              </NavLink>
            </li>
            <li>
              {/* <NavLink to="/contact" className="navbar__list-elem"> */}
              <NavLink
                to="/feedback"
                className={({ isActive }) => (isActive ? 'active' : 'non-active')}>
                Feedback
              </NavLink>
            </li>
            <li>
              <button className="navbar__button">Become a member</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
