import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import { Home } from "./Home";
import { Profile } from "./Profile";
import { Auth } from "./Auth/Auth";
import { Callback } from "./Callback";
import Dashboard from "./Components/Routes/dashboard";
import DashboardNav from "./Components/dashBoardNav";
import NavBar from "./Components/Navbar";
import { useState } from "react";
import Footer from "./Footer";
import Prices from "./Prices";
import Detail from "./Detail";
import Favorite from "./Favorite";


function App() {
  const authConst = Auth;
  const [search, setSearch] = useState("");
  return (
    <BrowserRouter>
      <NavBar auth={authConst} setSearch={setSearch} />
      <div className="body">
        <Routes>
            <Route path="/" element={<Home auth={authConst} />} />
            <Route
              path="/callback"
              element={<Callback auth={authConst} loc={location} />}
            />
            <Route
              path="/profile"
              element={
                authConst.isAuthenticated() ? (
                  <Profile auth={authConst} />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route path="/dashboard" element={<DashboardNav search={search} />} />
            <Route path="/prices" element={<Prices />} />
            <Route path="/coin/:id" element={<Detail email="test@gmail.com" />} />
            <Route
              path="/favorite"
              element={<Favorite email="test@gmail.com" />}
            />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
