import axios from "axios";

function PostForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const file = e.target.image.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      console.log(reader.result);

      const data = reader.result.replace(/^data:image\/\w+;base64,/, "");

      axios
        .post(`http://localhost:8000/user/2/post`, {
          description: "Me having fun",
          image: data,
          location: "New York",
        })
        .then((res) => {
          console.log(res.data);
        });
    };
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="image" />

      <img src="" height="200" alt="Image preview..." />

      <button>CREATE</button>
    </form>
  );
}

export default PostForm;
