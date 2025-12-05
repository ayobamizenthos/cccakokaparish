import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPlay, FaChevronDown, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Countdown to Dec 7th
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

  // Premium Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on scroll
      gsap.to(".hero-bg", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      
      // Animate the cross
      gsap.fromTo(".hero-cross",
        { scale: 0, opacity: 0, rotation: -180 },
        { scale: 1, opacity: 1, rotation: 0, duration: 1.5, ease: "elastic.out(1, 0.5)", delay: 0.3 }
      );
      
      // Animate the rays
      gsap.fromTo(".hero-rays",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: "power2.out", delay: 0.6 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef} 
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Background - Pure White with Divine Light */}
      <div className="hero-bg absolute inset-0">
        {/* Base - Pure White */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[hsl(45,25%,98%)] to-[hsl(40,20%,96%)]" />
        
        {/* Divine Golden Light from Top */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 120% 70% at 50% -20%, hsl(43 90% 52% / 0.15) 0%, transparent 50%),
              radial-gradient(ellipse 80% 50% at 50% 0%, hsl(45 95% 65% / 0.1) 0%, transparent 40%)
            `
          }}
        />
        
        {/* Subtle warm ambient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[hsl(43,90%,52%)] rounded-full filter blur-[200px] opacity-[0.06] animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[hsl(210,70%,48%)] rounded-full filter blur-[200px] opacity-[0.04] animate-float-subtle" style={{ animationDelay: '-3s' }} />
        
        {/* Cross Pattern - Gold */}
        <div className="absolute inset-0 opacity-[0.03] cross-pattern" />
        
        {/* Soft Vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-white/50" />
      </div>

      {/* Animated Divine Rays */}
      <div className="hero-rays absolute inset-0 flex items-center justify-center pointer-events-none opacity-0">
        <div 
          className="absolute w-[200%] h-[200%] animate-divine-rays"
          style={{
            background: `
              conic-gradient(
                from 0deg at 50% 50%,
                transparent 0deg,
                hsl(43 90% 52% / 0.02) 15deg,
                transparent 30deg,
                hsl(43 90% 52% / 0.02) 45deg,
                transparent 60deg,
                hsl(43 90% 52% / 0.02) 75deg,
                transparent 90deg,
                hsl(43 90% 52% / 0.02) 105deg,
                transparent 120deg,
                hsl(43 90% 52% / 0.02) 135deg,
                transparent 150deg,
                hsl(43 90% 52% / 0.02) 165deg,
                transparent 180deg,
                hsl(43 90% 52% / 0.02) 195deg,
                transparent 210deg,
                hsl(43 90% 52% / 0.02) 225deg,
                transparent 240deg,
                hsl(43 90% 52% / 0.02) 255deg,
                transparent 270deg,
                hsl(43 90% 52% / 0.02) 285deg,
                transparent 300deg,
                hsl(43 90% 52% / 0.02) 315deg,
                transparent 330deg,
                hsl(43 90% 52% / 0.02) 345deg,
                transparent 360deg
              )
            `
          }}
        />
      </div>

      {/* Decorative Gold Cross */}
      <div className="hero-cross absolute top-[12%] left-1/2 -translate-x-1/2 opacity-0 pointer-events-none z-10">
        <div className="relative">
          {/* Cross Glow */}
          <div className="absolute inset-0 blur-xl animate-pulse-gold">
            <div className="w-1.5 h-28 bg-gradient-to-b from-transparent via-[hsl(43,90%,52%)] to-transparent mx-auto" />
            <div className="w-20 h-1.5 bg-gradient-to-r from-transparent via-[hsl(43,90%,52%)] to-transparent absolute top-7 left-1/2 -translate-x-1/2" />
          </div>
          {/* Cross Main */}
          <div className="relative animate-cross-glow">
            <div className="w-1.5 h-28 bg-gradient-to-b from-[hsl(45,95%,65%)] via-[hsl(43,90%,52%)] to-[hsl(40,85%,42%)] mx-auto rounded-full" />
            <div className="w-20 h-1.5 bg-gradient-to-r from-[hsl(45,95%,65%)] via-[hsl(43,90%,52%)] to-[hsl(40,85%,42%)] absolute top-7 left-1/2 -translate-x-1/2 rounded-full" />
          </div>
        </div>
      </div>

      {/* Floating Gold Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `hsl(43 90% ${50 + Math.random() * 20}%)`,
            }}
            animate={{
              y: [0, -80, 0],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen text-center px-4 py-32">
        <div ref={textRef} className="max-w-5xl mx-auto">
          {/* Pre-title Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-10"
          >
            <span className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[hsl(43,90%,52%,0.1)] border border-[hsl(43,90%,52%,0.3)] backdrop-blur-sm">
              <span className="w-2 h-2 bg-[hsl(43,90%,52%)] rounded-full animate-pulse" />
              <span className="text-[hsl(40,85%,35%)] text-xs font-semibold tracking-[0.25em] uppercase">
                The Latter House Glory
              </span>
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            className="leading-none mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
          >
            <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-wide text-gradient-gold">
              GLADE
            </span>
            <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-[0.15em] text-[hsl(210,70%,48%)] mt-2">
              CATHEDRAL
            </span>
          </motion.h1>

          {/* Gold Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex items-center justify-center gap-4 my-8"
          >
            <div className="w-20 sm:w-32 h-px bg-gradient-to-r from-transparent via-[hsl(43,90%,52%)] to-[hsl(43,90%,52%)]" />
            <div className="w-3 h-3 rotate-45 bg-[hsl(43,90%,52%)] shadow-[0_0_15px_hsl(43,90%,52%,0.5)]" />
            <div className="w-20 sm:w-32 h-px bg-gradient-to-l from-transparent via-[hsl(43,90%,52%)] to-[hsl(43,90%,52%)]" />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-[hsl(220,15%,40%)] font-light tracking-wide max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Experience the divine presence at Celestial Church of Christ, Akoka Parish — 
            where heaven meets earth in sacred worship and celestial celebration.
          </motion.p>

          {/* Countdown */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[hsl(40,85%,35%)] mb-6">
              Annual Harvest Thanksgiving
            </p>
            <div className="inline-flex items-center gap-3 sm:gap-4">
              {[
                { val: timeLeft.days, label: "Days" },
                { val: timeLeft.hours, label: "Hours" },
                { val: timeLeft.minutes, label: "Mins" },
                { val: timeLeft.seconds, label: "Secs" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="relative">
                    <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-xl bg-white border-2 border-[hsl(43,90%,52%,0.3)] shadow-lg flex items-center justify-center backdrop-blur-sm">
                      <span className="text-2xl sm:text-3xl font-bold text-gradient-gold tabular-nums">
                        {String(item.val).padStart(2, '0')}
                      </span>
                    </div>
                    {/* Corner accents */}
                    <div className="absolute -top-px -right-px w-4 h-4 border-t-2 border-r-2 border-[hsl(43,90%,52%,0.5)] rounded-tr-lg" />
                    <div className="absolute -bottom-px -left-px w-4 h-4 border-b-2 border-l-2 border-[hsl(43,90%,52%,0.5)] rounded-bl-lg" />
                  </div>
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[hsl(220,15%,50%)] mt-3 font-medium">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <motion.button
              className="btn-gold flex items-center justify-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPlay size={12} />
              <span>Watch Harvest Live</span>
            </motion.button>
            <motion.button
              className="btn-dark flex items-center justify-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaCalendarAlt size={14} />
              <span>View Itinerary</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-[hsl(220,15%,60%)] cursor-pointer hover:text-[hsl(43,90%,45%)] transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase">Explore</span>
            <FaChevronDown size={16} />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[hsl(40,20%,96%)] to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
