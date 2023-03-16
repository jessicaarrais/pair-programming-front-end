//components
import Post from "../../component/Post/Post";
import Sidebar from "../../component/Sidebar/Sidebar";

// stylesheet
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <Post />
      <Sidebar />
    </div>
  );
}

export default Home;
