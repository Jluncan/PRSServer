import { Link } from "react-router-dom";
import { Vendor } from "../vendors/Vendor";
import { RequestLine } from "./RequestLines";
interface RequestLinesTableProps {
  requestLines: RequestLine[] | undefined;
  onRemove: (requestlines: RequestLine) => void;
}

function RequestLinesTable({ requestLines, onRemove }: RequestLinesTableProps) {
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
        {requestLines?.map((requestLine) => (
          <tr key={requestLine.id}>
            <td>{requestLine.user?.firstName}</td>
            <td>{requestLine.quantity}</td>
            <td className="d-flex gap-2">
              <Link to={`/requests/detail/${requestLine.requestId}/requestlines/edit/${requestLine.id}`}>edit</Link>
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  onRemove(requestLine);
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
