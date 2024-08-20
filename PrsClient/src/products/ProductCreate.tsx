import "bootstrap/dist/css/bootstrap.min.css";
import "../App";
import ProductForm from "./ProductForm";
import { Link } from "react-router-dom";

function ProductCreate() {
  return (
    <>
      <section className="container-fluid bg-white">
        <div className="d-flex justify-content-between align-items-center m-0 px-1">
          <h4 className=" mb-4">Add Product</h4>
          
          
          {/* <Link className="btn btn-primary fw-light fs-6" to="/products">
            CANCEL
          </Link> */}
          
        </div>
        <hr />

        <div className="p-4">
          
          <ProductForm />
        </div>
      </section>
    </>
  );
}
export default ProductCreate;
