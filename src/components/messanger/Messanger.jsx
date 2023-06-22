import "./Messanger.css";
import CameraIcon from "../icons/CameraIcon";

const Messanger = ({ messages }) => {
  return (
    <div className="Messanger">
      <div className="top-bar"></div>
      <div className="input-contain">
        <input className="input" type="text" placeholder="Search" />
      </div>
      <div className="messages-contain">
        <ul className="messages-list">
          {messages.map((chat) => (
            <li className="cart-message " key={chat.id}>
              <div className="img-contain">
                <img
                  src={chat.participants[1].avatar_url}
                  alt={chat.participants[1].username}
                />
              </div>

              <div className="message">
                <p className="name">{chat.participants[1].username}</p>
                <p className="msg">
                  {chat.messages[chat.messages.length - 1].content}
                </p>
              </div>
              <div className="time-msg">
                <p>{chat.messages[1].timestamp}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Messanger;
