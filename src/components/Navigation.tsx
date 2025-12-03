import { useState, useEffect, memo, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import LazyImage from "./LazyImage";
import { motion, AnimatePresence } from "framer-motion";
import DarkModeToggle from "./DarkModeToggle";

const Navigation = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const firstMenuItemRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Focus management for mobile menu
  useEffect(() => {
    if (isMobileMenuOpen && firstMenuItemRef.current) {
      firstMenuItemRef.current.focus();
      // Announce menu opening to screen readers
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.style.position = 'absolute';
      announcement.style.left = '-10000px';
      announcement.style.width = '1px';
      announcement.style.height = '1px';
      announcement.style.overflow = 'hidden';
      announcement.textContent = 'Navigation menu opened';
      document.body.appendChild(announcement);
      setTimeout(() => document.body.removeChild(announcement), 1000);
    }
  }, [isMobileMenuOpen]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/", isRoute: true },
    { name: "About Us", href: "#about" },
    { name: "Shepherd", href: "#shepherd" },
    { name: "Services", href: "#services" },
    { name: "Events", href: "#events" },
    { name: "Sermons", href: "/sermons", isRoute: true },
    { name: "Blog", href: "/blog", isRoute: true },
    { name: "Choir & Media Team", href: "/choir-media", isRoute: true },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-primary/98 backdrop-blur-luxury shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex flex-col items-center group pt-2">
            <LazyImage
              src="/ccc-rainbow-logo.png"
              alt="Celestial Church of Christ Logo"
              className="h-20 md:h-24 w-auto object-contain transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-glow"
            />
            <div className="text-sm md:text-base font-heading font-light tracking-luxury text-secondary -mt-1">
              Akoka Parish
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              link.isRoute ? (
                <motion.div
                  key={link.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={link.href}
                    className="px-5 py-2.5 text-sm font-body font-light tracking-editorial text-primary-foreground hover:text-secondary transition-all duration-500 rounded-xl hover:bg-primary-foreground/5"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ) : (
                <motion.div
                  key={link.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={link.href}
                    className="px-5 py-2.5 text-sm font-body font-light tracking-editorial text-primary-foreground hover:text-secondary transition-all duration-500 rounded-xl hover:bg-primary-foreground/5"
                  >
                    {link.name}
                  </a>
                </motion.div>
              )
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <DarkModeToggle />
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" size="sm" className="border-2 border-secondary/60 text-secondary hover:bg-secondary/10 hover:border-secondary font-light tracking-wide" aria-label="Join live service">
                Join Live
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="sm"
                className="bg-secondary text-primary hover:bg-secondary/90 shadow-glow font-medium tracking-wide"
                asChild
                aria-label="Send donation request email"
              >
                <a href="mailto:cccakokaparish@yahoo.com?subject=Request for Church Account Details&body=Hello, I'd like to request the account details for making a donation to CCC Akoka Parish. Thank you.">
                  Donate
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              ref={mobileMenuRef}
              id="mobile-navigation"
              className="lg:hidden py-4 bg-background/95 backdrop-blur-md"
              role="navigation"
              aria-label="Mobile navigation menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.div
                className="flex flex-col space-y-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                {navLinks.map((link, index) => (
                  link.isRoute ? (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        ref={index === 0 ? firstMenuItemRef : null}
                        to={link.href}
                        className="px-4 py-3 text-sm font-medium text-foreground hover:text-secondary hover:bg-muted rounded-md transition-colors block"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <a
                        ref={index === 0 ? firstMenuItemRef : null}
                        href={link.href}
                        className="px-4 py-3 text-sm font-medium text-foreground hover:text-secondary hover:bg-muted rounded-md transition-colors block"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </a>
                    </motion.div>
                  )
                ))}
                <motion.div
                  className="px-4 pt-4 flex flex-col space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1, duration: 0.3 }}
                >
                  <div className="flex justify-center mb-4">
                    <DarkModeToggle />
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button variant="outline" className="w-full border-secondary text-secondary" aria-label="Join live service">
                      Join Live
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      className="w-full bg-gradient-to-r from-secondary to-accent text-primary"
                      asChild
                      aria-label="Send donation request email"
                    >
                      <a href="mailto:cccakokaparish@yahoo.com?subject=Request for Church Account Details&body=Hello, I'd like to request the account details for making a donation to CCC Akoka Parish. Thank you.">
                        Donate
                      </a>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;
