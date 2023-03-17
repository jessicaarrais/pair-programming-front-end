import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// icons

import posts from "../../assets/icons/posts.png";
import reels from "../../assets/icons/reels.png";
import tagged from "../../assets/icons/tagged.png";

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
              <div className="profile__info-bio">
                <h2 className="profile__username">{user.username}</h2>
                <div className="profile__follow">
                  <h3 className="profile__following">
                    <strong>{user.posts.length}</strong> posts
                  </h3>
                  <h3 className="profile__following">
                    <strong>{user.followers} </strong>followers
                  </h3>
                  <h3 className="profile__following">
                    <strong>{user.following} </strong>following
                  </h3>
                </div>
                <div className="profile__bio">
                  <h3 className="profile__location">📍{user.location}</h3>
                  <p>{user.bio}</p>
                </div>
              </div>
            </div>
            <div className="profile__posts">
              <div className="profile__posts-container">
                <div className="profile__posts-section">
                  <img className="profile__posts-icon" src={posts} />
                  <h3 className="profile__posts-name profile__posts-name--active">
                    POSTS
                  </h3>
                </div>
                <div className="profile__posts-section">
                  <img className="profile__posts-icon" src={reels} />
                  <h3 className="profile__posts-name">REELS</h3>
                </div>
                <div className="profile__posts-section">
                  <img className="profile__posts-icon" src={tagged} />
                  <h3 className="profile__posts-name">TAGGED</h3>
                </div>
              </div>
              <div className="profile__images-container">
                {user.posts.map((post) => (
                  <img
                    key={post.id}
                    className="profile__post-image"
                    src={post.image}
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ProfilePage;
