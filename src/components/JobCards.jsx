import "../assets/css/JobCards.css";
import { Link } from "react-router-dom";
import moment from "moment";
// import { useEffect, useState } from "react";

function JobCards({ recentJobs }) {
  const job = recentJobs;

  return (
    <>
      {job.map((jobList) => (
        <div className="col-12 col-md-6 col-lg-4 mb-3" key={jobList.id}>
          <div className="job-card">
            <div className="brand-n-time d-flex align-items-center justify-content-between">
              <div className="brand">
                <img
                  style={
                    jobList.companyLogo === ""
                      ? { width: "24px", height: "24px", borderRadius: "50%" }
                      : { width: "24px", height: "24px", borderRadius: "0" }
                  }
                  src={
                    jobList.companyLogo === ""
                      ? "https://res.cloudinary.com/dsfc1o1bp/image/upload/c_fill,w_24,h_24/v1727868727/sample.jpg"
                      : jobList.companyLogo
                  }
                  alt=""
                />
                <span className="ms-2">{jobList.companyName}</span>
              </div>
              <div className="time">
                <span>
                  {jobList.datePosted === "invalid date"
                    ? "No Date"
                    : moment(jobList.datePosted).startOf("day").fromNow()}
                </span>
              </div>
            </div>
            <h1 className="job-title mt-3 mb-2">{jobList.title}</h1>

            <div className="location d-flex align-items-center mb-2">
              <div className="location-icon mt-0">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z"
                    stroke="#007AFF"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 2C16.8706 2 21 6.03298 21 10.9258C21 15.8965 16.8033 19.3847 12.927 21.7567C12.6445 21.9162 12.325 22 12 22C11.675 22 11.3555 21.9162 11.073 21.7567C7.2039 19.3616 3 15.9137 3 10.9258C3 6.03298 7.12944 2 12 2Z"
                    stroke="#007AFF"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div className="location-name">
                <p className="mb-0 ms-2">{jobList.jobLocation}</p>
              </div>
            </div>

            <div className="job-time d-flex align-items-center mb-2">
              <div className="job-time-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#007AFF"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M9.5 9.5L12.9999 12.9996M16 8L11 13"
                    stroke="#007AFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="job-time-text">
                <p className="mb-0 ms-2">
                  {jobList.jobType === "full_time"
                    ? "Full Time"
                    : jobList.jobType}
                </p>
              </div>
            </div>

            <div className="salary d-flex align-items-center mb-3">
              <div className="salary-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.9427 16.8354C20.2864 12.8866 18.2432 9.94613 16.467 8.219C15.9501 7.71642 15.6917 7.46513 15.1208 7.23257C14.5499 7 14.0592 7 13.0778 7H10.9222C9.94081 7 9.4501 7 8.87922 7.23257C8.30834 7.46513 8.04991 7.71642 7.53304 8.219C5.75682 9.94613 3.71361 12.8866 3.05727 16.8354C2.56893 19.7734 5.27927 22 8.30832 22H15.6917C18.7207 22 21.4311 19.7734 20.9427 16.8354Z"
                    stroke="#007AFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.25662 4.44287C7.05031 4.14258 6.75128 3.73499 7.36899 3.64205C8.00392 3.54651 8.66321 3.98114 9.30855 3.97221C9.89237 3.96413 10.1898 3.70519 10.5089 3.33548C10.8449 2.94617 11.3652 2 12 2C12.6348 2 13.1551 2.94617 13.4911 3.33548C13.8102 3.70519 14.1076 3.96413 14.6914 3.97221C15.3368 3.98114 15.9961 3.54651 16.631 3.64205C17.2487 3.73499 16.9497 4.14258 16.7434 4.44287L15.8105 5.80064C15.4115 6.38146 15.212 6.67187 14.7944 6.83594C14.3769 7 13.8373 7 12.7582 7H11.2418C10.1627 7 9.6231 7 9.20556 6.83594C8.78802 6.67187 8.5885 6.38146 8.18945 5.80064L7.25662 4.44287Z"
                    stroke="#007AFF"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.6267 12.9186C13.4105 12.1205 12.3101 11.4003 10.9892 11.9391C9.66829 12.4778 9.45847 14.2113 11.4565 14.3955C12.3595 14.4787 12.9483 14.2989 13.4873 14.8076C14.0264 15.3162 14.1265 16.7308 12.7485 17.112C11.3705 17.4932 10.006 16.8976 9.85742 16.0517M11.8417 10.9927V11.7531M11.8417 17.2293V17.9927"
                    stroke="#007AFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="salary-text">
                <p className="mb-0 ms-2">
                  {jobList.jobSalary === "" ? "N/A" : jobList.jobSalary}
                </p>
              </div>
            </div>

            <Link to={jobList.applyUrl}>
              <button className="apply-btn">Apply</button>
            </Link>
          </div>
        </div>
      ))}

      {/* <div className="col-4 mb-3">
        <div className="job-card">
          <div className="brand-n-time d-flex align-items-center justify-content-between">
            <div className="brand">
              <img
                src="../assets/img/job.png"
                alt=""
                style={{ width: "24px", height: "24px" }}
              />
              <span>Jenkins - Beatty</span>
            </div>
            <div className="time">
              <span>2 Hours Ago</span>
            </div>
          </div>
          <h1 className="job-title mt-3 mb-2">National Branding Officer</h1>

          <div className="location d-flex align-items-center mb-2">
            <div className="location-icon mt-0">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z"
                  stroke="#007AFF"
                  strokeWidth="1.5"
                />
                <path
                  d="M12 2C16.8706 2 21 6.03298 21 10.9258C21 15.8965 16.8033 19.3847 12.927 21.7567C12.6445 21.9162 12.325 22 12 22C11.675 22 11.3555 21.9162 11.073 21.7567C7.2039 19.3616 3 15.9137 3 10.9258C3 6.03298 7.12944 2 12 2Z"
                  stroke="#007AFF"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <div className="location-name">
              <p className="mb-0 ms-2">Porto</p>
            </div>
          </div>

          <div className="job-time d-flex align-items-center mb-2">
            <div className="job-time-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#007AFF"
                  strokeWidth="1.5"
                />
                <path
                  d="M9.5 9.5L12.9999 12.9996M16 8L11 13"
                  stroke="#007AFF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="job-time-text">
              <p className="mb-0 ms-2">Full time</p>
            </div>
          </div>

          <div className="salary d-flex align-items-center mb-3">
            <div className="salary-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.9427 16.8354C20.2864 12.8866 18.2432 9.94613 16.467 8.219C15.9501 7.71642 15.6917 7.46513 15.1208 7.23257C14.5499 7 14.0592 7 13.0778 7H10.9222C9.94081 7 9.4501 7 8.87922 7.23257C8.30834 7.46513 8.04991 7.71642 7.53304 8.219C5.75682 9.94613 3.71361 12.8866 3.05727 16.8354C2.56893 19.7734 5.27927 22 8.30832 22H15.6917C18.7207 22 21.4311 19.7734 20.9427 16.8354Z"
                  stroke="#007AFF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.25662 4.44287C7.05031 4.14258 6.75128 3.73499 7.36899 3.64205C8.00392 3.54651 8.66321 3.98114 9.30855 3.97221C9.89237 3.96413 10.1898 3.70519 10.5089 3.33548C10.8449 2.94617 11.3652 2 12 2C12.6348 2 13.1551 2.94617 13.4911 3.33548C13.8102 3.70519 14.1076 3.96413 14.6914 3.97221C15.3368 3.98114 15.9961 3.54651 16.631 3.64205C17.2487 3.73499 16.9497 4.14258 16.7434 4.44287L15.8105 5.80064C15.4115 6.38146 15.212 6.67187 14.7944 6.83594C14.3769 7 13.8373 7 12.7582 7H11.2418C10.1627 7 9.6231 7 9.20556 6.83594C8.78802 6.67187 8.5885 6.38146 8.18945 5.80064L7.25662 4.44287Z"
                  stroke="#007AFF"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.6267 12.9186C13.4105 12.1205 12.3101 11.4003 10.9892 11.9391C9.66829 12.4778 9.45847 14.2113 11.4565 14.3955C12.3595 14.4787 12.9483 14.2989 13.4873 14.8076C14.0264 15.3162 14.1265 16.7308 12.7485 17.112C11.3705 17.4932 10.006 16.8976 9.85742 16.0517M11.8417 10.9927V11.7531M11.8417 17.2293V17.9927"
                  stroke="#007AFF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="salary-text">
              <p className="mb-0 ms-2">80k - 100k</p>
            </div>
          </div>

          <Link>
            <button className="apply-btn">Apply</button>
          </Link>
        </div>
      </div> */}
    </>
  );
}

export default JobCards;
