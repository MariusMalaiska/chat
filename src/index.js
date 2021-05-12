import "./app/styles/styles.scss";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./app/App";
import { FetchProvider } from "./providers/fech.provider";
import { GlobalProvider } from "./providers/global.provider";

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
