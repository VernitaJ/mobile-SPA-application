import React from "react";
import { Link } from "react-router-dom";
import Art from "./pictures/Art.png";
import Logo from "./pictures/Logo.png";
import Sport from "./pictures/Sport.png";
import History from "./pictures/History.png";
import Nature from "./pictures/Nature.png";
import Architecture from "./pictures/architecture.png";

const QuestOptions = () => {
  return (
    <div>
      <div className="quest-options__container">
        <h1 className="quest-options__heading">Select Your Quest, master</h1>
        <Link to="/map">
          <div className="quest-options__icon-container">
            <img className="quest-options__icon" src={Art} alt="art" />
            <h2 className="quest-options__art-icon-text">Art</h2>
          </div>
        </Link>
        <Link to="/map">
          <div className="quest-options__icon-container">
            <img className="quest-options__icon" src={Nature} alt="art" />
            <h2 className="quest-options__nature-icon-text">Nature</h2>
          </div>
        </Link>
        <Link to="/map">
          <div className="quest-options__icon-container">
            <img className="quest-options__icon" src={History} alt="art" />
            <h2 className="quest-options__history-icon-text">History</h2>
          </div>
        </Link>
        <Link to="/map">
          <div className="quest-options__icon-container">
            <img className="quest-options__icon" src={Sport} alt="art" />
            <h2 className="quest-options__sport-icon-text">Sport</h2>
          </div>
        </Link>
        <Link to="/map">
          <div className="quest-options__icon-container">
            <img className="quest-options__icon" src={Architecture} alt="art" />
            <h2 className="quest-options__architecture-icon-text">Adventure</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default QuestOptions;
