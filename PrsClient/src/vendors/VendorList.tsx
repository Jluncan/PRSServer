import { useState, useEffect } from "react";
import { Vendor } from "./Vendor";
import { vendorAPI } from "./VendorApi";

function VendorList() {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [busy, setBusy] = useState(false);

  async function getVendors() {
    setBusy(true);
    let data = await vendorAPI.list();
    setVendors(data);
    setBusy(false);
  }

  useEffect(() => {
    getVendors();
  }, []);

  return (
    <div className="d-flex flex-wrap gap-4 list">
      {vendors.map((vendor) => (
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
            </div>
            <br />
            {vendor.address} <br />
            {vendor.city} <br />
            {vendor.phone} <br />
            {vendor.email}
          </address>
        </div>
      ))}

      {/* <div className="card col-3 m-4">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div>
              <h5 className="card-title">AeroTech Solutions</h5>
              <h6 className="card-subtitle mb-2 badge bg-secondary">AERO-TS</h6>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
export default VendorList;
