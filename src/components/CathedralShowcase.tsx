import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Users, Clock, Sparkles } from "lucide-react";
import churchExterior from "@/assets/church-exterior-glade.jpg";
import churchInterior from "@/assets/church-interior-glade.jpg";

gsap.registerPlugin(ScrollTrigger);

const CathedralShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on images
      gsap.to(".showcase-image-1", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
      
      gsap.to(".showcase-image-2", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: Users, value: "500+", label: "Faithful Members" },
    { icon: Clock, value: "50+", label: "Years of Worship" },
    { icon: MapPin, value: "Akoka", label: "Lagos, Nigeria" },
    { icon: Sparkles, value: "∞", label: "Divine Blessings" },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(40,20%,96%)] via-white to-[hsl(45,25%,98%)]" />
      
      {/* Divine Light Effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 0%, hsl(43 90% 52% / 0.08) 0%, transparent 50%)`
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(43,90%,52%,0.1)] border border-[hsl(43,90%,52%,0.3)] text-[hsl(40,85%,35%)] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            Our Sacred Space
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide mb-6 text-[hsl(220,30%,15%)]">
            <span className="text-gradient-gold">Glade Cathedral</span>
          </h2>
          <p className="text-lg md:text-xl text-[hsl(220,15%,45%)] max-w-2xl mx-auto font-light">
            A sanctuary of divine presence where the glory of God dwells among His people
          </p>
        </motion.div>

        {/* Image Gallery */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {/* Exterior Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative group"
          >
            <div className="showcase-image-1 relative overflow-hidden rounded-3xl">
              {/* Gold Border Effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-[hsl(45,95%,65%)] via-[hsl(43,90%,52%)] to-[hsl(40,85%,42%)] rounded-3xl opacity-70 blur-sm group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-white p-1.5 rounded-3xl">
                <img
                  src={churchExterior}
                  alt="Glade Cathedral Exterior - Celestial Church of Christ Akoka Parish"
                  className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-xl"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-1.5 rounded-2xl bg-gradient-to-t from-[hsl(220,30%,10%,0.6)] via-transparent to-transparent pointer-events-none" />
                
                {/* Label */}
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-[hsl(220,30%,15%)] text-sm font-semibold">
                    <MapPin className="w-4 h-4 text-[hsl(43,90%,45%)]" />
                    Cathedral Exterior
                  </span>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[hsl(43,90%,52%)] rounded-tl-xl" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[hsl(43,90%,52%)] rounded-br-xl" />
          </motion.div>

          {/* Interior Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative group lg:mt-12"
          >
            <div className="showcase-image-2 relative overflow-hidden rounded-3xl">
              {/* Gold Border Effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-[hsl(40,85%,42%)] via-[hsl(43,90%,52%)] to-[hsl(45,95%,65%)] rounded-3xl opacity-70 blur-sm group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-white p-1.5 rounded-3xl">
                <img
                  src={churchInterior}
                  alt="Glade Cathedral Interior - Sacred Worship Space"
                  className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-xl"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-1.5 rounded-2xl bg-gradient-to-t from-[hsl(220,30%,10%,0.6)] via-transparent to-transparent pointer-events-none" />
                
                {/* Label */}
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-[hsl(220,30%,15%)] text-sm font-semibold">
                    <Sparkles className="w-4 h-4 text-[hsl(43,90%,45%)]" />
                    Sacred Interior
                  </span>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-[hsl(43,90%,52%)] rounded-tr-xl" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-[hsl(43,90%,52%)] rounded-bl-xl" />
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="glass-card p-6 md:p-8 text-center group"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[hsl(43,90%,52%,0.1)] border border-[hsl(43,90%,52%,0.3)] flex items-center justify-center group-hover:bg-[hsl(43,90%,52%)] group-hover:border-[hsl(43,90%,52%)] transition-all duration-300">
                <stat.icon className="w-6 h-6 text-[hsl(43,90%,45%)] group-hover:text-white transition-colors" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-[hsl(220,15%,50%)] font-medium tracking-wide uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 text-center"
        >
          <blockquote className="max-w-3xl mx-auto">
            <div className="text-5xl text-[hsl(43,90%,52%)] mb-4">"</div>
            <p className="text-xl md:text-2xl text-[hsl(220,20%,30%)] font-light italic leading-relaxed">
              The glory of this latter house shall be greater than the former, saith the LORD of hosts: and in this place will I give peace.
            </p>
            <footer className="mt-6">
              <cite className="text-sm font-semibold tracking-[0.2em] uppercase text-[hsl(43,90%,45%)] not-italic">
                — Haggai 2:9
              </cite>
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default CathedralShowcase;
