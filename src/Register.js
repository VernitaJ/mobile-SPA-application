import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./pictures/Logo.png";

const Register = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="sign-up__body">
      <img className="sign-up__logo" src={Logo} alt="logo" />
      <div className="sign-up__container">
        <form className="sign-up__form">
          <label>Name</label>
          <br />
          <input placeholder="Jane" />
          <br />
          <label>Surname</label>
          <br />
          <input placeholder="Doe" />
          <br />
          <label>Email</label>
          <br />
          <input placeholder="123@example.com" />
          <br />
          <label>Username</label>
          <br />
          <input placeholder="questmaster" />
          <br />
          <label>Password</label>
          <br />
          <input placeholder="*******" />
          <br />
          <Link to="/quest-options">
            <button className="sign-up__button">Sign Up</button>
          </Link>
        </form>
      </div>
    </div>
  );
};
export default Register;
