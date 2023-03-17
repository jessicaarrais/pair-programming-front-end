import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// components
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import CreatePost from "./pages/Post/CreatePost";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

//stylesheet
import "./styles/partials/_global.scss";

function App() {
  // useState post
  const [posts, setPosts] = useState([]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={<Home posts={posts} setPosts={setPosts} />}
        />
        <Route
          path="/user/:userId/post"
          element={<CreatePost setPosts={setPosts} />}
        />
        <Route path="/user/:userId/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
