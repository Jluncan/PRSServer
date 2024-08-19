import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { User } from "./User";
import { userAPI } from "./UserApi";
import UserCard from "./UserCard";

function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [busy, setBusy] = useState(false);

  async function loadUsers() {
    setBusy(true);
    let data = await userAPI.list();
    setUsers(data);
    setBusy(false);
  }

  useEffect(() => {
    loadUsers();
  }, []);

  async function remove(user: User) {
    if (confirm("Are you sure you want to delete this User?")) {
      if (user.id) {
        await userAPI.delete(user.id);
        let updatedUsers = users.filter((u) => u.id !== user.id);
        setUsers(updatedUsers);
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
        {users.map((user) => (
          <UserCard key={user.id} user={user} onRemove={remove} />
        ))}
      </div>
      ;
    </>
  );
}

export default UserList;
