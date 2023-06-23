import { Link, useNavigate } from "react-router-dom";
import "./login.scss";

const Login = () => {
  const navigate = useNavigate();
  const loginHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("isAuth", "yes");
    return navigate("/");
  };

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <div className="wrapper">
          <div className="form">
            <h1>Sign In</h1>
            <form onSubmit={loginHandler}>
              <input required type="text" placeholder="Email or phone number" />
              <input required type="password" placeholder="password" />
              <button>Sign in</button>
            </form>
            <div className="reg-span">
              New to Netflix? <Link to="/register">Sign up now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
