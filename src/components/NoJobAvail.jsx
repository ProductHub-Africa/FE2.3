import "../assets/css/NoJobAvail.css";

function NoJobAvail() {
  return (
    <>
      <section
        id="no-job-wrapper"
        className="d-flex align-items-center justify-content-center"
      >
        <div className="svg-wrapper">
          <center>
            <svg
              width="191"
              height="190"
              viewBox="0 0 191 190"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M95.5 190C147.967 190 190.5 147.467 190.5 95C190.5 42.5329 147.967 0 95.5 0C43.0329 0 0.5 42.5329 0.5 95C0.5 147.467 43.0329 190 95.5 190Z"
                fill="url(#paint0_linear_104_632)"
              />
              <path
                d="M152.5 190H38.5V67.1333C43.8732 67.1273 49.0246 64.9901 52.824 61.1907C56.6235 57.3913 58.7606 52.2398 58.7667 46.8666H132.233C132.228 49.5284 132.75 52.1648 133.77 54.6234C134.79 57.082 136.287 59.314 138.175 61.1901C140.051 63.0788 142.283 64.5767 144.742 65.5968C147.201 66.617 149.838 67.1392 152.5 67.1333V190Z"
                fill="white"
              />
              <path
                d="M95.5001 129.2C112.29 129.2 125.9 115.589 125.9 98.8C125.9 82.0106 112.29 68.4 95.5001 68.4C78.7106 68.4 65.1001 82.0106 65.1001 98.8C65.1001 115.589 78.7106 129.2 95.5001 129.2Z"
                fill="#4285F4"
              />
              <path
                d="M106.248 113.131L95.5 102.383L84.752 113.131L81.1693 109.548L91.9173 98.8002L81.1693 88.0522L84.752 84.4695L95.5 95.2175L106.248 84.4695L109.831 88.0522L99.0827 98.8002L109.831 109.548L106.248 113.131Z"
                fill="white"
              />
              <path
                d="M111.967 136.8H79.0334C76.9347 136.8 75.2334 138.501 75.2334 140.6C75.2334 142.699 76.9347 144.4 79.0334 144.4H111.967C114.065 144.4 115.767 142.699 115.767 140.6C115.767 138.501 114.065 136.8 111.967 136.8Z"
                fill="#DFEAFB"
              />
              <path
                d="M123.367 152H67.6335C65.5348 152 63.8335 153.701 63.8335 155.8C63.8335 157.899 65.5348 159.6 67.6335 159.6H123.367C125.466 159.6 127.167 157.899 127.167 155.8C127.167 153.701 125.466 152 123.367 152Z"
                fill="#DFEAFB"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_104_632"
                  x1="95.5"
                  y1="0"
                  x2="95.5"
                  y2="190"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E3ECFA" />
                  <stop offset="1" stopColor="#DAE7FF" />
                </linearGradient>
              </defs>
            </svg>
          </center>

          <h1 className="text-center mt-4">No Jobs Available</h1>
          <p className="text-center">
            No jobs available or no results found. Try different keywords or
            filters.
          </p>
        </div>
      </section>
    </>
  );
}

export default NoJobAvail;
