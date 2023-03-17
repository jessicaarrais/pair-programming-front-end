//components
import Sidebar from "../../component/Sidebar/Sidebar";
import CreatePost from "../CreatePost/CreatePost";

// stylesheet
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <CreatePost />
    </div>
  );
}

export default Home;
