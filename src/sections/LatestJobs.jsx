import React from "react";
import { jobCards } from "../data/hompageData";
import JobCard from "../components/JobCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const LatestJobs = () => {
  return (
    <section className="bg-[#D7E7FB] py-[80px] px-[120px] h-[802px]">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="text-[#0E2152] text-[56px] font-bold">Latest Jobs</div>

        {/* Jobs Row */}
        <div className="grid grid-cols-3 gap-30 mt-10 w-full">
          {jobCards.map((card, index) => (
            <JobCard key={index} {...card} />
          ))}
        </div>

        {/* Footer Row */}
        <div className="flex items-center justify-between w-full mt-10 px-[5px]">
          {/* Slider Arrows */}
          <div className="flex items-center gap-4">
            <button className="text-[#0E2152] hover:opacity-70 transition">
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="text-[32px]"
              />
            </button>
            <button className="text-[#0E2152] hover:opacity-70 transition">
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="text-[32px]"
              />
            </button>
          </div>

          {/* View More Jobs */}
          <button className="text-[#0E2152] font-medium text-[18px] hover:underline">
            View more jobs
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestJobs;
