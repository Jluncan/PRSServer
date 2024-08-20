import React, { useEffect, useState } from "react";
import { requestAPI } from "./RequestApi";
import RequestCard from "./RequestCard";
import { Request } from "./Request";
import toast from "react-hot-toast";

function RequestList() {
  const [requests, setRequests] = useState<Request[]>([]);
  const [busy, setBusy] = useState(false);

  async function loadRequests() {
    setBusy(true);
    let data = await requestAPI.list();
    setRequests(data);
    setBusy(false);
  }

  
  useEffect(() => {

    loadRequests();
  }, []);



  async function remove(request: Request) {
    if (confirm("Are you sure you want to delete this Request?")) {
      if (request.id) {
        await requestAPI.delete(request.id);
        let updatedRequests = requests.filter((v) => v.id !== request.id);
        setRequests(updatedRequests);
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
        {requests.map((request: Request) => (
          <RequestCard key={request.id} request={request} onRemove={remove} />
        ))}
      </div>
      ;
    </>
  );
}

export default RequestList;
