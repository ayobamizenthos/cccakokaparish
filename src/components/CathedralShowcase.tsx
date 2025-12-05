import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import churchExterior from "@/assets/church-exterior-glade.jpg";
import churchInterior from "@/assets/church-interior-glade.jpg";

const CathedralShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="py-28 md:py-36 bg-[hsl(30,10%,97%)]"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p 
            className="premium-label mb-6"
          >
            Our Sacred Space
          </p>
          <h2 className="section-title mb-6">
            <span className="text-gradient-gold">Glade Cathedral</span>
          </h2>
          <div className="w-16 h-px bg-[hsl(38,75%,50%)] mx-auto mb-8" />
          <p 
            className="section-subtitle max-w-2xl mx-auto"
          >
            A sanctuary of divine presence where the glory of God dwells among His people
          </p>
        </motion.div>

        {/* Images */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-20 max-w-5xl mx-auto">
          {/* Exterior */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img
                src={churchExterior}
                alt="Glade Cathedral Exterior"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span 
                  className="text-xs tracking-[0.2em] uppercase text-white/90"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Cathedral Exterior
                </span>
              </div>
            </div>
          </motion.div>

          {/* Interior */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative lg:mt-12"
          >
            <div className="relative overflow-hidden">
              <img
                src={churchInterior}
                alt="Glade Cathedral Interior"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span 
                  className="text-xs tracking-[0.2em] uppercase text-white/90"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Sacred Interior
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <blockquote>
            <p 
              className="text-xl md:text-2xl italic leading-relaxed mb-6"
              style={{ fontFamily: 'Cormorant Garamond, serif', color: 'hsl(0 0% 25%)' }}
            >
              "The glory of this latter house shall be greater than the former, saith the LORD of hosts: and in this place will I give peace."
            </p>
            <footer>
              <cite 
                className="text-xs font-medium tracking-[0.2em] uppercase text-[hsl(38,75%,45%)] not-italic"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
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
