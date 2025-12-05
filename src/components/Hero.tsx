import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Play, ChevronDown } from "lucide-react";
import churchExterior from "@/assets/church-exterior-glade.jpg";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

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
    <section className="relative w-full min-h-[100svh] overflow-hidden flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={churchExterior} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-5 md:px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Pre-title */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white/60 text-[11px] md:text-xs tracking-[0.25em] uppercase mb-6 md:mb-8"
          >
            Celestial Church of Christ • Akoka Parish
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-white mb-4"
          >
            <span className="block text-[clamp(3rem,12vw,7rem)] leading-[0.9] font-semibold tracking-[-0.02em]">
              GLADE
            </span>
            <span className="block text-[clamp(2rem,8vw,4.5rem)] leading-[0.9] font-normal tracking-[0.05em] text-white/90">
              CATHEDRAL
            </span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="w-16 h-[1px] bg-[hsl(38,70%,50%)] mx-auto my-6 md:my-8"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-white/70 text-base md:text-lg lg:text-xl max-w-xl mx-auto mb-10 md:mb-14 px-4"
            style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}
          >
            The Last Ark of Salvation
          </motion.p>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mb-10 md:mb-14"
          >
            <p className="text-[hsl(38,70%,60%)] text-[10px] md:text-xs tracking-[0.2em] uppercase mb-5 md:mb-6">
              Annual Harvest Thanksgiving
            </p>
            <div className="flex items-center justify-center gap-3 md:gap-5">
              {[
                { val: timeLeft.days, label: "Days" },
                { val: timeLeft.hours, label: "Hrs" },
                { val: timeLeft.minutes, label: "Min" },
                { val: timeLeft.seconds, label: "Sec" }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div 
                    className="text-[clamp(1.75rem,6vw,3rem)] font-medium text-white tabular-nums leading-none"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {String(item.val).padStart(2, '0')}
                  </div>
                  <span className="text-[9px] md:text-[10px] tracking-[0.15em] uppercase text-white/40 mt-1 block">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
          >
            <button className="btn-gold flex items-center justify-center gap-2">
              <Play size={14} />
              <span>Watch Live</span>
            </button>
            <button className="btn-outline-light">
              View Schedule
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToContent}
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          aria-label="Scroll to content"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
