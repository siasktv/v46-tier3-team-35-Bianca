import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import { Home } from "./Components/Routes/Home";
import { Profile } from "./Profile";
import { Auth } from "./Auth/Auth";
import { Callback } from "./Callback";
import Dashboard from "./Components/Routes/dashboard";
import DashboardNav from "./Components/dashBoardNav";
import NavBar from "./Components/Navbar";
import { useState } from "react";
function App() {
  const authConst = Auth;
  const [search, setSearch] = useState('')
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
           <Route
            path="/dashboard"
            element={
            <DashboardNav search={search}/>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
