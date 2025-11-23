import React from "react";
import { headerItems } from "../data/hompageData";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../components/Button";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container flex justify-between items-center">
        <div className="flex items-center  gap-[46px]">
          <div>
            <p className=" md:flex items-center font-sans font-bold text-[20px] text-[#064EA4]">
              Software Recruitment co.
            </p>
          </div>

          <nav className="hidden md:flex items-center gap-[30px] p-[0]">
            {headerItems.map((item) => (
              <button
                key={item.name}
                className="flex items-center gap-1 text-[#1A1A1A]"
                onClick={() => console.log(`${item.name} clicked`)}
                aria-label={`Open ${item.name} dropdown`}
              >
                {item.name}
                <FontAwesomeIcon
                  icon={faCaretDown}
                  style={{ color: "#064EA4" }}
                  className="w-[24px] h-[24px]"
                />
              </button>
            ))}
          </nav>
        </div>

        <div className="flex gap-[10px]">
          <Button className="text-[#451B09]" bgColor="#FCDF69">
            Upload CV
          </Button>
          <Button className="text-[#451B09]" bgColor="#F99D76">
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
