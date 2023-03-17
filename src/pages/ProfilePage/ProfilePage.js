import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
  }, []);

  return (
    <>
      {user && (
        <div className="profile">
          <div className="profile__info">
            <img classname="profile__avatar" />
            <h2 className="profile__username">{user.username}</h2>
            <div className="profile__follow">
              <h3 className="profile__following">{`${user.posts.length} posts`}</h3>
              <h3 className="profile__following"> 1200 followers</h3>
              <h3 className="profile__following"> 2819 following</h3>
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
      )}
    </>
  );
}

export default ProfilePage;
