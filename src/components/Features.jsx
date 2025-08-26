import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookBible,
  faFire,
  faUsers,
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
            Why You Should Join?
          </h2>

          <p className=" text-center md:text-lg">
            Come and experience the power of God's Word as we explore His
            sovereignty over life's challenges.
            <br /> A time of hope, encouragement, and spiritual revival awaits
            you.
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
                Biblical Teaching & Learning
              </h3>
              <p>
                Sit under Spirit-led ministers who will open the Scriptures in
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
                Fellowship & Community
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
              <FontAwesomeIcon icon={faFire} className="text-3xl text-light" />
            </div>

            <div className="text-gray-200">
              <h3 className="pb-5 font-semibold text-xl">Spiritual Growth</h3>
              <p>
                This conference is a chance to renew your commitment, deepen
                your relationship with God, and ignite your spiritual passion.
                Leave refreshed, equipped, and ready to live boldly in the light
                of God's sovereignty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
