import "../assets/css/JobCategories.css";
import jobCatArr from "../store/JobCategories";

function JobCategories() {
  return (
    <>
      <section id="job-categories">
        <div className="container">
          <div className="job-categories-header">
            <h1 className="text-center">Browse by Category</h1>
            <p className="text-center">
              At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.
              Blandit a massa elementum id scelerisque rhoncus. Lectus dolor
              blandit massa pretium id ultrices phasellus tortor. Risus risus
              lectus augue justo lacus viverra sit. Ultricies purus dolor
              viverra mi laoreet at cursus j
            </p>
          </div>

          <div className="job-cat-list">
            <div className="row">
              {jobCatArr.map((job) => (
                <div className="col-12 col-md-3 mb-3" key={job.title}>
                  <div className="job-list-card d-flex align-items-center justify-content-center">
                    <div className="job-list-card-content">
                      <center>
                        <div
                          dangerouslySetInnerHTML={{ __html: job.icon }}
                        ></div>
                      </center>
                      <p className="job-list-title mt-4">{job.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default JobCategories;
