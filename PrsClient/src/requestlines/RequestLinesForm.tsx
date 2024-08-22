import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams, Link } from "react-router-dom";
import { productAPI } from "../products/ProductApi";
import { Product } from "../products/Products";
import { RequestLine } from "./RequestLines";
import { requestlinesAPI } from "./RequestLinesApi";







function RequestLinesForm() {
  const navigate = useNavigate();
    // let { requestId: requestLinesIdAsString } = useParams<{ requestLinesId: string }>();
  let { id: requestIdAsString, lineId: lineIdAsString } = useParams<{ id: string, lineId:string }>();
  let requestLineId = Number(lineIdAsString);
  let requestId = Number(requestIdAsString);
  const [products, setProducts] = useState<Product[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestLine>({
    defaultValues: async () => {
      let productsData = await productAPI.list();
      setProducts(productsData);

        if (!requestLineId) {
      let requestlines = new RequestLine({ requestId: requestId });
      return Promise.resolve(requestlines);
       }
      else {
         return await requestlinesAPI.find(requestLineId);
          
        }
    },
  });

  const save: SubmitHandler<RequestLine> = async (requestlines: RequestLine) => {
    try {
      if (requestlines.isNew) {
        await requestlinesAPI.post(requestlines);
      } else {
        await requestlinesAPI.put(requestlines);
      }
     
      navigate(`/request/detail/${requestId}`)
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <form className="w-50" onSubmit={handleSubmit(save)} noValidate>
      <div className="mb-3">
        <label className="form-label" htmlFor="product">
          Product Name
        </label>
        <select
          {...register("productId", {
            required: "Product Name is required",
          })}
          className={`form-select ${errors.productId && "is-invalid"} `}
          id="product">
          <option value="">Select...</option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>
        <div className="invalid-feedback">{errors?.productId?.message}</div>
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="role">
          Quantity
        </label>
        <input
          {...register("quantity", {
            required: "quantity is required",
          })}
          className="form-control"
          type="text"
          id="quantity"
        />
      <div className="invalid-feedback">{errors?.quantity?.message}</div>
      </div>

      <div className="d-flex gap-2">
        <button className="btn btn-outline-primary">Save</button>
        <Link className="btn btn-outline-secondary" to={`/request/detail/${requestId}`}>
          Cancel
        </Link>
      </div>
    </form>
  );
}

export default RequestLinesForm;