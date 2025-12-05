import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
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
      location: "Glade Cathedral",
      description: "Join us for our annual harvest celebration and thanksgiving service.",
      featured: true,
    },
    {
      title: "New Year Crossover",
      date: "December 31, 2024",
      time: "10:00 PM",
      location: "Glade Cathedral",
      description: "Ring in the new year with worship, prayer, and divine presence.",
      featured: true,
    },
    {
      title: "Monthly Prayer Vigil",
      date: "First Thursday",
      time: "10:00 PM – 4:00 AM",
      location: "Glade Cathedral",
      description: "Join us for powerful midnight prayers and spiritual warfare.",
    },
  ];

  const eventsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Upcoming Events - CCC Akoka Parish",
    "numberOfItems": upcomingEvents.length,
    "itemListElement": upcomingEvents.map((event, index) => ({
      "@type": "Event",
      "position": index + 1,
      "name": event.title,
      "description": event.description,
    }))
  };

  return (
    <>
      <SEO
        title="Upcoming Events - CCC Akoka Parish"
        description="Join us for special services and events at Christ Church Cathedral Akoka Parish."
        url="/#events"
        jsonLd={eventsJsonLd}
      />
      <section id="events" className="py-28 md:py-36 bg-white">
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
                Mark Your Calendar
              </motion.p>
              
              <motion.h2
                className="section-title mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Upcoming <span className="text-gradient-gold">Events</span>
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
                Mark your calendar for these special gatherings
              </motion.p>
            </div>

            {/* Event Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                  className="group"
                >
                  <div className={`relative p-8 h-full border transition-all duration-500 ${
                    event.featured 
                      ? "border-[hsl(38,75%,50%)]" 
                      : "border-border hover:border-[hsl(38,75%,50%)]"
                  }`}>
                    {event.featured && (
                      <div 
                        className="absolute top-0 right-0 px-3 py-1 bg-[hsl(38,75%,50%)] text-white text-[9px] font-medium tracking-[0.15em] uppercase"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        Featured
                      </div>
                    )}
                    
                    <h3 
                      className="text-xl font-medium tracking-wide mb-6 pr-16"
                      style={{ fontFamily: 'Cinzel, serif', color: 'hsl(0 0% 8%)' }}
                    >
                      {event.title}
                    </h3>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-4 w-4 text-[hsl(38,75%,50%)]" />
                        <span 
                          className="text-sm"
                          style={{ fontFamily: 'Inter, sans-serif', color: 'hsl(0 0% 35%)' }}
                        >
                          {event.date}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Clock className="h-4 w-4 text-[hsl(38,75%,50%)]" />
                        <span 
                          className="text-sm"
                          style={{ fontFamily: 'Inter, sans-serif', color: 'hsl(0 0% 35%)' }}
                        >
                          {event.time}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <MapPin className="h-4 w-4 text-[hsl(38,75%,50%)]" />
                        <span 
                          className="text-sm"
                          style={{ fontFamily: 'Inter, sans-serif', color: 'hsl(0 0% 35%)' }}
                        >
                          {event.location}
                        </span>
                      </div>
                    </div>
                    
                    <div className="w-full h-px bg-border mb-6" />
                    
                    <p 
                      className="text-base leading-relaxed mb-6"
                      style={{ fontFamily: 'Cormorant Garamond, serif', color: 'hsl(0 0% 45%)' }}
                    >
                      {event.description}
                    </p>
                    
                    <button 
                      className="flex items-center gap-2 text-xs font-medium tracking-[0.15em] uppercase text-[hsl(38,75%,45%)] hover:text-[hsl(38,75%,35%)] transition-colors group/btn"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Events;
