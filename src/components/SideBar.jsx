// import { useState } from "react";
import "../assets/css/SideBar.css";

function SideBar({ filters, onFilterChange }) {
  // const [isRemotiveJob, setIsRemotive] = useState(false);
  // const [isAdzunaJob, setIsAdzunaJob] = useState(false);

  const checkIsRemotiveJob = (e) => {
    onFilterChange({ ...filters, remotive: e.target.checked });
    // setIsRemotive(e.target.checked);
  };

  const checkIsAdzunaJob = (e) => {
    onFilterChange({ ...filters, adzuna: e.target.checked });
    // setIsAdzunaJob(e.target.checked);
    // localStorage.setItem("IsAdzunaJob", "adzuna");
  };

  const checkIsFullTimeJob = (e) => {
    onFilterChange({ ...filters, fullTime: e.target.checked });
  };

  // Clear All filter
  const resetAllFilter = () => {
    onFilterChange({ ...filters, remotive: false }); // unchecks it
    onFilterChange({ ...filters, adzuna: false }); // unchecks it
  };

  return (
    <>
      <aside id="side-bar">
        <h4>Filter Jobs by</h4>
        <h3 className="mb-3 mt-4">Job Type</h3>
        <div className="remote d-flex align-items-center justify-content-start">
          <input
            type="checkbox"
            className="form-check-input"
            checked={filters.remote}
            onChange={(e) =>
              onFilterChange({ ...filters, remote: e.target.checked })
            }
          />
          <span className="ms-2">Remote</span>
        </div>
        <div className="remote d-flex align-items-center justify-content-start">
          <input type="checkbox" className="form-check-input" />
          <span className="ms-2">Onsite</span>
        </div>
        <div className="remote d-flex align-items-center justify-content-start">
          <input
            type="checkbox"
            className="form-check-input"
            checked={filters.fullTime}
            onChange={checkIsFullTimeJob}
          />
          <span className="ms-2">Full Time</span>
        </div>
        <div className="remote d-flex align-items-center justify-content-start">
          <input type="checkbox" className="form-check-input" />
          <span className="ms-2">Part Time</span>
        </div>
        <h3 className="mb-3 mt-4">Source</h3>
        <div className="jsearch d-flex align-items-center justify-content-start">
          <input type="checkbox" className="form-check-input" name="" id="" />
          <span className="ms-2">JSearch</span>
        </div>
        <div className="adzuna d-flex align-items-center justify-content-start">
          <input
            type="checkbox"
            className="form-check-input"
            checked={filters.adzuna}
            onChange={checkIsAdzunaJob}
          />
          <span className="ms-2">Adzuna</span>
        </div>
        {/* Will Add This when their API is available */}
        {/* <div className="jooble d-flex align-items-center justify-content-start">
          <input type="checkbox" className="form-check-input" name="" id="" />
          <span className="ms-2">Jooble</span>
        </div> */}
        <div className="remotive d-flex align-items-center justify-content-start">
          <input
            type="checkbox"
            className="form-check-input"
            checked={filters.remotive}
            onChange={checkIsRemotiveJob}
          />
          <span className="ms-2">Remotive</span>
        </div>
        <h3 className="mb-3 mt-4">Date Posted</h3>
        <div className="jooble d-flex align-items-center justify-content-start">
          <input type="checkbox" className="form-check-input" name="" id="" />
          <span className="ms-2">All</span>
        </div>
        <div className="jooble d-flex align-items-center justify-content-start">
          <input type="checkbox" className="form-check-input" name="" id="" />
          <span className="ms-2">Last Hour</span>
        </div>
        <div className="jooble d-flex align-items-center justify-content-start">
          <input type="checkbox" className="form-check-input" name="" id="" />
          <span className="ms-2">Last 24 Hours</span>
        </div>
        <div className="jooble d-flex align-items-center justify-content-start">
          <input type="checkbox" className="form-check-input" name="" id="" />
          <span className="ms-2">Last 7 Days</span>
        </div>
        <div className="jooble d-flex align-items-center justify-content-start">
          <input type="checkbox" className="form-check-input" name="" id="" />
          <span className="ms-2">Last 30 Days</span>
        </div>
        <h3 className="mb-3 mt-4">Salary</h3>

        <p className="clear-filter-text text-center" onClick={resetAllFilter}>
          Clear All Filter
        </p>
      </aside>
    </>
  );
}

export default SideBar;
