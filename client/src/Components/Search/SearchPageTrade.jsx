import "../Search/SearchPage.css"
import { BsCoin } from "react-icons/bs";
import { CgArrowsExchangeAltV } from "react-icons/cg";
function Trade(props) {
  const cryptoInfo = props.cryptoInfo;

  return (
    <div className="Trade-div">
    <div
      className="card w-96 bg-base-100 shadow-xl"
      
      style={{
        marginLeft: 880,
        backgroundColor: "#6699CC",
        height: 400,
        marginTop: -702,
      }}
    >
      <h2 className="oneCryptoValue">
        $
        {cryptoInfo.length === undefined ?
          cryptoInfo.market_data.current_price.usd : ""}
      </h2>
      <a
        href={
          cryptoInfo.length === undefined ? cryptoInfo.links.blockchain_site[0] : ""
        }
      >
        <span className="exchange">Exhange:</span>
        <span className="exchange-value">
          1 {cryptoInfo.length === undefined ? cryptoInfo.symbol : ""} = $
          {cryptoInfo.length === undefined ? cryptoInfo.market_data.current_price.usd : ""}
        </span>
        <button
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
        >
          Trade {cryptoInfo.length === undefined ? cryptoInfo.name : ""}!
        </button>
      </a>
      <div
        className="flex flex-col w-full border-opacity-50"
        style={{ width: 300, height: 120, marginLeft: 40, marginTop: 30 }}
      >
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
          <h2 style={{ display: "flex" }}>
            <span className="sell-value">You sell</span>
            <span>
              <BsCoin className="Sell-Logo" />
            </span>
          </h2>
        </div>
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
          <CgArrowsExchangeAltV className="exchange-icon" />
          <h2 style={{ display: "flex" }}>
            <span className="get-value">You get</span>
            <span>
              <img
                className="Get-Logo"
                src={cryptoInfo.length === undefined ? cryptoInfo.image.thumb : ""}
              />
            </span>
          </h2>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Trade;
