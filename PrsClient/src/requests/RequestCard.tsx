import {Request} from "./Request";

interface RequestCardProps {
  request: Request;
  onRemove: (request: Request) => void;
}

function RequestCard({ request, onRemove }: RequestCardProps) {
  return (
<<<<<<< HEAD
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
 
=======
    <>
      <br />
      {request.description} <br />
      {request.justification} <br />
      {request.status} <br />
      {request.userId}
    </>
  );
}
>>>>>>> 373d539ba282f9cbfab6c2ce9797123d8d3b3a49
export default RequestCard;
