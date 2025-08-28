import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Speakers = () => {
  return (
    <div id="speaker" className="md:pt-40 pt-10 pb-20 bg-primary">
      <div>
        <h2 className="text-center md:text-5xl text-3xl text-gray-200 pb-10 font-bold">
          Meet Our Speakers
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-10  lg:px-16 md:px-10 px-8">
        <div className="bg-gray-200 text-primary py-6 flex flex-col px-6">
          <div className="flex items-center justify-center pb-5">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-light">
              <FontAwesomeIcon icon={faBookOpen} className="text-gray-200 text-2xl" />
            </div>
          </div>
          <div className="">
            <h3 className=" text-2xl font-semibold pb-2">
              LECTURE I
            </h3>
            <p className=" text-xl pb-2">
              God's Sovereignty in the Midst of Suffering
            </p>
            <p className="pb-6">~ Evangelist Abiodun Adegoroye ~</p>

            <div>
            <button className="bg-blue-700 text-gray-200 px-4 py-2 hover:bg-secondary">Download Lecture</button>
            </div>
          </div>
        </div>

        <div className="bg-gray-200 text-primary py-6 flex flex-col px-6">
          <div className="flex items-center justify-center pb-5">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-light">
              <FontAwesomeIcon icon={faBookOpen} className="text-gray-200 text-2xl" />
            </div>
          </div>
          <div className="">
            <h3 className=" text-2xl font-semibold pb-2">
              LECTURE II
            </h3>
            <p className=" text-xl pb-2">
              God's Sovereignty: The Way, The Truth and The Life
            </p>
            <p className="pb-6">~ Evangelist Felix Ekpenyong ~</p>

            <div>
            <button className="bg-blue-700 text-gray-200 px-4 py-2 hover:bg-secondary">Download Lecture</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
