import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { memo } from "react";

const Footer = memo(() => {
  return (
    <footer className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center shadow-glow">
                <span className="text-primary font-heading font-bold text-lg">GC</span>
              </div>
              <div>
                <h3 className="font-heading font-medium text-xl tracking-editorial">Glade Cathedral</h3>
                <p className="text-sm text-secondary font-light tracking-luxury">The Last Ark of Salvation</p>
              </div>
            </div>
            <p className="text-base text-primary-foreground/70 leading-luxury font-light">
              Celestial Church of Christ, Akoka Parish - A sanctuary of worship and spiritual growth.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-medium text-xl mb-6 tracking-editorial">Quick Links</h4>
            <div className="w-16 h-px bg-secondary/40 mb-6" />
            <ul className="space-y-3 text-base">
              <li>
                <a href="#about" className="text-primary-foreground/70 hover:text-secondary transition-all duration-500 font-light">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-secondary transition-all duration-500 font-light">
                  Service Times
                </a>
              </li>
              <li>
                <a href="#events" className="text-primary-foreground/70 hover:text-secondary transition-all duration-500 font-light">
                  Events
                </a>
              </li>
              <li>
                <a href="#sermons" className="text-primary-foreground/70 hover:text-secondary transition-all duration-500 font-light">
                  Sermons
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-medium text-xl mb-6 tracking-editorial">Contact Us</h4>
            <div className="w-16 h-px bg-secondary/40 mb-6" />
            <ul className="space-y-4 text-base">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80 font-light leading-luxury">3, Afolabi-Brown Street, Akoka Lagos, Nigeria</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                <a 
                  href="mailto:cccakokaparish@yahoo.com"
                  className="text-primary-foreground/80 hover:text-secondary transition-all duration-500 font-light"
                >
                  cccakokaparish@yahoo.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-medium text-xl mb-6 tracking-editorial">Follow Us</h4>
            <div className="w-16 h-px bg-secondary/40 mb-6" />
            <div className="flex gap-4 mb-8">
              <a
                href="https://www.facebook.com/cccakokaparish"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-secondary hover:text-primary flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-glow"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/cccakokaparish/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-secondary hover:text-primary flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-glow"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://youtube.com/@cccakokaparish?si=sAbi3S52SFZD8GcC"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-secondary hover:text-primary flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-glow"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://www.tiktok.com/@cccakokaparish?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-secondary hover:text-primary flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-glow"
                aria-label="Follow us on TikTok"
              >
                <FaTiktok className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-primary-foreground/60 font-light tracking-wide">Service Times:</p>
              <p className="text-base text-primary-foreground/80 font-light">Wednesday: 9-10 AM</p>
              <p className="text-base text-primary-foreground/80 font-light">Sunday: 10 AM - 2 PM</p>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent mb-10" />
        
        <div className="text-center space-y-3">
          <p className="text-base text-primary-foreground/60 font-light tracking-editorial">
            © {new Date().getFullYear()} Glade Cathedral - The Last Ark of Salvation. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/40 font-light">
            Celestial Church of Christ, Akoka Parish
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
