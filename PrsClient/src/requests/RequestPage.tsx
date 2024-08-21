import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RequestList from "./RequestList";
import { Link } from "react-router-dom";

function RequestPage() {
  return (
    <div>
      <main className="d-flex">
        <section className="container-fluid py-41 px-5">
          <section className="d-flex justify-content-between">
            <h3> Requests </h3>
            <Link to="/requests/create/:id" className="btn btn-outline-primary">
              <svg className="bi" width={32} height={32} fill="currentColor">
                <use xlinkHref="./node_modules/bootstrap-icons/bootstrap-icons.svg#plus" />
              </svg>
              New Request
            </Link>
          </section>
          <hr />
          <RequestList />
        </section>
      </main>
    </div>
  );
}

export default RequestPage;
