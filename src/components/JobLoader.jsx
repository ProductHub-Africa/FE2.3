import "../assets/css/JobLoader.css";
import loader from "../assets/img/spinner.gif";

function JobLoader() {
  return (
    <>
      <section id="job-loader">
        <img src={loader} alt="" className="job-loader-img" />
      </section>
    </>
  );
}

export default JobLoader;
