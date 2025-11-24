import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#064EA4] py-[80px] px-[120px] text-white">
      <div className="grid grid-cols-4 gap-10">
        {/* Column 1 – Branding */}
        <div className="space-y-6">
          <div className="font-semibold text-[20px]">
            Software Recruitment co.
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 text-[22px]">
            <a href="#" className="hover:opacity-80 transition">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="#" className="hover:opacity-80 transition">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="hover:opacity-80 transition">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="hover:opacity-80 transition">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>

        {/* Column 2 – Explore */}
        <div>
          <h3 className="font-bold text-[33px] mb-6">Explore</h3>
          <ul className="space-y-4 text-[16px] opacity-90">
            <li>Homepage</li>
            <li>For jobseekers</li>
            <li>For clients</li>
            <li>Our sectors</li>
            <li>Resources</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* Column 3 – Sectors */}
        <div>
          <h3 className="font-bold text-[33px] mb-6">Sectors</h3>
          <ul className="space-y-4 text-[16px] opacity-90">
            <li>Software engineering</li>
            <li>DevOps</li>
            <li>Cloud</li>
            <li>Infrastructure</li>
            <li>Testing</li>
            <li>Security</li>
          </ul>
        </div>

        {/* Column 4 – Services */}
        <div>
          <h3 className="font-bold text-[33px] mb-6">Services</h3>
          <ul className="space-y-4 text-[16px] opacity-90">
            <li>Nav item</li>
            <li>Nav item</li>
            <li>Nav item</li>
            <li>Nav item</li>
            <li>Nav item</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
