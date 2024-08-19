import { Link, useNavigate, useParams } from "react-router-dom";
import { Vendor } from "./Vendor";
import { SubmitHandler, useForm } from "react-hook-form";
import { vendorAPI } from "./VendorApi";
import toast from "react-hot-toast";

function VendorForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const vendorId = Number(id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Vendor>({
    defaultValues: async () => {
      if (!vendorId) {
        return Promise.resolve(new Vendor());
      } else {
        return await vendorAPI.find(vendorId);
      }
    },
  });
  const save: SubmitHandler<Vendor> = async (vendor) => {
    try {
      if (vendor.isNew) {
        await vendorAPI.post(vendor);
      } else {
        await vendorAPI.put(vendor);
      }
      toast.success("Successfully saved");
      navigate("/vendors");
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <form className="w-25" onSubmit={handleSubmit(save)}>
      <div className="mb-3">
        <label htmlFor="Name">Name</label>
        <input
          id="name"
          {...register("name", {
            required: "Name is required",
          })}
          className={`form-control ${errors.name && "is-invalid"} }`}
          type="text"
          autoFocus
        />
        <div className="invalid-feedback">{errors?.name?.message}</div>
      </div>
      <div className="mb-3">
        <label htmlFor="Address">Address</label>
        <input
          id="address"
          {...register("address", {
            required: "Address is required",
          })}
          className={`form-control ${errors.address && "is-invalid"} }`}
          type="text"
          autoFocus
        />
        <div className="invalid-feedback">{errors?.address?.message}</div>
      </div>
      <div className="mb-3">
        <label htmlFor="City">City</label>
        <input
          id="City"
          {...register("city", {
            required: "City is required",
          })}
          className={`form-control ${errors.city && "is-invalid"} }`}
          type="text"
          autoFocus
        />
        
        <div className="invalid-feedback">{errors?.city?.message}</div>
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="state">
          State
        </label>
        <select
          {...register("state", {
            required: "Genre is required",
          })}
          className={`form-select ${errors.state && "is-invalid"} `}
          id="state"
        >
          <option value="">Select...</option>
          <option value="OH">Ohio</option>
          <option value="KY">Kentucky</option>
          <option value="IN">Indiana</option>
          <option value="AR">Arkansas</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="NY">New york</option>
        </select>
        <div className="invalid-feedback">{errors?.state?.message}</div>
      </div>

      <div className="mb-3">
        <label htmlFor="City">Zip Code</label>
        <input
          id="Zip Code"
          {...register("phone", {
            required: "Zip Code is required",
          })}
          className={`form-control ${errors.zip && "is-invalid"} }`}
          type="text"
          autoFocus
        />
        <div className="invalid-feedback">{errors?.zip?.message}</div>
      </div>

      <div className="d-flex gap-2">
        <button type="submit" className="btn btn-outline-primary">
          Save
        </button>
        <Link className="btn btn-outline-secondary" to="/vendors">
          Cancel
        </Link>
      </div>
    </form>
  );
}

export default VendorForm;

// import React from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
// import {Vendor} from "./Vendor"

// function VendorForm() {
//  const navigate= useNavigate();
//  const {id} = useParams<{ id: string}>();
//  const vendorId = Number(id);

//  const {
//     register,
//     handleSubmit,
//     formState: {errors},
//  } =useForm<Vendor>({
//     defaultValues: async() => {
//         if (!vendorId) {
//             // return Promise.resolve (new Vendor());
//         } else{
//             // return await VendorApi
//         }
//         }
//     }
//     ),

// export default VendorForm;
