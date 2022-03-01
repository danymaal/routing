import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const John = () => {
  return (
    <div>
      <h1>John page</h1>
      <h2>Age: 28</h2>

      <h3>Daughters: 1</h3>
      <Link to="contact">GO TO CONTACT </Link>
    </div>
  );
};

export default John;
