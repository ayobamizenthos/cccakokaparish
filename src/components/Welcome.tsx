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
    { label: "Weekly Services", value: 7 },
    { label: "Community Impact", value: 10000, suffix: "+" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-white">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[hsl(45,30%,98%)] to-white" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[hsl(43,90%,52%)] rounded-full filter blur-[250px] opacity-[0.06]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[hsl(210,70%,48%)] rounded-full filter blur-[200px] opacity-[0.04]" />
        <div className="absolute inset-0 opacity-[0.02] cross-pattern" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto text-center space-y-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="space-y-6">
            <motion.span
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[hsl(43,90%,52%,0.1)] border border-[hsl(43,90%,52%,0.3)]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <span className="w-2 h-2 bg-[hsl(43,90%,52%)] rounded-full animate-pulse" />
              <span className="text-[hsl(40,85%,35%)] text-xs font-semibold tracking-[0.2em] uppercase">
                About Our Parish
              </span>
            </motion.span>
            
            <motion.h2
              className="text-5xl md:text-7xl font-heading font-light tracking-wide leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-gradient-gold">Welcome</span>
              <span className="text-[hsl(220,20%,25%)]"> to Our </span>
              <span className="text-[hsl(210,70%,48%)]">Spiritual Home</span>
            </motion.h2>
            
            <motion.div
              className="flex items-center justify-center gap-4"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-24 h-px bg-gradient-to-r from-transparent to-[hsl(43,90%,52%)]" />
              <div className="w-3 h-3 rotate-45 bg-[hsl(43,90%,52%)] shadow-[0_0_15px_hsl(43,90%,52%,0.5)]" />
              <div className="w-24 h-px bg-gradient-to-l from-transparent to-[hsl(43,90%,52%)]" />
            </motion.div>
          </div>
          
          <motion.p
            className="text-xl md:text-2xl text-[hsl(220,15%,45%)] leading-relaxed font-light tracking-wide max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            At Glade Cathedral, we are committed to spreading the gospel of Jesus Christ and
            nurturing spiritual growth in our community. As part of the Celestial Church of Christ,
            we carry the sacred mission of being "The Last Ark of Salvation" for all who seek divine
            refuge and spiritual renewal.
          </motion.p>

          {/* Stats Section - Glassmorphism Cards */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative p-6 rounded-2xl bg-white/70 backdrop-blur-xl border border-[hsl(43,90%,52%,0.2)] shadow-[0_8px_32px_rgba(210,172,71,0.1)] hover:shadow-[0_16px_48px_rgba(210,172,71,0.2)] hover:border-[hsl(43,90%,52%,0.4)] transition-all duration-500 hover:-translate-y-2">
                  {/* Gold accent glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[hsl(43,90%,52%,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[hsl(43,90%,52%,0.3)] rounded-tr-2xl" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[hsl(43,90%,52%,0.3)] rounded-bl-2xl" />
                  
                  <div className="relative z-10 text-center">
                    <div className="text-4xl md:text-5xl font-heading font-light text-gradient-gold mb-2">
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                        duration={2000}
                      />
                    </div>
                    <p className="text-sm md:text-base text-[hsl(220,15%,50%)] font-light tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mission/Vision/Values - Premium Glass Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {[
              { title: "Our Mission", text: "To lead souls to salvation through worship, prayer, and fellowship in the Spirit." },
              { title: "Our Vision", text: "To be a beacon of hope and divine light in our community and beyond." },
              { title: "Our Values", text: "Faith, holiness, love, unity, and service in the name of our Lord." }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
                whileHover={{ y: -8 }}
              >
                <div className="relative p-10 rounded-3xl bg-white/80 backdrop-blur-2xl border border-[hsl(43,90%,52%,0.15)] shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(210,172,71,0.15)] transition-all duration-700 h-full">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[hsl(43,90%,52%,0.03)] via-transparent to-[hsl(210,70%,48%,0.02)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Top gold line */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-[hsl(43,90%,52%)] to-transparent rounded-full" />
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-heading font-medium text-[hsl(220,20%,25%)] mb-4 tracking-wide">
                      {item.title}
                    </h3>
                    <motion.div
                      className="w-12 h-0.5 bg-[hsl(43,90%,52%)] mb-6 group-hover:w-20 transition-all duration-500"
                    />
                    <p className="text-base text-[hsl(220,15%,45%)] font-light leading-relaxed">
                      {item.text}
                    </p>
                  </div>
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