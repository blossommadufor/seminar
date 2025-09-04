import React, { useState } from "react";
import register from "../../public/assets/register.png";
import { db } from "../../src/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [showPopup, setShowPopup] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "registrations"), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        createdAt: Timestamp.now(),
      });
      setFormData({ name: "", email: "", phone: "" });
      setShowPopup(true); // 👈 Show popup
    } catch (error) {
      console.error("🔥 Firestore Error:", error);
      alert("❌ Failed: " + error.message);
    }
  };


  return (
    <div onSubmit={handleSubmit} className=" md:py-16 lg:py-24 py-10 lg:px-16 md:px-10 px-8 bg-gray-200 flex flex-col lg:flex-row items-center gap-20">
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
                className="w-full px-4 py-3 bg-primary outline-none text-gray-200"
                value={formData.name}
                onChange={handleChange}
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
                className="w-full px-4 py-3 bg-primary outline-none text-gray-200"
                value={formData.email}
                onChange={handleChange}
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
                className="w-full px-4 py-3 bg-primary text-gray-200"
                value={formData.phone}
                onChange={handleChange}
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

        {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg w-80">
            <h2 className="text-xl font-bold text-light mb-4">
              ✅ Registration Successful!
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for registering. We look forward to seeing you.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
      </div>

      <div className="lg:w-3/6">
        <img src={register} alt="" className="rounded-2xl" />
      </div>
    </div>
  );
};

export default Register;

{
  /* <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <input
        id="name"
        type="text"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="border p-2 w-full"
      />
      <input
        id="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="border p-2 w-full"
      />
      <input
        id="phone"
        type="tel"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
        className="border p-2 w-full"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Register
      </button>
    </form> */
}
