import "./App.css";
import jobPics from "../src/assets/job.svg";

function App() {
  return (
    <>
      <div>
        <img src={jobPics} alt="" style={{ width: "300px" }} />
        <h1 style={{ color: "#fff" }}>
          <span style={{ color: "#007aff" }}>Job</span>WHiz
        </h1>
      </div>
    </>
  );
}

export default App;
