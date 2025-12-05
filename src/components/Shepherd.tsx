import { Quote, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Shepherd = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="shepherd" className="py-32 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[hsl(45,25%,97%)] to-white" />
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-[hsl(43,90%,52%)] rounded-full filter blur-[280px] opacity-[0.06]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[hsl(210,70%,48%)] rounded-full filter blur-[200px] opacity-[0.04]" />
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
            <Sparkles className="w-4 h-4 text-[hsl(43,90%,52%)]" />
            <span className="text-[hsl(40,85%,35%)] text-xs font-semibold tracking-[0.2em] uppercase">
              Leadership
            </span>
          </motion.span>
          
          <motion.h2
            className="text-5xl md:text-7xl font-heading font-light tracking-wide leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-[hsl(220,20%,25%)]">Our </span>
            <span className="text-gradient-gold">Shepherd</span>
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
        </motion.div>

        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative overflow-hidden rounded-[2rem] bg-white/90 backdrop-blur-2xl border border-[hsl(43,90%,52%,0.2)] shadow-[0_20px_70px_rgba(210,172,71,0.12)]">
            {/* Top gold line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[hsl(43,90%,52%)] to-transparent" />
            
            <div className="grid md:grid-cols-5 gap-0">
              {/* Left side - Avatar section with gradient */}
              <div className="md:col-span-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,20%)] via-[hsl(220,20%,25%)] to-[hsl(210,30%,18%)]" />
                
                {/* Gold decorative elements */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `
                    radial-gradient(circle at 20% 30%, hsl(43 90% 52% / 0.4) 0%, transparent 40%),
                    radial-gradient(circle at 80% 70%, hsl(43 90% 52% / 0.3) 0%, transparent 35%)
                  `
                }} />
                
                <div className="relative z-10 p-12 flex flex-col items-center justify-center min-h-[400px]">
                  {/* Avatar with glow */}
                  <motion.div 
                    className="relative"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
                  >
                    <div className="absolute inset-0 w-64 h-64 rounded-full bg-[hsl(43,90%,52%)] filter blur-xl opacity-30 animate-pulse-gold" />
                    <div className="relative w-56 h-56 rounded-full bg-gradient-to-br from-white via-[hsl(45,30%,98%)] to-white border-4 border-[hsl(43,90%,52%,0.5)] shadow-[0_0_40px_rgba(210,172,71,0.3)] flex items-center justify-center">
                      <span className="text-7xl font-heading font-light text-gradient-gold">SP</span>
                    </div>
                    
                    {/* Decorative ring */}
                    <div className="absolute -inset-4 rounded-full border-2 border-[hsl(43,90%,52%,0.2)] border-dashed animate-rotate-slow" />
                  </motion.div>
                  
                  {/* Gold cross below avatar */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-40">
                    <div className="w-1 h-16 bg-gradient-to-b from-[hsl(43,90%,52%)] to-transparent rounded-full" />
                    <div className="w-10 h-1 bg-[hsl(43,90%,52%)] absolute top-4 left-1/2 -translate-x-1/2 rounded-full" />
                  </div>
                </div>
              </div>
              
              {/* Right side - Content */}
              <div className="md:col-span-3 p-12 lg:p-16 relative">
                {/* Subtle pattern */}
                <div className="absolute inset-0 opacity-[0.02] cross-pattern" />
                
                <div className="relative z-10 space-y-8">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <h3 className="text-3xl lg:text-4xl font-heading font-light text-[hsl(220,20%,25%)] mb-3 tracking-wide">
                      Superior Evangelist <span className="text-gradient-gold">[Name]</span>
                    </h3>
                    <p className="text-[hsl(43,90%,45%)] font-semibold text-lg tracking-wider uppercase">
                      Parish Shepherd
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    className="w-20 h-0.5 bg-gradient-to-r from-[hsl(43,90%,52%)] to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  />
                  
                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <Quote className="absolute -top-4 -left-2 h-12 w-12 text-[hsl(43,90%,52%,0.15)]" />
                    <p className="text-[hsl(220,15%,40%)] leading-relaxed pl-10 italic font-light text-lg lg:text-xl">
                      "Welcome to Glade Cathedral, where God's presence dwells and His love transforms lives.
                      It is my joy to shepherd this flock and guide you on your spiritual journey. May the
                      grace of our Lord Jesus Christ be with you always."
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    className="pt-4"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <p className="text-base text-[hsl(220,15%,50%)] font-light leading-relaxed">
                      Join us in worship every Wednesday and Sunday as we seek the face of God together.
                    </p>
                  </motion.div>
                </div>
                
                {/* Corner accents */}
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[hsl(43,90%,52%,0.2)] rounded-br-[2rem]" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Shepherd;