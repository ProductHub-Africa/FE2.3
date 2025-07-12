import { useState } from "react";

const useJobApiData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [jobData, setJobData] = useState([]);
  const [adzunaJobData, setAdzunaJobData] = useState([]);
  const [JSearchJobData, setJSearchJobData] = useState([]);
  const [getAllJobsData, setGetAllJobsData] = useState([]);
  // const [adzunaJobOnly, setAdzunaJobOnly] = useState([]);
  const searchKeyword = localStorage.getItem("searchedData") || "";

  const fetchRemotiveJobData = async () => {
    const baseURL = `https://remotive.com/api/remote-jobs`;
    try {
      const response = await fetch(baseURL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setJobData(data.jobs || []);
      return data.jobs || [];
    } catch (error) {
      console.log(`Check Error`, error);
      return [];
    }
  };

  const fetchAdzunaJobData = async () => {
    const baseURL = `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${
      import.meta.env.VITE_APP_ADZUNA_ID
    }&app_key=${import.meta.env.VITE_APP_ADZUNA_KEY}&results_per_page=10`;

    try {
      const response = await fetch(baseURL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setAdzunaJobData(data.results || []);
      return data.results || [];
    } catch (error) {
      console.error("Error fetching Adzuna job data:", error);
      return [];
    }
  };

  const fetchJSearchJobData = async () => {
    const baseURL = `https://jsearch.p.rapidapi.com/search?query=Google+for+Jobs&page=1&num_pages=1&country=us&date_posted=all`;

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_APP_JSEARCH_API_KEY,
        "x-rapidapi-host": import.meta.env.VITE_APP_JSEARCH_HOST,
      },
    };

    try {
      const response = await fetch(baseURL, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setJSearchJobData(data.data);
      console.log("JSearch Data", data.data);
      return data.data || [];
    } catch (error) {
      console.error("Error fetching JSearch job data:", error);
      return [];
    }
  };

  const setSchemaForRemotiveJobs = (jobData) => {
    return jobData.map((job) => ({
      id: job.id,
      title: job.title,
      companyName: job.company_name,
      companyLogo: job.company_logo,
      applyUrl: job.url,
      jobLocation: job.candidate_required_location || "Remote",
      jobType: job.job_type || "Full-time",
      jobSalary: job.salary || "Not specified",
      datePosted: job.publication_date,
      source: "Remotive",
    }));
  };

  const setSchemaForAdzunaJobs = (adzunaJobData) => {
    return adzunaJobData.map((job) => ({
      id: job.id,
      title: job.title,
      companyName: job.company.display_name,
      companyLogo: "",
      applyUrl: job.redirect_url,
      jobLocation: job.location.display_name || "Remote",
      jobType: job.contract_type || "Full-time",
      jobSalary: job.salary_min
        ? `£${job.salary_min} - £${job.salary_max}`
        : "Not specified",
      datePosted: job.created,
      source: "Adzuna",
    }));
  };

  const setSchemaforJSearchJobs = (JSearchJobData) => {
    return JSearchJobData.map((job) => ({
      id: job.job_id,
      title: job.job_title,
      companyName: job.employer_name,
      companyLogo: job.employer_logo,
      applyUrl: job.job_apply_link,
      jobLocation: job.job_location,
      jobType: job.job_employment_type,
      jobSalary: `$${job.job_min_salary}`,
      // will later add max salary here
      datePosted: job.job_posted_at_datetime_utc || "No Date",
      source: "JSearch",
    }));
  };

  const getAllJobs = async () => {
    setIsLoading(true);
    try {
      const [remotiveJobDatas, adzunaJobDatas, JSearchJobDatas] =
        await Promise.allSettled([
          fetchRemotiveJobData(),
          fetchAdzunaJobData(),
          fetchJSearchJobData(),
        ]).then((result) =>
          result.map((res) => (res.status === "fulfilled" ? res.value : []))
        );

      const allJobs = [
        ...setSchemaForRemotiveJobs(remotiveJobDatas),
        ...setSchemaForAdzunaJobs(adzunaJobDatas),
        ...setSchemaforJSearchJobs(JSearchJobDatas),
      ];

      setGetAllJobsData(allJobs);

      return allJobs;
    } catch (error) {
      setIsLoading(false);
      return console.error("Error while fetch all jobs: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredSearchedJobs = getAllJobsData.filter((job) => {
    const q = searchKeyword.toLowerCase();
    const matchesTitle = job.title.toLowerCase().includes(q);
    return matchesTitle;
  });

  // const filteredAdzunaJobs = getAllJobsData.filter((job) => {
  //   if (job.source === "Adzuna") {
  //     setAdzunaJobOnly(job);
  //     return job;
  //   }
  // });

  return {
    isLoading,
    jobData,
    adzunaJobData,
    JSearchJobData,
    // adzunaJobOnly,
    fetchRemotiveJobData,
    fetchAdzunaJobData,
    fetchJSearchJobData,
    getAllJobs,
    getAllJobsData,
    filteredSearchedJobs,
    // filteredAdzunaJobs,
  };
};

export default useJobApiData;
