import { useState } from "react";
import { motivationQuotes } from "../constants";

const MotivationCard = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  function getRandomInt(min: number, max: number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }

  const { quote, author } = motivationQuotes[randomNumber];
  return (
    <div className="motivation-card">
      <div>Hey UserName !</div>
      <div className="quote">{quote}</div>
      <div className="author">- {author}</div>
      <button
        className="refresh-btn"
        onClick={() => {
          setRandomNumber(getRandomInt(0, motivationQuotes.length));
        }}
      >
        Refresh
      </button>
    </div>
  );
};

export default MotivationCard;
