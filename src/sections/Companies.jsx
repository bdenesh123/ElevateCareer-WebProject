import React, { useEffect, useRef } from "react";
import { companyLogos } from "../data/hompageData";
import { gsap } from "gsap";

const Companies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    let logosWidth = 0;
    const logoElements = container.querySelectorAll(".logo-item");
    logoElements.forEach((el, i) => {
      if (i < companyLogos.length) {
        logosWidth += el.offsetWidth + 160;
      }
    });

    gsap.to(container, {
      x: -logosWidth,
      duration: 12,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <section className="bg-white pt-[40px] pb-[60px] md:px-10 lg:px-[120px] overflow-hidden">
      <div className="flex flex-col items-center">
        <div className="text-[#686868] text-[16px] pb-[10px] font-medium">
          Who we work with
        </div>

        <div
          ref={containerRef}
          className="flex pt-[35px] gap-[160px] whitespace-nowrap"
        >
          {companyLogos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="logo-item inline-flex items-center justify-center flex-shrink-0"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="object-contain h-[18px] md:h-[26px]"
              />
            </div>
          ))}

          {companyLogos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="logo-item inline-flex items-center justify-center flex-shrink-0"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="object-contain h-[18px] md:h-[26px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
