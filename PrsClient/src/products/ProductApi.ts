import { BASE_URL, delay, checkStatus, parseJSON } from "../utility/fetchUtilities";
import { Product } from "./Products";

let url = `${BASE_URL}/products`;

export const productAPI = {
  list(): Promise<Product[]> {
    return fetch(`${url}`).then(delay(600)).then(checkStatus).then(parseJSON);
  },

  find(id: number): Promise<Product> {
    return fetch(`${url}/${id}`).then(checkStatus).then(parseJSON);
  },

  post(product: Product) {
    return fetch(`${url}`, {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(checkStatus)
      .then(parseJSON);
  },

  put(product: Product) {
    return fetch(`${url}/${product.id}`, {
      method: "PUT",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(checkStatus);
    // .then(parseJSON);
  },

  delete(id: number) {
    return fetch(`${url}/${id}`, { method: "DELETE" }).then(checkStatus);
  },
};
