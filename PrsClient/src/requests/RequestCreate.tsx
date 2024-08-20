import RequestForm from "./RequestForm";
function RequestCreate() {
  return (
    <>
      <section className="container-fluid bg-white">
        <div className="d-flex justify-content-between align-items-center m-0 px-1">
          <h4 className=" mb-4">New Request</h4>

          {/* <Link className="btn btn-primary fw-light fs-6" to="/vendors">
              CANCEL
            </Link> */}
        </div>
        <hr />

        <div className="p-4">
          <RequestForm />
        </div>
      </section>
    </>
  );
}
export default RequestCreate;
