import { Link } from "react-router-dom";
import "../assets/css/Footer.css";
import moment from "moment";

function Footer() {
  const currentYear = moment().format("YYYY");
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 mb-3">
              <div className="job-whiz-footer">
                <h1>Jobwhiz</h1>
                <p>
                  Quis enim pellentesque viverra tellus eget malesuada
                  facilisis. Congue nibh vivamus aliquet nunc mauris dui nullam
                  et.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-2 mb-3">
              <div className="about-links mx-md-auto">
                <h4>Company</h4>
                <ul className="ps-0 mt-4">
                  <li className="mb-2">
                    <Link to="">About Us</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="">Our Team</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="">Partners</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="">For Candidates</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="">For Employers</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-2 mb-3">
              <div className="job-categories-footer mx-md-0 mx-lg-auto">
                <h4>Job Categories</h4>
                <ul className="ps-0 mt-4">
                  <li className="mb-2">
                    <Link to="">Agriculture</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="">Metal Production</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="">E-Commerce</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="">Transport</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="">Hotels & Tourism</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-3">
              <div className="newsletter ms-md-auto">
                <h4>Newsletter</h4>
                <p className="mt-3">
                  Join our newsletter to be part of the first people that hear
                  about the sweet stuff first.
                </p>
                <form>
                  <div className="email-input mb-3">
                    <input
                      type="text"
                      placeholder="Email Address"
                      className="sub-email-address w-100"
                    />
                  </div>

                  <button type="submit" className="subscribe-btn w-100">
                    subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="copyright-section d-md-flex align-items-center justify-content-between">
            <p className="copyright-text">
              © Copyright Jobwhiz <span>{currentYear}</span>
            </p>
            <div className="privacy-policy">
              <Link to="#" className="me-3">
                Privacy Policy
              </Link>
              <Link to="#">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
