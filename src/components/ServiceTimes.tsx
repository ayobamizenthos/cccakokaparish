import { Clock, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <section id="services" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-heading font-light text-primary tracking-luxury leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Worship With Us
          </motion.h2>
          <motion.div
            className="w-32 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground/80 mt-8 font-light tracking-editorial"
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
            <motion.div key={index} variants={itemVariants}>
              <Card
                className={`group relative overflow-hidden transition-all duration-700 hover:shadow-lift ${
                  service.highlight
                    ? "border-2 border-secondary/60 shadow-glow"
                    : "border-border/40"
                }`}
              >
                {service.highlight && (
                  <motion.div
                    className="absolute top-0 right-0 bg-secondary text-primary text-xs font-medium px-6 py-2 rounded-bl-2xl tracking-wide shadow-glow"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.8 + index * 0.2, type: "spring", stiffness: 200 }}
                  >
                    Main Service
                  </motion.div>
                )}
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-4 text-3xl font-heading font-light tracking-editorial">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Calendar className="h-7 w-7 text-secondary" />
                    </motion.div>
                    {service.day}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-3 text-xl font-body font-light text-primary">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Clock className="h-6 w-6 text-secondary/80" />
                    </motion.div>
                    {service.time}
                  </div>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                  <div>
                    <h4 className="font-heading font-medium text-xl text-foreground mb-3 tracking-editorial">
                      {service.type}
                    </h4>
                    <p className="text-muted-foreground/80 font-light leading-luxury">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

ServiceTimes.displayName = 'ServiceTimes';

export default ServiceTimes;
