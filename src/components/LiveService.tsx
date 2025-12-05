import { Youtube, Facebook, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const LiveService = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const platforms = [
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/@cccakokaparish" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/cccakokaparish" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/cccakokaparish" },
    { name: "TikTok", icon: FaTiktok, href: "https://tiktok.com/@cccakokaparish" },
  ];

  return (
    <section className="section section-dark" ref={ref}>
      <div className="content-narrow text-center">
        {/* Header */}
        <motion.p
          className="text-[hsl(38,70%,55%)] text-xs tracking-[0.2em] uppercase mb-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          Watch Online
        </motion.p>
        
        <motion.h2
          className="text-white mb-4"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          Join Our <span className="text-[hsl(38,70%,55%)]">Live Service</span>
        </motion.h2>
        
        <motion.div
          className="w-12 h-[1px] bg-[hsl(38,70%,50%)] mx-auto mb-6"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        />
        
        <motion.p
          className="text-white/60 text-base md:text-lg mb-10"
          style={{ fontFamily: 'Playfair Display, serif' }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          Experience worship from anywhere in the world
        </motion.p>

        {/* Video Placeholder */}
        <motion.div
          className="aspect-video bg-white/5 border border-white/10 mb-8 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          <div className="text-center">
            <p className="text-white/40 text-sm mb-2">Next Service</p>
            <p className="text-white text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
              Sunday at 10:00 AM
            </p>
          </div>
        </motion.div>

        {/* Platform Links */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 border border-white/20 text-white/70 hover:border-white/40 hover:text-white transition-all duration-300"
            >
              <platform.icon className="h-4 w-4" />
              <span className="text-xs font-medium tracking-wider">{platform.name}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LiveService;
