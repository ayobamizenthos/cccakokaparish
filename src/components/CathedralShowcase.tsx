import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import churchExterior from "@/assets/church-exterior-glade.jpg";
import churchInterior from "@/assets/church-interior-glade.jpg";

const CathedralShowcase = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="section section-light">
      <div className="content-container">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            className="premium-label mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            Our Sacred Space
          </motion.p>
          
          <motion.h2
            className="mb-4"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            <span className="text-gradient-gold">Glade Cathedral</span>
          </motion.h2>
          
          <motion.div
            className="divider"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          />
        </div>

        {/* Images - Stack on Mobile */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="relative overflow-hidden aspect-[4/3]"
          >
            <img
              src={churchExterior}
              alt="Cathedral Exterior"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <span className="text-white text-xs tracking-[0.15em] uppercase">
                Cathedral Exterior
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="relative overflow-hidden aspect-[4/3]"
          >
            <img
              src={churchInterior}
              alt="Cathedral Interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <span className="text-white text-xs tracking-[0.15em] uppercase">
                Sacred Interior
              </span>
            </div>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.blockquote
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p 
            className="text-lg md:text-xl lg:text-2xl italic leading-relaxed text-[hsl(0,0%,20%)] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            "The glory of this latter house shall be greater than the former... and in this place will I give peace."
          </p>
          <cite className="text-xs tracking-[0.2em] uppercase text-[hsl(38,70%,45%)] not-italic font-medium">
            — Haggai 2:9
          </cite>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default CathedralShowcase;
