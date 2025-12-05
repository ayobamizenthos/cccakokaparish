import { Clock, Calendar, Sparkles } from "lucide-react";
import { memo } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ServiceTimes = memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      day: "Wednesday",
      time: "9:00 AM - 10:00 AM",
      type: "Seeker's Service",
      description: "Prayer and Bible study for spiritual strengthening",
    },
    {
      day: "Sunday",
      time: "10:00 AM - 2:00 PM",
      type: "Sunday Worship Service",
      description: "Full worship experience with praise, preaching, and communion",
      highlight: true,
    },
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(45,30%,97%)] via-white to-[hsl(45,30%,97%)]" />
        <div className="absolute top-1/3 right-0 w-[700px] h-[700px] bg-[hsl(43,90%,52%)] rounded-full filter blur-[300px] opacity-[0.05]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[hsl(210,70%,48%)] rounded-full filter blur-[250px] opacity-[0.03]" />
        <div className="absolute inset-0 opacity-[0.015] cross-pattern" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-16 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[hsl(43,90%,52%,0.1)] border border-[hsl(43,90%,52%,0.3)]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-4 h-4 text-[hsl(43,90%,52%)]" />
            <span className="text-[hsl(40,85%,35%)] text-xs font-semibold tracking-[0.2em] uppercase">
              Join Us
            </span>
          </motion.span>
          
          <motion.h2
            className="text-5xl md:text-7xl font-heading font-light tracking-wide leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gradient-gold">Worship</span>
            <span className="text-[hsl(220,20%,25%)]"> With Us</span>
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
          
          <motion.p
            className="text-xl md:text-2xl text-[hsl(220,15%,45%)] mt-8 font-light tracking-wide"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Join us for powerful worship experiences that will uplift your spirit
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <div
                className={`relative overflow-hidden rounded-3xl transition-all duration-700 h-full ${
                  service.highlight
                    ? "bg-white/90 backdrop-blur-2xl border-2 border-[hsl(43,90%,52%,0.4)] shadow-[0_20px_60px_rgba(210,172,71,0.15)]"
                    : "bg-white/80 backdrop-blur-xl border border-[hsl(43,90%,52%,0.15)] shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
                } hover:shadow-[0_24px_70px_rgba(210,172,71,0.2)] hover:-translate-y-2`}
              >
                {/* Gold gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(43,90%,52%,0.03)] via-transparent to-[hsl(210,70%,48%,0.02)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {service.highlight && (
                  <motion.div
                    className="absolute top-0 right-0 bg-gradient-to-r from-[hsl(43,90%,52%)] to-[hsl(40,85%,45%)] text-white text-xs font-semibold px-6 py-2.5 rounded-bl-2xl tracking-wider shadow-lg"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.8 + index * 0.2, type: "spring", stiffness: 200 }}
                  >
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-3 h-3" />
                      Main Service
                    </span>
                  </motion.div>
                )}
                
                {/* Top gold accent line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-[hsl(43,90%,52%)] to-transparent" />
                
                <div className="relative z-10 p-10">
                  <div className="flex items-center gap-4 text-3xl font-heading font-light tracking-wide text-[hsl(220,20%,25%)] mb-8">
                    <motion.div
                      className="w-14 h-14 rounded-2xl bg-[hsl(43,90%,52%,0.1)] border border-[hsl(43,90%,52%,0.3)] flex items-center justify-center"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Calendar className="h-6 w-6 text-[hsl(43,90%,52%)]" />
                    </motion.div>
                    {service.day}
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 text-xl font-light text-[hsl(220,20%,30%)]">
                      <motion.div
                        className="w-10 h-10 rounded-xl bg-[hsl(210,70%,48%,0.1)] border border-[hsl(210,70%,48%,0.2)] flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Clock className="h-5 w-5 text-[hsl(210,70%,48%)]" />
                      </motion.div>
                      <span className="text-gradient-gold font-medium">{service.time}</span>
                    </div>
                    
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-[hsl(43,90%,52%,0.3)] to-transparent" />
                    
                    <div>
                      <h4 className="font-heading font-medium text-xl text-[hsl(220,20%,25%)] mb-3 tracking-wide">
                        {service.type}
                      </h4>
                      <p className="text-[hsl(220,15%,50%)] font-light leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Corner accents */}
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[hsl(43,90%,52%,0.2)] rounded-bl-3xl" />
                <div className="absolute top-0 right-16 w-12 h-12 border-t-2 border-r-2 border-[hsl(43,90%,52%,0.2)] rounded-tr-3xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

ServiceTimes.displayName = 'ServiceTimes';

export default ServiceTimes;