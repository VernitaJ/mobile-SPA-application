import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./pictures/Logo.png";
import facebook from "./pictures/facebook.png";
import google from "./pictures/googleplus.png";

const LandingPage = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="landing-page__container">
      <img className="sign-up__logo" src={Logo} alt="logo" />
      <Link to="/register">
        <button className="landing-page__sign-up-button">Sign Up</button>
      </Link>
      <Link to="/sign-in">
        <button className="landing-page__sign-in-button">Sign In</button>
      </Link>
      <br />
      <p className="landing-page__text">OR CONNECT WITH</p>
      <div className="landing-page__bottom-section">
        <a
          className="landing-page__facebook-container"
          href="www.facebook.com"
          target="_blank"
        >
          <img className="facebook-icon" src={facebook} alt="facebook" />
          <p>facebook</p>
        </a>
        <a
          className="landing-page__google-container"
          href="www.googleplus.com"
          target="_blank"
        >
          <img className="google-icon" src={google} alt="google" />
          <p>google+</p>
        </a>
      </div>
      <Link to="/tutorial">
        <button className="landing-page__tutorial-button">Tutorial</button>
      </Link>
    </div>
  );
};
export default LandingPage;
