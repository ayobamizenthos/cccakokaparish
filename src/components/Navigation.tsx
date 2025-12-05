import { useState, useEffect, memo, useRef } from "react";
import { Menu, X, Sparkles } from "lucide-react";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-2xl shadow-[0_8px_40px_rgba(212,165,48,0.12)] border-b border-gold-200/30"
          : "bg-gradient-to-b from-white/95 via-white/80 to-transparent backdrop-blur-sm"
      }`}
    >
      {/* Premium Gold Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-60" />
      
      {/* Subtle Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold-100/0 via-gold-100/20 to-gold-100/0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-center group relative">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative"
            >
              {/* Logo Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-gold-300/30 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150" />
              <LazyImage
                src="/ccc-rainbow-logo.png"
                alt="Celestial Church of Christ Logo"
                className="h-14 md:h-16 lg:h-18 w-auto object-contain transition-all duration-500 drop-shadow-[0_4px_24px_rgba(212,165,48,0.35)] relative z-10"
              />
            </motion.div>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-gold-600 mt-1 relative">
              AKOKA PARISH
              <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-50" />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center">
            <div className="flex items-center bg-white/50 backdrop-blur-xl rounded-full px-2 py-1.5 border border-gold-200/40 shadow-[0_4px_20px_rgba(212,165,48,0.08)]">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="px-3.5 py-2 text-[11px] font-semibold tracking-[0.1em] uppercase text-foreground/70 hover:text-gold-600 transition-all duration-300 relative group rounded-full hover:bg-gold-50/50"
                    >
                      {link.name}
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 group-hover:w-2/3 transition-all duration-300 rounded-full shadow-[0_0_8px_rgba(212,165,48,0.5)]" />
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="px-3.5 py-2 text-[11px] font-semibold tracking-[0.1em] uppercase text-foreground/70 hover:text-gold-600 transition-all duration-300 relative group rounded-full hover:bg-gold-50/50"
                    >
                      {link.name}
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 group-hover:w-2/3 transition-all duration-300 rounded-full shadow-[0_0_8px_rgba(212,165,48,0.5)]" />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden xl:flex items-center space-x-3">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-2 border-celestial-400/60 text-celestial-600 hover:bg-celestial-50 hover:border-celestial-500 font-bold tracking-[0.15em] text-[10px] uppercase px-5 py-2.5 rounded-full shadow-[0_4px_16px_rgba(61,127,179,0.15)] hover:shadow-[0_6px_24px_rgba(61,127,179,0.25)] transition-all duration-300"
              >
                <Sparkles className="w-3.5 h-3.5 mr-2" />
                Join Live
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="sm"
                className="bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 hover:from-gold-600 hover:via-gold-500 hover:to-gold-600 text-white font-bold tracking-[0.15em] text-[10px] uppercase px-6 py-2.5 rounded-full shadow-[0_4px_20px_rgba(212,165,48,0.35)] hover:shadow-[0_8px_30px_rgba(212,165,48,0.5)] transition-all duration-300 border border-gold-300/30"
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
            className="xl:hidden p-2.5 text-foreground/70 hover:text-gold-600 transition-all duration-300 rounded-full border border-gold-200/50 hover:border-gold-400/60 bg-white/60 backdrop-blur-xl hover:bg-gold-50/50 shadow-[0_2px_12px_rgba(212,165,48,0.1)] hover:shadow-[0_4px_20px_rgba(212,165,48,0.2)]"
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
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={22} />
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
              className="xl:hidden py-6 bg-white/95 backdrop-blur-2xl border-t border-gold-200/30 rounded-b-3xl shadow-[0_20px_60px_rgba(212,165,48,0.15)]"
              role="navigation"
              aria-label="Mobile navigation menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Decorative Gold Line */}
              <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
              
              <motion.div
                className="flex flex-col space-y-1 px-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04, duration: 0.3 }}
                  >
                    {link.isRoute ? (
                      <Link
                        ref={index === 0 ? firstMenuItemRef : null}
                        to={link.href}
                        className="flex items-center px-5 py-3.5 text-sm font-semibold tracking-wide text-foreground/80 hover:text-gold-600 hover:bg-gradient-to-r hover:from-gold-50/80 hover:to-transparent rounded-xl transition-all duration-300 group"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="w-2 h-2 rounded-full bg-gradient-to-br from-gold-400 to-gold-500 mr-4 shadow-[0_0_8px_rgba(212,165,48,0.4)] group-hover:scale-125 transition-transform duration-300" />
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        ref={index === 0 ? firstMenuItemRef : null}
                        href={link.href}
                        className="flex items-center px-5 py-3.5 text-sm font-semibold tracking-wide text-foreground/80 hover:text-gold-600 hover:bg-gradient-to-r hover:from-gold-50/80 hover:to-transparent rounded-xl transition-all duration-300 group"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="w-2 h-2 rounded-full bg-gradient-to-br from-gold-400 to-gold-500 mr-4 shadow-[0_0_8px_rgba(212,165,48,0.4)] group-hover:scale-125 transition-transform duration-300" />
                        {link.name}
                      </a>
                    )}
                  </motion.div>
                ))}
                
                {/* Mobile Action Buttons */}
                <motion.div
                  className="px-3 pt-6 flex flex-col space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.04 + 0.1, duration: 0.3 }}
                >
                  <div className="h-[1px] bg-gradient-to-r from-transparent via-gold-300/50 to-transparent mb-2" />
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-celestial-400/60 text-celestial-600 hover:bg-celestial-50 font-bold tracking-[0.1em] rounded-xl py-3 shadow-[0_4px_16px_rgba(61,127,179,0.1)]"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Join Live
                  </Button>
                  <Button
                    className="w-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 hover:from-gold-600 hover:via-gold-500 hover:to-gold-600 text-white font-bold tracking-[0.1em] rounded-xl py-3 shadow-[0_4px_20px_rgba(212,165,48,0.3)]"
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
