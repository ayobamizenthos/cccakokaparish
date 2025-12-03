import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPlay, FaChevronDown, FaCalendarAlt } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const shutterLeft = useRef(null);
  const shutterRight = useRef(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // --- COUNTDOWN TO DEC 7TH ---
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    let targetDate = new Date(`December 7, ${currentYear} 10:00:00`).getTime();
    if (new Date().getTime() > targetDate) {
      targetDate = new Date(`December 7, ${currentYear + 1} 10:00:00`).getTime();
    }
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const dist = targetDate - now;
      setTimeLeft({
        days: Math.floor(dist / (1000 * 60 * 60 * 24)),
        hours: Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((dist % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // --- ANIMATIONS ---
  useEffect(() => {
    const tl = gsap.timeline();
    // Shutter Reveal
    tl.to(shutterLeft.current, { x: "-100%", duration: 1.5, ease: "power4.inOut", delay: 0.2 })
      .to(shutterRight.current, { x: "100%", duration: 1.5, ease: "power4.inOut" }, "<")
      // Text Reveal
      .fromTo(textRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }, "-=1");
  }, []);

  return (
    <div className="relative w-full h-screen bg-[#0F172A] text-white overflow-hidden font-sans">
      
      {/* 1. THE SHUTTERS (Preloader) */}
      <div ref={shutterLeft} className="fixed top-0 left-0 w-1/2 h-full bg-[#4A6D7C] z-[999] border-r border-[#D4AF37] flex items-center justify-end pr-4"></div>
      <div ref={shutterRight} className="fixed top-0 right-0 w-1/2 h-full bg-[#4A6D7C] z-[999] border-l border-[#D4AF37] flex items-center justify-start pl-4"></div>

      {/* 2. BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4A6D7C] via-[#1a1a2e] to-[#4A1A1A]"></div>
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>

      {/* 3. CONTENT */}
      <div ref={heroRef} className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        
        <div ref={textRef}>
            <p className="text-[#D4AF37] tracking-[0.5em] text-xs md:text-sm uppercase mb-6 animate-pulse font-bold">
                The Latter House Glory
            </p>
            <h1 className="text-5xl md:text-8xl font-serif font-bold leading-tight mb-2">
                DIVINITY
            </h1>
            <h1 className="text-5xl md:text-8xl font-serif font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-[#4A6D7C]">
                UNVEILED
            </h1>
        </div>

        {/* COUNTDOWN BOX */}
        <div className="mt-12 grid grid-cols-4 gap-4 md:gap-8 bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl">
            {[
                { val: timeLeft.days, label: "Days" },
                { val: timeLeft.hours, label: "Hrs" },
                { val: timeLeft.minutes, label: "Mins" },
                { val: timeLeft.seconds, label: "Secs" }
            ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                    <span className="text-2xl md:text-4xl font-serif font-bold text-[#D4AF37]">{item.val}</span>
                    <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400">{item.label}</span>
                </div>
            ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col md:flex-row gap-6">
            <button className="flex items-center gap-3 bg-[#0033CC] hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold tracking-wider transition-all transform hover:scale-105 shadow-lg shadow-blue-900/50">
                <FaPlay size={12} /> WATCH HARVEST LIVE
            </button>
            <button className="flex items-center gap-3 border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold tracking-wider transition-all">
                <FaCalendarAlt size={14} /> VIEW ITINERARY
            </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 w-full flex justify-center animate-bounce opacity-50">
        <FaChevronDown />
      </div>
    </div>
  );
};

export default Hero;