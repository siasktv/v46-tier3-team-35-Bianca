import { useState, useEffect } from "react";

function CryptoList() {
  const [cryptos, setCryptos] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    )
      .then((response) => response.json())
      .then((data) => setCryptos(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table" style={{ width: "1400px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Cap</th>
            <th>24hr high</th>
          </tr>
        </thead>
        <tbody>
          {cryptos.map((crypto, index) => {
            return (
              <tr key={index}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={crypto.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{crypto.id}</div>
                      <div className="text-sm opacity-50">{crypto.symbol}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {crypto.current_price
                    ? crypto.current_price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    : "undefined"}
                  <br />
                  {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                </td>
                <td>
                  {crypto.market_cap
                    ? crypto.market_cap
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    : "undefined"}
                  <br />
                  {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                </td>
                <td>${crypto.high_24h}</td>
                <th>
                  <button
                    className="btn btn-ghost btn-xs"
                    style={{ right: -10 }}
                  >
                    details
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Rank</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default CryptoList;
