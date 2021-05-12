import React, { useCallback, useState } from "react";

const FetchContext = React.createContext({});

function FetchProvider({ children }) {
  const [adresateMessages, setAdresateMessages] = useState([]);
  const [error, setErroor] = useState(null);
  const [loading, setLoading] = useState(false);

  const getMessages = useCallback(async () => {
    setLoading(true);
    try {
      let results = await fetch(
        "https://api.jsonbin.io/b/608edf2a92cb9267d0c9e4f7",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "secret-key":
              "$2b$10$H2D6FyCIAViYFrEQkoFgLujflsQt7t4oefm8RTjB5IxegjaCYVvUK",
          },
        }
      );
      const data = await results.json();
      setAdresateMessages(data.messages);
    } catch (e) {
      setErroor("Something went wrong unable to contact server");
      console.log(await e);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <FetchContext.Provider
      value={{ getMessages, adresateMessages, error, loading }}
    >
      {children}
    </FetchContext.Provider>
  );
}

export { FetchProvider, FetchContext };
