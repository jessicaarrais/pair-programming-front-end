import { useEffect, useRef } from "react";
import PostForm from "../../component/PostForm/PostForm";
import "./CreatePost.scss";

function CreatePost() {
  const modalRef = useRef();
  const overlayRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    if (!localStorage.getItem("username")) {
      modalRef.current.classList.remove("modal--hidden");
      overlayRef.current.classList.remove("overlay--hidden");
    } else {
      // setUsername(localStorage.getItem("username"));
    }
  }, []);

  const onClickCancel = (e) => {
    e.preventDefault();
    // setUsername("J Doe");
    localStorage.setItem("username", "J Doe");
    modalRef.current.classList.add("modal--hidden");
    overlayRef.current.classList.add("overlay--hidden");
  };

  const onClickSave = (e) => {
    e.preventDefault();
    if (inputRef.current.value.trim()) {
      // setUsername(inputRef.current.value.trim());
      localStorage.setItem("username", inputRef.current.value.trim());
      modalRef.current.classList.add("modal--hidden");
      overlayRef.current.classList.add("overlay--hidden");
    }
  };

  return (
    <>
      <section ref={modalRef} className="modal modal--hidden">
        <h3 className="modal__title">Tell me your name</h3>
        <PostForm />
        <div className="modal__button-box">
          {/* <Button
            text="CANCEL"
            emphasis="low-emphasis"
            type="button"
            handleOnClick={onClickCancel}
          />
          <Button
            text="SAVE"
            emphasis="high-emphasis"
            type="button"
            handleOnClick={onClickSave}
          /> */}
        </div>
      </section>
      <div ref={overlayRef} className="overlay overlay--hidden"></div>
    </>
  );
}

export default CreatePost;
