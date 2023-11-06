import {useEffect, useState} from "react"
import "../Search/SearchPage.css"
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
function RecentTransactions(props) {
  const [cryptoInfo, setCryptoInfo] = useState([])
  const cryptoList= props.cryptoInfo;

useEffect(() => {
setCryptoInfo(cryptoList)
},[cryptoList])

  return (
    <div>
      <div
        className="artboard phone-2"
        style={{
          backgroundColor: "aliceblue",
          height: 400,
          marginLeft: 50,
          marginTop: 450,
          borderRadius: 10,
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {cryptoInfo.length === undefined ? cryptoInfo.tickers.map((crypto, index) => {
        return <div key={index}>
          <a href={crypto.trade_url}>
        <div style={{display:"flex", paddingTop:35}}>
          <img src={cryptoInfo.image.thumb} className="Recent-logo"/>
          <span className="Recent-name">{cryptoInfo.name}</span>
          <span className="Recent-target">{crypto.target}</span>
          {cryptoInfo.symbol.toUpperCase() != crypto.target ? <FaLongArrowAltLeft className="Recent-arrow" style={{color:"red"}}/>: <FaLongArrowAltRight className="Recent-arrow" style={{color:"green"}}/>}
      </div>
      <span className="Recent-symbol">{cryptoInfo.symbol.toUpperCase() != crypto.target ? "Sell" : "Buy"}</span>
      <span className="Recent-percentage">{crypto.bid_ask_spread_percentage}</span>
      </a>
      </div> 
         }) : ""}
         </div>
    </div>
  );
}

export default RecentTransactions;
