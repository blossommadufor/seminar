import React from "react";
// import speaker from "../../public/assets/placeholder.jpg";

const Speakers = () => {
  const speakers = [
    {
      name: "Evangelist  Abiodun Adegoroye",
      image: "/assets/abiodun.png",
      bio: "Brother Abiodun Adegoroye currently serves as evangelist and guidance/marital counselor. He has done mission work in several African countries like Kenya, Eswatini, Tanzania, Sierra Leone, and Liberia. He served as a lecturer for 18 years @School of Biblical Studies, Jos and as preacher for 13 years @Church of Christ, Kado Abuja. He is happily married and has three children.",
      congregation: "C.O.C Kado",
      contact: "07027864532",
    },

    {
      name: "Evangelist Felix Ekpenyong",
      image: "/assets/felix.jpg",
      bio: "Brother Felix Ekpenyong is married to Sister Aniebiet Felix with two children. He is a servant of God who has devoted the past 18 years of his to preaching the gospel of Christ. He is a seasoned radio and television evangelist, and for over a decade his voice was one of the most loved on the Let the Bible Speak program on Ray Power 100.5 FM, Abuja.He is a passionate teacher of the word of God. Thus, he is one of the seasoned lecturers with the Bear Valley Bible Institute Nigeria. With a burning passion for soul-winning, he initiated the Church of Christ Evangelism and Medical Outreach, also known as Africa Missions, with the mission to touch lives and save souls.He is also the anchor of BOC Raw Truth TV on YouTube — a channel dedicated to proclaiming God's unfiltered truth and exposing religious deception, so that many may walk in the light and freedom of Christ.",
      congregation: "C.O.C Kado",
      contact: "09011223347",
    },
  ];

  const Speaker = ({ speaker }) => {
    return (
      <div className="flex bg-white rounded-2xl overflow-hidden">
        <img
          src={speaker.image}
          alt={speaker.name}
          className="w-[300px] h-full object-cover object-top hidden lg:block"
        />
        <div className="py-5 lg:py-8 px-5 lg:px-10">
          <img
            src={speaker.image}
            alt={speaker.name}
            className="w-[150px] h-[150px] rounded-full object-cover object-top lg:hidden mb-5"
          />
          <h3 className="text-xl lg:text-2xl font-semibold text-secondary">
            {speaker.name}
          </h3>
          <div className="flex gap-2 mb-5 lg:mt-1">
            <p className="text-gray-500">{speaker.congregation}</p>
            <p className="text-gray-500">|</p>
            <p className="text-gray-500">{speaker.contact}</p>
          </div>
          <p className="leading-relaxed">{speaker.bio}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-primary">
      <div
        id="speaker"
        className="md:pt-40 pt-10 pb-10 md:pb-20 lg:pb-32 md:px-10 px-5 xl:px-16 container mx-auto"
      >
        <div className="max-w-4xl mx-auto pb-14 pt-10">
          <h2 className="lg:text-5xl text-3xl text-center pb-6 font-bold text-white">
            Meet Our Speakers
          </h2>
          <p className="text-center text-gray-200 leading-relaxed md:text-lg">
            Meet our invited speakers—faithful ministers and brethren dedicated
            to teaching God’s word and guiding the church. Each speaker brings
            unique experience and insight to inspire, encourage, and strengthen
            your walk in Christ.
          </p>
        </div>
        <div className="grid gap-10">
          {speakers.map((speaker, index) => (
            <Speaker key={index} speaker={speaker} />
          ))}
        </div>
        {/* <div className="grid xl:grid-cols-2 gap-10 xl:px-16 md:px-10 px-8">
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
      </div> */}
      </div>
    </div>
  );
};

export default Speakers;
