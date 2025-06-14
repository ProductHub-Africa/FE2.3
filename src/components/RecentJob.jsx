import "../assets/css/RecentJob.css";
import { Link } from "react-router-dom";

function RecentJob() {
  return (
    <>
      <section id="recent-job">
        <div className="container">
          <div className="recent-job-available-block d-md-flex align-items-center justify-content-between">
            <div className="recent-job-text">
              <h1>Recent jobs available</h1>
              <p>
                At eu lobortis pretium tincidunt amet lacus ut aenean aliquet
              </p>
            </div>
            <div className="view-all-link">
              <Link to="#">View all</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RecentJob;
