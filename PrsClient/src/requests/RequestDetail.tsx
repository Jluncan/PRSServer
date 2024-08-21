import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { requestAPI } from "./RequestApi";
import { Request } from "./Request";

function RequestDetails() {
//  const [request, setRequest] =useState<Request>()
  const { id } = useParams<{ id: string }>();
  const requestId = Number(id);
  const [request, setRequest] = useState<Request | undefined>(undefined);

  useEffect(() => {
    getId();
  }, []);

  async function getId() {
    let foundRequest = await requestAPI.find(requestId);
    setRequest(foundRequest);
  }
  const getBadgeClass = (status: string | undefined) => {
    switch (status?.toLowerCase()) {
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

  if (!request) return null;
  return (
    <>
      <div className="px-4 pb-0 mb-0 mt-3 d-flex justify-content-between">
        <h2>Request</h2>
        <button className="btn btn-primary">Send For Review</button>
      </div>
      <hr className="mt-2" />
      <div className="container d-flex justify-content-between">
        <div>
          <dl>
            <dt>Description</dt>
            <dd>{request?.description}</dd>
            <dt>Justification</dt>
            <dd>{request?.justification}</dd>
          </dl>
        </div>
        <div>
          <dl>
            <dt>Delivery Method</dt>
            <dd>{request?.deliveryMode}</dd>
            <dt>Status</dt>
            <dd className={getBadgeClass(request?.status)}>{request?.status}</dd>
          </dl>
        </div>
        <div>
          <dl>
            <dt>Requested By</dt>
            <dd>
              {request?.user?.firstname} {request?.user?.lastname}
            </dd>
          </dl>
        </div>
      </div>
      <div></div>
    </>
  );
}
