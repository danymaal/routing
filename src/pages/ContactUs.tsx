import React from 'react';
import { useNavigate, useParams, Outlet, Link } from 'react-router-dom';
import '../scss/Cards.scss';

const ContactUs = () => {
  let navigate = useNavigate();
  const john = require('../assets/john.jpg');
  // useHistory is useNavigate in @6
  return (
    <div className="about-heading">
      <h3>Contact us page</h3>

      <div className="cards">
        <div className="john">
          <Link to="john">
            <div className="john-card">
              <img src={john} style={{ width: '50%', height: '50%' }} alt="dasd" />
              <h5
                style={{
                  width: 'fitContent',
                  color: 'black',
                  textAlign: 'center',
                  textDecoration: 'none',
                }}>
                John Smitters
              </h5>
              <p
                style={{
                  width: 'fitContent',
                  color: 'black',
                  textAlign: 'center',
                  textDecoration: 'none',
                }}>
                Social Media Manager
              </p>
            </div>
          </Link>
        </div>
        <div className="sydney">
          <Link to="sydney"></Link>
        </div>
      </div>

      <button
        className="contact__button"
        onClick={() => {
          navigate('/about');
        }}>
        Go to about page
      </button>
    </div>
  );    
};

export default ContactUs;
