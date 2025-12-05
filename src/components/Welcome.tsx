import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedCounter from "./AnimatedCounter";

const Welcome = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { label: "Years of Ministry", value: 50, suffix: "+" },
    { label: "Active Members", value: 2000, suffix: "+" },
    { label: "Weekly Services", value: 7, suffix: "" },
    { label: "Community Impact", value: 10000, suffix: "+" },
  ];

  return (
    <section id="about" className="py-28 md:py-36 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Header */}
          <div className="text-center mb-20">
            <motion.p
              className="premium-label mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
              About Our Parish
            </motion.p>
            
            <motion.h2
              className="section-title mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Welcome to Our
              <br />
              <span className="text-gradient-gold">Spiritual Home</span>
            </motion.h2>
            
            <motion.div
              className="w-16 h-px bg-[hsl(38,75%,50%)] mx-auto"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            />
          </div>
          
          {/* Description */}
          <motion.p
            className="text-xl md:text-2xl text-center max-w-3xl mx-auto mb-20 leading-relaxed"
            style={{ fontFamily: 'Cormorant Garamond, serif', color: 'hsl(0 0% 35%)' }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            At Glade Cathedral, we are committed to spreading the gospel of Jesus Christ and
            nurturing spiritual growth in our community. As part of the Celestial Church of Christ,
            we carry the sacred mission of being "The Last Ark of Salvation" for all who seek divine
            refuge and spiritual renewal.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 border border-border rounded-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-value">
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

          {/* Mission Cards */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 mt-20"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {[
              { title: "Our Mission", text: "To lead souls to salvation through worship, prayer, and fellowship in the Spirit." },
              { title: "Our Vision", text: "To be a beacon of hope and divine light in our community and beyond." },
              { title: "Our Values", text: "Faith, holiness, love, unity, and service in the name of our Lord." }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1 + index * 0.15, duration: 0.6 }}
              >
                <div className="p-8 border border-border rounded-sm hover:border-[hsl(38,75%,50%)] transition-colors duration-500 h-full">
                  <h3 
                    className="text-lg font-medium mb-4 tracking-wide"
                    style={{ fontFamily: 'Cinzel, serif', color: 'hsl(0 0% 8%)' }}
                  >
                    {item.title}
                  </h3>
                  <div className="w-8 h-px bg-[hsl(38,75%,50%)] mb-5 group-hover:w-12 transition-all duration-500" />
                  <p 
                    className="text-base leading-relaxed"
                    style={{ fontFamily: 'Cormorant Garamond, serif', color: 'hsl(0 0% 40%)' }}
                  >
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Welcome;
