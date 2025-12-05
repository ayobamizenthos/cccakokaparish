import { MapPin, Mail, Facebook, Instagram, Youtube, ArrowUp } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { memo } from "react";

const Footer = memo(() => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socials = [
    { href: "https://facebook.com/cccakokaparish", icon: Facebook, label: "Facebook" },
    { href: "https://instagram.com/cccakokaparish", icon: Instagram, label: "Instagram" },
    { href: "https://youtube.com/@cccakokaparish", icon: Youtube, label: "YouTube" },
    { href: "https://tiktok.com/@cccakokaparish", icon: FaTiktok, label: "TikTok" },
  ];

  return (
    <footer className="bg-[hsl(0,0%,4%)] text-white">
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[hsl(38,70%,50%)] to-transparent" />
      
      <div className="px-5 md:px-8 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div>
              <h3 
                className="text-lg font-medium mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Glade Cathedral
              </h3>
              <p className="text-[hsl(38,70%,55%)] text-xs tracking-[0.15em] uppercase mb-4">
                The Last Ark of Salvation
              </p>
              <p className="text-white/50 text-sm leading-relaxed">
                Celestial Church of Christ, Akoka Parish
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-semibold tracking-[0.15em] uppercase mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {["About", "Services", "Events", "Sermons"].map((link) => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase()}`}
                      className="text-white/50 text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-semibold tracking-[0.15em] uppercase mb-4">
                Contact
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-[hsl(38,70%,55%)] mt-0.5 flex-shrink-0" />
                  <span className="text-white/50 text-sm">
                    3, Afolabi-Brown Street, Akoka Lagos
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-[hsl(38,70%,55%)] mt-0.5 flex-shrink-0" />
                  <a 
                    href="mailto:cccakokaparish@yahoo.com"
                    className="text-white/50 text-sm hover:text-white transition-colors"
                  >
                    cccakokaparish@yahoo.com
                  </a>
                </div>
              </div>
            </div>

            {/* Follow */}
            <div>
              <h4 className="text-xs font-semibold tracking-[0.15em] uppercase mb-4">
                Follow Us
              </h4>
              <div className="flex gap-2 mb-6">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:border-[hsl(38,70%,50%)] hover:text-white hover:bg-[hsl(38,70%,50%)] transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
              <div className="p-4 border border-white/10">
                <p className="text-[hsl(38,70%,55%)] text-[9px] tracking-[0.15em] uppercase mb-2">
                  Service Times
                </p>
                <p className="text-white/60 text-xs">Wed: 9–10 AM</p>
                <p className="text-white/60 text-xs">Sun: 10 AM – 2 PM</p>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-xs">
              © {new Date().getFullYear()} Glade Cathedral. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-3 py-2 border border-white/20 text-white/50 hover:border-[hsl(38,70%,50%)] hover:text-white transition-all duration-300 text-xs tracking-wider uppercase"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
