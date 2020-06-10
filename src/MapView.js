import React from "react";
import { Link } from "react-router-dom";
import Map from "./pictures/malmo.png";

const MapView = () => {
  return (
    <div>
      <div className="map-view__container">
        <h1 className="map-view__heading">Let the hunt begin!</h1>
        <img className="map-view__map" src={Map} alt="Malmo" />
        <h4 className="map-view__text">
          Walk, cycle, bus, or run to any of your pin locations to uncover your
          next quest!
        </h4>
        <Link to="/tutorial">
          <button className="map-view__tutorial-button ">Tutorial</button>
        </Link>
      </div>
    </div>
  );
};
export default MapView;
