import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Events = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const upcomingEvents = [
    {
      title: "Harvest Thanksgiving",
      date: "December 15, 2024",
      time: "10:00 AM",
      location: "Glade Cathedral",
      featured: true,
    },
    {
      title: "New Year Crossover",
      date: "December 31, 2024",
      time: "10:00 PM",
      location: "Glade Cathedral",
      featured: true,
    },
    {
      title: "Monthly Prayer Vigil",
      date: "First Thursday",
      time: "10:00 PM – 4:00 AM",
      location: "Glade Cathedral",
    },
  ];

  return (
    <>
      <SEO
        title="Upcoming Events - CCC Akoka Parish"
        description="Join us for special services and events"
        url="/#events"
      />
      <section id="events" className="section bg-white" ref={ref}>
        <div className="content-container">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <motion.p
              className="premium-label mb-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
            >
              Mark Your Calendar
            </motion.p>
            
            <motion.h2
              className="mb-4"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              Upcoming <span className="text-gradient-gold">Events</span>
            </motion.h2>
            
            <motion.div
              className="divider"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
            />
          </div>

          {/* Events Grid - 1 column on mobile, 3 on desktop */}
          <div className="grid md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="card-premium p-6"
              >
                {event.featured && (
                  <span className="inline-block px-2 py-1 bg-[hsl(38,70%,50%)] text-white text-[9px] font-semibold tracking-[0.1em] uppercase mb-4">
                    Featured
                  </span>
                )}
                
                <h3 className="text-lg md:text-xl font-medium mb-4">{event.title}</h3>
                
                <div className="space-y-3 mb-5">
                  <div className="flex items-center gap-2 text-sm text-[hsl(0,0%,35%)]">
                    <Calendar className="h-4 w-4 text-[hsl(38,70%,50%)]" />
                    <span>{event.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-[hsl(0,0%,35%)]">
                    <Clock className="h-4 w-4 text-[hsl(38,70%,50%)]" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-[hsl(0,0%,35%)]">
                    <MapPin className="h-4 w-4 text-[hsl(38,70%,50%)]" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <button className="flex items-center gap-1 text-xs font-semibold tracking-[0.1em] uppercase text-[hsl(38,70%,45%)] hover:text-[hsl(38,70%,35%)] transition-colors group">
                  <span>Details</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
