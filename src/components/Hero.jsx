import React, { useEffect, useState } from "react";
import Countdown from "./Countdown";

const images = [
  "/assets/hero1.jpg",
  "/assets/hero2.jpg",
  "/assets/hero3.jpg",
  "/assets/hero4.jpg",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen lg:max-h-[800px] max-h-[600px] overflow-hidden">
      <div
        className="flex h-full w-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Slide ${idx}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(38,41,77,0.8)]"></div>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center lg:justify-center h-full text-white text-center px-6 lg:pt-16 pt-32 md:pt-32">
        <h2 className="md:text-2xl text-lg lg:text-xl lg:mt-8 xl:mt-0 font-bold">
          THE CHURCH OF CHRIST NYANYA ANNUAL BIBLE LECTURESHIP 2025
        </h2>

        <p className="md:text-5xl xl:text-6xl text-3xl font-medium leading-snug pt-8">
          The Sovereignty
          <br /> Of God Over Life&apos;s Challenges
        </p>

        <p className="pt-8 text-xl">
          <span className="text-blue-400">DATE :</span> 7th September, 2025 |
          9AM
        </p>

        <div className="mt-10">
          <Countdown />
        </div>
      </div>
    </div>
  );
};

export default Hero;
