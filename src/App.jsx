import { useState, useEffect } from "react";

import TopBar from "./components/TopBar";
import Camera from "./components/camera";
import Messanger from "./components/messanger";
import Stories from "./components/Stories";
import Posts from "./components/Posts";
import Footer from "./components/Footer/Footer";

import { storiesData } from "./mocks/stories";
import { postsData } from "./mocks/posts";
import { userData } from "./mocks/user";

import "./App.css";

function App() {
  const [section, setSection] = useState("home");
  const [stories, setStories] = useState(storiesData);
  const [posts, setPosts] = useState(postsData);
  const [messages, setMessages] = useState([]);
  const [camera, setCamera] = useState(false);

  useEffect(() => {
    fetch("https://api.npoint.io/8be99baa9f2796022b55")
      .then((res) => res.json())
      .then((data) => setPosts(data));

    fetch(" https://api.npoint.io/8687527c32d100d37843")
      .then((res) => res.json())
      .then((data) => setStories(data));

    fetch("https://api.npoint.io/45615d0ddef177eef95b")
      .then((res) => res.json())
      .then((data) => setMessages(data.messageList));
  }, []);

  const onRender = () => {
    switch (section) {
      case "home":
        return (
          <>
            <Stories stories={stories} />
            <Posts posts={posts} />
          </>
        );
      case "camera":
        return <Camera camera={camera} setCamera={setCamera} />;
      case "tv":
        return <h1>TV</h1>;
      case "message":
        return <Messanger messages={messages} />;
    }
  };

  return (
    <>
      <TopBar setSection={setSection} setCamera={setCamera} />
      {onRender()}
      <Footer userData={userData} setSection={setSection} />
    </>
  );
}

export default App;
