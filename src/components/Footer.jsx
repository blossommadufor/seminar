import React from "react";
import logo from "../../public/assets/logo3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
  faRadio,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-light py-10 md:px-20 grid  lg:grid-cols-3 md:grid-cols-2 xl:gap-32 gap-10 justify-center px-8">
      <div className="flex flex-col items-center col-span-">
        <div>
          <img src={logo} alt="" className="w-20" />
        </div>
        <h2 className="text-2xl text-gray-200 text-center pt-4">
          Church Of Christ Nyanya
        </h2>
      </div>

      <div className="flex flex-col gap-5 text-gray-200">
        <div className="flex items-center gap-4">
          <div className="flex justify-center items-center bg-secondary rounded-full w-12 h-12">
            <FontAwesomeIcon icon={faPhone} className="text-gray-200 text-xl" />
          </div>
          <div>
            <p>+234-999-888-7777</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex justify-center items-center bg-secondary rounded-full w-12 h-12">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-gray-200 text-xl"
            />
          </div>
          <div>
            <p>
              cocnyanya@gmail.com <br /> P.O Box 3135 Garki Abuja
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex justify-center items-center bg-secondary rounded-full w-12 h-12 flex-shrink-0">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-gray-200 text-xl"
            />
          </div>
          <div>
            <p>Plot R17, Along Nyanya-Karsi Road</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex justify-center items-center bg-secondary rounded-full w-12 h-12">
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-gray-200 text-xl"
            />
          </div>
          <div>
            <p>@Church of christ nyanya </p>
          </div>
        </div>
      </div>

      <div  className="text-gray-200">
        <h3 className="pb-5 font-semibold text-lg text-cente">RADIO/TV PROGRAMS</h3>

        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <div className="flex justify-center items-center bg-secondary rounded-full w-12 h-12 flex-shrink-0">
              <FontAwesomeIcon
                icon={faRadio}
                className="text-gray-200 text-xl"
              />
            </div>
            <div>
              <p>
                RayPower FM 100.5 - Every Sunday <br/> Time: 7 - 7:30am
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex justify-center items-center bg-secondary rounded-full w-12 h-12 flex-shrink-0">
              <FontAwesomeIcon
                icon={faRadio}
                className="text-gray-200 text-xl"
              />
            </div>
            <div>
              <p>
                ITV Channel 130 - Every Saturday <br/> Time:  6 - 6:30pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
