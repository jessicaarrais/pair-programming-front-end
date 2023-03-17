// stylesheet
import "./ProfilePage.scss";

function ProfilePage() {
  return (
    <div className="profile">
      <div className="profile__info">
        <img classname="profile__avatar" />
        <h2 className="profile__username">Patrick</h2>
        <div className="profile__follow">
          <h3 className="profile__following"> 508 posts</h3>
          <h3 className="profile__following"> 1200 followers</h3>
          <h3 className="profile__following"> 2819 following</h3>
        </div>
        <div className="profile__bio">
          <h3>TINY HOMES NEW 💯</h3>
          <p>
            * Tiny home inspiration & adventure . * Share your story
            @tinyhomesnew 🌲🏠 * Tiny Home Plans now available!
          </p>
        </div>
      </div>

      <div className="profile__posts">
        <div className="profile__posts-container">
          <div className="profile__posts-section">
            <img className="profile__posts-icon" />
            <h3 className="profile__posts-name">POSTS</h3>
          </div>
          <div className="profile__posts-section">
            <img className="profile__posts-icon" />
            <h3 className="profile__posts-name">REELS</h3>
          </div>
          <div className="profile__posts-section">
            <img className="profile__posts-icon" />
            <h3 className="profile__posts-name">TAGGED</h3>
          </div>
        </div>
        <div className="profile__images-container">
          <img className="profile__image" />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
