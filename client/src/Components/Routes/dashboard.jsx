import { useEffect, useState } from "react";
import CryptoList from "../CryptoList";
import DashboardNav from "../dashBoardNav";
import TopCryptos from "../TopCryptos";
import CategoriesList from "../CategoriesList";
import SearchPage from "../Search/SearchPage";
function Dashboard(props) {
  const show = props.show;
  const search = props.search;
  const [input, setInput] = useState("");
  useEffect(() => {
    setInput(search);
  }, [search]);
  return (
    <div>
      {show == "Results" && <SearchPage search={input} />}
      {show == "Categories" && <CategoriesList />}
      {show == "All Cryptos" && <CryptoList />}
      {show == "Top Cryptos" && <TopCryptos />}
    </div>
  );
}

export default Dashboard;
