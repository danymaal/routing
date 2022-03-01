import React from 'react';
import { useNavigate, useParams, Outlet, Link } from 'react-router-dom';

const ContactUs = () => {
  let navigate = useNavigate();
  // useHistory is useNavigate in @6
  return (
    <div className="about-heading">
      <h3>Contact us page</h3>
      <button
        className="contact__button"
        onClick={() => {
          navigate('/about');
        }}>
        Go to about page
      </button>
      <Link to="/contact/john">To johns info</Link>
      <Link to="/contact/sidney">To Sydneys info</Link>
      <Outlet />
    </div>
  );
};

export default ContactUs;
