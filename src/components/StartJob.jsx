import "../assets/css/StartJob.css";
import startJobImage from "../assets/img/start-job-bg.jpg";
import { Link } from "react-router-dom";

function StartJob() {
  return (
    <>
      <section id="start-job-section">
        <div className="container">
          <div className="start-job-card">
            <div className="start-job-content d-flex align-items-center justify-content-center">
              <div className="_content">
                <h1>Create A Better Future For Yourself</h1>
                <p>
                  At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.
                  Blandit elementum id scelerisque rhoncus.
                </p>
                <Link to="#">
                  <button className="start-job-btn">start job</button>
                </Link>
              </div>

              <div className="start-job-content-overlay"></div>
            </div>
            <div className="start-job-image">
              <img src={startJobImage} alt="" />
              <div className="start-job-image-overlay"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default StartJob;
