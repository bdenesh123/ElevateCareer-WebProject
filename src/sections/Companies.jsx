import React from "react";
import { companyLogos } from "../data/hompageData";

const Companies = () => {
  return (
    <section className="bg-white py-[60px] px-[120px]">
      <div className="flex flex-col items-center">
        {/* Heading */}
        <div className="text-[#686868] text-[16px] font-medium mb-8">
          Who we work with
        </div>

        {/* Logos row */}
        <div className="flex w-full h-[60px] gap-30">
          {companyLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-1  flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className=" object-contain  max-h-[30px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
