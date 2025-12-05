import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedCounter from "./AnimatedCounter";

const Welcome = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const stats = [
    { label: "Years", value: 50, suffix: "+" },
    { label: "Members", value: 2000, suffix: "+" },
    { label: "Services", value: 7, suffix: "" },
  ];

  return (
    <section id="about" className="section bg-white" ref={ref}>
      <div className="content-narrow text-center">
        {/* Header */}
        <motion.p
          className="premium-label mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Welcome
        </motion.p>
        
        <motion.h2
          className="mb-4"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          A Sanctuary of <span className="text-gradient-gold">Divine Presence</span>
        </motion.h2>
        
        <motion.div
          className="divider mb-8"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        />
        
        {/* Description */}
        <motion.p
          className="text-lg md:text-xl leading-relaxed mb-12"
          style={{ fontFamily: 'Playfair Display, serif' }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          At Glade Cathedral, we are committed to spreading the gospel of Jesus Christ and
          nurturing spiritual growth. As part of the Celestial Church of Christ, we carry
          the sacred mission of being "The Last Ark of Salvation" for all who seek refuge.
        </motion.p>

        {/* Stats - Mobile Optimized Grid */}
        <motion.div
          className="grid grid-cols-3 gap-4 md:gap-8 py-8 border-t border-b border-[hsl(0,0%,92%)]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="stat-number">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  duration={2000}
                />
              </div>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Mission Cards - Stack on Mobile */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {[
            { title: "Our Mission", text: "To lead souls to salvation through worship, prayer, and fellowship." },
            { title: "Our Vision", text: "To be a beacon of hope and divine light in our community." },
            { title: "Our Values", text: "Faith, holiness, love, unity, and service in our Lord's name." }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 md:p-8 text-left card-premium"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
            >
              <h3 className="text-lg font-medium mb-3">{item.title}</h3>
              <div className="w-8 h-[2px] bg-[hsl(38,70%,50%)] mb-4" />
              <p className="text-sm md:text-base leading-relaxed text-[hsl(0,0%,35%)]">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Welcome;
