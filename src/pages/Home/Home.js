import axios from "axios";
import { useEffect, useState } from "react";

//components
import Post from "../../component/Post/Post";
import Sidebar from "../../component/Sidebar/Sidebar";

// {
//     "username": "Armance",
//     "avatar": "",
//     "id": "11",
//     "userId": "1",
//     "timestamp": "1678994591493",
//     "image": "",
//     "location": "New York",
//     "description": "Having the best time in NYC!",
//     "likes": 1013,
//     "comments": 110
// }

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

function Home() {
  // useState post

  const [posts, setPosts] = useState([]);

  //useEffect
  useEffect(() => {
    axios
      .get("http://localhost:8000/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(posts);

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
