import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Profile } from "./Profile";
import { Nav } from "./Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
