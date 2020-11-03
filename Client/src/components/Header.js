import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuLinks, setMenuLinks] = useState([
    { id: 0, url: "/", name: "Home", active: true },
    { id: 1, url: "/products/All", name: "Products", active: false },
    { id: 2, url: "/clients", name: "Clients", active: false },
    { id: 3, url: "/contact", name: "Contact", active: false },
  ]);

  const activeLink = id => {
    menuLinks.forEach((link) => {
      if (link.id === id) link.active = true;
      else link.active = false;
    });
    console.log(menuLinks);
    
    setMenuLinks(menuLinks);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top nav-bar_custom p-0">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse nav-bar_custom__item-list"
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav">
          {menuLinks.map((link) => (
            <li
              key={link.id}
              className={
                link.active
                  ? "nav-item nav-bar_custom__item-active"
                  : "nav-item"
              }
            >
              <Link
                className="nav-bar_custom__nav-link"
                to={link.url}
                onClick={() => activeLink(link.id)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

Header.propTypes = {}
export default Header;
