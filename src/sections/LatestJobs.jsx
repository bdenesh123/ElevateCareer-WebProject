import React, { useRef, useState, useEffect } from "react";
import { jobSlides } from "../data/hompageData";
import JobCard from "../components/JobCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";

const LatestJobs = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(4);
  const [slides, setSlides] = useState([]);

  const calculateCardsPerSlide = () => {
    const width = window.innerWidth;
    if (width < 640) return 1;
    if (width < 1000) return 2;
    if (width < 1650) return 3;
    return 4;
  };

  const buildSlides = () => {
    const perSlide = calculateCardsPerSlide();
    setCardsPerSlide(perSlide);

    const allJobs = jobSlides.flat();
    const newSlides = [];
    for (let i = 0; i < allJobs.length; i += perSlide) {
      newSlides.push(allJobs.slice(i, i + perSlide));
    }
    setSlides(newSlides);

    gsap.set(sliderRef.current, { x: 0 });
    setCurrentIndex(0);
  };

  // Handle resize
  useEffect(() => {
    buildSlides();
    window.addEventListener("resize", buildSlides);
    return () => window.removeEventListener("resize", buildSlides);
  }, []);

  const slideTo = (newIndex) => {
    const width = sliderRef.current.offsetWidth;
    gsap.to(sliderRef.current, {
      x: -width * newIndex,
      duration: 0.8,
      ease: "power3.inOut",
    });
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    slideTo((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    slideTo((currentIndex - 1 + slides.length) % slides.length);
  };

  return (
    <section className="bg-[#D7E7FB] py-[60px] md:py-[80px] px-[20px] sm:px-[40px] lg:px-[120px] overflow-hidden">
      <div className="flex flex-col items-center w-full">
        <h2 className="text-[#0E2152] text-[32px] sm:text-[40px] lg:text-[56px] font-bold text-center">
          Latest Jobs
        </h2>

        <div className="relative w-full mt-12 overflow-hidden">
          <div
            ref={sliderRef}
            className="flex w-full"
            style={{ willChange: "transform" }}
          >
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                className="flex gap-8 w-full justify-center flex-shrink-0"
              >
                {slide.map((card, cardIndex) => (
                  <JobCard key={cardIndex} {...card} />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between w-full mt-10">
          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="text-[#0E2152] hover:opacity-70 transition"
            >
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="text-[28px] sm:text-[32px]"
              />
            </button>

            <button
              onClick={nextSlide}
              className="text-[#0E2152] hover:opacity-70 transition"
            >
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="text-[28px] sm:text-[32px]"
              />
            </button>
          </div>

          <button className="text-[#0E2152] font-medium text-[16px] sm:text-[18px] hover:underline">
            View more jobs
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestJobs;
