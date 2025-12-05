import { useState, useEffect, memo, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import LazyImage from "./LazyImage";
import { motion, AnimatePresence } from "framer-motion";

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

  useEffect(() => {
    if (isMobileMenuOpen && firstMenuItemRef.current) {
      firstMenuItemRef.current.focus();
    }
  }, [isMobileMenuOpen]);

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
    { name: "Choir & Media", href: "/choir-media", isRoute: true },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-xl shadow-lg border-b border-[hsl(43,90%,52%,0.15)]"
          : "bg-gradient-to-b from-white/90 to-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-center group pt-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <LazyImage
                src="/ccc-rainbow-logo.png"
                alt="Celestial Church of Christ Logo"
                className="h-16 md:h-20 w-auto object-contain transition-all duration-500 drop-shadow-[0_4px_20px_rgba(212,165,48,0.3)]"
              />
            </motion.div>
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[hsl(40,85%,35%)] mt-1">
              AKOKA PARISH
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {link.isRoute ? (
                  <Link
                    to={link.href}
                    className="px-4 py-2.5 text-xs font-medium tracking-wider uppercase text-[hsl(220,15%,35%)] hover:text-[hsl(43,90%,45%)] transition-all duration-300 relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[hsl(45,95%,65%)] via-[hsl(43,90%,52%)] to-[hsl(45,95%,65%)] group-hover:w-3/4 transition-all duration-300 rounded-full" />
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="px-4 py-2.5 text-xs font-medium tracking-wider uppercase text-[hsl(220,15%,35%)] hover:text-[hsl(43,90%,45%)] transition-all duration-300 relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[hsl(45,95%,65%)] via-[hsl(43,90%,52%)] to-[hsl(45,95%,65%)] group-hover:w-3/4 transition-all duration-300 rounded-full" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden xl:flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-2 border-[hsl(210,70%,48%)] text-[hsl(210,70%,45%)] hover:bg-[hsl(210,70%,48%,0.1)] hover:border-[hsl(210,70%,45%)] font-semibold tracking-wider text-xs uppercase px-6 rounded-lg"
              >
                Join Live
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="sm"
                className="btn-gold text-xs px-6 py-2 rounded-lg"
                asChild
              >
                <a href="mailto:cccakokaparish@yahoo.com?subject=Request for Church Account Details&body=Hello, I'd like to request the account details for making a donation to CCC Akoka Parish. Thank you.">
                  Donate
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="xl:hidden p-3 text-[hsl(220,30%,25%)] hover:text-[hsl(43,90%,45%)] transition-colors rounded-lg border border-[hsl(43,90%,52%,0.2)] hover:border-[hsl(43,90%,52%,0.4)] hover:bg-[hsl(43,90%,52%,0.05)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              ref={mobileMenuRef}
              id="mobile-navigation"
              className="xl:hidden py-6 bg-white/98 backdrop-blur-xl border-t border-[hsl(43,90%,52%,0.15)]"
              role="navigation"
              aria-label="Mobile navigation menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.div
                className="flex flex-col space-y-1"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    {link.isRoute ? (
                      <Link
                        ref={index === 0 ? firstMenuItemRef : null}
                        to={link.href}
                        className="flex items-center px-4 py-3 text-sm font-medium tracking-wide text-[hsl(220,15%,35%)] hover:text-[hsl(43,90%,45%)] hover:bg-[hsl(43,90%,52%,0.05)] rounded-lg transition-all duration-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[hsl(43,90%,52%,0.3)] group-hover:bg-[hsl(43,90%,52%)] mr-3 transition-colors" />
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        ref={index === 0 ? firstMenuItemRef : null}
                        href={link.href}
                        className="flex items-center px-4 py-3 text-sm font-medium tracking-wide text-[hsl(220,15%,35%)] hover:text-[hsl(43,90%,45%)] hover:bg-[hsl(43,90%,52%,0.05)] rounded-lg transition-all duration-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[hsl(43,90%,52%,0.3)] group-hover:bg-[hsl(43,90%,52%)] mr-3 transition-colors" />
                        {link.name}
                      </a>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  className="px-4 pt-6 flex flex-col space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                >
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-[hsl(210,70%,48%)] text-[hsl(210,70%,45%)] hover:bg-[hsl(210,70%,48%,0.1)] font-semibold tracking-wider rounded-lg"
                  >
                    Join Live
                  </Button>
                  <Button
                    className="w-full btn-gold rounded-lg"
                    asChild
                  >
                    <a href="mailto:cccakokaparish@yahoo.com?subject=Request for Church Account Details&body=Hello, I'd like to request the account details for making a donation to CCC Akoka Parish. Thank you.">
                      Donate
                    </a>
                  </Button>
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
