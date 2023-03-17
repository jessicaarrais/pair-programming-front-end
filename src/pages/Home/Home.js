import axios from "axios";
import { useEffect } from "react";

//components
import Post from "../../component/Post/Post";
import Sidebar from "../../component/Sidebar/Sidebar";

// stylesheet
import "./Home.scss";

// format date

const formatDate = (timeStamp) => {
  const date = new Date(timeStamp);
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  if (month < 9) month = "0" + month;
  if (day < 9) day = "0" + day;

  let todayDate = `${month}-${day}-${year}`;
  return todayDate;
};

function Home({ posts, setPosts }) {
  //useEffect
  useEffect(() => {
    axios
      .get("http://localhost:8000/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home">
      {posts &&
        posts.map((post) => {
          return (
            <Post
              post={post}
              username={post.username}
              avatar={post.avatar}
              location={post.location}
              image={post.image}
              likes={post.likes}
              description={post.description}
              comments={post.comments}
              key={post.id}
              userId={post.userId}
              date={formatDate(post.timestamp)}
            />
          );
        })}
      <Sidebar key={posts.id} userId={posts.userId} username={posts.username} />
    </div>
  );
}

export default Home;
