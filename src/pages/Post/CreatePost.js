import PostForm from "../../component/PostForm/PostForm";
import "./CreatePost.scss";

function CreatePost({ setPosts }) {
  return (
    <>
      <section className="modal">
        <h3 className="modal__title">Create new post</h3>
        <PostForm setPosts={setPosts} />
      </section>
      <div className="overlay"></div>
    </>
  );
}

export default CreatePost;
