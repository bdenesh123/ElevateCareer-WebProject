import React from "react";
import jobSearchImg from "../assets/jobSearchImg.jpg";

const JobSearch = () => {
  return (
    <section
      className="
  relative bg-[#064EA4] 
  px-4 md:px-10 lg:px-[120px]
  py-10 lg:py-0
  overflow-hidden
"
    >
      {/* Ellipses */}
      <div className="absolute w-[220px] md:w-[290px] h-[220px] md:h-[290px] bg-[#F99D76] rounded-full -top-34 -left-34 z-0"></div>
      <div className="absolute w-[220px] md:w-[290px] h-[220px] md:h-[290px] bg-[#FCDF69] rounded-full -bottom-20 -right-16 z-0"></div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:h-[674px] relative z-10">
        <div className="flex flex-col gap-3 text-white max-w-full lg:max-w-[700px]">
          <div className="text-[16px] font-medium text-center lg:text-left mb-2">
            Software Recruitment Specialists
          </div>

          <div
            className="
        font-extrabold 
        text-4xl md:text-5xl lg:text-[66px]
        text-center lg:text-left mb-4.5
      "
          >
            Elevate your career
          </div>

          <div className="flex w-full h-[54px] md:h-[62px] bg-white rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="E.g. networking"
              className="flex-1 px-5 text-black outline-none"
            />
            <button className="px-6 md:px-[41px] bg-[#FCDF69] text-[#25210E] font-bold">
              Search jobs
            </button>
          </div>
        </div>

        <div className="relative z-20">
          <img
            src={jobSearchImg}
            alt="person"
            className="
          w-[260px] h-[260px] 
          md:w-[380px] md:h-[380px] 
          lg:w-[507px] lg:h-[480px]
          object-cover rounded-[30px]
        "
          />
        </div>
      </div>
    </section>
  );
};

export default JobSearch;
