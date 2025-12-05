import { useState, useEffect, memo } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import LazyImage from "./LazyImage";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
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
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="px-5 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20 max-w-7xl mx-auto">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <LazyImage
                src="/ccc-rainbow-logo.png"
                alt="CCC Logo"
                className="h-10 md:h-12 w-auto"
              />
              <div className="hidden sm:block">
                <span 
                  className={`text-[10px] font-semibold tracking-[0.15em] uppercase transition-colors ${
                    isScrolled ? "text-[hsl(38,70%,45%)]" : "text-white/80"
                  }`}
                >
                  Akoka Parish
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-[11px] font-medium tracking-[0.1em] uppercase transition-colors ${
                      isScrolled 
                        ? "text-black/60 hover:text-black" 
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`text-[11px] font-medium tracking-[0.1em] uppercase transition-colors ${
                      isScrolled 
                        ? "text-black/60 hover:text-black" 
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </a>
                )
              ))}
            </div>

            {/* Desktop CTA */}
            <a
              href="mailto:cccakokaparish@yahoo.com?subject=Donation Request"
              className={`hidden lg:flex items-center justify-center px-5 py-2 text-[10px] font-semibold tracking-[0.12em] uppercase transition-all duration-300 ${
                isScrolled
                  ? "bg-[hsl(0,0%,7%)] text-white hover:bg-[hsl(0,0%,15%)]"
                  : "bg-white text-black hover:bg-white/90"
              }`}
            >
              Donate
            </a>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 -mr-2 ${isScrolled ? "text-black" : "text-white"}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col h-full pt-20 pb-8 px-5">
              <div className="flex-1 flex flex-col justify-center">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.isRoute ? (
                      <Link
                        to={link.href}
                        className="block py-4 text-2xl font-medium text-black/80 hover:text-black border-b border-black/5"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="block py-4 text-2xl font-medium text-black/80 hover:text-black border-b border-black/5"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <a
                  href="mailto:cccakokaparish@yahoo.com?subject=Donation Request"
                  className="btn-primary w-full text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Donate
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;
