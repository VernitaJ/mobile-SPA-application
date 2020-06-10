import React from "react";
import { Link } from "react-router-dom";

const QuestView = () => {
  return (
    <div>
      <h1 className="quest-options__heading">Your Quest</h1>
      <div className="tutorial-page__container">
        <img
          className="quest-view__image"
          src="http://media-cdn.list.ly/production/259826/2480511/2480511-map-creator-online-to-make-a-map-with-multiple-locations-and-regions-zeemaps_600px.png?ver=3970594221"
          alt="pin"
        />
        <p className="quest-view__text">
          Please make your way to a location on the map to unlock your first
          quest. <br /> <br />
        </p>
        <div className="quest-view__links">
          <Link to="/map">
            <button className="quest-view__map-link">Map</button>
          </Link>
          <Link to="/tutorial">
            <button className="quest-view__tutorial-link">Tutorial</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default QuestView;
