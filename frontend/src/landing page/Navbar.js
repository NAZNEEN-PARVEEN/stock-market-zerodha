import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#ffffff", padding: "0.5rem 1rem" }} // height kam karne ke liye
    >
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="https://static.vecteezy.com/system/resources/previews/004/982/490/non_2x/modern-stock-market-logo-vector.jpg"
            style={{ width: "150px", height: "150px" }} // fixed size rakha for balance
            alt="logo"
          />
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse fs-4" id="navbarSupportedContent" >
          <ul className="navbar-nav ms-auto mb-lg-0">
            <li className="nav-item" >
              <Link className="nav-link custom-link" to="/signup" >
                Signup
              </Link>
            </li>
             <li className="nav-item" >
              <Link className="nav-link custom-link" to="/login" >
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
