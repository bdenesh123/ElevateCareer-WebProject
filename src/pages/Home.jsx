import React from "react";
import Header from "../sections/Header";
import Companies from "../sections/Companies";
import LatestJobs from "../sections/LatestJobs";
import Footer from "../sections/Footer";
import TempJobSearch from "../sections/TempJobSearch.jsx";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <TempJobSearch />
      <Companies />
      <LatestJobs />
      <Footer />
    </div>
  );
};

export default Home;
