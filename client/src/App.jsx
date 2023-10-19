import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Profile } from "./Profile";
import { Nav } from "./Nav";
import { Auth } from "./Auth/Auth";
import { Callback } from "./Callback";

function App() {
  const authConst = Auth;

  return (
    <BrowserRouter>
      <Nav />
      <div className="body">
        <Routes>
          <Route path="/" element={<Home auth={authConst} />} />
          <Route
            path="/callback"
            element={<Callback auth={authConst} loc={location} />}
          />
          <Route path="/profile" element={<Profile auth={authConst} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
