import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { footerLinks } from "../data/hompageData";

const Footer = () => {
  return (
    <footer className="bg-[#064EA4] py-10 px-6 sm:px-12 lg:px-28 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 sm:gap-10">
        {/* Branding & Socials */}
        <div className="space-y-4 sm:space-y-6">
          <div className="font-semibold text-[20px]">
            {footerLinks.branding.title}
          </div>

          <div className="flex items-center gap-4 sm:gap-6 text-[22px]">
            {footerLinks.branding.socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="hover:opacity-80 transition"
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Footer Sections */}
        {footerLinks.sections.map((section, index) => (
          <div key={index} className="mt-6 sm:mt-0">
            <h3 className="font-bold text-[28px] sm:text-[30px] lg:text-[33px] mb-4 sm:mb-6">
              {section.title}
            </h3>
            <ul className="space-y-2 sm:space-y-4 text-[14px] sm:text-[16px] opacity-90">
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
