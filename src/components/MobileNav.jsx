import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../../public/assets/logo3.png";

export default function MobileNav({ toggle }) {
  return (
    <div className="fixed w-full px-8 pt-6 pb-6 top-0 left-0 bg-white">
      <div className="wrap w-full flex items-center justify-between h-20">
        <div>
          <img src={logo} className="w-20" />
        </div>
        <FontAwesomeIcon
          onClick={toggle}
          icon={faTimes}
          className="text-primary h-5 cursor-pointer"
        />
      </div>
      <div className="wrap flex flex-col pt-8">
        <div className="pb-10">
          <ul className="flex flex-col gap-5 text-p">
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#schedule">Schedule</a>
            </li>
            <li>
              <a href="#speaker">Speakers</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <a href="#register">
          <button className="bg-blue-600 md:hidden block text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Register Now
          </button>
        </a>
      </div>
    </div>
  );
}
