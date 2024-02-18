import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Styles/LayoutCommon.module.css';

const Splash = ({ children }) => {
  return (
    <div>
      <nav className={`${styles.navbarContainer} navbar-expand-md navbar-light bg-light`}>
        <div className="container">
          <ul className={`${styles.navList} row`}>
            <li className="col-md-3">
              <Link className="navbar-brand" to="/">TKerstiens</Link>
            </li>
            <li className="col-md-3">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className={`${styles.dropdownHover} dropdown col-md-3`}>
              <span className="nav-link">Data</span>
              <ul className={`${styles.dropdownContent} bg-light`}>
                <li><Link className="nav-link" to="/quote">15 Minute Delayed Quote</Link></li>
                <hr className={styles.dropdownSeparator} />
                <li><Link className="nav-link" to="/quote">Live Quote</Link></li>
              </ul>
            </li>
            <li className={`${styles.dropdownHover} dropdown col-md-3`}>
              <span className="nav-link">Login / Signup</span>
              <ul className={`${styles.dropdownContent} bg-light`}>
                <li><Link className="nav-link" to="/register">Register</Link></li>
                <hr className={styles.dropdownSeparator} />
                <li><Link className="nav-link" to="/login">Login</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main content area using CSS Module styles */}
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
};

export default Splash;
