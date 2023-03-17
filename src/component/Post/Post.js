import patrick from "../../assets/images/patrick.png";
import dots from "../../assets/icons/dots.png";
import lin from "../../assets/images/lin-lin.png";
import house from "../../assets/images/house.png";
import heart from "../../assets/icons/notifications.png";
import comment from "../../assets/icons/comment.png";
import send from "../../assets/icons/message.png";
import save from "../../assets/icons/save.png";

// stylesheet
import "./Post.scss";
import { Link } from "react-router-dom";

function Post({
  username,
  avatar,
  location,
  image,
  likes,
  description,
  comments,
  userId,
  date,
}) {
  return (
    <>
      <div className="post">
        <div className="post__info">
          <div className="post__info-container">
            <Link to={`user/${userId}/profile`}>
              <img className="post__avatar" src={avatar} />
            </Link>
            <div>
              <h3 className="post__username">
                {username} <strong className="post__date">.{date}</strong>
              </h3>
              <div className="post__location">{location}</div>
            </div>
          </div>
          <img className="post__dots" src={dots} />
        </div>
        <img className="post__image" src={image} />
        <div className="post__icons">
          <div className="post__icons-left">
            <img className="post__icon" src={heart} />
            <img className="post__icon" src={comment} />
            <img className="post__icon" src={send} />
          </div>
          <img className="post__icon" src={save} />
        </div>
        <h3 className="post__likes">{likes} likes</h3>
        <div className="post__comments">
          <h3 className="post__username">{username}</h3>
          <p className="post__description">{description}</p>
        </div>
        <div className="post__more">
          <img className="post__more-icon" src={dots} />
          <p className="post__more-text">more</p>
        </div>
        <p className="post__comment-number">View all {comments} comments</p>
        <p className="post__comment-add">Add a comment...</p>
      </div>
    </>
  );
}

export default Post;
