import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">YourBrand</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/Articles" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Articles
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><Link className="dropdown-item" to="/Articles/Opinions">Opinions</Link>
                  <ul className="submenu dropdown-menu">
                    <li><Link className="dropdown-item" to="/Articles/Opinions/1">OpinionPiece1</Link></li>
                    <li><Link className="dropdown-item" to="/Articles/Opinions/2">OpinionPiece2</Link></li>
                  </ul>
                </li>
                <li><Link className="dropdown-item" to="/Articles/News">News</Link>
                  <ul className="submenu dropdown-menu">
                    <li><Link className="dropdown-item" to="/Articles/News/1">NewsPiece1</Link></li>
                    <li><Link className="dropdown-item" to="/Articles/News/2">NewsPiece2</Link></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Info">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">Get in Touch</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/Locations" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Locations
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><Link className="dropdown-item" to="/Locations/Denver">Denver</Link></li>
                <li><Link className="dropdown-item" to="/Locations/Austin">Austin</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
