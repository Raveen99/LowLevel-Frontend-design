import React from "react";
import CommentBox from "./CommentBox";

const data = [
  {
    id: "comment-1",
    username: "user123",
    comment: "This is an interesting topic!",
    replies: [
      {
        id: "reply-1a",
        username: "johnDoe",
        comment: "I totally agree with you.",
        replies: [
          {
            id: "reply-1b",
            username: "happyCamper",
            comment: "Could you provide some sources?",
            replies: [
              {
                id: "reply-1c",
                username: "randomUser",
                comment: "Great insights, thanks for sharing.",
                replies: [
                  {
                    id: "reply-1d",
                    username: "avidReader",
                    comment: "Very informative post.",
                    replies: [
                      {
                        id: "reply-1e",
                        username: "natureLover",
                        comment: "I think we need more data on this.",
                        replies: [
                          {
                            id: "reply-1f",
                            username: "historyBuff",
                            comment: "Interesting perspective.",
                            replies: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        id: "reply-1g",
        username: "movieBuff",
        comment: "This is spot on!",
        replies: [],
      },
    ],
  },
  {
    id: "comment-2",
    username: "janeSmith",
    comment: "I totally agree with you.",
    replies: [
      {
        id: "reply-2a",
        username: "techGuru",
        comment: "I have a different perspective on this.",
        replies: [],
      },
    ],
  },
  {
    id: "comment-3",
    username: "techGuru",
    comment: "Can you explain more about this?",
    replies: [],
  },
  {
    id: "comment-4",
    username: "randomUser",
    comment: "Great insights, thanks for sharing.",
    replies: [],
  },
  {
    id: "comment-5",
    username: "happyCamper",
    comment: "I have a different perspective on this.",
    replies: [
      {
        id: "reply-5a",
        username: "avidReader",
        comment: "This is a hotly debated issue.",
        replies: [],
      },
      {
        id: "reply-5b",
        username: "coderLife",
        comment: "I don't quite agree with this.",
        replies: [],
      },
    ],
  },
  {
    id: "comment-6",
    username: "avidReader",
    comment: "Very informative post.",
    replies: [],
  },
  {
    id: "comment-7",
    username: "coderLife",
    comment: "I learned something new today.",
    replies: [],
  },
];
const Comments = () => {
  return (
    <div>
      <CommentBox data={data} />
    </div>
  );
};

export default Comments;
