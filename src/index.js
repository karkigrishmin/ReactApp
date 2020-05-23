import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

//create react component
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Grish"
          timeAgo="Today at 12:12PM"
          post="wow nice"
          fakeImg={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Gk"
          timeAgo="Today at 12:15PM"
          post="wow"
          fakeImg={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Grishmin"
          timeAgo="Yesterday at 12:12PM"
          post="cool"
          fakeImg={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

//take react component and show on screen
ReactDOM.render(<App />, document.querySelector("#root"));
