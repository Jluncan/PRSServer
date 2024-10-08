import { useState, useEffect, SyntheticEvent } from "react";
import { Vendor } from "./Vendor";
import { vendorAPI } from "./VendorApi";
// import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Dropdown } from "react-bootstrap";
import VendorCard from "./VendorCard";
import toast from "react-hot-toast";

function VendorList() {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [busy, setBusy] = useState(false);

  async function loadVendors() {
    setBusy(true);
    let data = await vendorAPI.list();
    setVendors(data);
    setBusy(false);
  }

  useEffect(() => {
    loadVendors();
  }, []);

  async function remove(vendor: Vendor) {
    if (confirm("Are you sure you want to delete this Vendor?")) {
      if (vendor.id) {
        await vendorAPI.delete(vendor.id);
        let updatedVendors = vendors.filter((v) => v.id !== vendor.id);
        setVendors(updatedVendors);
        toast.success("Successfully deleted.");
      }
    }
  }

  return (
    <>
      {busy && (
        <section className="d-flex justify-content-center align-items-center align-content-center vh-100">
          <div className=" spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </section>
      )}
      <div className="d-flex flex-wrap gap-4 list">
        {vendors.map((vendor) => (
          <VendorCard key={vendor.id} vendor={vendor} onRemove={remove} />
        ))}
      </div>
      ;
    </>
  );
}

export default VendorList;
