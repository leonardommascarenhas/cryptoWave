import React from "react";
import Header from "./components/layout/Header/header";

function App() {
  return (
    <div className="flex flex-col h-screen font-roboto dark:text-white">
      <Header />
      <div className="dark:bg-gradient-to-b from-dark-600 to-dark-800 flex-1"></div>
    </div>
  );
}

export default App;
