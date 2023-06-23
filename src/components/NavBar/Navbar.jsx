import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import "./navbar.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  window.onscroll = () => {
    setIsScrolled(window.scrollY !== 0);
  };

  const logoutHandler = () => {
    localStorage.setItem("isAuth", "no");
    navigate(0);
  };

  return (
    <div className={`navbar ${isScrolled ? "top-nav" : ""} `}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158"
            alt="logo"
          />
          <span>Home</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>Kid</span>
          <Notifications className="icon" />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Johnson_WM16_%284%29_%2827801967274%29.jpg/640px-Johnson_WM16_%284%29_%2827801967274%29.jpg"
            alt="profile"
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span onClick={logoutHandler}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
