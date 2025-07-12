import { useState, useEffect } from "react";
import Footer from "../components/Footer.jsx";
import LongJobCard from "../components/LongJobCard.jsx";
import SearchHeader from "../components/SearchHeader.jsx";
import SideBar from "../components/SideBar.jsx";
import useJobApiData from "../store/GeneralApi";
import NavBar from "../components/NavBar.jsx";
import JobLoader from "../components/JobLoader.jsx";

function SearchResults() {
  const [adzunaJobOnly, setAdzunaJobOnly] = useState(false);
  const [remotiveJobOnly, setRemotiveJobOnly] = useState(false);
  const [JSearchJobOnly, setJSearchJobOnly] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [onsiteOnly, setOnsiteOnly] = useState(false);
  const [fullTimeOnly, setFullTimeOnly] = useState(false);
  const [partTimeOnly, setPartTimeOnly] = useState(false);
  const [filteredJob, setFilteredJob] = useState([]);

  const searchKeyword = localStorage.getItem("searchedData") || "";
  const { getAllJobsData, getAllJobs } = useJobApiData();

  useEffect(() => {
    const hasRemotive = getAllJobsData.some((job) => job.source === "Remotive");
    const hasAdzuna = getAllJobsData.some((job) => job.source === "Adzuna");
    const hasJSearch = getAllJobsData.some((job) => job.source === "JSearch");

    const totalSources = [hasRemotive, hasAdzuna, hasJSearch].filter(
      Boolean
    ).length;

    if (totalSources === 1) {
      setRemotiveJobOnly(hasRemotive);
      setAdzunaJobOnly(hasAdzuna);
      setJSearchJobOnly(hasJSearch);
    }
  }, [getAllJobsData]);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const filteredSearchedJobs = getAllJobsData.filter((job) => {
        const q = searchKeyword.toLowerCase();
        const matchesTitle = job.title.toLowerCase().includes(q);

        const sourceMatches =
          (adzunaJobOnly && job.source === "Adzuna") ||
          (remotiveJobOnly && job.source === "Remotive") ||
          (JSearchJobOnly && job.source === "JSearch") ||
          (!adzunaJobOnly && !remotiveJobOnly);

        const type = job.jobType?.toLowerCase() || "";

        const jobTypeMatches =
          (!remoteOnly || type.includes("remote")) &&
          (!onsiteOnly || (!type.includes("remote") && type !== "")) &&
          (!fullTimeOnly || type.includes("full")) &&
          (!partTimeOnly || type.includes("part"));

        return matchesTitle && sourceMatches && jobTypeMatches;
      });

      setFilteredJob(filteredSearchedJobs);
      setIsLoading(false);
    }, 5000);
  }, [
    getAllJobsData,
    searchKeyword,
    JSearchJobOnly,
    adzunaJobOnly,
    fullTimeOnly,
    onsiteOnly,
    partTimeOnly,
    remoteOnly,
    remotiveJobOnly,
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const allJobs = await getAllJobs();
      return allJobs;
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading && <JobLoader />}

      <NavBar />
      {/* Header */}
      <SearchHeader />

      {/* Main Area */}
      <main style={{ marginTop: "80px", minHeight: "100vh" }}>
        <div className="container">
          <div className="d-flex gap-5">
            <SideBar
              filters={{
                adzuna: adzunaJobOnly,
                remotive: remotiveJobOnly,
                JSearch: JSearchJobOnly,
                remote: remoteOnly,
                onsite: onsiteOnly,
                fullTime: fullTimeOnly,
                partTime: partTimeOnly,
              }}
              onFilterChange={(updatedFilters) => {
                setAdzunaJobOnly(updatedFilters.adzuna);
                setRemotiveJobOnly(updatedFilters.remotive);
                setJSearchJobOnly(updatedFilters.JSearch);
                setRemoteOnly(updatedFilters.remote);
                setOnsiteOnly(updatedFilters.onsite);
                setFullTimeOnly(updatedFilters.fullTime);
                setPartTimeOnly(updatedFilters.partTime);
              }}
            />
            <section
              style={{
                width: "calc(100% - 300px)",
              }}
            >
              {/* <NoJobAvail /> */}
              <LongJobCard
                filteredJobs={filteredJob}
                getAllJobs={getAllJobs}
                remotiveJobOnly={remotiveJobOnly}
                adzunaJobOnly={adzunaJobOnly}
                JSearchJobOnly={JSearchJobOnly}
              />
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default SearchResults;
