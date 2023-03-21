import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import QueryClientProviderWrapper from "./Provider/queryClientProvider";

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProviderWrapper>
      <App />
    </QueryClientProviderWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);
