import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams, Link } from "react-router-dom";
import { User } from "./User";
import { userAPI } from "./UserApi";

function UserForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues: async () => {
      if (!userId) {
        return Promise.resolve(new User());
      } else {
        return await userAPI.find(userId);
      }
    },
  });
  const save: SubmitHandler<User> = async (user) => {
    try {
      if (user.isNew) {
        await userAPI.post(user);
      } else {
        await userAPI.put(user);
      }
      toast.success("Successfully saved");
      navigate("/users");
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <form className="w-25" onSubmit={handleSubmit(save)}>
      <div className="mb-3">
        <label htmlFor="UserName">UserName</label>
        <input
          id="username"
          {...register("userName", {
            required: "username is required",
          })}
          className={`form-control ${errors.userName && "is-invalid"} }`}
          type="text"
          autoFocus
        />
        <div className="invalid-feedback">{errors?.userName?.message}</div>
      </div>
      <div className="mb-3">
        <label htmlFor="Password">Password</label>
        <input
          id="password"
          {...register("password", {
            required: "Password is required",
          })}
          className={`form-control ${errors.password && "is-invalid"} }`}
          type="password"
        />
        <div className="invalid-feedback">{errors?.password?.message}</div>
      </div>
      <div className="mb-3">
        <label htmlFor="First Name">First Name</label>
        <input
          id="FirstName"
          {...register("firstName", {
            required: "First name is required",
          })}
          className={`form-control ${errors.firstName && "is-invalid"} }`}
          type="text"
        />

        <div className="invalid-feedback">{errors?.firstName?.message}</div>
      </div>

      <div className="mb-3">
        <label htmlFor="LastName">Last Name</label>
        <input
          id="LastName"
          {...register("lastName", {
            required: "Last Name is required",
          })}
          className={`form-control ${errors.lastName && "is-invalid"} }`}
          type="text"
        />
        <div className="invalid-feedback">{errors?.lastName?.message}</div>
      </div>

      <div className="d-flex gap-2">
        <button type="submit" className="btn btn-outline-primary">
          Save
        </button>
        <Link className="btn btn-outline-secondary" to="/vendors">
          Cancel
        </Link>
      </div>
    </form>
  );
}

export default UserForm;
