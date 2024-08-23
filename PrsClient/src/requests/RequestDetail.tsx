import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { requestAPI } from "./RequestApi";
import { Request } from "./Request";
import RequestLinesTable from "../requestlines/RequestLinesTable";
import RequestLinesForm from "../requestlines/RequestLinesForm";
import { RequestLine } from "../requestlines/RequestLines";

function RequestDetails() {
  const { id } = useParams<{ id: string }>();
  const requestId = Number(id);
  const [request, setRequest] = useState<Request | undefined>(undefined);

  function remove(requestLine: RequestLine) {}

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
        <h2>Request Details</h2>
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
              {request?.user?.firstName} {request?.user?.lastName}
            </dd>
          </dl>
        </div>
      </div>
      <div></div>
      <RequestLinesTable request={request} onRemove={remove} />
    </>
  );
}
export default RequestDetails;
