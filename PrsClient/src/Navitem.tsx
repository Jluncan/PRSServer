

// import React from 'react'

import { NavLink } from "react-router-dom"

function Navitem() {
  return (
    <nav>
          <ul className="nav flex-column p-4">
            <li className="nav-item">
              <NavLink to="./Requests" className="nav-link" >
                Requests
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="" className="nav-link" >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="" className="nav-link" >
                Vendors
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="" className="nav-link">
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
  )
}

export default Navitem