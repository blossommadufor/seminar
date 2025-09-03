import React from "react";
import about from "../../public/assets/about.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div
      id="about"
      className="container mx-auto md:py-20 lg:py-24 py-10 bg-white flex flex-col lg:flex-row gap-5 md:gap-10 lg:gap-0 justify-evenly md:px-10  xl:px-16 items-center"
    >
      <div className="lg:w-3/6 items-center px-6 gap-10">
        <div className="">
          <h2 className="md:text-4xl text-3xl font-bold text-secondary mb-6">
            About Church Of Christ Nyanya
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

        <div className="flex flex-wrap gap-8 text-lg">
          <div className="flex gap-2 text-secondary items-center">
            <FontAwesomeIcon icon={faPhone} className="text-xl"/>
            <p>+234-999-888-7777</p>
          </div>

          <div className="flex gap-2 text-secondary items-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-xl"/>
            <p>@cocnyanya@gmail.com</p>
          </div>
        </div>

        <div className="flex gap-3 items-center text-secondary pt-8 pb-3 text-lg">
       <FontAwesomeIcon icon={faMapLocationDot} className="text-xl"/>
          <a href="https://maps.app.goo.gl/7vXcjfVrjnaS7qS49" target="blank"><p>Find Us On Google Maps</p></a>
        </div>
      </div>

      <div className="lg:w-3/6 md:px-0 px-8">
        <img src={about} className="rounded-2xl" />
      </div>
    </div>
  );
};

export default About;
