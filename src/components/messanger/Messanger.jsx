import "./Messanger.css";
import CameraIcon from "../icons/CameraIcon";

const Messanger = ({ stories }) => {
  console.log(stories);
  return (
    <div className="Messanger">
      <div className="top-bar">
        <h3>{stories[0].username}</h3>
      </div>
      <div className="input-contain">
        <input className="input" type="text" placeholder="Search" />
      </div>
      <div className="messages-contain">
        <ul className="messages-list">
          {stories.map(
            (story) =>
              !story.isUser && (
                <li key={story.id}>
                  <div className="cart-message">
                    <div className="img-contain">
                      <img src={story.userImage} alt={story.username} />
                    </div>
                    <div className="message">
                      <p>{story.username}</p>
                      <p>{story.comments}</p>
                      <div className="info">
                        <p>.{Math.floor(Math.random() * 10)} m</p>
                      </div>
                    </div>
                    <div className="camera-icon">
                      <CameraIcon />
                    </div>
                  </div>
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Messanger;
