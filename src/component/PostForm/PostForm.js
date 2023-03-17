import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./PostForm.scss";

function PostForm({ setPosts }) {
  const navigate = useNavigate();

  const onClickCancel = (_e) => {
    navigate("/home");
  };

  const onClickSave = (e) => {
    e.preventDefault();

    const description = e.target.description.value.trim();
    const location = e.target.location.value.trim();

    if (!description || !location) {
      alert("Invalid Input");
      return;
    }

    axios
      .post(`http://localhost:8000/user/9/post`, {
        description,
        location,
      })
      .then((res) => {
        axios
          .get("http://localhost:8000/posts")
          .then((res) => setPosts(res.data))
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });

    navigate("/home");
  };

  return (
    <form className="upload" onSubmit={onClickSave}>
      <div className="upload__image-box">
        <img
          className="upload__image"
          src="https://ca.slack-edge.com/T043CEKTYLB-U042Y8QDHTR-fe54155f302f-512"
        />
      </div>
      <h3 className="upload__subtitle">Post photos here</h3>
      <div className="upload__input-box">
        <label className="upload__input-label" for="location">
          Location:
        </label>
        <input className="upload__input" type="text" name="location" />
      </div>
      <div className="upload__input-box">
        <label className="upload__input-label" for="description">
          Description:
        </label>
        <input className="upload__input" type="text" name="description" />
      </div>
      <div className="upload__button-box">
        <button
          className="upload__button upload__button--cancel"
          type="button"
          onClick={onClickCancel}
        >
          CANCEL
        </button>
        <button className="upload__button upload__button--save" type="submit">
          CREATE
        </button>
      </div>
    </form>
  );
}

export default PostForm;
