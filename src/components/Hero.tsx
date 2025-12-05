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
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef} 
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Background Layers - Celestial Blue Theme */}
      <div className="hero-bg absolute inset-0">
        {/* Base Gradient - Deep Celestial Blue */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-[hsl(205,40%,10%)] to-[hsl(205,35%,15%)]" />
        
        {/* Animated Aurora - Blue & White Theme */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-celestial-blue-light rounded-full filter blur-[150px] animate-float opacity-30" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-celestial-white rounded-full filter blur-[150px] animate-float-subtle opacity-15" style={{ animationDelay: '-2s' }} />
          <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-celestial-blue rounded-full filter blur-[150px] animate-float opacity-20" style={{ animationDelay: '-4s' }} />
        </div>

        {/* Cross Pattern */}
        <div className="absolute inset-0 opacity-5 cross-pattern" />
        
        {/* Radial Vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/80" />
        
        {/* Top Divine White Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-celestial-white rounded-full filter blur-[200px] opacity-10" />
      </div>

      {/* Floating Particles - White */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-secondary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen text-center px-4 py-32">
        <div ref={textRef} className="max-w-5xl mx-auto">
          {/* Pre-title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-secondary/30 bg-secondary/5 backdrop-blur-sm">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-secondary text-xs font-heading tracking-[0.3em] uppercase">
                The Latter House Glory
              </span>
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            className="font-heading font-bold leading-none mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
          >
            <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-gradient-white tracking-wide">
              GLADE
            </span>
            <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-gradient-blue tracking-wide mt-2">
              CATHEDRAL
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-foreground/70 font-body font-light tracking-wide max-w-2xl mx-auto mb-12"
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
            <p className="text-xs font-heading tracking-[0.3em] uppercase text-secondary mb-6">
              Annual Harvest Thanksgiving
            </p>
            <div className="inline-flex items-center gap-2 md:gap-4 glass-card px-6 md:px-10 py-6 md:py-8">
              {[
                { val: timeLeft.days, label: "Days" },
                { val: timeLeft.hours, label: "Hours" },
                { val: timeLeft.minutes, label: "Mins" },
                { val: timeLeft.seconds, label: "Secs" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center px-3 md:px-6">
                  <span className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-gradient-white tabular-nums">
                    {String(item.val).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] md:text-xs uppercase tracking-widest text-foreground/50 mt-2">
                    {item.label}
                  </span>
                  {i < 3 && (
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 text-secondary/30 text-2xl hidden md:block">:</span>
                  )}
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
              className="btn-premium flex items-center justify-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPlay size={12} />
              <span>Watch Harvest Live</span>
            </motion.button>
            <motion.button
              className="btn-outline-premium flex items-center justify-center gap-3"
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
            className="flex flex-col items-center gap-2 text-foreground/30 cursor-pointer hover:text-secondary transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-[10px] font-heading tracking-[0.3em] uppercase">Scroll</span>
            <FaChevronDown size={16} />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;