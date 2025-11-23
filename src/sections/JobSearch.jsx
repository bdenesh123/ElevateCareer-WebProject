import React from "react";
import jobSearchImg from "../assets/jobSearchImg.jpg";

const JobSearch = () => {
  return (
    <section className="relative bg-[#064EA4] h-[674px] px-[120px] py-[20px] overflow-hidden">
      <div
        className="absolute w-[290px] h-[290px] bg-[#F99D76] rounded-full"
        style={{ top: "-140px", left: "-140px" }}
      />
      <div
        className="absolute w-[290px] h-[290px] bg-[#FCDF69] rounded-full"
        style={{ bottom: "-100px", right: "-70px" }}
      />

      <div className="flex items-center justify-between h-full">
        <div className="flex flex-col gap-[10px] text-white max-w">
          <div className="text-[16px] font-medium">
            Software Recruitment Specialists
          </div>

          <div className="text-[66px] font-extrabold">Elevate your career</div>

          <div className="flex w-full h-[62px] bg-white rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="E.g. networking"
              className="flex-1 px-5 py-3 text-black outline-none"
            />
            <button className="px-[41px] py-[10px] bg-[#FCDF69] text-[#25210E] font-bold text-[16px] rounded-r-full">
              Search jobs
            </button>
          </div>
        </div>

        <div className="relative z-20 mr-10">
          <img
            src={jobSearchImg}
            alt="person"
            className="w-[507px] h-[480px] object-cover rounded-[30px]"
          />
        </div>
      </div>
    </section>
  );
};

export default JobSearch;
