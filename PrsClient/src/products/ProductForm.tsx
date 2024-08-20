import { Link, useNavigate, useParams } from "react-router-dom";
import { Product } from "./Products";
import { SubmitHandler, useForm } from "react-hook-form";
import { productAPI } from "./ProductApi";
import toast from "react-hot-toast";

import { Vendor } from "../vendors/Vendor";
import { vendorAPI } from "../vendors/VendorApi";
import { useState } from "react";

function ProductForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);
  const [vendors, setVendor] = useState<Vendor[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>({
    defaultValues: async () => {
      let vendorsData = await vendorAPI.list();
      setVendor(vendorsData);
      if (!productId) {
        return Promise.resolve(new Product());
      } else {
        return await productAPI.find(productId);
      }
    },
  });
  const save: SubmitHandler<Product> = async (product) => {
    try {
      if (product.isNew) {
        await productAPI.post(product);
      } else {
        await productAPI.put(product);
      }
      toast.success("Successfully saved");
      navigate("`/users/User/${userId}?lastUpdated=${Date.now()}`");
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <form className="w-25" onSubmit={handleSubmit(save)}>
      <div className="mb-3">
        <label htmlFor="partNbr">Part Number</label>
        <input
          id="partNbr"
          {...register("partNbr", {
            required: "Part Number is required",
          })}
          className={`form-control ${errors.partNbr && "is-invalid"} }`}
          type="text"
          autoFocus
        />
        <div className="invalid-feedback">{errors?.partNbr?.message}</div>
      </div>
      <div className="mb-3">
        <label htmlFor="Name">Part Name</label>
        <input
          id="name"
          {...register("name", {
            required: "Part Name is required",
          })}
          className={`form-control ${errors.name && "is-invalid"} }`}
          type="text"
          autoFocus
        />
        <div className="invalid-feedback">{errors?.name?.message}</div>
      </div>
      <div className="mb-3">
        <label htmlFor="Price">Price</label>
        <input
          id="Price"
          {...register("price", {
            required: "Price is required",
          })}
          className={`form-control ${errors.price && "is-invalid"} }`}
          type="text"
          autoFocus
        />
        
        <div className="invalid-feedback">{errors?.price?.message}</div>
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="unit">
          Unit
        </label>
        <select
          {...register("unit", {
            required: "Unit is required",
          })}
          className={`form-select ${errors.unit && "is-invalid"} `}
          id="unit"
        >
          {/* <option value="">Select...</option>
          <option value="OH">Ohio</option>
          <option value="KY">Kentucky</option>
          <option value="IN">Indiana</option>
          <option value="AR">Arkansas</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="NY">New york</option> */}
        </select>
        <div className="invalid-feedback">{errors?.unit?.message}</div>
      </div>

      <div className="mb-3">
        <label htmlFor="vendorId">VendorId</label>
        <input
          id="vendorId"
          {...register("vendorId", {
            required: "productId is required",
          })}
          className={`form-control ${errors.vendorId && "is-invalid"} }`}
          type="text"
          autoFocus
        />
        <div className="invalid-feedback">{errors?.vendorId?.message}</div>
      </div>

      <div className="d-flex gap-2">
        <button type="submit" className="btn btn-outline-primary">
          Save
        </button>
        <Link className="btn btn-outline-secondary" to="/products">
          Cancel
        </Link>
      </div>
    </form>
  );
}

export default ProductForm;

// import React from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
// import {Product} from "./Product"

// function ProductForm() {
//  const navigate= useNavigate();
//  const {id} = useParams<{ id: string}>();
//  const productId = Number(id);

//  const {
//     register,
//     handleSubmit,
//     formState: {errors},
//  } =useForm<Product>({
//     defaultValues: async() => {
//         if (!productId) {
//             // return Promise.resolve (new Product());
//         } else{
//             // return await ProductApi
//         }
//         }
//     }
//     ),

// export default ProductForm;
