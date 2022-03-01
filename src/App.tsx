import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.scss';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import EPage from './pages/EPage';
import Home from './pages/Home';
import John from './pages/John';
import Sidney from './pages/Sidney';

function App() {
  return (
    <Router>
      <nav className="nav-bar">
        <ul className="nav-bar__list">
          <li>
            <Link to="/" className="nav-bar__list-el">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-bar__list-el">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-bar__list-el">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />}>
          <Route path="john" element={<John />} />
          <Route path="sidney" element={<Sidney />} />
        </Route>
        <Route path="*" element={<EPage />} />
      </Routes>
      <div className="footer">
        <h1>Footer</h1>
      </div>
      {/* When you switching the pages everything changes but code that is outside of the routes */}
    </Router>
  );
}

export default App;
