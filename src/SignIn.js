import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "./pictures/Logo.png";

const SignIn = () => {
  return (
    <div className="sign-in__body">
      <img className="sign-up__logo" src={Logo} alt="logo" />
      <div className="sign-up__container">
        <form className="sign-up__form">
          <label>Username or email</label>
          <br />
          <input placeholder="username" />
          <label>Password</label>
          <br />
          <input placeholder="*****" />
        </form>
        <button>Sign Up</button>
        <button className="landing-page__sign-in-button">Sign In</button>
        <Link to="/tutorial">
          <button>Tutorial</button>
        </Link>
      </div>
    </div>
  );
};
export default SignIn;
