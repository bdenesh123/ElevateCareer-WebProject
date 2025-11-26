import React from "react";
import Header from "../sections/Header";
import Companies from "../sections/Companies";
import LatestJobs from "../sections/LatestJobs";
import Footer from "../sections/Footer";
import JobSearch from "../sections/jobSearch";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <JobSearch />
      <Companies />
      <LatestJobs />
      <Footer />
    </div>
  );
};

export default Home;
