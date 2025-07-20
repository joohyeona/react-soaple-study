import React from "react";
import Comment from "./Comment";

// function CommentList(props) {
//   return (
//     <div>
//       <Comment name={"이주현"} comment={"ㅠ듀아아"}/>
//       <Comment name={"이주현"} comment={"ㅠ듀아아ㅠ"}/>
//       <Comment name={"이주현"} comment={"ㅠ듀아아ㅠㅠ"}/>
//     </div>
//   );
// }

const comments = [
  {
    name: "이주현",
    comment: "ㅠ듀아아"
  },
  {
    name: "이주현",
    comment: "ㅠ듀아아ㅠㅠ"
  },
  {
    name: "이주현",
    comment: "ㅠ듀아아ㅠㅠㅠ"
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <Comment name={comment.name} comment={comment.comment} />
        );
      })}
    </div>
  );
}

export default CommentList;