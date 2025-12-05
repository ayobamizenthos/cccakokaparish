import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Shepherd = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="shepherd" className="py-28 md:py-36 bg-white">
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
              Leadership
            </motion.p>
            
            <motion.h2
              className="section-title mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Our <span className="text-gradient-gold">Shepherd</span>
            </motion.h2>
            
            <motion.div
              className="w-16 h-px bg-[hsl(38,75%,50%)] mx-auto"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            />
          </div>

          {/* Content */}
          <motion.div
            className="grid md:grid-cols-5 gap-0 border border-border"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {/* Left - Avatar */}
            <div className="md:col-span-2 bg-[hsl(0,0%,6%)] p-12 flex flex-col items-center justify-center min-h-[350px]">
              <motion.div 
                className="relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="w-40 h-40 rounded-full bg-white/10 border border-[hsl(38,75%,50%)] flex items-center justify-center">
                  <span 
                    className="text-5xl font-normal text-gradient-gold"
                    style={{ fontFamily: 'Cinzel, serif' }}
                  >
                    SP
                  </span>
                </div>
              </motion.div>
            </div>
            
            {/* Right - Content */}
            <div className="md:col-span-3 p-12 lg:p-16">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <h3 
                  className="text-2xl lg:text-3xl font-medium tracking-wide mb-2"
                  style={{ fontFamily: 'Cinzel, serif', color: 'hsl(0 0% 8%)' }}
                >
                  Superior Evangelist <span className="text-gradient-gold">[Name]</span>
                </h3>
                <p 
                  className="text-[hsl(38,75%,45%)] text-sm tracking-[0.2em] uppercase mb-8"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Parish Shepherd
                </p>
              </motion.div>
              
              <motion.div 
                className="w-12 h-px bg-[hsl(38,75%,50%)] mb-8"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              />
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-[hsl(38,75%,50%,0.2)]" />
                <p 
                  className="pl-8 italic text-lg lg:text-xl leading-relaxed"
                  style={{ fontFamily: 'Cormorant Garamond, serif', color: 'hsl(0 0% 35%)' }}
                >
                  "Welcome to Glade Cathedral, where God's presence dwells and His love transforms lives.
                  It is my joy to shepherd this flock and guide you on your spiritual journey. May the
                  grace of our Lord Jesus Christ be with you always."
                </p>
              </motion.div>
              
              <motion.p 
                className="mt-8 text-base leading-relaxed"
                style={{ fontFamily: 'Cormorant Garamond, serif', color: 'hsl(0 0% 45%)' }}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                Join us in worship every Wednesday and Sunday as we seek the face of God together.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Shepherd;
