import { Calendar, MapPin, Clock, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Events = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const upcomingEvents = [
    {
      title: "Harvest Thanksgiving",
      date: "December 15, 2024",
      time: "10:00 AM",
      location: "Glade Cathedral Main Auditorium",
      description: "Join us for our annual harvest celebration and thanksgiving service.",
      featured: true,
    },
    {
      title: "New Year Crossover Service",
      date: "December 31, 2024",
      time: "10:00 PM",
      location: "Glade Cathedral",
      description: "Ring in the new year with worship, prayer, and divine presence.",
      featured: true,
    },
    {
      title: "Monthly Prayer Vigil",
      date: "First Thursday of Every Month",
      time: "10:00 PM - 4:00 AM",
      location: "Glade Cathedral",
      description: "Join us for powerful midnight prayers and spiritual warfare.",
    },
  ];

  const eventsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Upcoming Events - CCC Akoka Parish",
    "description": "Join us for special services and events at Christ Church Cathedral Akoka Parish",
    "numberOfItems": upcomingEvents.length,
    "itemListElement": upcomingEvents.map((event, index) => ({
      "@type": "Event",
      "position": index + 1,
      "name": event.title,
      "description": event.description,
      "startDate": event.date.includes("2024") ? event.date : `2024-${event.date}`,
      "location": {
        "@type": "Place",
        "name": event.location,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Lagos",
          "addressCountry": "NG"
        }
      },
      "organizer": {
        "@type": "Organization",
        "name": "Christ Church Cathedral Akoka Parish"
      }
    }))
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <>
      <SEO
        title="Upcoming Events - CCC Akoka Parish"
        description="Join us for special services and events at Christ Church Cathedral Akoka Parish. Mark your calendar for harvest thanksgiving, crossover services, and prayer vigils."
        url="/#events"
        jsonLd={eventsJsonLd}
      />
      <section id="events" className="py-32 relative overflow-hidden">
        {/* Premium Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(45,30%,96%)] via-white to-[hsl(45,30%,96%)]" />
          <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[hsl(43,90%,52%)] rounded-full filter blur-[280px] opacity-[0.06]" />
          <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-[hsl(210,70%,48%)] rounded-full filter blur-[250px] opacity-[0.04]" />
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
              <Calendar className="w-4 h-4 text-[hsl(43,90%,52%)]" />
              <span className="text-[hsl(40,85%,35%)] text-xs font-semibold tracking-[0.2em] uppercase">
                Mark Your Calendar
              </span>
            </motion.span>
            
            <motion.h2
              className="text-5xl md:text-7xl font-heading font-light tracking-wide leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-[hsl(220,20%,25%)]">Upcoming </span>
              <span className="text-gradient-gold">Events</span>
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
              Mark your calendar for these special gatherings
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {upcomingEvents.map((event, index) => (
              <motion.div key={index} variants={itemVariants} className="group">
                <div
                  className={`relative overflow-hidden rounded-3xl h-full transition-all duration-700 ${
                    event.featured
                      ? "bg-white/95 backdrop-blur-2xl border-2 border-[hsl(43,90%,52%,0.4)] shadow-[0_20px_60px_rgba(210,172,71,0.15)]"
                      : "bg-white/80 backdrop-blur-xl border border-[hsl(43,90%,52%,0.15)] shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
                  } hover:shadow-[0_24px_70px_rgba(210,172,71,0.2)] hover:-translate-y-3`}
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[hsl(43,90%,52%,0.03)] via-transparent to-[hsl(210,70%,48%,0.02)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Top gold line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[hsl(43,90%,52%)] to-transparent" />
                  
                  {event.featured && (
                    <motion.div
                      className="absolute top-4 right-4 bg-gradient-to-r from-[hsl(43,90%,52%)] to-[hsl(40,85%,45%)] text-white text-xs font-semibold px-4 py-2 rounded-full tracking-wider shadow-lg"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: 0.8 + index * 0.2, type: "spring", stiffness: 200 }}
                    >
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </span>
                    </motion.div>
                  )}
                  
                  <div className="relative z-10 p-8">
                    <h3 className="text-2xl font-heading font-light tracking-wide text-[hsl(220,20%,25%)] mb-6 pr-20">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-3 text-base">
                        <div className="w-10 h-10 rounded-xl bg-[hsl(43,90%,52%,0.1)] border border-[hsl(43,90%,52%,0.2)] flex items-center justify-center">
                          <Calendar className="h-4 w-4 text-[hsl(43,90%,52%)]" />
                        </div>
                        <span className="text-[hsl(220,15%,40%)] font-light">{event.date}</span>
                      </div>
                      
                      <div className="flex items-center gap-3 text-base">
                        <div className="w-10 h-10 rounded-xl bg-[hsl(210,70%,48%,0.1)] border border-[hsl(210,70%,48%,0.2)] flex items-center justify-center">
                          <Clock className="h-4 w-4 text-[hsl(210,70%,48%)]" />
                        </div>
                        <span className="text-[hsl(220,15%,40%)] font-light">{event.time}</span>
                      </div>
                      
                      <div className="flex items-start gap-3 text-base">
                        <div className="w-10 h-10 rounded-xl bg-[hsl(43,90%,52%,0.1)] border border-[hsl(43,90%,52%,0.2)] flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-4 w-4 text-[hsl(43,90%,52%)]" />
                        </div>
                        <span className="text-[hsl(220,15%,40%)] font-light">{event.location}</span>
                      </div>
                    </div>
                    
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-[hsl(43,90%,52%,0.3)] to-transparent mb-6" />
                    
                    <p className="text-base text-[hsl(220,15%,50%)] font-light leading-relaxed mb-6">
                      {event.description}
                    </p>
                    
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        className="w-full bg-transparent border-2 border-[hsl(43,90%,52%,0.5)] text-[hsl(43,90%,45%)] hover:bg-[hsl(43,90%,52%)] hover:text-white hover:border-[hsl(43,90%,52%)] font-medium tracking-wider transition-all duration-500 group/btn"
                        aria-label={`Learn more about ${event.title}`}
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  </div>
                  
                  {/* Corner accents */}
                  <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[hsl(43,90%,52%,0.2)] rounded-bl-3xl" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Events;