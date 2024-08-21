import { SyntheticEvent } from "react";
import { Dropdown } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { Request } from "./Request";

interface RequestCardProps {
  request: Request;
  onRemove: (request: Request) => void;
}
function RequestCard({ request, onRemove }: RequestCardProps) {
  const getBadgeClass = (status: string) => {
    switch (status.toLowerCase()) {
      case "new":
        return "badge bg-primary";
      case "review":
        return "badge bg-warning";
      case "approved":
        return "badge bg-success";
      case "rejected":
        return "badge bg-danger";
    }
  };

  return (
    <tr>
      <td>{request.id}</td>
      <td>
        <span>
          {request.description}
          <div className="text-secondary">{request.justification}</div>
        </span>
      </td>
      <td>
        <span className={getBadgeClass(request.status)}>{request.status}</span>
      </td>
      <td className="bi-currency-dollar">{request.total}</td>
      <td>
        <span>
          {request.user?.firstname} {request.user?.lastname}
          <div className="text-secondary">{request.deliveryMode}</div>
        </span>
      </td>
      <td>
        <Dropdown aria-expanded="false">
          <Dropdown.Toggle variant="" className="no-caret">
            <svg className=" m-2 text-primary" width={30} height={20} fill="currentColor">
              <use xlinkHref="../node_modules/bootstrap-icons/bootstrap-icons.svg#three-dots-vertical" />
            </svg>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <li>
              <Link to={`/requests/edit/${request.id}`} className="dropdown-item">
                Edit
              </Link>
            </li>
            <li>
              <Link to={`/requests/detail/${request.id}`} className="dropdown-item">
                Details
              </Link>
            </li>
            <li>
              <a
                className="small dropdown-item"
                onClick={(event: SyntheticEvent) => {
                  event.preventDefault();
                  onRemove(request);
                }}
              >
                Delete
              </a>
            </li>
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
  );
}
export default RequestCard;
