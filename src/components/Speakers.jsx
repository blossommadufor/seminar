import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import speaker from "../../public/assets/placeholder.jpg";

const Speakers = () => {
  return (
    <div
      id="speaker"
      className="md:pt-40 pt-10 pb-10 md:pb-20 lg:pb-32 bg-primary"
    >
      <div>
        <h2 className="text-center md:text-5xl text-3xl text-gray-200 pb-20 pt-10 font-bold">
          Meet Our Speakers
        </h2>
      </div>
      <div className="grid xl:grid-cols-2 gap-10 xl:px-16 md:px-10 px-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/5">
            <img src={speaker} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="bg-gray-200 text-primary py-6 flex flex-col px-6 md:w-3/5">
            <div className="pb-5">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-light">
                <FontAwesomeIcon
                  icon={faBookOpen}
                  className="text-gray-200 text-2xl"
                />
              </div>
            </div>
            <div className="">
              <h3 className=" text-xl font-bold pb-2">LECTURE I</h3>
              <p className=" text-xl pb-2 font-semibold">
                God's Sovereignty in the Midst of Suffering
              </p>
              <p className="pb-6 text-lg">~ Evangelist Abiodun Adegoroye ~</p>

              <div>
                <button className="bg-blue-700 text-gray-200 px-4 py-2 hover:bg-secondary">
                  Download Lecture
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
        <div className="md:w-2/5">
            <img src={speaker} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="bg-gray-200 text-primary py-6 flex flex-col px-6 md:w-3/5">
            <div className="pb-5">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-light">
                <FontAwesomeIcon
                  icon={faBookOpen}
                  className="text-gray-200 text-2xl"
                />
              </div>
            </div>
            <div className="">
              <h3 className=" text-xl font-bold pb-2">LECTURE II</h3>
              <p className=" text-xl pb-2 font-semibold">
                God's Sovereignty: The Way, The Truth and The Life
              </p>
              <p className="pb-6 text-lg">~ Evangelist Felix Ekpenyong ~</p>

              <div>
                <button className="bg-blue-700 text-gray-200 px-4 py-2 hover:bg-secondary">
                  Download Lecture
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
