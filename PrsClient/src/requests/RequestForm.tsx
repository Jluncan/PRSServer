import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { requestAPI } from "./RequestApi";
import toast from "react-hot-toast";
import { userAPI } from "../users/UserApi";
import { Request } from "./Request";

function RequestForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const requestId = Number(id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Request>({
    defaultValues: async () => {
      if (!requestId) {
        return Promise.resolve(new Request());
      } else {
        return await requestAPI.find(requestId);
      }
    },
  });
  const save: SubmitHandler<Request> = async (request) => {
    try {
      if (request.isNew) {
        await requestAPI.post(request);
      } else {
        await requestAPI.put(request);
      }
      toast.success("Successfully saved");
      navigate("/Requests");
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <form className="w-25" onSubmit={handleSubmit(save)}>
      <div className="mb-3">
        <label htmlFor="description">Descritpion</label>
        <input
          id="description"
          {...register("description", {
            required: "username is required",
          })}
          className={`form-control ${errors.description && "is-invalid"} }`}
          type="text"
          autoFocus
        />
        <div className="invalid-feedback">{errors?.description?.message}</div>
      </div>
      <div className="mb-3">
        <label htmlFor="justification">Justification</label>
        <input
          id="justification"
          {...register("justification", {
            required: "Password is required",
          })}
          className={`form-control ${errors.justification && "is-invalid"} }`}
          type="text"
          autoFocus
        />
        <div className="invalid-feedback">{errors?.justification?.message}</div>
      </div>
      <div className="mb-3">
        <label htmlFor="rejectionReason">Rejection reason</label>
        <input
          id="RejectionReason"
          {...register("rejectionReason", {
            required: "First name is required",
          })}
          className={`form-control ${errors.rejectionReason && "is-invalid"} }`}
          type="text"
          autoFocus
        />

        <div className="invalid-feedback">{errors?.rejectionReason?.message}</div>
      </div>

      <div className="mb-3">
        <label htmlFor="DeliveryMode">Delivery Mode</label>
        <input
          id="LastName"
          {...register("deliveryMode", {
            required: "Delivery Mode is required",
          })}
          className={`form-control ${errors.deliveryMode && "is-invalid"} }`}
          type="text"
          autoFocus
        />
        <div className="invalid-feedback">{errors?.deliveryMode?.message}</div>
      </div>
      <div className="mb-3">
        <label htmlFor="status">Status</label>
        <input
          id="Status"
          {...register("status", {
            required: "Status is required",
          })}
          className={`form-control ${errors.status && "is-invalid"} }`}
          type="text"
          autoFocus
        />
        <div className="invalid-feedback">{errors?.status?.message}</div>
      </div>
      <div className="mb-3">
        <label htmlFor="Total">Total</label>
        <input
          id="total"
          {...register("total", {
            required: "Total is required",
          })}
          className={`form-control ${errors.total && "is-invalid"} }`}
          type="text"
          autoFocus
        />
        <div className="invalid-feedback">{errors?.total?.message}</div>
      </div>
      <div className="mb-3">
        <label htmlFor="userId">user Id</label>
        <input
          id="userId"
          {...register("userId", {
            required: "User Id is required",
          })}
          className={`form-control ${errors.userId && "is-invalid"} }`}
          type="text"
          autoFocus
        />
        <div className="invalid-feedback">{errors?.userId?.message}</div>
      </div>
      {/* <div className="mb-3">
        <label htmlFor="user">User</label>
        <input
          id="user"
          {...register("user", {
            required: "Delivery Mode is required",
          })}
          className={`form-control ${errors.deliveryMode && "is-invalid"} }`}
          type="text"
          autoFocus
        />
        <div className="invalid-feedback">{errors?.deliveryMode?.message}</div>
      </div> */}

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

export default RequestForm;
