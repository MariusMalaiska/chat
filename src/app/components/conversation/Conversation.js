import "./conversation.scss";

import { useContext } from "react";

import { GlobalContext } from "../../../providers/global.provider";

function Conversation(props) {
  const { open } = useContext(GlobalContext);
  const { openroom } = props;

  const getTime = (time) => {
    const dt = new Date(time);
    let timestamp = dt.toLocaleTimeString();
    return timestamp;
  };

  return (
    <div className={`chatMessage ${openroom.usermessage ? "userMessage" : ""}`}>
      <div className="time">{getTime(openroom.time)}</div>
      <div className="chatHead">
        <div className="image" />
        <div className="name"> {open.name} </div>
      </div>
      <div className="text">{openroom.text}</div>
    </div>
  );
}

export default Conversation;
