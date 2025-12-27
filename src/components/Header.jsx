import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="site-header">
      <div className="site-branding">
        <Link to="/" className="site-title">
          Estate Agent
        </Link>
        <span className="site-tagline">
          Find your perfect property
        </span>
      </div>

      <nav className="main-nav">
        <ul>
          <li>
            <a href="#search-bar">Search</a>
          </li>
          <li>
            <a href="#favourites">Favourites</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
