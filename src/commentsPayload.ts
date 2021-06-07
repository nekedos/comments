import { IComment } from "components/comment";

const commentsPayload: IComment[] = [
  {
    author: "Nikolay",
    message: "Hi",
    comments: [
      {
        author: "Olga",
        message: "Hi there",
        comments: [],
      },
      {
        author: "Nikolay",
        message: "What's up?!",
        comments: [
          {
            author: "Olga",
            message: "How are u?",
            comments: [],
          },
        ],
      },
    ],
  },
  {
    author: "Alex",
    message: "Hey folks!",
    comments: [],
  },
];

export default commentsPayload;
