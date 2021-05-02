import Navigation from "../components/navigation/Navigation";
import ChatRoom from "../components/chatRoom/ChatRoom";

function Chat() {
  return (
    <>
      <div className="chat">
        <Navigation />
        <ChatRoom />
      </div>
    </>
  );
}

export default Chat;
