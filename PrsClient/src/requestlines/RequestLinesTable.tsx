import { Link } from "react-router-dom";
import { Request } from "../requests/Request";
import { RequestLine } from "./RequestLines";
interface RequestLinesTableProps {
  request: Request | undefined;
  onRemove: (requestlines: RequestLine) => void;
}

function RequestLinesTable({ request, onRemove }: RequestLinesTableProps) {
  return (
    <>
      <Link className="btn btn-primary" to={`/requests/detail/${request?.id}/requestlines/create`}>
        + Create Request Line
      </Link>
      <table className="table table-hover table-light w-50">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {request?.requestLines?.map((requestLine) => (
            <tr key={requestLine.id}>
              <td>{requestLine.product?.name}</td>
              <td>${requestLine.product?.price}</td>
              <td>{requestLine.quantity}</td>
              <td>${(requestLine.product?.price ?? 0) * (requestLine.quantity ?? 0)}</td>
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
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td>Total</td>
            <td>${request?.total}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

export default RequestLinesTable;
