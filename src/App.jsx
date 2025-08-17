// import jobPics from "../src/assets/img/job.svg";
import { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import JobCategories from "./components/JobCategories";
import NavBar from "./components/NavBar";
import RecentJob from "./components/RecentJob";
// import StartJob from "./components/StartJob";
import useJobApiData from "./store/GeneralApi";

import { useState } from "react";

function App() {
  const [roleQuery, setRoleQuery] = useState("");
  // const []
  const {
    isLoading,
    // jobData,
    fetchRemotiveJobData,
    fetchAdzunaJobData,
    fetchJSearchJobData,
    getAllJobsData,
    getAllJobs,
    // searchKeyword,
    // setSearchKeyword,
  } = useJobApiData();

  const handleSearchTerms = (query) => {
    console.log("Search Query:", query);
    // setSearchKeyword(query);
    setRoleQuery(query);
    console.log("Role Query:", query);

    // const filteredSearchedJobs = getAllJobsData.filter((job) => {
    //   const q = query.toLowerCase();
    //   const matchesTitle = job.title.toLowerCase().includes(q);

    //   return matchesTitle;
    // });
  };

  useEffect(() => {
    fetchRemotiveJobData();
    fetchAdzunaJobData();
    fetchJSearchJobData();
    getAllJobs();
    // console.log("All fucking Jobs", getAllJobsData);
  }, [roleQuery]);

  return (
    <>
      <NavBar />
      <Header searchTerms={handleSearchTerms} />
      <RecentJob allJobs={getAllJobsData} loader={isLoading} />
      {/* <JobCategories /> */}
      {/* <StartJob /> */}
      <Footer />
    </>
  );
}

export default App;
