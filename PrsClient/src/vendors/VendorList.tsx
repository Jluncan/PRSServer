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
        <div>
          {vendor.name}
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
