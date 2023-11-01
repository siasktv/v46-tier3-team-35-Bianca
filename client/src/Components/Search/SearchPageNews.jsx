import { useState, useEffect } from "react";

function SearchPageNews(props) {
  const cryptoInfo = props.cryptoInfo;
  const [cryptoNews, setCryptoNews] = useState([]);
  console.log(cryptoInfo);

  useEffect(() => {
    fetch(
      `https://bing-news-search1.p.rapidapi.com/news/search?q=Bitcoin&freshness=Day&textFormat=Raw&safeSearch=Off`,
      {
        method: "GET",
        headers: {
          "X-BingApis-SDK": "true",
          "X-RapidAPI-Key":
            "096663313fmsh3c4f6da87bc524bp14db7ajsn7ba4f2da7f6c",
          "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        setCryptoNews(json.value);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(cryptoNews);

  return (
    <div>
      <div
        className="artboard phone-2"
        style={{
          backgroundColor: "aliceblue",
          height: 400,
          marginLeft: 30,
          marginTop: 450,
          borderRadius: 10,
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        <h2 className="News-title">News</h2>
        <p className="Trending">Trending</p>
        {cryptoNews.length > 0 &&
          cryptoNews.map((news) => {
            return (
              <div>
              <a href={news.url}><div className="News-div">
                <img src={news.image.thumbnail.contentUrl} className="News-image" />
                <span className="news-name">{news.name}</span>
              </div></a>
              {/* <p className="news-provider">{news.provider[0].name}</p> */}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default SearchPageNews;
