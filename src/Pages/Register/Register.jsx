import { useState } from "react";
import "./register.scss";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [, setEmailInput] = useState();
  const navigate = useNavigate();

  const getSartedHandler = () => {
    localStorage.setItem("isAuth", "yes");
    return navigate("/");
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158"
            alt=""
          />
          <button className="login-button">
            {" "}
            <Link to="/login">Sign In</Link>
          </button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more</h1>
        <h2>Plans now start at EGP70/month.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="inputs">
          <input
            type="email"
            name=""
            placeholder="Email Address"
            id=""
            onChange={(e) => setEmailInput(e.target.value)}
          />
          <button className="register-button" onClick={getSartedHandler}>
            Get Started{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
