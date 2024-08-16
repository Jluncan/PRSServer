import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Header";
import Navitem from "./Navitem";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";

// import './header'

function getPersistedUser() {
  const userAsJSON = localStorage.getItem("user");
  if (!userAsJSON) return undefined;
  const user = JSON.parse(userAsJSON);
  return user;
  }


function App() {
  const [user, SetUser] = useState<User | undefined>(getPersistedUser());


  return (
    <Router>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home</title>
        <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.css" />
        <link rel="stylesheet" href="./css/style.css" />
        <Header />
        <main className="d-flex">
          <Navitem />
          <section className="container-fluid py-4 px-5">
            <h3>Purchase Request System</h3>
            <hr />
          </section>
        </main>
        <div className="container-fluid py-4 px-5 d-flex justify-content-center" />
      </div>
    </Router>
  );
}
export default App;
