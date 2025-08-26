import React from "react";
import about from "../../public/assets/logo1.png";

const About = () => {
  return (
    <div
      id="about"
      className="md:py-20 py-10 bg-gray-100 flex flex-col md:flex-row gap-5 md:gap-0 justify-evenly items-center"
    >
      <div className="md:w-3/6 items-center px-6 gap-10">
        <div className="">
          <h2 className="md:text-5xl text-3xl font-bold text-secondary mb-6">
            About Us
          </h2>

          <p className="md:text-lg text-primary mb-6 leading-relaxed">
            We are dedicated to spreading the Word and building a strong
            community of believers. Our mission is to inspire faith, hope, and
            love through God's word and practical fellowship.
            <br /> Join us as we come together to worship, learn, and find hope
            in the sovereignty of God. This program promises to be a powerful
            time of encouragement and spiritual growth.
            <br />
            Invite your friends, family, and neighbors!. We look forward to
            fellowshipping with you.
          </p>
        </div>
      </div>

      <div className="md:w-2/6 px-20 md:px-0">
        <img src={about} className="relative z-10" />
      </div>
    </div>
  );
};

export default About;
