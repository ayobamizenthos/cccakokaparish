import { MapPin, Mail, Facebook, Instagram, Youtube, ArrowUp } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { memo } from "react";
import { motion } from "framer-motion";

const Footer = memo(() => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[hsl(0,0%,6%)]">
      {/* Gold Line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[hsl(38,75%,50%)] to-transparent" />

      <div className="py-20">
        <div className="container mx-auto px-6">
          {/* Main Footer Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Section */}
            <div className="space-y-6">
              <div>
                <h3 
                  className="text-xl font-medium tracking-wide text-white mb-2"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  Glade Cathedral
                </h3>
                <p 
                  className="text-sm text-[hsl(38,75%,55%)] tracking-wider"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  The Last Ark of Salvation
                </p>
              </div>
              <p 
                className="text-base text-white/50 leading-relaxed"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Celestial Church of Christ, Akoka Parish — A sanctuary of worship and spiritual growth.
              </p>
              <div className="w-12 h-px bg-[hsl(38,75%,50%)]" />
            </div>

            {/* Quick Links */}
            <div>
              <h4 
                className="text-sm font-medium tracking-[0.15em] uppercase text-white mb-6"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Quick Links
              </h4>
              <ul className="space-y-4">
                {[
                  { href: "#about", label: "About Us" },
                  { href: "#services", label: "Service Times" },
                  { href: "#events", label: "Events" },
                  { href: "#sermons", label: "Sermons" },
                ].map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href} 
                      className="text-base text-white/50 hover:text-white transition-colors"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 
                className="text-sm font-medium tracking-[0.15em] uppercase text-white mb-6"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Contact
              </h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <MapPin className="h-4 w-4 text-[hsl(38,75%,55%)] mt-1 flex-shrink-0" />
                  <span 
                    className="text-base text-white/50"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    3, Afolabi-Brown Street, Akoka Lagos, Nigeria
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <Mail className="h-4 w-4 text-[hsl(38,75%,55%)] mt-1 flex-shrink-0" />
                  <a 
                    href="mailto:cccakokaparish@yahoo.com"
                    className="text-base text-white/50 hover:text-white transition-colors"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    cccakokaparish@yahoo.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h4 
                className="text-sm font-medium tracking-[0.15em] uppercase text-white mb-6"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Follow Us
              </h4>
              
              <div className="flex gap-3 mb-8">
                {[
                  { href: "https://www.facebook.com/cccakokaparish", icon: Facebook, label: "Facebook" },
                  { href: "https://www.instagram.com/cccakokaparish/", icon: Instagram, label: "Instagram" },
                  { href: "https://youtube.com/@cccakokaparish?si=sAbi3S52SFZD8GcC", icon: Youtube, label: "YouTube" },
                  { href: "https://www.tiktok.com/@cccakokaparish?is_from_webapp=1&sender_device=pc", icon: FaTiktok, label: "TikTok" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-white/20 hover:border-[hsl(38,75%,50%)] hover:bg-[hsl(38,75%,50%)] flex items-center justify-center text-white/50 hover:text-white transition-all duration-300"
                    aria-label={`Follow us on ${social.label}`}
                  >
                    <social.icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
              
              {/* Service Times */}
              <div className="p-5 border border-white/10">
                <p 
                  className="text-[10px] text-[hsl(38,75%,55%)] tracking-[0.2em] uppercase mb-3"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Service Times
                </p>
                <div className="space-y-1">
                  <p 
                    className="text-sm text-white/60"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    Wednesday: 9–10 AM
                  </p>
                  <p 
                    className="text-sm text-white/60"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    Sunday: 10 AM – 2 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10 mb-10" />
          
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p 
                className="text-sm text-white/40"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                © {new Date().getFullYear()} Glade Cathedral. All rights reserved.
              </p>
            </div>
            
            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 border border-white/20 text-white/50 hover:border-[hsl(38,75%,50%)] hover:text-white transition-all duration-300"
              whileHover={{ y: -2 }}
            >
              <span 
                className="text-xs tracking-[0.15em] uppercase"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Back to Top
              </span>
              <ArrowUp className="w-3 h-3" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
