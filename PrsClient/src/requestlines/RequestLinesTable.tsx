import { Link } from "react-router-dom";
import { Vendor } from "../vendors/Vendor";
import { RequestLines } from "./RequestLines";

interface RequestLinesTableProps {
  vendor: Vendor;
  onRemove: (requestlines: RequestLines) => void;
}

export function RequestLinesTable({ vendor, onRemove }: RequestLinesTableProps) {
  return (
    <table className="table table-hover table-light w-50">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {vendor.requestlines?.map((requestlines) => (
          <tr key={requestlines.id}>
            <td>{requestlines.user?.firstName}</td>
            <td>{requestlines.quantity}</td>
            <td className="d-flex gap-2">
              <Link to={`/requests/detail/${vendor.id}/requestlines/edit/${requestlines.id}`}>edit</Link>
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  onRemove(requestlines);
                }}
              >
                delete
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RequestLinesTable;
