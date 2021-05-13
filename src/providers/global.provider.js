import { createContext, useState } from "react";

import { names } from "../mock/names";

const GlobalContext = createContext({});

function GlobalProvider({ children }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [conversations, setConversations] = useState([]);
  const [open, setOpen] = useState({});

  const getCurrentTime = () => {
    const time = Date.now();
    return time;
  };

  const getRandom = (int) => Math.floor(Math.random() * int);

  const addConversation = () => {
    const uId = getCurrentTime();
    const name = names[getRandom(20)];
    const newConversations = [
      ...conversations,
      { id: uId, name: name, messages: [] },
    ];
    setConversations(newConversations);
    const open = newConversations.find((obj) => obj.id === uId);
    setOpen(open || {});
  };

  const deleteConversation = (uId) => {
    const newConversations = conversations.filter((item) => item.id !== uId);
    const open = newConversations.find((obj) => obj.id !== uId);
    setConversations(newConversations);
    setOpen(open || {});
  };

  const openConversation = (uId) => {
    const open = conversations.find((obj) => obj.id === uId);
    setOpen(open);
  };

  const sendMessage = (message) => {
    let newOpen = { ...open };
    newOpen.messages.push({
      text: message,
      time: getCurrentTime(),
      usermessage: true,
      name: name,
    });
    setOpen(newOpen);
  };

  const addAdresateMessage = (message) => {
    let objCopy = { ...message };
    let newOpen = { ...open };
    newOpen.messages.push(
      Object.assign(objCopy, { name: newOpen.name, time: getCurrentTime() })
    );
    setOpen(newOpen);
  };

  return (
    <GlobalContext.Provider
      value={{
        name,
        setName,
        password,
        setPassword,
        addConversation,
        conversations,
        deleteConversation,
        openConversation,
        addAdresateMessage,
        sendMessage,
        open,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalProvider, GlobalContext };
