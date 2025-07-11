import { useState } from "react";
import "../assets/css/Lesson.css";

function Card({ fromParent, sendDataToChild }) {
  const childData = fromParent;
  const [count, setCount] = useState(0);
  const [isliked, setIsLiked] = useState(false);

  const handleOnClick = () => {
    setIsLiked((prev) => !prev);
    setCount((prev) => {
      const newCount = prev + 1;
      sendDataToChild(newCount);
      return newCount;
    });
  };

  return (
    <div className="card-wrapper">
      <h1>Naruto</h1>
      <p className="fs-1" onClick={handleOnClick}>
        {isliked ? "💙" : "🤍"}
      </p>

      <span>{isliked ? "Liked" : "Not Liked"}</span>

      <span className="ms-5">{count}</span>

      <p className="fs-5">{childData}</p>
    </div>
  );
}

export default Card;
