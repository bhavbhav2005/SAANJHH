
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import your CSS file for header styles

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  return (
    <div className="header-container">
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" onClick={closeNavbar}>
            <img src="https://res.cloudinary.com/dsfgf7eb7/image/upload/v1714647539/saanjh1_oyqt59.png" width="150" height="100" alt="logo" />
          </Link>
          <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${navbarOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/home" onClick={closeNavbar}>Home</Link>
              </li>
             
              <li className="nav-item">
                <Link className="nav-link" to="/chatbot" onClick={closeNavbar}>ChatBot</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/reports" onClick={closeNavbar}>Reports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/form" onClick={closeNavbar}>Form</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin" onClick={closeNavbar}>Admin</Link>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2 search-input" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-light" type="submit">Search</button>
              <Link to="/login" className="btn btn-outline-light ms-2">Login</Link>
             
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
/*import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import your CSS file for header styles

function Header({ isLoggedIn, handleLogout }) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  return (
    <div className="header-container">
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" onClick={closeNavbar}>
            <img src="https://res.cloudinary.com/dsfgf7eb7/image/upload/v1714647539/saanjh1_oyqt59.png" width="150" height="100" alt="logo" />
          </Link>
          <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${navbarOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/home" onClick={closeNavbar}>Home</Link>
              </li>
              {isLoggedIn && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile" onClick={closeNavbar}>Profile</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/form" onClick={closeNavbar}>Form</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/chatbot" onClick={closeNavbar}>ChatBot</Link>
                  </li>
                </>
              )}
              <li className="nav-item">
                <Link className="nav-link" to="/reports" onClick={closeNavbar}>Reports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin" onClick={closeNavbar}>Admin</Link>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2 search-input" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-light" type="submit">Search</button>
              {!isLoggedIn ? (
                <Link to="/login" className="btn btn-outline-light ms-2">Login</Link>
              ) : (
                <>
                  <button onClick={handleLogout} className="btn btn-outline-light ms-2">Logout</button>
                </>
              )}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;*/




