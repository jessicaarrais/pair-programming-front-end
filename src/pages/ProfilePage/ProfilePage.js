// stylesheet
import "./ProfilePage.scss";

import patrick from "../../assets/images/patrick.png";

function ProfilePage() {
  return (
    <div className="profile">
      <div className="profile__info">
        <img className="profile__avatar" src={patrick} />
        <div classname="profile__info-container">
          <h2 className="profile__username">Patrick</h2>
          <div className="profile__follow">
            <h3 className="profile__following">
              {" "}
              <strong className="profile__folowing-bold">508</strong> posts
            </h3>
            <h3 className="profile__following">
              {" "}
              <strong className="profile__folowing-bold">1200 </strong>followers
            </h3>
            <h3 className="profile__following">
              {" "}
              <strong className="profile__folowing-bold">2819 </strong>
              following
            </h3>
          </div>
          <div className="profile__bio">
            <h3>TINY HOMES NEW 💯</h3>
            <p>
              * Tiny home inspiration & adventure . <br />* Share your story
              @tinyhomesnew 🌲🏠 <br />* Tiny Home Plans now available!
            </p>
          </div>
        </div>
      </div>

      <div className="profile__posts">
        <div className="profile__posts-container">
          <div className="profile__posts-section">
            <img className="profile__posts-icon" />
            <h3 className="profile__posts-active">POSTS</h3>
          </div>
          <div className="profile__posts-section">
            <img className="profile__posts-icon" />
            <h3 className="profile__posts-name">REELS</h3>
          </div>
          <div className="profile__posts-section">
            <img className="profile__posts-icon" />
            <h3 className="profile__posts-name">TAGGED</h3>
          </div>

          <div className="profile__images-container">
            <img className="profile__post-image" src={patrick} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
