import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// stylesheet
import "./ProfilePage.scss";

import patrick from "../../assets/images/patrick.png";

function ProfilePage() {
  const [user, setUser] = useState();
  const { userId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/user/${userId}/profile`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => console.error(err));
  }, [userId]);

  return (
    <>
      {user && (
        <>
          <div className="profile">
            <div className="profile__info">
              <img className="profile__avatar" src={user.avatar} />
              <h2 className="profile__username">{user.username}</h2>
              <div className="profile__follow">
                <h3 className="profile__following">{`${user.posts.length} posts`}</h3>
                <h3 className="profile__following">{`${user.followers} followers`}</h3>
                <h3 className="profile__following">{`${user.following} following`}</h3>
              </div>
              <div className="profile__bio">
                <h3>{user.bio}</h3>
                <p>
                  * Tiny home inspiration & adventure . * Share your story
                  @tinyhomesnew 🌲🏠 * Tiny Home Plans now available!
                </p>
              </div>
            </div>
          </div>
          <div>
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
              {user.posts.map((post) => (
                <div key={post.id} className="profile__images-container">
                  <img className="profile__image" src={post.image} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ProfilePage;
