import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import {ProviderContext} from "./globalState";
ReactDOM.render(
  <React.StrictMode>
    <ProviderContext>
      <App />
    </ProviderContext>
  </React.StrictMode>,
  document.getElementById("root")
);
