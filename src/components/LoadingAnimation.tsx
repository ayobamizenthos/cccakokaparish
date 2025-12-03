import { motion } from "framer-motion";

const LoadingAnimation = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="text-center space-y-8">
        {/* Logo/Icon */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <motion.div
            className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center shadow-glow"
            variants={pulseVariants}
            animate="animate"
          >
            <motion.div
              className="w-12 h-12 rounded-full border-4 border-secondary border-t-transparent"
              variants={spinnerVariants}
              animate="animate"
            />
          </motion.div>
        </motion.div>

        {/* Loading Text */}
        <motion.div variants={itemVariants} className="space-y-4">
          <motion.h2
            className="text-2xl md:text-3xl font-heading font-light text-primary tracking-luxury"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Glade Cathedral
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground font-light tracking-editorial"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Preparing your spiritual experience...
          </motion.p>
        </motion.div>

        {/* Progress Dots */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-2"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 rounded-full bg-secondary"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Inspirational Quote */}
        <motion.div
          variants={itemVariants}
          className="max-w-md mx-auto"
        >
          <motion.blockquote
            className="text-base italic text-muted-foreground/80 font-light leading-luxury"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            "Wait on the Lord: be of good courage, and he shall strengthen thine heart."
          </motion.blockquote>
          <motion.cite
            className="text-sm text-secondary font-medium mt-2 block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            — Psalm 27:14
          </motion.cite>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingAnimation;