import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Nav = () => {
  const handleClick = () => {
    const navbarLinks = document.getElementsByClassName("navbar-links")[0];
    navbarLinks.classList.toggle("active");
  };

  return (
    <div>
      <nav className="navbar">
        <a className="brand-title" href="/">
          Agriculture - Arc
        </a>
        <button className="toggle-button" onClick={handleClick}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <div className="navbar-links">
          <ul>
            <li>
              <Link to="/" onClick={handleClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/crops" onClick={handleClick}>
                Crops
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleClick}>
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
