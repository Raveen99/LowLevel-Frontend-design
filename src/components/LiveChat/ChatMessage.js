import React from "react";

const ChatMessage = ({ name, imageUrl, comment }) => {
  return (
    <div className="flex p-2 w-full flex-row">
      <img
        className="w-10 h-10 rounded-full flex-shrink-0"
        src={imageUrl}
        alt={name}
      />

      <div className="p-2">
        <span className="font-semibold">
          {name} -{" "}
          <span className="font-normal break-words whitespace-normal">
            {comment}
          </span>
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;
