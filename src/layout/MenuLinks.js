import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';

function MenuLinks() {
  return (
    <div className="col-lg-6 col-md-6">
      <nav className="header__menu mobile-menu">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/load">Load</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MenuLinks;
