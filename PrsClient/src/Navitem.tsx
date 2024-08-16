// import React from 'react'

import { Link, NavLink } from "react-router-dom";

function Navitem() {
  return (
    <nav>
      <ul className="nav flex-column p-4">
        <li className="nav-item">
          <Link to={"./Requests"} className="nav-link">
            Requests
          </Link>
        </li>
        <li className="nav-item">
          <NavLink to="" className="nav-link">
            Products
          </NavLink>
        </li>
        <li className="nav-item">
          <Link to={"/vendors"} className="nav-link">
            Vendors
          </Link>
        </li>
        <li className="nav-item">
          <NavLink to="" className="nav-link">
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navitem;
