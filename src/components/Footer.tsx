import { MapPin, Mail, Facebook, Instagram, Youtube, ArrowUp } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { memo } from "react";
import { motion } from "framer-motion";

const Footer = memo(() => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Premium Dark Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,25%,12%)] via-[hsl(220,20%,10%)] to-[hsl(220,25%,8%)]" />
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-[hsl(43,90%,52%)] rounded-full filter blur-[300px] opacity-[0.04]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[hsl(210,70%,48%)] rounded-full filter blur-[250px] opacity-[0.03]" />
        <div className="absolute inset-0 opacity-[0.02] cross-pattern" />
      </div>
      
      {/* Top Gold Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[hsl(43,90%,52%)] to-transparent" />

      <div className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          {/* Main Footer Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <motion.div 
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[hsl(43,90%,52%)] to-[hsl(40,85%,42%)] flex items-center justify-center shadow-[0_8px_30px_rgba(210,172,71,0.3)]"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-white font-heading font-bold text-xl">GC</span>
                </motion.div>
                <div>
                  <h3 className="font-heading font-medium text-xl tracking-wide text-white">Glade Cathedral</h3>
                  <p className="text-sm text-[hsl(43,90%,60%)] font-light tracking-wider">The Last Ark of Salvation</p>
                </div>
              </div>
              <p className="text-base text-white/60 leading-relaxed font-light">
                Celestial Church of Christ, Akoka Parish - A sanctuary of worship and spiritual growth.
              </p>
              
              {/* Gold decorative element */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-gradient-to-r from-[hsl(43,90%,52%)] to-transparent" />
                <div className="w-2 h-2 rotate-45 bg-[hsl(43,90%,52%,0.5)]" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-medium text-xl mb-6 tracking-wide text-white">Quick Links</h4>
              <div className="w-12 h-0.5 bg-gradient-to-r from-[hsl(43,90%,52%)] to-transparent mb-6" />
              <ul className="space-y-4 text-base">
                {[
                  { href: "#about", label: "About Us" },
                  { href: "#services", label: "Service Times" },
                  { href: "#events", label: "Events" },
                  { href: "#sermons", label: "Sermons" },
                ].map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href} 
                      className="text-white/60 hover:text-[hsl(43,90%,60%)] transition-all duration-500 font-light inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-4 h-px bg-[hsl(43,90%,52%)] transition-all duration-300" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="font-heading font-medium text-xl mb-6 tracking-wide text-white">Contact Us</h4>
              <div className="w-12 h-0.5 bg-gradient-to-r from-[hsl(43,90%,52%)] to-transparent mb-6" />
              <ul className="space-y-5 text-base">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[hsl(43,90%,52%,0.1)] border border-[hsl(43,90%,52%,0.2)] flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-4 w-4 text-[hsl(43,90%,60%)]" />
                  </div>
                  <span className="text-white/70 font-light leading-relaxed">3, Afolabi-Brown Street, Akoka Lagos, Nigeria</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[hsl(43,90%,52%,0.1)] border border-[hsl(43,90%,52%,0.2)] flex items-center justify-center flex-shrink-0">
                    <Mail className="h-4 w-4 text-[hsl(43,90%,60%)]" />
                  </div>
                  <a 
                    href="mailto:cccakokaparish@yahoo.com"
                    className="text-white/70 hover:text-[hsl(43,90%,60%)] transition-all duration-500 font-light"
                  >
                    cccakokaparish@yahoo.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="font-heading font-medium text-xl mb-6 tracking-wide text-white">Follow Us</h4>
              <div className="w-12 h-0.5 bg-gradient-to-r from-[hsl(43,90%,52%)] to-transparent mb-6" />
              
              <div className="flex gap-3 mb-8">
                {[
                  { href: "https://www.facebook.com/cccakokaparish", icon: Facebook, label: "Facebook" },
                  { href: "https://www.instagram.com/cccakokaparish/", icon: Instagram, label: "Instagram" },
                  { href: "https://youtube.com/@cccakokaparish?si=sAbi3S52SFZD8GcC", icon: Youtube, label: "YouTube" },
                  { href: "https://www.tiktok.com/@cccakokaparish?is_from_webapp=1&sender_device=pc", icon: FaTiktok, label: "TikTok" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/5 border border-[hsl(43,90%,52%,0.2)] hover:bg-[hsl(43,90%,52%)] hover:border-[hsl(43,90%,52%)] flex items-center justify-center text-white/60 hover:text-white transition-all duration-500"
                    aria-label={`Follow us on ${social.label}`}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="h-5 w-5" aria-hidden="true" />
                  </motion.a>
                ))}
              </div>
              
              {/* Service Times Card */}
              <div className="p-5 rounded-2xl bg-white/5 border border-[hsl(43,90%,52%,0.15)] backdrop-blur-sm">
                <p className="text-sm text-[hsl(43,90%,60%)] font-semibold tracking-wider uppercase mb-3">Service Times</p>
                <div className="space-y-2">
                  <p className="text-base text-white/80 font-light">Wednesday: 9-10 AM</p>
                  <p className="text-base text-white/80 font-light">Sunday: 10 AM - 2 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[hsl(43,90%,52%,0.3)] to-transparent mb-10" />
          
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left space-y-2">
              <p className="text-base text-white/50 font-light tracking-wide">
                © {new Date().getFullYear()} Glade Cathedral - The Last Ark of Salvation. All rights reserved.
              </p>
              <p className="text-sm text-white/30 font-light">
                Celestial Church of Christ, Akoka Parish
              </p>
            </div>
            
            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-[hsl(43,90%,52%,0.1)] border border-[hsl(43,90%,52%,0.3)] text-[hsl(43,90%,60%)] hover:bg-[hsl(43,90%,52%)] hover:text-white transition-all duration-500 group"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm font-medium tracking-wider">Back to Top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;