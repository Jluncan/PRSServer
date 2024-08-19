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
import { User } from "./users/User";
import UserPage from "./users/UserPage";
import UserEditPage from "./users/UserEditPage";
import UserCreate from "./users/UserCreate";
import { UserContext } from "./users/UserContext";

// import './header'

function getPersistedUser() {
  const userAsJSON = localStorage.getItem("user");
  if (!userAsJSON) return undefined;
  const user = JSON.parse(userAsJSON);
  return user;
}

function App() {
  const [user, setUser] = useState<User | undefined>(getPersistedUser());

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
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
              <Route path="vendors/create" element={<VendorsCreate />} />
              <Route path="vendor/edit/:id" element={<VendorEditPage />} />
              <Route path="vendors/detail/:vendorId/*" element={<VendorDetailPage />} />
              <Route path="/users" element={<UserPage />} />
              <Route path="users/create" element={<UserCreate />} />
              <Route path="users/edit/:id" element={<UserEditPage />} />
            </Routes>
          </section>
        </main>
      </UserContext.Provider>
    </Router>
  );
}
export default App;
