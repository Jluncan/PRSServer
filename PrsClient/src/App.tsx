import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Header";
import Navitem from "./Navitem";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";
import VendorsPage from "./vendors/VendorsPage";
import VendorsCreate from "./vendors/VendorsCreate";
import VendorEditPage from "./vendors/VendorEditPage";
import VendorDetailPage from "./vendors/VendorDetailPage";
import { Toaster } from "react-hot-toast";

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
      {/* <UserContext.Provider value={{ user, SetUser }}> */}
      <Header user={user} />
      <main className="d-flex">
        <Toaster
          toastOptions={{
            success: {
              iconTheme: {
                primary: "#0d6efd",
                secondary: "white",
              },
            },
            style: {
              maxWidth: 500,
            },
          }}
        />
        <Navitem />
        <section className="p-4 w-100">
          <Routes>
            <Route path="/" />
            {/* <Route path="/signin" element={<SignInPage />} /> */}
            <Route path="vendors" element={<VendorsPage />} />
            <Route path="/vendors/create" element={<VendorsCreate />} />
            <Route path=" /vendors/edit/:id" element={<VendorEditPage />} />
            <Route path="/vendors/detail/:vendorId/*" element={<VendorDetailPage />} />
            {/* STILL NEED TO ADD ROUTING FOR USERS/ALL OTHERS */}
          </Routes>
        </section>
      </main>
      {/* </UserContext.Provider> */}
    </Router>
  );
}
export default App;
