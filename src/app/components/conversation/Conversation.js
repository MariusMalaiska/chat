import "./conversation.scss";

function Conversation(props) {
  const { openroom } = props;

  const getTime = (time) => {
    const dt = new Date(time);
    let timestamp = `${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`;

    return timestamp;
  };

  return (
    <div className={`chatMessage ${openroom.usermessage ? "userMessage" : ""}`}>
      <div className="time">{getTime(openroom.time)}</div>
      <div className="chatHead">
        <div className="image" />
        <div className="name"> {openroom.name} </div>
      </div>
      <div className="text">{openroom.text}</div>
    </div>
  );
}

export default Conversation;
