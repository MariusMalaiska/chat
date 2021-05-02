import "./chatLog.scss";
import { useContext } from "react";
import { GlobalContext } from "../../../providers/global.provider";

function ChatRoom() {
  const { name, open } = useContext(GlobalContext);

  let messages = [];
  if (open.messages) {
    messages = open.messages.sort((a, b) => a.time - b.time);
  }

  const getTime = (time) => {
    const dt = new Date(time);
    let timestamp = `${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`;
    return timestamp;
  };

  return (
    <div className="chatlog">
      <div className="chatContainer">
        {messages.map((item) => (
          <div
            key={item.time}
            className={`chatMessage ${item.user && "userMessage"}`}
          >
            <div className="time">{getTime(item.time)}</div>
            <div className="chatHead">
              <div className="image" />
              <div className="name"> {name} </div>
            </div>
            <div className="text">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatRoom;
