import React from "react";
import Header from "../sections/Header";
import JobSearch from "../sections/jobSearch";
import Companies from "../sections/Companies";
import LatestJobs from "../sections/LatestJobs";

const Home = () => {
  return (
    <div>
      <Header />
      <JobSearch />
      <Companies />
      <LatestJobs />
    </div>
  );
};

export default Home;
