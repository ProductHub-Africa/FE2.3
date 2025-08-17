import "../assets/css/RecentJob.css";
import { Link } from "react-router-dom";
import JobCards from "./JobCards";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

function RecentJob({ allJobs, loader }) {
  const [currentJob, setCurrentJob] = useState([]);
  const recentJob = allJobs;

  // function PaginatedItems({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;

  // const endOffset = itemOffset + itemsPerPage;
  // const currentItems = recentJob.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(recentJob.length / itemsPerPage);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = recentJob.slice(itemOffset, endOffset);
    setCurrentJob(currentItems);
  }, [itemOffset, itemsPerPage, recentJob]);
  // console.log(`Page count is ${pageCount}`);
  // console.log("current job list", currentJob);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % recentJob.length;

    setItemOffset(newOffset);
  };

  return (
    <>
      <section id="recent-job">
        <div className="container">
          <div className="recent-job-available-block d-md-flex align-items-center justify-content-between mb-4">
            <div className="recent-job-text">
              <h1>Recent jobs available</h1>
              <p>
                Fresh listings from trusted sources, updated daily for quick
                action.
              </p>
            </div>
            <div className="view-all-link">
              <Link to="#">View all</Link>
            </div>
          </div>
          {/* {recentJob} */}
          {loader && (
            <div className="loader">
              <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>

              <div className="mt-2">
                <h5 className="fw-bold">
                  Taking time to load 🤔, you might to consider&nbsp;
                  <a
                    href="#"
                    className="reload-text"
                    onClick={() => window.location.reload()}
                  >
                    Reloading
                  </a>
                  &nbsp;the page
                </h5>
              </div>
            </div>
          )}
          <div className="row">
            <JobCards recentJobs={currentJob} />
          </div>
          {/* PAGINATION */}
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName="mt-5 pagination"
            pageLinkClassName="page-link"
            activeClassName="active"
            pageClassName="page-item"
            previousClassName="page-item prev-btn"
            nextClassName="page-item next-btn"
          />
        </div>
      </section>
    </>
  );
}

export default RecentJob;
