import { useState, useEffect } from "react";
function TopCryptos() {
  const [topCryptos, setTopCryptos] = useState([]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/search/trending")
      .then((response) => response.json())
      .then((data) => setTopCryptos(data.coins))
      .catch((error) => console.error(error));
  }, []);
  console.log(topCryptos);
  return (
    <div className="overflow-x-auto">
      <table className="table" style={{ width: "1400px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Rank</th>
          </tr>
        </thead>
        <tbody>
          {topCryptos.map((crypto) => {
            return (
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={crypto.item.large}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{crypto.item.id}</div>
                      <div className="text-sm opacity-50">
                        {crypto.item.symbol}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {crypto.item.price_btc}
                  <br />
                </td>
                <td>{crypto.item.market_cap_rank}</td>
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
      </table>
    </div>
  );
}

export default TopCryptos;
