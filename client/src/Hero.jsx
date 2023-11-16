import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <div className="hero min-h-screen">
      <div className="flex flex-col w-[788px] justify-center items-center gap-10">
        <h1 className="flex-1 text-center font-bold bg-gradient-to-r bg-300% from-orange-600 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient text-5xl leading-[60px] font-salt">
          Start and Build Your Crypto Portfolio Here
        </h1>
        <p className="flex-1 text-center font-semibold text-[#4D625F] text-base leading-[28.8px]">
          Only at CryptoCap, you can build a good portfolio and learn best
          practices about cryptocurrency.
        </p>
        <Link to="/dashboard"><button className="btn bg-[#0FAE96] text-white">
          Get Started
        </button></Link>
      </div>
    </div>
  );
}
