import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookBible,
  faChalkboardTeacher,
  faFire,
  faHandsPraying,
  faPray,
  faTools,
  faUsers,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  return (
    <div>
      <div
        id="features"
        className="pt-20 md:pb-44 pb-10 md:px-10 px-8 xl:px-16 bg-secondary"
      >
        <div className="text-gray-200 pb-10">
          <h2 className="lg:text-5xl text-3xl text-center pb-6 font-bold">
            What To Expect
          </h2>

          <p className=" text-center md:text-lg">
            The Lectureship will be filled with joyful singing, heartfelt
            worship, and rich moments of fellowship that will refresh your
            spirit.
            <br /> Come and experience the power of God's Word as we explore His
            sovereignty over life's challenges. A time of hope, encouragement,
            and spiritual revival awaits you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 ">
          <div className="flex bg-primary py-10 gap-5 px-5 text-gray-200">
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
                ways that bring clarity and fresh revelation. Each teaching is
                designed to help you grow in faith, understand God's
                sovereignty, and apply His Word to life's real challenges.
              </p>
            </div>
          </div>

          <div className="flex bg-light py-10 gap-5 px-5 text-gray-200">
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
                another in faith. This is more than an event, it's a family
                gathering where you'll build friendships, share experiences, and
                grow together in Christ.
              </p>
            </div>
          </div>

          <div className="flex bg-primary py-10 gap-5 px-5">
            <div>
              <FontAwesomeIcon icon={faChalkboardTeacher} className="text-3xl text-light" />
            </div>

            <div className="text-gray-200">
              <h3 className="pb-5 font-semibold text-xl">Workshop</h3>
              <p>
              Take part in dynamic workshops designed to inspire growth and transformation. These sessions offer practical guidance and spiritual insight to help you apply God’s truth with confidence in your daily life.
              </p>
            </div>
          </div>

          <div className="flex bg-light py-10 gap-5 px-5 text-gray-200">
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

          <div className="flex bg-primary py-10 gap-5 px-5 text-gray-200">
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

          <div className="flex bg-light py-10 gap-5 px-5 text-gray-200">
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
        </div>
      </div>
    </div>
  );
};

export default Features;
