// import React from "react";

import { useNavigate } from "react-router-dom";
import { useUserContext } from "./users/UserContext";


function Header() {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();

  function signout() {
    localStorage.removeItem("user");
    setUser(undefined);
    navigate("/signin");
  }
  return (
    <header className="container-fluid bg-body-secondary py-4 px-5 d-flex justify-content-between border-bottom border-1 border-success border-success-subtle">
      <a href="index.html">
        <svg id="logo-35" width={50} height={39} viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" className="ccompli1" fill="#007AFF" />
          <path
            d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
            className="ccustom"
            fill="#312ECB"
          />
        </svg>
      </a>
      <span>Purchase Request System</span>
      <details className="dropdown pe-5">
        <summary className="btn btn-tertiary dropdown-toggle d-flex align-items-center">
          <span
            style={{ width: "3rem", height: "3rem" }}
            className="d-flex  bg-primary-subtle fs-5 text-secondary align-items-center justify-content-center rounded-circle me-2"
          >
            {user?.firstName?.substring(0,1)}
            {user?.lastName?.substring(0,1)}
          </span>
          {user?.firstName} {user?.lastName}
        </summary>
        <div className="d-flex justify-content-end">
          <ul className="dropdown-menu bg-body-tertiary" style={{ display: "revert" }}>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <button className="dropdown-item" onClick={signout}>
                Sign out
              </button>
            </li>
          </ul>
        </div>
      </details>
    </header>
  );
}

export default Header;
