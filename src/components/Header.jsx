import "../assets/css/Header.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import landingIcon from "../assets/img/landing-icon.svg";

function Header({ searchTerms }) {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // save search term in local storage
    localStorage.setItem("searchedData", data.searchRole);
    searchTerms(data.searchRole);
    navigate("/search-results");
  };
  return (
    <>
      <header id="header">
        <div className="container">
          <div className="row">
            <div
              className="col-12 col-md-6 d-flex align-items-center justify-content-center"
              style={{ height: "576px" }}
            >
              <div className="content-left">
                <h1>Curated jobs from all around the glob</h1>
                <p>Search, like, get hired faster and smarter</p>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="d-flex align-items-center justify-content-between search-bar-container">
                    <input
                      type="text"
                      placeholder="search role"
                      className="search-role-input"
                      {...register("searchRole", {
                        required: "Role is required",
                      })}
                    />

                    {/* Will later uncomment this after implementation search by location */}
                    {/* <div className="d-none d-sm-block separator"></div> */}

                    {/* <div className="d-flex align-items-center me-2">
                      <svg
                        className="ms-3"
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 0.25C4.175 0.25 0.25 4.175 0.25 9C0.25 14.118 4.94699 17.2199 8.05499 19.2729L8.584 19.624C8.71 19.708 8.855 19.75 9 19.75C9.145 19.75 9.29 19.708 9.416 19.624L9.94501 19.2729C13.053 17.2199 17.75 14.118 17.75 9C17.75 4.175 13.825 0.25 9 0.25ZM9.119 18.021L9 18.1001L8.881 18.021C5.871 16.033 1.75 13.311 1.75 9C1.75 5.002 5.002 1.75 9 1.75C12.998 1.75 16.25 5.002 16.25 9C16.25 13.311 12.128 16.034 9.119 18.021ZM9 5.75C7.208 5.75 5.75 7.208 5.75 9C5.75 10.792 7.208 12.25 9 12.25C10.792 12.25 12.25 10.792 12.25 9C12.25 7.208 10.792 5.75 9 5.75ZM9 10.75C8.035 10.75 7.25 9.965 7.25 9C7.25 8.035 8.035 7.25 9 7.25C9.965 7.25 10.75 8.035 10.75 9C10.75 9.965 9.965 10.75 9 10.75Z"
                          fill="#B8BDBB"
                        />
                      </svg>
                      <input
                        type="text"
                        placeholder="Nigeria"
                        className="location-input"
                      />
                    </div> */}

                    <button
                      className="search-job-button"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="64" height="64" rx="32" fill="#E6F2FF" />
                        <path
                          d="M36.927 37.04L40.4001 40.4M39.2801 31.44C39.2801 35.7699 35.77 39.28 31.4401 39.28C27.1102 39.28 23.6001 35.7699 23.6001 31.44C23.6001 27.1101 27.1102 23.6 31.4401 23.6C35.77 23.6 39.2801 27.1101 39.2801 31.44Z"
                          stroke="#1D1E1D"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="d-none d-md-flex px-0 col-6 d-flex align-items-center">
              <div className="image-right">
                <img src={landingIcon} alt="" className="landing-icon" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
