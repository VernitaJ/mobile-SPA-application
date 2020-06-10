import React from "react";
import { Link } from "react-router-dom";

const TutorialPage = () => {
  return (
    <div>
      <h1 className="quest-options__heading">This is how we do it</h1>
      <div className="tutorial-page__container">
        <p className="tutorial-page__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
          ultricies tortor. Aenean venenatis tellus magna, sed vestibulum urna
          sodales volutpat. Sed lacus orci, blandit sit amet felis sit amet,
          elementum varius risus. Nunc ac tellus gravida, fermentum ex vitae,
          viverra arcu. Aenean a ante ligula. <br /> <br />
          Nullam sollicitudin semper sapien, volutpat rhoncus velit. Nulla
          aliquet nisi elit, non molestie magna ullamcorper vitae. Nulla dapibus
          quis elit at consectetur. Suspendisse sed lacus eu ex porta imperdiet
          vel ut risus.
          <br /> <br />
          Praesent iaculis lacus nibh, vel dictum nisi sollicitudin eget. Etiam
          aliquet, lorem quis efficitur dapibus, diam augue sodales neque, vel
          fermentum metus elit et orci. Nullam lacinia commodo erat, at finibus
          enim pellentesque in.
          <br /> <br />
        </p>
        <div className="tutorial-page__links">
          <Link to="/map">
            <button className="tutorial-page__map-link">Map</button>
          </Link>
          <Link to="/quest">
            <button className="tutorial-page__quest-link">Quest</button>
          </Link>
          <Link to="/">
            <button className="tutorial-page__register-page">
              Back to register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default TutorialPage;
