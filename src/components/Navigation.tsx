import { useState, useEffect, memo, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import LazyImage from "./LazyImage";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    { name: "About", href: "#about" },
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
          ? "bg-white/95 backdrop-blur-md border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-center group">
            <LazyImage
              src="/ccc-rainbow-logo.png"
              alt="Celestial Church of Christ Logo"
              className="h-12 md:h-14 w-auto object-contain"
            />
            <span 
              className={`text-[9px] font-medium tracking-[0.2em] mt-1 transition-colors ${
                isScrolled ? "text-[hsl(38,75%,45%)]" : "text-white/80"
              }`}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              AKOKA PARISH
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-[11px] font-medium tracking-[0.15em] uppercase transition-colors ${
                    isScrolled 
                      ? "text-black/60 hover:text-black" 
                      : "text-white/70 hover:text-white"
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[11px] font-medium tracking-[0.15em] uppercase transition-colors ${
                    isScrolled 
                      ? "text-black/60 hover:text-black" 
                      : "text-white/70 hover:text-white"
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {link.name}
                </a>
              )
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden xl:flex items-center gap-4">
            <a
              href="mailto:cccakokaparish@yahoo.com?subject=Request for Church Account Details&body=Hello, I'd like to request the account details for making a donation to CCC Akoka Parish. Thank you."
              className={`px-6 py-2.5 text-[10px] font-medium tracking-[0.15em] uppercase border transition-all duration-300 ${
                isScrolled
                  ? "border-black text-black hover:bg-black hover:text-white"
                  : "border-white/50 text-white hover:bg-white hover:text-black"
              }`}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Donate
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`xl:hidden p-2 transition-colors ${
              isScrolled ? "text-black" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="xl:hidden fixed inset-0 top-20 bg-white z-40"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col p-8 space-y-1">
                {navLinks.map((link, index) => (
                  link.isRoute ? (
                    <Link
                      key={link.name}
                      ref={index === 0 ? firstMenuItemRef : null}
                      to={link.href}
                      className="py-4 text-sm font-medium tracking-[0.1em] uppercase text-black/70 hover:text-black border-b border-black/5 transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      key={link.name}
                      ref={index === 0 ? firstMenuItemRef : null}
                      href={link.href}
                      className="py-4 text-sm font-medium tracking-[0.1em] uppercase text-black/70 hover:text-black border-b border-black/5 transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  )
                ))}
                
                <div className="pt-8">
                  <a
                    href="mailto:cccakokaparish@yahoo.com?subject=Request for Church Account Details&body=Hello, I'd like to request the account details for making a donation to CCC Akoka Parish. Thank you."
                    className="block w-full py-4 text-center text-sm font-medium tracking-[0.15em] uppercase bg-black text-white"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Donate
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;
