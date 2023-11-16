import "../App.css";
import { NavLink } from "react-router-dom";
import { BiHomeAlt2, BiSolidDashboard } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
function NavBar({ auth, setSearch }) {
  const { isAuthenticated, login, logout } = auth;
  const [input, setInput] = useState("");
  function setInputHandler(e) {
    setInput(e.target.value);
  }

  function setSearchHandler() {
    setSearch(input);
  }

  function submitHandler(e) {
    if (e.key === "Enter") {
      setSearch(input);
    }
  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {isAuthenticated() ? (
              <li>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive ? "Active" : "non-Active"
                  }
                >
                  Profile
                </NavLink>
              </li>
            ) : (
              ""
            )}
            {isAuthenticated() ? (
              <li>
                <button onClick={logout}>{"Log Out"}</button>
              </li>
            ) : (
              ""
            )}
            {auth.isAuthenticated() ? (
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive ? "Active" : "non-Active"
                }
              >
                View profile
              </NavLink>
            ) : (
              <button onClick={auth.login}>Log In</button>
            )}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">Crypto App</a>
      </div>
      <div className="navbar-end">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          onChange={setInputHandler}
          onKeyDown={submitHandler}
        />
        <button
          onClick={setSearchHandler}
          style={{ marginRight: 30, fontSize: 20, marginLeft: 10 }}
        >
          <NavLink
            to="/search"
            className={({ isActive }) => (isActive ? "Active2" : "non-Active2")}
          >
            <AiOutlineSearch />
          </NavLink>
        </button>

        <button className="btn btn-ghost btn-circle">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "Active2" : "non-Active2")}
          >
            <BiHomeAlt2 />
          </NavLink>
        </button>

        <button className="btn btn-ghost btn-circle">
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "Active2" : "non-Active2")}
          >
            <BiSolidDashboard />
          </NavLink>
        </button>
        <button className="btn btn-ghost btn-circle">
          <NavLink
            to="/favorite"
            className={({ isActive }) => (isActive ? "Active2" : "non-Active2")}
          >
            <AiOutlineHeart />
          </NavLink>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
