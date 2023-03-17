import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./PostForm.scss";

function PostForm({ setPosts }) {
  // const modalRef = useRef();
  // const overlayRef = useRef();
  // const inputRef = useRef();
  const navigate = useNavigate();

  const onClickCancel = (_e) => {
    navigate("/");
  };

  const onClickSave = (e) => {
    e.preventDefault();
    // if (e.taget.image.value.trim()) {
    // }

    // const file = e.target.image.files[0];
    // const reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onloadend = function () {
    //   console.log(reader.result);

    axios
      .post(`http://localhost:8000/user/9/post`, {
        // image: reader,
        description: e.target.description.value,
        location: e.target.location.value,
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
    // };
    navigate("/");
  };

  return (
    <form className="upload" onSubmit={onClickSave}>
      <img />
      <h3 className="upload__subtitle">Post photos here</h3>
      <input
        className="upload__button--select"
        type="file"
        name="image"
        text="Select From Computer"
      />
      <input
        className="upload__input"
        type="text"
        name="location"
        placeholder="Location"
      />
      <input
        className="upload__input"
        type="text"
        name="description"
        placeholder="description"
      />
      <div className="upload__button-box">
        <button
          className="upload__button--cancel"
          type="button"
          onClick={onClickCancel}
        >
          CANCEL
        </button>
        <button className="upload__button--save" type="submit">
          CREATE
        </button>
      </div>
    </form>
  );
}

export default PostForm;
