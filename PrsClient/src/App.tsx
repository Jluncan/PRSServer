
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import './header'
 
function App() {
  return (
 
<div>
  
  <header className="container-fluid bg-body-secondary py-4 px-5 d-flex justify-content-between border-bottom border-1 border-success border-success-subtle">
    <a href="index.html">
      <svg id="logo-35" width={50} height={39} viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" className="ccompli1" fill="#007AFF" />
        <path
          d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
          className="ccustom"
          fill="#312ECB"
        />
      </svg>
    </a>
    <span>Purchase Request System</span>
    <a className="btn btn-outline-primary" href="./sign-in.html">
      <svg className="bi" width={32} height={32} fill="currentColor">
        <use xlinkHref="./node_modules/bootstrap-icons/bootstrap-icons.svg#person" />
      </svg>
      Sign In
    </a>
  </header>
  <main className="d-flex">
    <nav>
      <ul className="nav flex-column p-4">
        <li className="nav-item">
          <a className="nav-link" href="">
            Requests
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">
            Products
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">
            Vendors
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">
            Users
          </a>
        </li>
      </ul>
    </nav>
    <section className="container-fluid py-4 px-5">
      <h3>Vendors Page</h3>
      <section className="d-flex justify-content-end">
        <a className="btn btn-outline-primary" href="./vendor-create.html">
          <svg className="bi" width={32} height={32} fill="currentColor">
            <use xlinkHref="./node_modules/bootstrap-icons/bootstrap-icons.svg#plus" />
          </svg>
          Add Vendor
        </a>
      </section>
      <hr />
      <section>
        <section className="d-flex flex-wrap gap-5">
          <div className="card mb-3" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Vendor 1</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card mb-3" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Vendor 2</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Vendor 3</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </section>
      </section>
    </section>
  </main>
  
</div>)
}

  export default App;

