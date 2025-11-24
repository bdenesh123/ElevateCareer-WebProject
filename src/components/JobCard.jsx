import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { faLocationDot, faMoneyBill } from "@fortawesome/free-solid-svg-icons";

const JobCard = ({
  background,
  textColor,
  tagColor,
  tag,
  title,
  location,
  salary,
  description,
  postedDate,
}) => {
  return (
    <div
      className="w-[373px] h-[420px] rounded-[30px] p-10 flex flex-col justify-between"
      style={{ background }}
    >
      {/* Tag */}
      <div className="mb-2">
        <span
          className="font-semibold text-[14px] bg-white rounded-[5px] px-[5px] py-[4px] inline-flex items-center gap-1"
          style={{ color: tagColor }}
        >
          <FontAwesomeIcon
            icon={faPython}
            className="text-[14px]"
            style={{ color: "#064EA4" }}
          />
          <span className="leading-[14px]">{tag}</span>
        </span>
      </div>

      {/* Title */}
      <h2 className="font-bold text-[30px] mb-2" style={{ color: textColor }}>
        {title}
      </h2>

      {/* Info Section */}
      <div className="flex flex-col gap-2 text-sm  mb-8">
        <p className="flex items-center gap-2 " style={{ color: textColor }}>
          <span>
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-[14px]"
              color={textColor}
            />
          </span>
          {location}
        </p>
        <p className="flex items-center gap-2" style={{ color: textColor }}>
          <span>
            {" "}
            <FontAwesomeIcon
              icon={faMoneyBill}
              className="text-[14px]"
              color={textColor}
            />
          </span>{" "}
          {salary}
        </p>
      </div>

      {/* Description */}
      <div className="mb-1">
        <p className="text-[15px] leading-[22px]" style={{ color: textColor }}>
          {description}
        </p>
      </div>

      {/* Button */}
      <button className="bg-white text-[#064EA4] text-[16px] w-full py-3 rounded-full font-medium mt-4">
        View this job
      </button>

      {/* Footer */}
      <p className="text-xs mt-4 opacity-70" style={{ color: textColor }}>
        Posted on {postedDate}
      </p>
    </div>
  );
};

export default JobCard;
