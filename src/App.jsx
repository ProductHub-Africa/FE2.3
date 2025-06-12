// import jobPics from "../src/assets/img/job.svg";
import Footer from "./components/Footer";
import Header from "./components/Header";
import JobCategories from "./components/JobCategories";
import NavBar from "./components/NavBar";
import RecentJob from "./components/RecentJob";
import StartJob from "./components/StartJob";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <RecentJob />
      <JobCategories />
      <StartJob />
      <Footer />
    </>
  );
}

export default App;
