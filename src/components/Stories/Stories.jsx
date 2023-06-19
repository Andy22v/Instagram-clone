import "./Stories.css";
import Story from "../Story";

const Stories = ({ stories }) => {
  return (
    <div className="Stories">
      <ul className="stories-contain">
        {stories &&
          stories.map((story) => (
            <li key={story.id}>
              <Story story={story} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Stories;
