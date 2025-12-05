import { Link } from "react-router-dom";
import { sermons } from "@/data/sermons";
import { Play } from "lucide-react";
import LazyImage from "./LazyImage";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SermonsGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const recentSermons = sermons.slice(0, 3);

  return (
    <section className="section section-light" ref={ref}>
      <div className="content-container">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            className="premium-label mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            Watch & Listen
          </motion.p>
          
          <motion.h2
            className="mb-4"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Recent <span className="text-gradient-gold">Sermons</span>
          </motion.h2>
          
          <motion.div
            className="divider"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          />
        </div>

        {/* Sermons Grid */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-10 md:mb-12">
          {recentSermons.map((sermon, index) => (
            <motion.div
              key={sermon.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Link
                to={`/sermon/${sermon.id}`}
                className="block card-premium overflow-hidden group"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <LazyImage
                    src={sermon.thumbnail}
                    alt={sermon.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                      <Play className="w-5 h-5 text-black fill-black ml-0.5" />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-5 md:p-6">
                  <p className="text-xs text-[hsl(0,0%,50%)] mb-2">{sermon.date}</p>
                  <h3 className="text-base md:text-lg font-medium mb-2 line-clamp-2 group-hover:text-[hsl(38,70%,45%)] transition-colors">
                    {sermon.title}
                  </h3>
                  <p className="text-sm text-[hsl(0,0%,45%)] line-clamp-2">
                    {sermon.theme}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <Link to="/sermons" className="btn-primary">
            View All Sermons
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SermonsGrid;
