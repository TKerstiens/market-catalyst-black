import React from 'react';
import { Link } from 'react-router-dom';

const Splash = ({ children }) => {
  return (
    <div>
      <nav>
        {/* Navigation Links */}
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <main>{children}</main>

      {/* Footer can go here */}
    </div>
  );
};

export default Splash;