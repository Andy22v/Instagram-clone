import React from "react";
import "./Chat.css";

const Chat = ({ character, openChat, setOpenChat }) => {
  console.log(character);
  return (
    <div className={`${openChat ? "open" : ""} Chat`}>
      <button onClick={() => setOpenChat(false)}>🔙</button>
      {character && (
        <div key={character.id} className="chat-contain">
          <div className="top-chat">
            <p>Sender: {character.messages.sender}</p>
            <p>Timestamp: {character.messages.timestamp}</p>
          </div>
          <div className="msg-contain">
            <p>Content: {character.messages.content}</p>
          </div>
        </div>
      )}
      <div>
        <input type="text" placeholder="Scrivi un messaggio" />
      </div>
    </div>
  );
};

export default Chat;
