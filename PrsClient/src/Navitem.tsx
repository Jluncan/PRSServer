// import React from 'react'

import { Link, NavLink } from "react-router-dom";

function Navitem() {
  return (
    <nav style={{ width: "20rem" }}>
      <ul className="nav flex-column nav-pills p-4 bg-body-secondary vh-100">
        <li className="nav-item ">
          <NavLink to={"/requests"} className="nav-link">
            Requests
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="products" className="nav-link">
            Products
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/vendors"} className="nav-link">
            Vendors
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/users" className="nav-link">
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navitem;
