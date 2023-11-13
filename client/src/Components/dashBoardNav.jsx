import { useState } from "react";
import Dashboard from "./Routes/dashboard";
import { FaBitcoin } from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";
import { BiSolidCategory, BiSearch } from "react-icons/bi";

function DashboardNav(props) {
  const [show, setShow] = useState("");
  const search = props.search;

  function showResultsHandler() {
    setShow("Results");
  }
  function showTopCryptosHandler() {
    setShow("Top Cryptos");
  }

  function ShowAllCryptosHandler() {
    setShow("All Cryptos");
  }

  function showCategoriesHandler() {
    setShow("Categories");
  }
  return (
    <div className="drawer lg:drawer-open" style={{ display: "flex" }}>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <li
            onClick={showResultsHandler}
            style={{
              backgroundColor: show == "Results" ? "#D3D3D3" : "",
              borderRadius: show == "Results" ? 7 : "",
            }}
          >
            <a>
              <BiSearch />
              Search Result
            </a>
          </li>
          <li
            onClick={ShowAllCryptosHandler}
            style={{
              backgroundColor: show == "All Cryptos" ? "#D3D3D3" : "",
              borderRadius: show == "All Cryptos" ? 7 : "",
            }}
          >
            <a>
              <FaBitcoin />
              All Crypto
            </a>
          </li>
          <li
            onClick={showTopCryptosHandler}
            style={{
              backgroundColor: show == "Top Cryptos" ? "#D3D3D3" : "",
              borderRadius: show == "Top Cryptos" ? 7 : "",
            }}
          >
            <a>
              <FaRankingStar />
              Top Cryptos
            </a>
          </li>
          <li
            onClick={showCategoriesHandler}
            style={{
              backgroundColor: show == "Categories" ? "#D3D3D3" : "",
              borderRadius: show == "Categories" ? 7 : "",
            }}
          >
            <a>
              <BiSolidCategory />
              Categories
            </a>
          </li>
        </ul>
      </div>
      <Dashboard show={show} search={search} />
    </div>
  );
}

export default DashboardNav;
