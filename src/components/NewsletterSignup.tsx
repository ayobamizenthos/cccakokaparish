import { useState, useRef } from "react";
import { Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion, useInView } from "framer-motion";

const NewsletterSignup = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubscribed(true);
      toast({
        title: "Subscribed!",
        description: "Thank you for joining our newsletter.",
      });
      setEmail("");
    } catch {
      toast({
        title: "Error",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubscribed) {
    return (
      <section className="section bg-white" ref={ref}>
        <div className="content-narrow text-center">
          <CheckCircle className="h-12 w-12 text-[hsl(38,70%,50%)] mx-auto mb-4" />
          <h3 className="text-2xl font-medium mb-2">Welcome!</h3>
          <p className="text-[hsl(0,0%,45%)]">
            You've successfully subscribed to our newsletter.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="section bg-white" ref={ref}>
      <div className="content-narrow text-center">
        {/* Header */}
        <motion.p
          className="premium-label mb-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          Stay Connected
        </motion.p>
        
        <motion.h2
          className="mb-4"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          Join Our <span className="text-gradient-gold">Newsletter</span>
        </motion.h2>
        
        <motion.div
          className="divider mb-6"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        />
        
        <motion.p
          className="text-[hsl(0,0%,45%)] mb-8 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          Get updates on events, sermons, and spiritual inspiration
        </motion.p>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 border border-[hsl(0,0%,90%)] focus:border-[hsl(38,70%,50%)] focus:outline-none text-sm"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-gold flex items-center justify-center gap-2"
            >
              <Send className="h-4 w-4" />
              <span>{isSubmitting ? "..." : "Subscribe"}</span>
            </button>
          </div>
          <p className="text-xs text-[hsl(0,0%,55%)] mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
