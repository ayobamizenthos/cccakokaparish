import { Calendar, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
      <section id="events" className="py-32 bg-muted/30">
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
            Upcoming Events
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
            <motion.div key={index} variants={itemVariants}>
              <Card
                className={`group relative overflow-hidden transition-all duration-700 hover:shadow-lift ${
                  event.featured
                    ? "border-2 border-secondary/60 shadow-glow"
                    : "border-border/40"
                }`}
              >
                {event.featured && (
                  <motion.div
                    className="absolute top-0 right-0 bg-secondary text-primary text-xs font-medium px-6 py-2 rounded-bl-2xl tracking-wide shadow-glow"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.8 + index * 0.2, type: "spring", stiffness: 200 }}
                  >
                    Featured
                  </motion.div>
                )}
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-heading font-light tracking-editorial">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="flex items-start gap-3 text-base">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Calendar className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    </motion.div>
                    <span className="text-muted-foreground/80 font-light">{event.date}</span>
                  </div>
                  <div className="flex items-start gap-3 text-base">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Clock className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    </motion.div>
                    <span className="text-muted-foreground/80 font-light">{event.time}</span>
                  </div>
                  <div className="flex items-start gap-3 text-base">
                    <motion.div
                      whileHover={{ x: [0, -5, 5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <MapPin className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    </motion.div>
                    <span className="text-muted-foreground/80 font-light">{event.location}</span>
                  </div>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                  <p className="text-base text-muted-foreground/80 pt-2 font-light leading-luxury">
                    {event.description}
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="outline"
                      className="w-full mt-6 border-2 border-secondary/60 text-secondary hover:bg-secondary/10 hover:border-secondary font-light tracking-wide"
                      aria-label={`Learn more about ${event.title}`}
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default Events;
