import { useState, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MapPin, Mail, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import churchExterior from "@/assets/church-exterior.jpg";

const NextSteps = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isOpen, setIsOpen] = useState(false);

  const handleFindUs = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=3+Afolabi-Brown+Street+Akoka+Lagos+Nigeria",
      "_blank"
    );
  };

  return (
    <>
      <section id="contact" className="section section-dark" ref={ref}>
        <div className="content-narrow text-center">
          <motion.p
            className="text-[hsl(38,70%,55%)] text-xs tracking-[0.2em] uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            Get Started
          </motion.p>
          
          <motion.h2
            className="text-white mb-4"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Take the <span className="text-[hsl(38,70%,55%)]">Next Step</span>
          </motion.h2>
          
          <motion.div
            className="w-12 h-[1px] bg-[hsl(38,70%,50%)] mx-auto mb-6"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          />
          
          <motion.p
            className="text-white/60 text-lg mb-10"
            style={{ fontFamily: 'Playfair Display, serif' }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            You've visited, you've loved it — now what?
          </motion.p>
          
          <motion.button
            onClick={() => setIsOpen(true)}
            className="btn-gold flex items-center justify-center gap-2 mx-auto"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <span>Find Us</span>
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </div>
      </section>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-lg p-0 overflow-hidden">
          <div className="aspect-video">
            <img
              src={churchExterior}
              alt="Glade Cathedral"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <DialogHeader className="mb-4">
              <DialogTitle className="text-xl">Visit Us</DialogTitle>
            </DialogHeader>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[hsl(38,70%,50%)] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm mb-1">Address</p>
                  <p className="text-sm text-[hsl(0,0%,45%)]">
                    3, Afolabi-Brown Street, Akoka Lagos, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[hsl(38,70%,50%)] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm mb-1">Email</p>
                  <a 
                    href="mailto:cccakokaparish@yahoo.com"
                    className="text-sm text-[hsl(38,70%,45%)] hover:underline"
                  >
                    cccakokaparish@yahoo.com
                  </a>
                </div>
              </div>
            </div>

            <button
              onClick={handleFindUs}
              className="btn-primary w-full"
            >
              Open in Google Maps
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NextSteps;
