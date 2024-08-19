import React, { SyntheticEvent } from "react";
import { Dropdown, NavLink } from "react-bootstrap";
import { Vendor } from "./Vendor";
import { Link } from "react-router-dom";


interface VendorCardProps {
  vendor: Vendor;
  onRemove: (vendor: Vendor) => void;
}

function VendorCard({ vendor, onRemove }: VendorCardProps) {
  return (
    <div className="card w-25">
      <div className="progress">
        <div
          className="progress-bar bg-primary"
          role="progressbar"
          style={{ width: "60%" }}
          aria-valuenow={60}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      <address className="py-4 px-4">
        <div className="d-flex justify-content-between align-items-center">
          <span>
            <strong>{vendor.name}</strong> <span className="badge text-bg-secondary">{vendor.code}</span>
          </span>
          <Dropdown aria-expanded="false">
            <Dropdown.Toggle variant="" className="no-caret">
              {/* <span className="text-primary fw-semibold "> */}
              <svg className=" m-2 text-primary" width={30} height={20} fill="currentColor">
                <use xlinkHref="../node_modules/bootstrap-icons/bootstrap-icons.svg#three-dots-vertical" />
              </svg>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <li>
                <Link to={`/vendor/edit/${vendor.id}`} className="dropdown-item">
                  Edit
                </Link>
              </li>
              <li>
                <a
                  className="small dropdown-item"
                  onClick={(event: SyntheticEvent) => {
                    event.preventDefault();
                    onRemove(vendor);
                  }}
                >
                  Delete
                </a>
              </li>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <br />
        {vendor.address} <br />
        {vendor.city} <br />
        {vendor.phone} <br />
        {vendor.email}
      </address>
    </div>
  );
}

export default VendorCard;
