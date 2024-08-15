// import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Header from "../Header";
import Navitem from "../Navitem";

function VendorsPage() {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <main className="d-flex">
          <Navitem />
          <section className="container-fluid py-4 px-5">
            <h3>Purchase Request System</h3>
            <section className="d-flex justify-content-end">
              <Link to="" className="btn btn-outline-primary" >
                <svg className="bi" width={32} height={32} fill="currentColor">
                  <use xlinkHref="./node_modules/bootstrap-icons/bootstrap-icons.svg#plus" />
                </svg>
                Add Vendor
              </Link>
            </section>
            <hr />
            <section>
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
            </section>
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default VendorsPage;
