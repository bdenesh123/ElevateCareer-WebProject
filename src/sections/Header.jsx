import React, { useState, useEffect } from "react";
import { headerItems } from "../data/hompageData";
import {
  faCaretDown,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../components/Button";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen width
  const handleResize = () => {
    setIsMobile(window.innerWidth < 1100);
  };
  console.log(isMobile);
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-white w-full px-4 lg:px-[120px] py-4 relative">
      <div className="flex items-center justify-between customLg:px-[120px]">
        <div className="flex items-center gap-15">
          <p className="font-bold text-xl text-[#064EA4]">
            Software Recruitment co.
          </p>

          {!isMobile && (
            <nav className="flex gap-7">
              {headerItems.map((item) => (
                <button
                  key={item.name}
                  className="flex items-center gap-1 text-[#1A1A1A]"
                >
                  {item.name}
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    className="text-[#064EA4]"
                  />
                </button>
              ))}
            </nav>
          )}
        </div>

        {!isMobile && (
          <div className="flex gap-3 text-[#451B09]">
            <Button bgColor="#FCDF69">Upload CV</Button>
            <Button bgColor="#F99D76">Contact Us</Button>
          </div>
        )}

        {/* HAMBURGER ICON */}
        {isMobile && (
          <button
            className="text-2xl text-[#064EA4]"
            onClick={() => setOpen(!open)}
          >
            <FontAwesomeIcon icon={open ? faTimes : faBars} />
          </button>
        )}
      </div>

      {/* MOBILE MENU */}
      {isMobile && open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col gap-4 z-50">
          {headerItems.map((item) => (
            <button
              key={item.name}
              className="flex items-center justify-between py-2 border-b text-[#064EA4]"
            >
              {item.name}
              <FontAwesomeIcon icon={faCaretDown} className="text-[#064EA4]" />
            </button>
          ))}

          <div className="flex flex-row justify-center gap-3 mt-2 text-[#451B09]">
            <Button bgColor="#FCDF69">Upload CV</Button>
            <Button bgColor="#F99D76">Contact Us</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
