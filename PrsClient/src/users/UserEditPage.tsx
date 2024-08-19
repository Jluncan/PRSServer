import React from "react";
import UserForm from "./UserForm";

function UserEditPage() {
  return (
    <>
      <nav className="d-flex justify-content-between">
        <h4>Edit User</h4>
      </nav>
      <hr />
      <UserForm />
    </>
  );
}

export default UserEditPage;
