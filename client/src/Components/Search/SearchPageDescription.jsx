import { useState } from "react";
function Description(props) {
  const [showResult, setShowResult] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const cryptoInfo = props.cryptoInfo;

  const handleClick = () => {
    setReadMore(!readMore);
  };
  return (
    <div>
      <div
        className="artboard phone-2"
        style={{
          backgroundColor: "aliceblue",
          height: readMore ? "100%" : 400,
          marginLeft: 50,
          marginTop: 450,
          borderRadius: 10,
        }}
      >
        
        <h2 className="Description-Header">
        {cryptoInfo.length === undefined ? cryptoInfo.description.en.length > 0 ? <><span>What is</span> <span>{cryptoInfo.name}</span>?</>: "" : ""}
        </h2>
        {cryptoInfo.length === undefined ?
        <div>
          {cryptoInfo.length === undefined ?
            cryptoInfo.description.en.slice(
              0,
              readMore ? cryptoInfo.description.en.length : 600
            ) : ""}
          <p onClick={handleClick}>{readMore ?  cryptoInfo.description.en.length > 600 ? "Read Less" : cryptoInfo.description.en.length > 600 ? "Read More" : '' : ""}</p>
        </div> : ""}
      </div>
    </div>
  );
}

export default Description;
