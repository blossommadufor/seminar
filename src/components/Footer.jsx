import React from "react";
import logo from "../../public/assets/logo3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone, } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-light py-10 md:px-20 flex flex-col md:flex-row md:gap-32 gap-10 items-center justify-center">

      <div className="flex flex-col items-center">
        <div>
          <img src={logo} alt="" className="w-20" />
        </div>
        <h2 className="text-2xl text-gray-200 text-center pt-4">Church Of Christ Nyanya</h2>
      </div>

      <div className="flex flex-col gap-5 text-gray-200">
      
        <div className="flex items-center gap-4">
            <div className="flex justify-center items-center bg-secondary rounded-full w-12 h-12">
                <FontAwesomeIcon icon={faPhone} className="text-gray-200 text-xl"/>
            </div>
            <div>
                <p>+234-999-888-7777</p>
            </div>
        </div>

        <div className="flex items-center gap-4">
            <div className="flex justify-center items-center bg-secondary rounded-full w-12 h-12">
                <FontAwesomeIcon icon={faEnvelope} className="text-gray-200 text-xl"/>
            </div>
            <div>
                <p>cocnyanya@gmail.com <br/> P.O Box 3135 Garki Abuja</p>
            </div>
        </div>

        <div className="flex items-center gap-4">
            <div className="flex justify-center items-center bg-secondary rounded-full w-12 h-12 flex-shrink-0">
                <FontAwesomeIcon icon={faLocationDot} className="text-gray-200 text-xl"/>
            </div>
            <div>
                <p>Plot R17, Along Nyanya-Karsi Road</p>
            </div>
        </div>

        <div className="flex items-center gap-4">
            <div className="flex justify-center items-center bg-secondary rounded-full w-12 h-12">
                <FontAwesomeIcon icon={faFacebook} className="text-gray-200 text-xl"/>
            </div>
            <div>
                <p>@Church of christ nyanya </p>
            </div>
        </div>

      </div>

    </div>
  );
};

export default Footer;
