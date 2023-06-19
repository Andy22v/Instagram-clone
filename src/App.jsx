import { useState } from "react";
import "./App.css";
import TopBar from "./components/TopBar";
import Stories from "./components/Stories";
import { storiesData } from "./mocks/stories";

function App() {
  const [stories, setStories] = useState(storiesData);

  return (
    <>
      <TopBar />
      <Stories stories={stories} />
    </>
  );
}

export default App;
