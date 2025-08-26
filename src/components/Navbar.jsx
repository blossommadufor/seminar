import React, { useEffect, useState } from 'react'
import logo from "../../public/assets/logo3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-screen z-50 transition-all duration-300 flex px-8 items-center 
        ${sticky ? 'bg-white shadow-md' : 'bg-transparent'}
      `}
    >
      <div className="container mx-auto flex justify-between items-center py-2 px-6">
      
        <div className='py-2'>
          <img src={logo} alt="Logo" className="w-20" />
        </div>

        <ul className={`md:flex hidden lg:gap-10 md:gap-7 text-lg ${sticky ? 'text-primary' : 'text-white'}`}>
          <li><a href="#about">About Us</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#schedule">Schedule</a></li>
          <li><a href="#speaker">Speakers</a></li>
        </ul>

        <div>
          <a href='#register'>
            <button className="bg-blue-600 md:block hidden text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Register Now
            </button>
          </a>
        </div>
      </div>
      <div className="md:hidden cursor-pointer">
          <FontAwesomeIcon
            onClick={() => setShowNav(true)}
            icon={faBars}
            className={` text-3xl ${sticky ? 'text-primary' : 'text-white'}`}
          />
        </div>
        {showNav && <MobileNav toggle={() => setShowNav(false)} />}
    </div>
  )
}

export default Navbar

