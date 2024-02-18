import React from 'react';
import { Link } from 'react-router-dom';

const Splash = ({ children }) => {
  return (
    <div>
      <div class="header">
        <nav class="navbar">
            <ul class="nav-list">
                <li>
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li class="dropdown">
                    <Link className="nav-link" to="#">Data</Link>
                    <ul class="dropdown-content">
                        <li style={{border: "1px solid #F0F0F0"}}><Link class="nav-link" to="/quote">15 Minute Delayed Quote</Link></li>
                        <li style={{border: "1px solid #F0F0F0", marginTop: "-1px"}}><Link class="nav-link" to="/quote">Live Quote</Link></li>
                    </ul>
                </li>
                <li>
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
            </ul>
        </nav>
      </div>

      <main className="main">{children}</main>
    </div>
  );
};

export default Splash;