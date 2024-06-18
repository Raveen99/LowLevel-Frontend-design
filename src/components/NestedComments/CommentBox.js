import React from "react";

const CommentBox = ({ data }) => {
  return (
    <div>
      {data.map((comment, index) => (
        <div className="p-4 m-4 border-l-2">
          <div className="flex">
            <img
              className="w-10 rounded-full"
              alt="redit"
              src="https://play-lh.googleusercontent.com/FpCCoNLOt6LRIY_3NM5Rk_LDN-kFNz0yxdFjm-CYM4XavRQfoQlXxOtgC7abfexIDOE"
            ></img>

            <div className="text-xl font-semibold ml-2 mt-2">
              {comment.username}
            </div>
          </div>

          <div className="ml-12">
            <div>{comment.comment}</div>
            {comment.replies && (
              <div className="">
                <CommentBox data={comment.replies} />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentBox;
