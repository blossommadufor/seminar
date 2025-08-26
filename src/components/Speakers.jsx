import React from "react";
import speaker from "../../public/assets/placeholder.jpg";

const Speakers = () => {
  return (
    <div id="speaker" className="md:pt-40 pt-10 pb-20 bg-primary">
      <div>
        <h2 className="text-center md:text-5xl text-3xl text-gray-200 pb-10">Meet Our Speakers</h2>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10  px-16">
        <div className="rounded-xl shadow-xl bg-secondary">
          <div className="h-60">
            <img
              src={speaker}
              className="p-4 rounded-t-xl h-full w-full object-cover"
            />
          </div>
          <div className="bg-secondary rounded-b-xl text-center py-6 ">
            <h3 className="text-white text-xl font-semibold pb-1">Name</h3>
            <p className="text-white ">Title or Topic</p>
          </div>
        </div>

        <div className="rounded-xl shadow-xl bg-secondary">
          <div className="h-60">
            <img
              src={speaker}
              className="p-4 rounded-t-xl h-full w-full object-cover"
            />
          </div>
          <div className="bg-secondary rounded-b-xl text-center py-6 ">
            <h3 className="text-white text-xl font-semibold pb-1">Name</h3>
            <p className="text-white ">Title or Topic</p>
          </div>
        </div>

        <div className="rounded-xl shadow-xl bg-secondary">
          <div className="h-60">
            <img
              src={speaker}
              className="p-4 rounded-t-xl h-full w-full object-cover"
            />
          </div>
          <div className="bg-secondary rounded-b-xl text-center py-6 ">
            <h3 className="text-white text-xl font-semibold pb-1">Name</h3>
            <p className="text-white ">Title or Topic</p>
          </div>
        </div>

        <div className="rounded-xl shadow-xl bg-secondary">
          <div className="h-60">
            <img
              src={speaker}
              className="p-4 rounded-t-xl h-full w-full object-cover"
            />
          </div>
          <div className="bg-secondary text-center rounded-b-xl py-6 ">
            <h3 className="text-white text-xl font-semibold pb-1">Name</h3>
            <p className="text-white ">Title or Topic</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
