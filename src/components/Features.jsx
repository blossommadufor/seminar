import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookBible,
  faHandsPraying,
  faMusic,
  faPray,
  faStethoscope,
  faUsers,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  return (
    <div
        id="features" className="bg-secondary">
      <div
        className="pt-20 md:pb-52 lg:pb-60 pb-10 md:px-10 px-8 xl:px-16 container mx-auto"
      >
        <div className="text-gray-200 pb-10">
          <h2 className="lg:text-5xl text-3xl text-center pb-6 font-bold">
            What To Expect
          </h2>

          <p className=" text-center md:text-lg max-w-4xl mx-auto">
            The Lectureship will be filled with joyful singing, heartfelt
            worship, and rich moments of fellowship that will refresh your
            spirit. Come and experience the power of God's Word as we explore His
            sovereignty over life's challenges. A time of hope, encouragement,
            and spiritual revival awaits you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 xl:gap-8">
          <div className="flex flex-col xl:flex-row bg-primary py-10 gap-5 px-5 text-gray-200">
            <div>
              <FontAwesomeIcon
                icon={faBookBible}
                className="text-3xl text-light"
              />
            </div>

            <div>
              <h3 className="pb-5 font-semibold text-xl">
                Biblical Lectures
              </h3>
              <p>
                Sit under Spirit-led speakers who will open the Scriptures in
                ways that bring clarity and fresh revelation.
              </p>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row bg-light py-10 gap-5 px-5 text-gray-200">
            <div>
              <FontAwesomeIcon
                icon={faUsers}
                className="text-primary text-3xl"
              />
            </div>

            <div>
              <h3 className="pb-5 text-gray-200 font-semibold text-xl">
                Fellowship
              </h3>
              <p>
                Be part of a vibrant community of believers who encourage one
                another in faith. 
              </p>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row bg-primary py-10 gap-5 px-5">
            <div>
              <FontAwesomeIcon icon={faMusic} className="text-3xl text-light" />
            </div>

            <div className="text-gray-200">
              <h3 className="pb-5 font-semibold text-xl">Singing</h3>
              <p>
              Join in heartfelt songs of praise that celebrate God's goodness and strengthen our faith in unity. 
              </p>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row bg-light py-10 gap-5 px-5 text-gray-200">
            <div>
              <FontAwesomeIcon
                icon={faPray}
                className="text-primary text-3xl"
              />
            </div>
            
            <div>
              <h3 className="pb-5 text-gray-200 font-semibold text-xl">
              Prayer & Intercession
              </h3>
              <p>
              Take part in heartfelt times of prayer where we lay our burdens before God and lift one another up.
              </p>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row bg-primary py-10 gap-5 px-5 text-gray-200">
            <div>
              <FontAwesomeIcon
                icon={faHandsPraying}
                className="text-3xl text-light"
              />
            </div>

            <div>
              <h3 className="pb-5 font-semibold text-xl">
                Worship
              </h3>
              <p>
              Experience a sacred atmosphere of worship where burdens are lifted and hearts are renewed.
              </p>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row bg-light py-10 gap-5 px-5 text-gray-200">
            <div>
              <FontAwesomeIcon
                icon={faStethoscope}
                className="text-primary text-3xl"
              />
            </div>

            <div>
              <h3 className="pb-5 text-gray-200 font-semibold text-xl">
                Medical Outreach
              </h3>
              <p>
              Free medical check-ups, health talks, and consultations will be offered after the event.
              </p>
            </div>
          </div>
          <div className="hidden fflex bg-light py-10 gap-5 px-5 text-gray-200">
            <div>
              <FontAwesomeIcon
                icon={faUtensils}
                className="text-primary text-3xl"
              />
            </div>

            <div>
              <h3 className="pb-5 text-gray-200 font-semibold text-xl">
                Refreshments
              </h3>
              <p>
              Delicious meals and snacks will be served to keep you refreshed and satisfied during the event.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Features;
