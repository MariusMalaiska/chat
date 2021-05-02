import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./app/styles/styles.scss";
import App from "./app/App";
import { GlobalProvider } from "./providers/global.provider";
import { FetchProvider } from "./providers/fech.provider";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <FetchProvider>
        <GlobalProvider>
          <App />
        </GlobalProvider>
      </FetchProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
