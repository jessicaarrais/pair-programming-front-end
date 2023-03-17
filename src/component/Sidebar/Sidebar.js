//image
import { Link } from "react-router-dom";
import profilePhoto from "../../assets/images/patrick.png";
import lemonde from "../../assets/images/lemonde.png";
import codeandcoffee from "../../assets/images/codeandcoffee.png";
import codingbeast from "../../assets/images/codingbeast.png";
import vivreparis from "../../assets/images/vivreparis.png";

// stylesheet
import "./Sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile-sidebar">
        <Link to={`/home/user/9/profile`}>
          <img className="profile__image" src={profilePhoto} />
        </Link>
        <div className="profile__content">
          <h3 className="profile__username">_patrick89</h3>
          <p className="profile__name">Patrick McCullough</p>
        </div>
        <div className="suggestions">
          <h3 className="suggestions__title">Suggestions for you</h3>
          <div className="suggestions__container">
            <div className="suggestions__channel">
              <img className="suggestions__image" src={lemonde} />
              <h3 className="suggestions__name">Lemondefr 🔵</h3>
            </div>
            <p className="suggestions__follow">follow</p>
          </div>
          <div className="suggestions__container">
            <div className="suggestions__channel">
              <img className="suggestions__image" src={codingbeast} />
              <h3 className="suggestions__name">coding.beast</h3>
            </div>
            <p className="suggestions__follow">follow</p>
          </div>
          <div className="suggestions__container">
            <div className="suggestions__channel">
              <img className="suggestions__image" src={vivreparis} />
              <h3 className="suggestions__name">vivreparis</h3>
            </div>
            <p className="suggestions__follow">follow</p>
          </div>
          <div className="suggestions__container">
            <div className="suggestions__channel">
              <img className="suggestions__image" src={codeandcoffee} />
              <h3 className="suggestions__name">nyccodecoffee</h3>
            </div>
            <p className="suggestions__follow">follow</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
