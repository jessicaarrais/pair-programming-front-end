function ProfilePage() {
  return (
    <>
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

        <div className="profile__bio"></div>
      </div>
    </>
  );
}

export default ProfilePage;
