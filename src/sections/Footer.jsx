import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { footerLinks } from "../data/hompageData";

const Footer = () => {
  return (
    <footer className="bg-[#064EA4] py-[80px] px-[120px] text-white">
      <div className="grid grid-cols-4 gap-10">
        <div className="space-y-6">
          <div className="font-semibold text-[20px]">
            {footerLinks.branding.title}
          </div>

          <div className="flex items-center gap-6 text-[22px]">
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

        {footerLinks.sections.map((section, index) => (
          <div key={index}>
            <h3 className="font-bold text-[33px] mb-6">{section.title}</h3>

            <ul className="space-y-4 text-[16px] opacity-90">
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
