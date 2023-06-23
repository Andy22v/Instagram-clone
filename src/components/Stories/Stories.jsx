import ModalStories from "../modalStories";
import { useState, useEffect } from "react";

import "./Stories.css";
import Story from "../Story";

const Stories = ({ stories }) => {
  const [openStory, setOpenStory] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const modalOpen = (index) => {
    setOpenStory(index);
    setOpenModal(true);
  };

  useEffect(() => {
    setOpenStory(openStory !== false ? openStory : false);
  }, [openStory]);

  const closeModal = () => {
    setOpenModal(false);
    setOpenStory(false);
  };

  return (
    <div className="Stories">
      <ul className="stories-contain">
        {stories &&
          stories.map((story, index) => (
            <li key={story.id} onClick={() => modalOpen(index)}>
              <Story story={story} />
            </li>
          ))}
      </ul>
      <ModalStories
        stories={stories}
        isOpen={openModal}
        closeModal={closeModal}
        index={openStory}
      />
    </div>
  );
};

export default Stories;
