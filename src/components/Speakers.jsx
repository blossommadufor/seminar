import React from "react";
// import speaker from "../../public/assets/placeholder.jpg";

const Speakers = () => {
  const speakers = [
    {
      name: "Evangelist Samuel Oladipo",
      image: "/assets/abiodun.png",
      bio: "Evangelist Samuel Oladipo is a dedicated minister of the Church of Christ with over 20 years of service in evangelism, teaching, and church planting across southwestern Nigeria. He is passionate about restoring New Testament Christianity and guiding souls through sound biblical teaching. Samuel has served congregations in Ibadan, Akure, and Lagos, where he has been actively involved in gospel campaigns, youth mentorship, and leadership training for church workers. He is also known for his radio Bible teaching programs, which have reached listeners beyond the church walls. He is married to Sister Abiola, and together they are blessed with three children. Evangelist Oladipo continues to labor faithfully, equipping the saints and spreading the message of Christ’s kingdom.",
      congregation: "C.O.C Kado",
      contact: "07027864532",
    },
    {
      name: "Evangelist Chinedu Okafor",
      image: "/assets/felix.png",
      bio: "Evangelist Chinedu Okafor is a minister of the Church of Christ based in southeastern Nigeria. With a background in education and theology, he has devoted the last 15 years to preaching the gospel and nurturing local congregations. Chinedu has worked extensively in rural evangelism, helping to establish new congregations in Anambra and Enugu States. His ministry emphasizes Bible study, Christian living, and practical discipleship, ensuring that new converts are grounded in the faith. Beyond pulpit work, he organizes youth Bible camps and marriage seminars, encouraging strong Christian homes. Brother Okafor is married to Sister Nneka, and they are blessed with two daughters. He is deeply committed to advancing the mission of the Church of Christ in Nigeria and beyond.",
      congregation: "C.O.C University of Abuja",
      contact: "09011223347",
    },
  ];

  const Speaker = ({ speaker }) => {
    return (
      <div className="flex bg-white rounded-2xl overflow-hidden">
        <img
          src={speaker.image}
          alt={speaker.name}
          className="w-[300px] h- object-cover object-top hidden lg:block"
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
