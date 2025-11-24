import React from "react";
import Header from "../sections/Header";
import JobSearch from "../sections/jobSearch";
import Companies from "../sections/Companies";
import LatestJobs from "../sections/LatestJobs";
import Footer from "../sections/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <JobSearch />
      <Companies />
      <LatestJobs />
      <Footer />
    </div>
  );
};

export default Home;
