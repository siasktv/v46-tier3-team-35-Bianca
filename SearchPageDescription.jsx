import "../Search/SearchPage.css";
function Description(props) {
  const cryptoInfo = props.cryptoInfo;

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
         {cryptoInfo.length === undefined ? (
           <div>
           <h2 className="Description-Header">What is {cryptoInfo.name}?</h2>
           <p className="description"> {cryptoInfo.description.en}</p>
         </div>
          ) : (
            ""
          )}
      </div>
    </div>
  );
}

export default Description;
