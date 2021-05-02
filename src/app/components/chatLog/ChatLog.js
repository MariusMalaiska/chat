import "./chatLog.scss";
import { useContext, useState, useEffect, useCallback, useRef } from "react";
import { GlobalContext } from "../../../providers/global.provider";
import { FetchContext } from "../../../providers/fech.provider";
import Conversation from "../conversation/Conversation";

function ChatRoom() {
  const { name, open, addAdresateMessage } = useContext(GlobalContext);
  const { getMessages, adresateMessages, error } = useContext(FetchContext);
  const [messages, setMessages] = useState([]);
  const inputEl = useRef(null);

  const random = Math.floor(Math.random() * 7);

  const renderMessages = useCallback(() => {
    if (open && open.messages) {
      setMessages([...open.messages]);
    } else {
      setMessages([]);
    }
  }, [open]);

  useEffect(() => {
    if (
      adresateMessages &&
      messages[messages.length - 1] &&
      messages[messages.length - 1].usermessage === true
    ) {
      setTimeout(() => {
        addAdresateMessage(adresateMessages[random]);
      }, 1000);
    } else if (
      messages.length === 0 &&
      adresateMessages.length > 0 &&
      open.messages
    ) {
      addAdresateMessage(adresateMessages[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages, adresateMessages]);

  useEffect(() => {
    renderMessages();
    scrollToBottom();
  }, [renderMessages, open]);

  useEffect(() => {
    getMessages();
  }, [getMessages]);

  const scrollToBottom = () => {
    inputEl.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="chatlog">
      <div className="chatContainer">
        {open && !open.messages ? (
          <div>
            <h2>
              Hello, <span className="name">{name}</span> You have no open
              Conversations.
            </h2>
            <h3> add one ;D</h3>
          </div>
        ) : (
          messages.map((item) => (
            <Conversation key={item.time} openroom={item} messages={messages} />
          ))
        )}
        {!!error && <div className="inputError">{error}</div>}
        <div ref={inputEl} />
      </div>
    </div>
  );
}

export default ChatRoom;
