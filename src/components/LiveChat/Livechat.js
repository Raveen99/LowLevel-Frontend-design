import React from "react";
import Videostream from "./Videostream";
import ChatWindow from "./ChatWindow";

const Livechat = () => {
  return (
    <div className="border h-screen flex">
      <Videostream />
      <ChatWindow />
    </div>
  );
};

export default Livechat;
