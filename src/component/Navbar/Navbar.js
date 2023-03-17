import { NavLink } from "react-router-dom";

// icons
import logo from "../../assets/icons/instagram__logo.png";
import homeIcon from "../../assets/icons/home.png";
import searchIcon from "../../assets/icons/search.png";
import exploreIcon from "../../assets/icons/explore.png";
import messagesIcon from "../../assets/icons/message.png";
import notificationsIcon from "../../assets/icons/notifications.png";
import createIcon from "../../assets/icons/create.png";

//image
import patrick from "../../assets/images/patrick.png";

// stylesheet
import "./Navbar.scss";
import { useState } from "react";

function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <div className="navigation">
      <img className="navigation__logo" src={logo} />
      <div className="navigation__list">
        <NavLink to="/home" className="navigation__container">
          <img className="navigation__icon" src={homeIcon} />
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "navigation__item--active" : "navigation__item"
            }
          >
            Home
          </NavLink>
        </NavLink>
        <NavLink className="navigation__container">
          <img className="navigation__icon" src={searchIcon} />
          <h3 className="navigation__item">Search</h3>
        </NavLink>
        <NavLink className="navigation__container">
          <img className="navigation__icon" src={exploreIcon} />
          <h3 className="navigation__item">Explore</h3>
        </NavLink>
        <NavLink className="navigation__container">
          <img className="navigation__icon" src={messagesIcon} />
          <h3 className="navigation__item">Messages</h3>
        </NavLink>
        <NavLink className="navigation__container">
          <img className="navigation__icon" src={notificationsIcon} />
          <h3 className="navigation__item">Notifications</h3>
        </NavLink>
        <NavLink to="/user/3/post" className="navigation__container">
          <img className="navigation__icon" src={createIcon} />
          <h3 className="navigation__item">Create</h3>
        </NavLink>
        <NavLink to="/user/9/profile" className="navigation__container">
          <img
            className="navigation__icon navigation__icon-patrick"
            src={patrick}
          />
          <NavLink
            to="/user/9/profile"
            className={({ isActive }) =>
              isActive ? "navigation__item--active" : "navigation__item"
            }
          >
            Profile
          </NavLink>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
