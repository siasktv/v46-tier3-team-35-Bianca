import { useState, useEffect } from "react";
import ImageNotFound from "../Search/istockphoto-1409329028-612x612.jpg";

function SearchPageNews(props) {
  const [searchName, setSearchName] = useState("");
  const [cryptoNews, setCryptoNews] = useState([]);
  const cryptoName = props.cryptoInfoName;
  useEffect(() => {
    setSearchName(cryptoName);
  }, [cryptoName]);
  useEffect(() => {
    fetch(
      `https://bing-news-search1.p.rapidapi.com/news/search?q=${cryptoName}&freshness=Day&textFormat=Raw&safeSearch=Off`,
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
  }, [cryptoName]);
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
        {cryptoNews.length > 0
          ? cryptoNews.map((news) => {
              return (
                <div key={news.name}>
                  <a href={news.url ? news.url : ""}>
                    <div className="News-div">
                      {news.image ? (
                        <img
                          src={news.image.thumbnail.contentUrl}
                          className="News-image"
                        />
                      ) : (
                        <img
                          src={<ImageNotFound />}
                          className="image-not-found"
                        />
                      )}
                      <span className="news-name">
                        {news.name && news.name}
                      </span>
                    </div>
                  </a>
                  {/* <p className="news-provider">{news.provider[0].name}</p> */}
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}

export default SearchPageNews;
