import React from "react";
import Countdown from "./Countdown";

const Hero = () => {
  return (
    <div
      className="relative h-screen lg:max-h-[800px] max-h-[600px] bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/hero1.jpg')"}}
    >
      <div className="absolute inset-0 bg-[rgba(38,41,77,0.8)]"></div>

      <div className="relative z-10 flex flex-col items-center lg:justify-center h-full text-white text-center px-6 lg:pt-16 pt-32 md:pt-32">

        <h2 className="md:text-2xl text-lG lg:text-xl lg:mt-8 xl:mt-0 font-bold">
          THE CHURCH OF CHRIST NYANYA ANNUAL BIBLE LECTURESHIP 2025
        </h2>

        <p className="md:text-5xl xl:text-6xl text-3xl font-medium leading-snug pt-8">
          <span className="text-blue-400">THEME : </span>
          The Sovereignty
          <br /> Of God Over Life's Challenges
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
