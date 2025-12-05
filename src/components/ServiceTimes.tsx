import { Clock, Calendar } from "lucide-react";
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
      time: "9:00 AM – 10:00 AM",
      type: "Seeker's Service",
      description: "Prayer and Bible study for spiritual strengthening",
    },
    {
      day: "Sunday",
      time: "10:00 AM – 2:00 PM",
      type: "Sunday Worship",
      description: "Full worship experience with praise, preaching, and communion",
      highlight: true,
    },
  ];

  return (
    <section id="services" className="py-28 md:py-36 bg-[hsl(30,10%,97%)]">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-20">
            <motion.p
              className="premium-label mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
              Join Us
            </motion.p>
            
            <motion.h2
              className="section-title mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Worship <span className="text-gradient-gold">With Us</span>
            </motion.h2>
            
            <motion.div
              className="w-16 h-px bg-[hsl(38,75%,50%)] mx-auto mb-8"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            />
            
            <motion.p
              className="section-subtitle max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.6 }}
            >
              Join us for powerful worship experiences that will uplift your spirit
            </motion.p>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.7 + index * 0.15, duration: 0.6 }}
                className="group"
              >
                <div className={`relative p-10 bg-white border transition-all duration-500 h-full ${
                  service.highlight 
                    ? "border-[hsl(38,75%,50%)]" 
                    : "border-border hover:border-[hsl(38,75%,50%)]"
                }`}>
                  {service.highlight && (
                    <div 
                      className="absolute top-0 right-0 px-4 py-2 bg-[hsl(38,75%,50%)] text-white text-[10px] font-medium tracking-[0.15em] uppercase"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      Main Service
                    </div>
                  )}
                  
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-[hsl(38,75%,50%)] transition-colors">
                      <Calendar className="h-5 w-5 text-[hsl(38,75%,50%)]" />
                    </div>
                    <h3 
                      className="text-2xl font-medium tracking-wide"
                      style={{ fontFamily: 'Cinzel, serif', color: 'hsl(0 0% 8%)' }}
                    >
                      {service.day}
                    </h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-[hsl(38,75%,50%)]" />
                      <span 
                        className="text-lg font-medium"
                        style={{ fontFamily: 'Inter, sans-serif', color: 'hsl(0 0% 25%)' }}
                      >
                        {service.time}
                      </span>
                    </div>
                    
                    <div className="w-full h-px bg-border" />
                    
                    <div>
                      <h4 
                        className="text-base font-medium mb-2 tracking-wide"
                        style={{ fontFamily: 'Inter, sans-serif', color: 'hsl(0 0% 8%)' }}
                      >
                        {service.type}
                      </h4>
                      <p 
                        className="text-base leading-relaxed"
                        style={{ fontFamily: 'Cormorant Garamond, serif', color: 'hsl(0 0% 45%)' }}
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Monthly Vigil */}
          <motion.div
            className="mt-12 p-8 bg-[hsl(0,0%,8%)] text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <p 
              className="text-[hsl(38,75%,60%)] text-xs tracking-[0.25em] uppercase mb-3"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Monthly Prayer Vigil
            </p>
            <p 
              className="text-white text-lg"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              First Thursday of every month • 10:00 PM – 4:00 AM
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

ServiceTimes.displayName = 'ServiceTimes';

export default ServiceTimes;
