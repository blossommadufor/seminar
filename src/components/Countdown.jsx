import React, { useEffect, useState } from "react";

const Countdown = () => {
  const eventDate = new Date("2025-09-07T09:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days: String(days).padStart(2, "0"),
          hours: String(hours).padStart(2, "0"),
          minutes: String(minutes).padStart(2, "0"),
          seconds: String(seconds).padStart(2, "0"),
        });
      } else {
        clearInterval(timer);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  return (
    <div className="flex justify-center mt-10">
      <div className="bg-secondary py-7 md:px-10 lg:px-24 shadow-lg flex flex-wrap justify-center gap-3 w-screen md:gap-10 text-center md:w-max">
        {/* Days */}
        <div className="bg-light text-white md:py-6 md:px-8 py-3 px-4 rounded-xl">
          <span className="md:text-3xl font-bold">{timeLeft.days}</span>
          <p className="text-sm mt-2">Days</p>
        </div>

        {/* Hours */}
        <div className="bg-light text-white md:py-6 md:px-8 py-3 px-4 rounded-xl">
          <span className="md:text-3xl font-bold">{timeLeft.hours}</span>
          <p className="text-sm mt-2">Hours</p>
        </div>

        {/* Minutes */}
        <div className="bg-light text-white md:py-6 md:px-8 py-3 px-4 rounded-xl">
          <span className="md:text-3xl font-bold">{timeLeft.minutes}</span>
          <p className="text-sm mt-2">Minutes</p>
        </div>

        {/* Seconds */}
        <div className="bg-light text-white md:py-6 md:px-8 py-3 px-4 rounded-xl">
          <span className="md:text-3xl font-bold">{timeLeft.seconds}</span>
          <p className="text-sm mt-2">Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
