import "./chatroom.scss";

import { useContext, useState } from "react";

import IconSend from "@material-ui/icons/Send";

import ChatLog from "../../components/chatLog/ChatLog";
import { GlobalContext } from "../../../providers/global.provider";

function ChatRoom() {
  const { sendMessage, open } = useContext(GlobalContext);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message !== "") {
      sendMessage(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="chatRoom">
      <ChatLog />
      <div className="sendMessage">
        {open?.messages && (
          <div className="inputRow">
            <input
              onChange={(e) => setMessage(e.target.value)}
              className="input"
              type="text"
              placeholder="Message"
              value={message}
              onKeyUp={(e) => handleKeyDown(e)}
            />
            <div className="iconButton" onClick={() => handleSend()}>
              <IconSend />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatRoom;
