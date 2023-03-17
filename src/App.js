import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Home from "./pages/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import CreatePost from "./pages/CreatePost/CreatePost";

//stylesheet
import "./styles/partials/_global.scss";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:userId/post" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
