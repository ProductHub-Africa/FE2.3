import "../assets/css/SideBar.css";

function SideBar({ filters, onFilterChange }) {
  const checkIsRemotiveJob = (e) => {
    onFilterChange({ ...filters, remotive: e.target.checked });
  };

  const checkIsAdzunaJob = (e) => {
    onFilterChange({ ...filters, adzuna: e.target.checked });
  };

  const checkIsJSearchJob = (e) => {
    onFilterChange({ ...filters, JSearch: e.target.checked });
  };

  // useEffect(() => {
  //   const isRemotive = (e) => {
  //     if (filters.remotive === true) {
  //       console.log("Remotive...", filters.remotive);
  //       return e.target.checked;
  //     }
  //   };

  //   isRemotive();
  // }, []);

  // const checkIsFullTimeJob = (e) => {
  //   onFilterChange({ ...filters, fullTime: e.target.checked });
  // };

  // Clear All filter
  // const resetAllFilter = () => {
  //   onFilterChange({ ...filters, remotive: false });
  //   onFilterChange({ ...filters, adzuna: false });
  // };

  return (
    <>
      <aside id="side-bar">
        <h4>Filter Jobs by</h4>
        <h3 className="mb-3 mt-4">Job Type</h3>
        <div className="job-type-container">
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
            <input
              type="checkbox"
              className="form-check-input"
              checked={filters.fullTime}
              onChange={(e) =>
                onFilterChange({ ...filters, fullTime: e.target.checked })
              }
            />
            <span className="ms-2">Full Time</span>
          </div>
          <div className="remote d-flex align-items-center justify-content-start">
            <input
              type="checkbox"
              className="form-check-input"
              checked={filters.partTime}
              onChange={(e) =>
                onFilterChange({
                  ...filters,
                  partTime: e.target.checked,
                })
              }
            />
            <span className="ms-2">Part Time</span>
          </div>
          <div className="remote d-flex align-items-center justify-content-start">
            <input
              type="checkbox"
              className="form-check-input"
              checked={filters.contract}
              onChange={(e) =>
                onFilterChange({ ...filters, contract: e.target.checked })
              }
            />
            <span className="ms-2">Contract</span>
          </div>
          {/* <div className="remote d-flex align-items-center justify-content-start">
          <input type="checkbox" className="form-check-input" />
          <span className="ms-2">Freelance</span>
        </div>
        <div className="remote d-flex align-items-center justify-content-start">
          <input type="checkbox" className="form-check-input" />
          <span className="ms-2">Internship</span>
        </div> */}
        </div>

        <h3 className="mb-3 mt-4">Source</h3>
        <div className="job-source-container">
          <div className="jsearch d-flex align-items-center justify-content-start">
            <input
              type="checkbox"
              className="form-check-input"
              checked={filters.JSearch}
              onChange={checkIsJSearchJob}
            />
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
        </div>

        {/* <h3 className="mb-3 mt-4">Date Posted</h3>
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
        <h3 className="mb-3 mt-4">Salary</h3> */}

        {/* <p
          className="clear-filter-text text-center mt-3"
          onClick={resetAllFilter}
        >
          Clear All Filter
        </p> */}
      </aside>
    </>
  );
}

export default SideBar;
