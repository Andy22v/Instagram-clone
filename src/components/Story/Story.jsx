import "./Story.css";

import React from "react";

const Story = ({ story }) => {
  return (
    <div className="Story">
      {story?.isLive && <div className="story-live">{"LIVE"}</div>}
      <div className="story-img">
        <img src={story.userImage} alt={story.username} />
      </div>
      <p className="story-username">
        {story.isUser ? "Your Story" : story.username}
      </p>
    </div>
  );
};

export default Story;
