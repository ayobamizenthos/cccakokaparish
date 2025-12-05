import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, ArrowDown } from "lucide-react";
import churchExterior from "@/assets/church-exterior-glade.jpg";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
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

  const scrollToContent = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${churchExterior})` }}
        />
        {/* Sophisticated Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen text-center px-6 py-32">
        <div className="max-w-4xl mx-auto">
          {/* Pre-title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white/70 text-xs tracking-[0.3em] uppercase mb-8 font-light"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Celestial Church of Christ • Akoka Parish
          </motion.p>

          {/* Main Title */}
          <motion.h1 
            className="mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <span 
              className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-tight text-white"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              GLADE
            </span>
            <span 
              className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-[0.1em] text-white/90 mt-2"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              CATHEDRAL
            </span>
          </motion.h1>

          {/* Gold Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="w-24 h-px bg-[hsl(38,75%,50%)] mx-auto my-10"
          />

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto mb-16"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            The Last Ark of Salvation — where heaven meets earth in sacred worship and celestial celebration.
          </motion.p>

          {/* Countdown */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <p 
              className="text-[hsl(38,75%,60%)] text-xs tracking-[0.25em] uppercase mb-8"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Annual Harvest Thanksgiving
            </p>
            <div className="flex items-center justify-center gap-4 sm:gap-6">
              {[
                { val: timeLeft.days, label: "Days" },
                { val: timeLeft.hours, label: "Hours" },
                { val: timeLeft.minutes, label: "Mins" },
                { val: timeLeft.seconds, label: "Secs" }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div 
                    className="text-3xl sm:text-4xl md:text-5xl font-normal text-white tabular-nums mb-2"
                    style={{ fontFamily: 'Cinzel, serif' }}
                  >
                    {String(item.val).padStart(2, '0')}
                  </div>
                  <span 
                    className="text-[10px] uppercase tracking-[0.2em] text-white/50"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <button className="btn-gold flex items-center justify-center gap-3">
              <Play size={14} />
              <span>Watch Live</span>
            </button>
            <button className="btn-outline border-white/30 text-white hover:bg-white hover:text-black flex items-center justify-center gap-3">
              <span>View Schedule</span>
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToContent}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3"
          >
            <span 
              className="text-[10px] tracking-[0.3em] uppercase"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Explore
            </span>
            <ArrowDown size={16} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
