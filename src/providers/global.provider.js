import { useState, createContext } from "react";

const GlobalContext = createContext({});

function GlobalProvider({ children }) {
  const [name, setName] = useState("");

  return (
    <GlobalContext.Provider value={{ name, setName }}>
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalProvider, GlobalContext };
