import {Request} from "./Request";

interface RequestCardProps {
  request: Request;
  onRemove: (request: Request) => void;
}

function RequestCard({ request, onRemove }: RequestCardProps) {
  return (
    <>
      <br />
      {request.description} <br />
      {request.justification} <br />
      {request.status} <br />
      {request.userId}
    </>
  );
}
export default RequestCard;
