import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Profile } from "./Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
