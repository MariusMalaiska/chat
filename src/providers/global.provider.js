import { useState, createContext } from "react";

const GlobalContext = createContext({});

function GlobalProvider({ children }) {
  const [name, setName] = useState("");
  const [conversations, setConversations] = useState([]);
  const [open, setOpen] = useState([]);

  const time = Date.now();

  const addConversation = () => {
    setConversations([...conversations, { id: time, messages: [] }]);
  };

  const deleteConversation = (uId) => {
    console.log("click");
    const newconversations = conversations.filter((item) => item.id !== uId);
    setConversations(newconversations);
  };

  const openConversation = (uId) => {
    const open = conversations.find((obj) => obj.id === uId);
    setOpen(open);
  };

  const sendMessage = (message) => {
    let newOpen = { ...open };
    newOpen.messages.push({ text: message, time: time, usermessage: true });
    setOpen(newOpen);
  };

  return (
    <GlobalContext.Provider
      value={{
        name,
        setName,
        addConversation,
        conversations,
        deleteConversation,
        openConversation,
        sendMessage,
        open,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalProvider, GlobalContext };
