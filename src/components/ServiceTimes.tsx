import { Clock, Calendar } from "lucide-react";
import { memo, useRef } from "react";
import { motion, useInView } from "framer-motion";

const ServiceTimes = memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const services = [
    {
      day: "Wednesday",
      time: "9:00 – 10:00 AM",
      type: "Seeker's Service",
      description: "Prayer and Bible study for spiritual strengthening",
    },
    {
      day: "Sunday",
      time: "10:00 AM – 2:00 PM",
      type: "Sunday Worship",
      description: "Full worship with praise, preaching, and communion",
      featured: true,
    },
  ];

  return (
    <section id="services" className="section section-light" ref={ref}>
      <div className="content-container">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            className="premium-label mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            Join Us
          </motion.p>
          
          <motion.h2
            className="mb-4"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Worship <span className="text-gradient-gold">Times</span>
          </motion.h2>
          
          <motion.div
            className="divider"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          />
        </div>

        {/* Service Cards - Stack on Mobile */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="card-premium p-6 md:p-8"
            >
              {service.featured && (
                <span className="inline-block px-3 py-1 bg-[hsl(38,70%,50%)] text-white text-[10px] font-semibold tracking-[0.1em] uppercase mb-4">
                  Main Service
                </span>
              )}
              
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 md:w-12 md:h-12 border border-[hsl(0,0%,90%)] flex items-center justify-center">
                  <Calendar className="h-4 w-4 md:h-5 md:w-5 text-[hsl(38,70%,50%)]" />
                </div>
                <h3 className="text-xl md:text-2xl font-medium">{service.day}</h3>
              </div>
              
              <div className="flex items-center gap-2 text-[hsl(38,70%,45%)] font-medium mb-4">
                <Clock className="h-4 w-4" />
                <span className="text-sm md:text-base">{service.time}</span>
              </div>
              
              <div className="divider-long mb-4" />
              
              <h4 className="font-semibold text-sm mb-2">{service.type}</h4>
              <p className="text-sm text-[hsl(0,0%,45%)] leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Monthly Vigil Banner */}
        <motion.div
          className="mt-8 md:mt-12 p-6 md:p-8 bg-[hsl(0,0%,4%)] text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p className="text-[hsl(38,70%,55%)] text-[10px] md:text-xs tracking-[0.2em] uppercase mb-2">
            Monthly Prayer Vigil
          </p>
          <p className="text-white text-base md:text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
            First Thursday • 10:00 PM – 4:00 AM
          </p>
        </motion.div>
      </div>
    </section>
  );
});

ServiceTimes.displayName = 'ServiceTimes';

export default ServiceTimes;
