import { BASE_URL, delay, checkStatus, parseJSON } from "../utility/fetchUtilities";
import {  RequestLines } from "./RequestLines";
import { productId } from "./Products";

let url = `${BASE_URL}/credits`;

function replacer(key: string, value: any) {
  if (key === "actor") return undefined;
  return value;
}

export const creditAPI = {
  list(): Promise<RequestLines[]> {
    return fetch(url).then(delay(400)).then(checkStatus).then(parseJSON);
  },

  listByMovie(vendorId: number): Promise<RequestLines[]> {
    let currentUrl = `${BASE_URL}/vendor/${vendorId}/requestlines?_expand=user`;
    return fetch(currentUrl).then(checkStatus).then(parseJSON);
  },

  find(id: number): Promise<RequestLines> {
    return fetch(`${url}/${id}`).then(checkStatus).then(parseJSON);
  },

  post(requestlines: RequestLines) {
    return fetch(`${url}`, {
      method: "POST",
      body: JSON.stringify(RequestLines, replacer),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(checkStatus)
      .then(parseJSON);
  },

  put(requestline: RequestLines) {
    return fetch(`${url}/${requestline.id}`, {
      method: "PUT",
      body: JSON.stringify(requestline, replacer),
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