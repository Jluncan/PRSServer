import Header from "./Header";
import Navitem from "./Navitem";

  // import React from 'react'
  function IndexPage() {
  return (
    <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Home</title>
  <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.css" />
  <link rel="stylesheet" href="./css/style.css" />
  <Header/>
  <main className="d-flex">
    <Navitem/>
    <section className="container-fluid py-4 px-5">
      <h3>Purchase Request System</h3>
      <hr />
    </section>
  </main>
  <div className="container-fluid py-4 px-5 d-flex justify-content-center" />
  
</div>
  )
}
export default IndexPage
