import React from "react";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserList from "./UserList";

function UserPage() {
  return (
    <div>
      <main className="d-flex">
        <section className="container-fluid py-41 px-5">
          <section className="d-flex justify-content-between">
            <h3> Users </h3>
            <Link to="/user/create" className="btn btn-outline-primary">
              <svg className="bi" width={32} height={32} fill="currentColor">
                <use xlinkHref="./node_modules/bootstrap-icons/bootstrap-icons.svg#plus" />
              </svg>
              Add User
            </Link>
          </section>
          <hr />
          <UserList />

          {/* <section>
                <section className="d-flex flex-wrap gap-5">
                  <div className="card mb-3" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">Vendor 1</h5>
                      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                  <div className="card mb-3" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">Vendor 2</h5>
                      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                  <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">Vendor 3</h5>
                      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </section>
              </section> */}
        </section>
      </main>
    </div>
  );
}

export default UserPage;
