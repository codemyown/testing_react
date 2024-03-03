// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <Link to="/login">Login</Link>
      <span> | </span>
      <Link to="/home">Home</Link>
    </div>
  );
};

export default Navigation;
