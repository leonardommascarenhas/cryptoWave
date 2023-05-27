import React from "react";

const NotificationBall = () => {
  return (
    <div className="group-hover:hidden absolute top-1 -right-1 w-4 h-4 rounded-full cursor-pointer">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full  bg-red-500 dark:bg-cyan-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600 dark:bg-cyan-400"></span>
      </span>
    </div>
  );
};

export default NotificationBall;
