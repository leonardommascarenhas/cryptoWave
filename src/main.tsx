import React from "react";
import App from "./App";
import "./index.css";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./services/AppContextProvider";

const queryClient = new QueryClient();

const rootElement = document.getElementById("root") as Element;

createRoot(rootElement).render(
  <QueryClientProvider client={queryClient}>
    <AppContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContextProvider>
  </QueryClientProvider>
);
