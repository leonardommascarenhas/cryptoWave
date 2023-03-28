import React from "react";
import Header from "./components/layout/Header/header";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="bg-gray-200 flex-1"></div>
    </div>
  );
}

export default App;
