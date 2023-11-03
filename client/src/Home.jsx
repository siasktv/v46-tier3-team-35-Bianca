import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import MarketTrendCards from "./MarketTrendCards";
import FeaturesCard from "./FeaturesCard";
import { featureData } from "./data/featureData";

// const api = import.meta.env.GECKO_API

export const Home = ({ auth }) => {
  const [cryptoCoins, setCryptoCoins] = useState();

  useEffect(() => {
    const fetchCryptoCoins = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false&price_change_percentage=24h&locale=en`
        );
        const cryptoData = response.data;
        setCryptoCoins(cryptoData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCryptoCoins();
  }, []);

  console.log(cryptoCoins);

  return (
    <div className="flex gap-8 flex-col px-8">
      <Hero />
      <div className="flex flex-col gap-4">
        <h2 className="text-[#0D3E36] text-xl font-semibold">Market Trends</h2>
        <div className="grid grid-cols-4 gap-8">
          {cryptoCoins && cryptoCoins.length > 0 ? (
            cryptoCoins.map((crypto) => (
              <MarketTrendCards key={crypto.id} crypto={crypto} />
            ))
          ) : (
            <p>Loading crypto data...</p>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center mt-52 gap-8">
        <h2 className="text-[#0D3E36] font-bold text-3xl">
          CryptoCap Amazing Faetures
        </h2>
        <p className="text-[#4D625F]">
          Explore sensational features to prepare your best investment in
          cryptocurrency
        </p>
        <div className="grid grid-cols-4 gap-8">
          {featureData.map((feature) => (
            <FeaturesCard key={feature.id} feature={feature} />
          ))}
          {/* {auth.isAuthenticated() ? (
        <Link to="/profile">View profile</Link>
      ) : (
        <button onClick={auth.login}>Log In</button>
      )} */}
        </div>
      </div>
    </div>
  );
};
