import { useState, useEffect, SyntheticEvent } from "react";
import { Product } from "./Products";
import { productAPI } from "./ProductApi";
// import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Dropdown } from "react-bootstrap";
import ProductCard from "./ProductCard";
import toast from "react-hot-toast";

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [busy, setBusy] = useState(false);

  async function loadProducts() {
    setBusy(true);
    let data = await productAPI.list();
    setProducts(data);
    setBusy(false);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  async function remove(product: Product) {
    if (confirm("Are you sure you want to delete this Product?")) {
      if (product.id) {
        await productAPI.delete(product.id);
        let updatedProducts = products.filter((v) => v.id !== product.id);
        setProducts(updatedProducts);
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
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onRemove={remove} />
        ))}
      </div>
      ;
    </>
  );
}

export default ProductList;
