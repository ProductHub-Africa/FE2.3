// import jobPics from "../src/assets/img/job.svg";
import { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import JobCategories from "./components/JobCategories";
import NavBar from "./components/NavBar";
import RecentJob from "./components/RecentJob";
// import StartJob from "./components/StartJob";

import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [jobData, setJobData] = useState([]);
  const [roleQuery, setRoleQuery] = useState("");

  const handleSearchTerms = (query) => {
    setRoleQuery(query);
  };

  const fetchJobData = async (query) => {
    const baseURL = query
      ? `https://remotive.com/api/remote-jobs?search=${encodeURIComponent(
          query
        )}`
      : `https://remotive.com/api/remote-jobs`;

    setIsLoading(true);
    try {
      const response = await fetch(baseURL);
      if (!response.ok) {
        setIsLoading(false);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setJobData(data.jobs || []);
    } catch (error) {
      console.log(`Check Error`, error);
    } finally {
      setIsLoading(false);
      // setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJobData(roleQuery);
  }, [roleQuery]);

  return (
    <>
      <NavBar />
      <Header searchTerms={handleSearchTerms} />
      <RecentJob allJobs={jobData} loader={isLoading} />
      <JobCategories />
      {/* <StartJob /> */}
      <Footer />
    </>
  );
}

export default App;
