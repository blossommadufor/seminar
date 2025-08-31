import React from "react";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Lectures() {
  const lectures = [
    {
      title: "Lecture I",
      speaker: "Evangelist Abiodun Adegoroye",
      description: "God's Sovereignty in the Midst of Suffering",
    },
    {
      title: "Lecture II",
      speaker: "Evangelist Felix Ekpenyong",
      description: "God's Sovereignty: The Way, The Truth and The Life",
    },
  ];

  const Lecture = ({ lecture }) => {
    return (
      <div className="bg-primary rounded-2xl overflow-hidden px-6 py-8 flex flex-col items-center text-center">
        <div className="text-primary pb-6 flex flex-col items-center justify-center px-6 md:w-3/5">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-light">
            <FontAwesomeIcon
              icon={faBookOpen}
              className="text-white text-4xl"
            />
          </div>
        </div>
        <div className="text-white">
          <h3 className="text-xl pb-2">{lecture.title}</h3>
          <p className="text-xl pb-4 font-semibold">{lecture.description}</p>
          <p className="pb-10 text-lg">{lecture.speaker}</p>
          <div>
            <button className="bg-blue-700 text-white px-4 h-12 w-full hover:bg-blue-500">
              Download Lecture
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white py-14 md:py-20 md:px-10 px-5 xl:px-16 container mx-auto">
      <div className="max-w-4xl mx-auto pb-14">
        <h2 className="lg:text-5xl text-3xl text-center pb-6 font-bold text-secondary">
          Seminar Lectures
        </h2>
        <p className="text-center leading-relaxed md:text-lg">
          Engage with thought-provoking seminar lectures designed to deepen your
          understanding of the Scriptures and provide practical lessons for
          daily Christian living. These sessions offer opportunities to learn,
          ask questions, and be equipped for service in God’s kingdom.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-5 xl:gap-8 w-full max-w-5xl mx-auto">
        {lectures.map((lecture, index) => (
          <Lecture key={index} lecture={lecture} />
        ))}
      </div>
    </div>
  );
}
