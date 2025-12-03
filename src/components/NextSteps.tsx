import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MapPin, Mail } from "lucide-react";
import churchExterior from "@/assets/church-exterior.jpg";

const NextSteps = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleFindUs = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=3+Afolabi-Brown+Street+Akoka+Lagos+Nigeria",
      "_blank"
    );
  };

  // Focus management for modal
  useEffect(() => {
    if (isOpen && dialogRef.current) {
      // Store the currently focused element
      const previouslyFocusedElement = document.activeElement as HTMLElement;

      // Focus the dialog
      dialogRef.current.focus();

      // Announce modal opening to screen readers
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.style.position = 'absolute';
      announcement.style.left = '-10000px';
      announcement.style.width = '1px';
      announcement.style.height = '1px';
      announcement.style.overflow = 'hidden';
      announcement.textContent = 'Contact information modal opened';
      document.body.appendChild(announcement);
      setTimeout(() => document.body.removeChild(announcement), 1000);

      // Restore focus when modal closes
      return () => {
        if (previouslyFocusedElement && previouslyFocusedElement.focus) {
          previouslyFocusedElement.focus();
        }
        // Announce modal closing
        const closeAnnouncement = document.createElement('div');
        closeAnnouncement.setAttribute('aria-live', 'polite');
        closeAnnouncement.setAttribute('aria-atomic', 'true');
        closeAnnouncement.style.position = 'absolute';
        closeAnnouncement.style.left = '-10000px';
        closeAnnouncement.style.width = '1px';
        closeAnnouncement.style.height = '1px';
        closeAnnouncement.style.overflow = 'hidden';
        closeAnnouncement.textContent = 'Contact information modal closed';
        document.body.appendChild(closeAnnouncement);
        setTimeout(() => document.body.removeChild(closeAnnouncement), 1000);
      };
    }
  }, [isOpen]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
        if (triggerRef.current) {
          triggerRef.current.focus();
        }
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen]);

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">
              Next Steps
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full" />
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              You've visited, you've loved it,<br />now what?
            </p>
            <Button
              ref={triggerRef}
              size="lg"
              onClick={() => setIsOpen(true)}
              className="mt-8 bg-gradient-to-r from-secondary to-accent text-primary hover:opacity-90 shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
              aria-label="Open contact information modal"
            >
              The Path Finder
            </Button>
          </div>
        </div>
      </section>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          ref={dialogRef}
          className="sm:max-w-2xl animate-scale-in"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
        >
          <DialogHeader>
            <DialogTitle id="dialog-title" className="text-2xl font-heading text-primary">
              Find Your Way to Us
            </DialogTitle>
          </DialogHeader>
          <div id="dialog-description" className="space-y-6">
            <div className="rounded-lg overflow-hidden">
              <img
                src={churchExterior}
                alt="Glade Cathedral - Celestial Church of Christ, Akoka Parish"
                className="w-full h-64 object-cover"
              />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Address</h4>
                  <p className="text-muted-foreground">
                    3, Afolabi-Brown Street, Akoka Lagos, Akoka, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                <Mail className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <a 
                    href="mailto:cccakokaparish@yahoo.com"
                    className="text-secondary hover:text-accent transition-colors"
                  >
                    cccakokaparish@yahoo.com
                  </a>
                </div>
              </div>
            </div>

            <Button
              onClick={handleFindUs}
              className="w-full bg-gradient-to-r from-secondary to-accent text-primary hover:opacity-90"
              aria-label="Open Google Maps to find our church location"
            >
              Find Us on Google Maps
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NextSteps;
