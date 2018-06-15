import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './header.css';

const Header = () => {
  return (
    <header className="mdc-top-app-bar">
      <div className="mdc-top-app-bar__row">
        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
          <Link to="/" className="mdc-top-app-bar__title">
            Delhi Ultimate
          </Link>
        </section>
        <section
          className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end"
          role="toolbar"
        >
          <NavLink
            exact
            to="/"
            className="top-bar__nav-right"
            activeClassName="top-bar__nav-right--active"
          >
            Home
          </NavLink>
          <NavLink
            exact
            to="/teams"
            className="top-bar__nav-right"
            activeClassName="top-bar__nav-right--active"
          >
            Teams
          </NavLink>
          <NavLink
            exact
            to="/about"
            className="top-bar__nav-right"
            activeClassName="top-bar__nav-right--active"
          >
            About
          </NavLink>
          <NavLink
            exact
            to="/blog"
            className="top-bar__nav-right"
            activeClassName="top-bar__nav-right--active"
          >
            Blog
          </NavLink>
        </section>
      </div>
    </header>
  );
};

export default Header;
