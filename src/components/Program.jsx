import React from "react";

const programData = [
  {
    activity: "Opening Songs",
    facilitator: "Song Leaders",
    duration: "15 mins",
    time: "9:00 - 9:15am",
  },
  {
    activity: "Opening Prayers",
    facilitator: "Bishop Udoma Inyang",
    duration: "5 mins",
    time: "9:15 - 9:20am",
  },
  {
    activity: "Welcome Address / Thematic Analysis",
    facilitator: "Bro Clement Inobeme",
    duration: "15 mins",
    time: "9:20 - 9:35am",
  },
  {
    activity: "Song Interlude",
    facilitator: "Song Leaders",
    duration: "5 mins",
    time: "9:35 - 9:40am",
  },
  {
    activity: "1st Lecture: God's Sovereignty in the Midst of Suffering",
    facilitator: "Evangelist Abiodun Adegoroye",
    duration: "40 mins",
    time: "9:40 - 10:20am",
  },
  {
    activity: "Music Interlude",
    facilitator: "Song Leaders",
    duration: "5 mins",
    time: "10:20 - 10:25am",
  },
  {
    activity: "2nd Lecture: God's Sovereignty; The Way, The Truth and The Life",
    facilitator: "Evangelist Felix Ekpenyong",
    duration: "40 mins",
    time: "10:25 - 11:05am",
  },
  {
    activity: "Music Interlude",
    facilitator: "Song Leaders",
    duration: "5 mins",
    time: "11:05 - 11:10am",
  },
  {
    activity: "Questions & Answers",
    facilitator: "Speakers",
    duration: "30 mins",
    time: "11:10 - 11:40am",
  },
  {
    activity: "Call for Baptism",
    facilitator: "Bro Donald Esiet",
    duration: "5 mins",
    time: "11:40 - 11:45am",
  },
  {
    activity: "Prayers",
    facilitator: "Bro Samuel Edu",
    duration: "5 mins",
    time: "11:45 - 11:50am",
  },
  {
    activity: "Giving",
    facilitator: "Bro Utibe Edet Edo",
    duration: "10 mins",
    time: "11:50 - 12:00pm",
  },
  {
    activity: "Songs",
    facilitator: "Song Leaders",
    duration: "5 mins",
    time: "12:00 - 12:05pm",
  },
  {
    activity: "Communion",
    facilitator: "Bishop Jacob Achobe",
    duration: "20 mins",
    time: "12:05 - 12:25pm",
  },
  {
    activity: "Vote of Thanks",
    facilitator: "Bro Etim Willie",
    duration: "5 mins",
    time: "12:25 - 12:30pm",
  },
  {
    activity: "Announcement",
    facilitator: "Bro Icha Sunday",
    duration: "20 mins",
    time: "12:30 - 12:50pm",
  },
  {
    activity: "Closing Song",
    facilitator: "Song Leaders",
    duration: "10 mins",
    time: "12:50 - 1:00pm",
  },
  {
    activity: "Closing Prayer",
    facilitator: "Bishop Ntewo Bassey",
    duration: "5 mins",
    time: "1:00 - 1:05pm",
  },
  {
    activity: "Entertainment",
    facilitator: "Planning Committee",
    duration: "-",
    time: "-",
  },
  {
    activity: "Medical Outreach",
    facilitator: "COC Evangelism & Medical Outreach",
    duration: "-",
    time: "-",
  },
];

const Program = () => {
  return (
    <div className="xl:px-16 md:px-10 px-8 bg-secondary lg:py-20 py-10">
      <h1 className="lg:text-5xl text-3xl font-bold text-center pb-10 text-gray-200 ">
        Program of Events
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {programData.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 shadow-md rounded-xl p-4 border border-gray-200 text-primary"
          >
            <p className="text-xl font-semibold text-secondary mb-2">
              {item.activity}
            </p>
            <p>
              <span className="font-medium">Facilitator:</span>{" "}
              {item.facilitator}
            </p>
            {/* <p>
              <span className="font-medium">Duration:</span> {item.duration}
            </p> */}
            <p>
              <span className="font-medium">Time:</span> {item.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;
