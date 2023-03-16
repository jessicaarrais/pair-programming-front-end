//image
import profilePhoto from "../../assets/images/patrick.png";

// stylesheet
import "./Sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile">
        <img className="profile__image" src={profilePhoto} />
        <div className="profile__content">
          <h3 className="profile__username">_patrick89</h3>
          <p className="profile__name">Patrick McCullough</p>
        </div>
        <div className="suggestions">
          <h3 className="suggestions__title">Suggestions for you</h3>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;