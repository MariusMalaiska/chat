import "./chatroom.scss";
import { useState, useContext } from "react";
import { GlobalContext } from "../../../providers/global.provider";
import IconSend from "@material-ui/icons/Send";
import ChatLog from "../../components/chatLog/ChatLog";

function ChatRoom() {
  const { sendMessage } = useContext(GlobalContext);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message !== "") {
      sendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="chatRoom">
      <ChatLog />
      <div className="sendMessage">
        <div className="inputRow">
          <input
            onChange={(e) => setMessage(e.target.value)}
            className="input"
            type="text"
            placeholder="Message"
            value={message}
          />
          <div className="iconButton" onClick={() => handleSend()}>
            <IconSend />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatRoom;
