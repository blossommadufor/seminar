import React, { useEffect, useState } from 'react'
import logo from "../../public/assets/logo3.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

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
      <div className="container mx-auto flex justify-between items-center py-2 md:px-6">

        <div className='py-2'>
          <img src={logo} alt="Logo" className="md:w-20 w-16" />
        </div>

        <div>
          <a href='#register'>
            <button className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition md:text-xl">
              REGISTER NOW
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar

