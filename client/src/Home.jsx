import { Link } from "react-router-dom";
import Hero from "./Hero";
import MarketTrendCards from "./MarketTrendCards";
import FeaturesCard from "./FeaturesCard";
import { marketTrendsCrypto } from "../dummy-crypto-data/marketTrendsCrypto"
import { featureData } from "../data/featureData";

export const Home = ({ auth }) => {
  return (
   <div className="flex gap-8 flex-col px-8">
   <Hero/>
   <div className="flex flex-col gap-4">
   <h2 className="text-[#0D3E36] text-xl font-semibold">Market Trends</h2>
   <div className="grid grid-cols-4 gap-8">
    {
      marketTrendsCrypto.map((crypto) => (
        <MarketTrendCards 
        key={crypto.id}
        crypto = {crypto}
        />
      ))
    }
    </div>
   </div>
   <div className="flex flex-col items-center mt-52 gap-8">
    <h2 className="text-[#0D3E36] font-bold text-3xl">CryptoCap Amazing Faetures</h2>
    <p className="text-[#4D625F]">Explore sensational features to prepare your best investment in cryptocurrency</p>
   <div className="grid grid-cols-4 gap-8">
    {
      featureData.map((feature) => (
        <FeaturesCard
        key={feature.id}
        feature = {feature}
        />
      ))
    }
   </div>
   </div>
   
    </div>
    // <div>
    //   <h1>Home</h1>
    //   {auth.isAuthenticated() ? (
    //     <Link to="/profile">View profile</Link>
    //   ) : (
    //     <button onClick={auth.login}>Log In</button>
    //   )}
    // </div>
  )
};




