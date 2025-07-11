import "../assets/css/Lesson.css";
import Card from "./Card";
import { useState } from "react";

function Lesson() {
  const hello = "Hello World";
  const [getCount, setGetCount] = useState(null);

  const sendDataToChild = (count) => {
    setGetCount(count);
    console.log("Data receive from child:", count);
  };
  return (
    <>
      <div className="container mt-5">
        <Card fromParent={hello} sendDataToChild={sendDataToChild} />

        <h4>Count : {getCount} </h4>
      </div>
    </>
  );
}

export default Lesson;
