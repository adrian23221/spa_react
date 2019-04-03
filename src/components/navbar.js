import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = props => (
  <nav>
    <h2 className="logo">
      <a className="logo-link" href="#">
        {props.title}
      </a>
    </h2>
    <ul className="nav-menu">
      <li>
        <NavLink className="nav-menu__link" exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-menu__link" to="/Actors">
          Best Actors
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-menu__link" to="/Actress">
          Best Actress
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-menu__link" to="/Films">
          Best Films
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
