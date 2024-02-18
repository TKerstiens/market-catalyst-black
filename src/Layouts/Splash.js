import React from 'react';
import { Link } from 'react-router-dom';

const Splash = ({ children }) => {
  return (
    <div>
      <div className="header">
        <nav className="navbar">
            <ul className="nav-list">
                <li>
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="dropdown">
                    <Link className="nav-link" to="#">Data</Link>
                    <ul className="dropdown-content">
                        <li style={{border: "1px solid #F0F0F0"}}><Link className="nav-link" to="/quote">15 Minute Delayed Quote</Link></li>
                        <li style={{border: "1px solid #F0F0F0", marginTop: "-1px"}}><Link className="nav-link" to="/quote">Live Quote</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                  <Link className="nav-link" to="#">Login / Signup</Link>
                  <ul className="dropdown-content">
                    <li style={{border: "1px solid #F0F0F0"}}><Link className="nav-link" to="/register">Register</Link></li>
                    <li style={{border: "1px solid #F0F0F0", marginTop: "-1px"}}><Link className="nav-link" to="/login">Login</Link></li>
                  </ul>
                </li>
            </ul>
        </nav>
      </div>

      <main className="main">{children}</main>
    </div>
  );
};

export default Splash;