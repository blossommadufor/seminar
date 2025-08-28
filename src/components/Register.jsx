import React from "react";
import register from "../../public/assets/register.png";

const Register = () => {
  return (
    <div className="md:py-16 lg:py-24 py-10 lg:px-16 md:px-10 px-8 bg-gray-200 flex flex-col lg:flex-row items-center gap-20">
      <div className="lg:w-3/6">
        <div className="pb-4">
          <h2 className="md:text-4xl text-3xl font-bold text-secondary pb-5 text-center">
            Register To Attend Our Lectureship
          </h2>
          <p className="text-light text-center mb-6">
            Fill in your details to complete your registration
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-secondary py-10 px-5 md:px-10  rounded-2xl shadow-lg">
          <form className="space-y-6 ">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-200 font-medium mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                required
                className="w-full px-4 py-3 bg-primary outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-200 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 bg-primary outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-gray-200 font-medium mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                required
                className="w-full px-4 py-3 bg-primary"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Register
            </button>
          </form>
        </div>
      </div>

      <div className="lg:w-3/6">
        <img src={register} alt="" className="rounded-2xl"/>
      </div>
    </div>
  );
};

export default Register;
