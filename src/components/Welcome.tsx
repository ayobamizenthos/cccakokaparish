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
    <section id="about" className="py-32 bg-gradient-to-b from-background via-background to-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto text-center space-y-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="space-y-6">
            <motion.h2
              className="text-5xl md:text-7xl font-heading font-light text-primary tracking-luxury leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Welcome to Our Spiritual Home
            </motion.h2>
            <motion.div
              className="w-32 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
          </div>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground/90 leading-luxury font-light tracking-editorial max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            At Glade Cathedral, we are committed to spreading the gospel of Jesus Christ and
            nurturing spiritual growth in our community. As part of the Celestial Church of Christ,
            we carry the sacred mission of being "The Last Ark of Salvation" for all who seek divine
            refuge and spiritual renewal.
          </motion.p>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-heading font-light text-secondary mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={2000}
                  />
                </div>
                <p className="text-sm md:text-base text-muted-foreground/70 font-light tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              variants={itemVariants}
              className="group p-10 rounded-2xl bg-card/60 backdrop-blur-luxury shadow-glass hover:shadow-lift transition-all duration-700"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-heading font-medium text-primary mb-4 tracking-editorial">Our Mission</h3>
              <motion.div
                className="w-16 h-0.5 bg-secondary/40 mb-4 group-hover:w-24 transition-all duration-500"
                whileHover={{ scaleX: 1.5 }}
              />
              <p className="text-base text-muted-foreground/80 font-light leading-luxury">
                To lead souls to salvation through worship, prayer, and fellowship in the Spirit.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="group p-10 rounded-2xl bg-card/60 backdrop-blur-luxury shadow-glass hover:shadow-lift transition-all duration-700"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-heading font-medium text-primary mb-4 tracking-editorial">Our Vision</h3>
              <motion.div
                className="w-16 h-0.5 bg-secondary/40 mb-4 group-hover:w-24 transition-all duration-500"
                whileHover={{ scaleX: 1.5 }}
              />
              <p className="text-base text-muted-foreground/80 font-light leading-luxury">
                To be a beacon of hope and divine light in our community and beyond.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="group p-10 rounded-2xl bg-card/60 backdrop-blur-luxury shadow-glass hover:shadow-lift transition-all duration-700"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-heading font-medium text-primary mb-4 tracking-editorial">Our Values</h3>
              <motion.div
                className="w-16 h-0.5 bg-secondary/40 mb-4 group-hover:w-24 transition-all duration-500"
                whileHover={{ scaleX: 1.5 }}
              />
              <p className="text-base text-muted-foreground/80 font-light leading-luxury">
                Faith, holiness, love, unity, and service in the name of our Lord.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Welcome;
