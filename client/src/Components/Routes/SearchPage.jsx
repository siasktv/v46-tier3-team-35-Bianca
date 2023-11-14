import { useState, useEffect } from "react";
import "../Search/SearchPage.css";
import HistoryChart from "../HistoryChart";
import SearchPageStats from "../Search/SearchPageStats";
import RecentTransactions from "../Search/SearchPageRecentTransactions";
import SearchPageNews from "../Search/SearchPageNews";
import Description from "../Search/SearchPageDescription";
import Trade from "../Search/SearchPageTrade";
function SearchPage(props) {
  const search = props.search;
  const [cryptoId, setCryptoId] = useState([]);
  const [cryptoInfo, setCryptoInfo] = useState([]);
  const [name, setName] = useState("");


  useEffect(() => {
    setName(search);
  }, [search]);
  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/search?query=${search}`)
      .then((response) => response.json())
      .then((data) => setCryptoId(data.coins[0].id))
      .catch((error) => console.error(error));
  }, [search]);

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${cryptoId}`)
      .then((response) => response.json())
      .then((data) => setCryptoInfo(data))
      .catch((error) => console.error(error));
  }, [cryptoId]);

  return (
    <div style={{marginRight:250}}>
      <div
        className="avatar"
        style={{ width: 170, height: "auto", marginLeft: 50, marginTop: 20 }}
      >
        <img
          src={cryptoInfo.length === undefined ? cryptoInfo.image.thumb : ""}
          alt="Avatar Tailwind CSS Component"
          className="crypto-picture"
        />

        <h2 className="crypto-name">
          {cryptoInfo.length === undefined ? cryptoInfo.name : ""}
        </h2>
        <h2 className="crypto-symbol">
          {cryptoInfo.length === undefined
            ? cryptoInfo.symbol.toUpperCase()
            : ""}
        </h2>
      </div>
      <div
        className="artboard artboard-horizontal phone-4"
        style={{
          backgroundColor: "white",
          marginLeft: 50,
          borderRadius: 15,
          marginTop: 25,
          width: 800,
          height: 500,
        }}
      >
        <h2 className="Crypto-price">
          $
          {cryptoInfo.length === undefined
            ? cryptoInfo.market_data.current_price.usd
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            : ""}{" "}
          USD{" "}
          <span className="hr-change-percent">
            {cryptoInfo.length === undefined ? (
              <span
                style={{
                  color:
                    +cryptoInfo.market_data.market_cap_change_percentage_24h < 0
                      ? "red"
                      : "green",
                }}
              >
                %
                {cryptoInfo.length === undefined
                  ? cryptoInfo.market_data.market_cap_change_percentage_24h
                  : ""}
              </span>
            ) : (
              ""
            )}
          </span>
        </h2>
        <HistoryChart id={search} />
      </div>
      <SearchPageStats cryptoInfo={cryptoInfo} />
      <Trade cryptoInfo={cryptoInfo} />
      <div className="Crypto-info">
        <div className="flex w-full">
          <RecentTransactions cryptoInfo={cryptoInfo} />
          <SearchPageNews cryptoInfoName={search} />
          <Description cryptoInfo={cryptoInfo} />
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
