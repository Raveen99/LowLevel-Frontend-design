import React from "react";

const Videostream = () => {
  return (
    <div className="h-3/4 w-3/4">
      <iframe
        className="h-full w-full"
        src="https://www.youtube.com/embed/4xDzrJKXOOY?si=GC4yRwBjKDaji8Jm"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Videostream;
