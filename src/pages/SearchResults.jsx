import { useState, useEffect } from "react";
import Footer from "../components/Footer.jsx";
import LongJobCard from "../components/LongJobCard.jsx";
import SearchHeader from "../components/SearchHeader.jsx";
import SideBar from "../components/SideBar.jsx";
import useJobApiData from "../store/GeneralApi";
import NavBar from "../components/NavBar.jsx";
import JobLoader from "../components/JobLoader.jsx";
import "../assets/css/SearchResults.css";

function SearchResults() {
  const [adzunaJobOnly, setAdzunaJobOnly] = useState(false);
  const [remotiveJobOnly, setRemotiveJobOnly] = useState(false);
  const [JSearchJobOnly, setJSearchJobOnly] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [contractOnly, setContractOnly] = useState(false);
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

        // const jobTypeMatches =
        //   (fullTimeOnly && job.jobType.includes("full")) ||
        //   (partTimeOnly && job.jobType.includes("part")) ||
        //   (remoteOnly && job.jobType.includes("remote")) ||
        //   (contractOnly && job.jobType.includes("contract")) ||
        //   (!fullTimeOnly && !partTimeOnly);

        const jobTypeFilters =
          [fullTimeOnly, partTimeOnly, remoteOnly, contractOnly].filter(Boolean)
            .length > 0;

        const jobTypeMatches =
          (fullTimeOnly &&
            typeof job.jobType === "string" &&
            job.jobType.includes("full")) ||
          (partTimeOnly &&
            typeof job.jobType === "string" &&
            job.jobType.includes("part")) ||
          (remoteOnly &&
            typeof job.jobType === "string" &&
            job.jobType.includes("remote")) ||
          (contractOnly &&
            typeof job.jobType === "string" &&
            job.jobType.includes("contract")) ||
          !jobTypeFilters; // Only show all if no job type filter is active

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
    contractOnly,
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
          <div className="d-sm-flex  gap-5">
            <SideBar
              filters={{
                adzuna: adzunaJobOnly,
                remotive: remotiveJobOnly,
                JSearch: JSearchJobOnly,
                remote: remoteOnly,
                contract: contractOnly,
                fullTime: fullTimeOnly,
                partTime: partTimeOnly,
              }}
              onFilterChange={(updatedFilters) => {
                setAdzunaJobOnly(updatedFilters.adzuna);
                setRemotiveJobOnly(updatedFilters.remotive);
                setJSearchJobOnly(updatedFilters.JSearch);
                setRemoteOnly(updatedFilters.remote);
                setContractOnly(updatedFilters.contract);
                setFullTimeOnly(updatedFilters.fullTime);
                setPartTimeOnly(updatedFilters.partTime);
              }}
            />
            <section className="long-job-card-container">
              {/* <NoJobAvail /> */}
              <LongJobCard
                filteredJobs={filteredJob}
                getAllJobs={getAllJobs}
                remotiveJobOnly={remotiveJobOnly}
                adzunaJobOnly={adzunaJobOnly}
                JSearchJobOnly={JSearchJobOnly}
                remoteOnly={remoteOnly}
                fullTimeOnly={fullTimeOnly}
                partTimeOnly={partTimeOnly}
                contractOnly={contractOnly}
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
