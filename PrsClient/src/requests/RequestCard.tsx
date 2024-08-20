import {Request} from "./Request";

interface RequestCardProps {
  request: Request;
  onRemove: (request: Request) => void;
}

function RequestCard({ request, onRemove }: RequestCardProps) {
  return (
    <table>
  <thead>
    <tr>
      <th>{request.id}</th>
      <th>{request.description}</th>
      <th>{request.justification}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{request.status}</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>Centro comercial Moctezuma</td>
      <td>Francisco Chang</td>
      <td>Mexico</td>
    </tr>
  </tbody>
</table>
    // <>
    //   <br />
    //   {request.description} <br />
    //   {request.justification} <br />
    //   {request.status} <br />
    //   {request.userId}
    // </>
  );
}
 
export default RequestCard;
