import { BASE_URL, delay, checkStatus, parseJSON } from "../utility/fetchUtilities";
import { RequestLine } from "./RequestLines";
// import { productId } from "./Products";

let url = `${BASE_URL}/requestline`;

function replacer(key: string, value: any) {
  if (key === "product") return undefined;
  return value;
}

export const requestlinesAPI = {
  list(): Promise<RequestLine[]> {
    return fetch(url).then(delay(200)).then(checkStatus).then(parseJSON);
  },

  listByMovie(vendorId: number): Promise<RequestLine[]> {
    let currentUrl = `${BASE_URL}/vendor/${vendorId}/requestlines?_expand=user`;
    return fetch(currentUrl).then(checkStatus).then(parseJSON);
  },

  find(id: number): Promise<RequestLine> {
    return fetch(`${url}/${id}`).then(checkStatus).then(parseJSON);
  },

  post(requestlines: RequestLine) {
    return fetch(`${url}`, {
      method: "POST",
      body: JSON.stringify(requestlines, replacer),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(checkStatus)
      .then(parseJSON);
  },

  put(requestline: RequestLine) {
    return fetch(`${url}/${requestline.id}`, {
      method: "PUT",
      body: JSON.stringify(requestline, replacer),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(checkStatus);
  },

  delete(id: number) {
    return fetch(`${url}/${id}`, { method: "DELETE" }).then(checkStatus);
  },
};
