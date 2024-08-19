import { SyntheticEvent } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { User } from "./User";

interface UserCardProps {
  user: User;
  onRemove: (user: User) => void;
}

function UserCard({ user, onRemove }: UserCardProps) {
  return (
    <div className="card w-25">
      <div className="progress">
        <div
          className="progress-bar bg-primary"
          role="progressbar"
          style={{ width: "60%" }}
          aria-valuenow={60}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      <address className="py-4 px-4">
        <div className="d-flex justify-content-between align-items-center">
          <span>
            <strong>
              {user.firstName}
              {user.lastName}
            </strong>{" "}
            <span className="badge text-bg-secondary">{user.id}</span>
          </span>
          <Dropdown aria-expanded="false">
            <Dropdown.Toggle variant="" className="no-caret">
              {/* <span className="text-primary fw-semibold "> */}
              <svg className=" m-2 text-primary" width={30} height={20} fill="currentColor">
                <use xlinkHref="../node_modules/bootstrap-icons/bootstrap-icons.svg#three-dots-vertical" />
              </svg>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <li>
                <Link to={`/users/edit/${user.id}`} className="dropdown-item">
                  Edit
                </Link>
              </li>
              <li>
                <a
                  className="small dropdown-item"
                  onClick={(event: SyntheticEvent) => {
                    event.preventDefault();
                    onRemove(user);
                  }}
                >
                  Delete
                </a>
              </li>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <br />
        {user.username} <br />
        {user.password} <br />
        {user.firstName} <br />
        {user.lastName}
      </address>
    </div>
  );
}
export default UserCard;
