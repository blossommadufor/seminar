import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Countdown from "./Countdown";

const images = [
  "/assets/hero1.jpg",
  "/assets/hero2.jpg",
  "/assets/hero3.jpg",
  "/assets/hero4.jpg",
];

const SLIDE_INTERVAL = 5000; 
const TRANSITION_MS = 2000; 

export default function Hero() {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [index, setIndex] = useState(0);
  const [transitionOn, setTransitionOn] = useState(true);


  useLayoutEffect(() => {
    const measure = () => {
      if (containerRef.current) setContainerWidth(containerRef.current.clientWidth);
    };
    measure();
    
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

 
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  
  useEffect(() => {
    const id = setInterval(() => {
      setTransitionOn(true); 
      setIndex((s) => s + 1);
    }, SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, []);

  
  useEffect(() => {
    if (containerWidth === 0) return;

    if (index > 0 && index % images.length === 0) {
      const t = setTimeout(() => {
        setTransitionOn(false);
        setIndex((s) => s - images.length); 
        requestAnimationFrame(() => requestAnimationFrame(() => setTransitionOn(true)));
      }, TRANSITION_MS + 10);
      return () => clearTimeout(t);
    }
  }, [index, containerWidth]);


  const slides = [...images, ...images];

  if (containerWidth === 0) {
    return (
      <div ref={containerRef} className="relative h-screen lg:max-h-[800px] max-h-[600px] overflow-hidden">
        <img src={images[0]} alt="hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[rgba(38,41,77,0.8)]" />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center h-full text-white text-center px-6">
          
          <h2 className="text-lg font-bold">THE CHURCH OF CHRIST NYANYA ANNUAL BIBLE LECTURESHIP 2025</h2>
          <p className="text-3xl font-medium mt-6">The Sovereignty<br/>Of God Over Life&apos;s Challenges</p>
          <div className="mt-6"><Countdown/></div>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative h-screen lg:max-h-[800px] max-h-[600px] overflow-hidden">
      
      <div
        className={
          transitionOn
            ? "flex h-full transition-transform duration-700 ease-in-out"
            : "flex h-full transition-none"
        }
        style={{ transform: `translateX(-${index * containerWidth}px)` }}
      >
        {slides.map((src, i) => (
          <div
            key={i}
            className="h-full flex-shrink-0 relative"
            style={{ minWidth: `${containerWidth}px`, maxWidth: `${containerWidth}px` }}
          >
            <img src={src} alt={`slide-${i}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[rgba(38,41,77,0.8)]" />
          </div>
        ))}
      </div>

      
      <div className="absolute inset-0 z-30 flex flex-col items-center lg:justify-center h-full text-white text-center px-6 lg:pt-16 pt-32 md:pt-32">
        <h2 className="md:text-2xl text-lg lg:text-xl lg:mt-8 xl:mt-0 font-bold">
          THE CHURCH OF CHRIST NYANYA ANNUAL BIBLE LECTURESHIP 2025
        </h2>

        <p className="md:text-5xl xl:text-6xl text-3xl font-medium leading-snug pt-8">
          The Sovereignty
          <br /> Of God Over Life&apos;s Challenges
        </p>

        <p className="pt-8 text-xl">
          <span className="text-blue-400">DATE :</span> 7th September, 2025 | 9AM
        </p>

        <div className="mt-10">
          <Countdown />
        </div>
      </div>
    </div>
  );
}

