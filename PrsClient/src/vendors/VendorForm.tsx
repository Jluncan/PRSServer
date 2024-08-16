
import { useNavigate, useParams } from "react-router-dom";
import { Vendor } from "./Vendor";
import { useForm } from 'react-hook-form';
import { vendorAPI } from "./VendorApi";

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
         return Promise.resolve (new Vendor());
      } else {
         return await vendorAPI.find(vendorId)
      }
    },
  });
  function save(vendor:Vendor) {
    console.log(vendor);
    
  }
  return (
    <form className="w-25" onSubmit={handleSubmit(save)}>
      <div className="mb-3">
        <label htmlFor="Name">
        Name
        </label>
        <input id="name"
        {...register("name",{
          required: "Name is required",
        })}
        className={`form-control ${errors.name && "is-invalid"} }`}
        type="text"
        autoFocus
        />
        <div className="invalid-feedback">{errors?.name?.message}</div>
      </div>
      <div className="mb-3">
        <label htmlFor="Address">
        Address
        </label>
        <input id="address"
        {...register("address",{
          required: "Address is required",
        })}
        className={`form-control ${errors.address && "is-invalid"} }`}
        type="text"
        autoFocus
        />
        <div className="invalid-feedback">{errors?.address?.message}</div>
      </div>
      

    </form>
  )

 
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
