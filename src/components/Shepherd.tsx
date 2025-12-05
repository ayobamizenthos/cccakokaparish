import { Quote } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Shepherd = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="shepherd" className="section bg-white" ref={ref}>
      <div className="content-container">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            className="premium-label mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            Leadership
          </motion.p>
          
          <motion.h2
            className="mb-4"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Our <span className="text-gradient-gold">Shepherd</span>
          </motion.h2>
          
          <motion.div
            className="divider"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          />
        </div>

        {/* Content Card */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          <div className="grid md:grid-cols-5 overflow-hidden border border-[hsl(0,0%,90%)]">
            {/* Avatar Section */}
            <div className="md:col-span-2 bg-[hsl(0,0%,4%)] p-8 md:p-12 flex items-center justify-center min-h-[250px] md:min-h-[350px]">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-white/5 border border-[hsl(38,70%,50%)] flex items-center justify-center">
                <span 
                  className="text-4xl md:text-5xl text-gradient-gold"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  SP
                </span>
              </div>
            </div>
            
            {/* Content */}
            <div className="md:col-span-3 p-6 md:p-10 lg:p-12">
              <h3 className="text-xl md:text-2xl font-medium mb-1">
                Superior Evangelist <span className="text-gold">[Name]</span>
              </h3>
              <p className="text-[hsl(38,70%,45%)] text-xs tracking-[0.15em] uppercase mb-6">
                Parish Shepherd
              </p>
              
              <div className="w-10 h-[2px] bg-[hsl(38,70%,50%)] mb-6" />
              
              <div className="relative">
                <Quote className="absolute -top-1 -left-1 h-6 w-6 text-[hsl(38,70%,50%,0.2)]" />
                <p 
                  className="pl-6 text-base md:text-lg italic leading-relaxed text-[hsl(0,0%,30%)]"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  "Welcome to Glade Cathedral, where God's presence dwells and His love transforms lives.
                  It is my joy to shepherd this flock and guide you on your spiritual journey."
                </p>
              </div>
              
              <p className="mt-6 text-sm text-[hsl(0,0%,45%)] leading-relaxed">
                Join us every Wednesday and Sunday as we seek the face of God together.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Shepherd;
