import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Shepherd = () => {
  return (
    <section id="shepherd" className="py-32 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-5xl md:text-7xl font-heading font-light text-primary tracking-luxury leading-tight">
            Our Shepherd
          </h2>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto" />
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden shadow-lift border-2 border-border/40">
            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-2 bg-gradient-to-br from-primary via-primary to-primary/90 p-12 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: 'radial-gradient(circle at 20% 50%, hsl(43 58% 55% / 0.3) 0%, transparent 50%)'
                }} />
                <div className="w-56 h-56 rounded-full bg-background/95 backdrop-blur-luxury flex items-center justify-center text-7xl font-heading font-light text-primary shadow-elegant relative z-10">
                  SP
                </div>
              </div>
              <div className="md:col-span-3 p-12 bg-card/60 backdrop-blur-luxury">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-heading font-light text-primary mb-2 tracking-editorial">
                      Superior Evangelist [Name]
                    </h3>
                    <p className="text-secondary font-medium text-lg tracking-wide">Parish Shepherd</p>
                  </div>
                  <div className="w-20 h-px bg-secondary/40" />
                  <div className="relative">
                    <Quote className="absolute -top-3 -left-3 h-10 w-10 text-secondary/15" />
                    <p className="text-muted-foreground/90 leading-luxury pl-8 italic font-light text-lg">
                      "Welcome to Glade Cathedral, where God's presence dwells and His love transforms lives.
                      It is my joy to shepherd this flock and guide you on your spiritual journey. May the
                      grace of our Lord Jesus Christ be with you always."
                    </p>
                  </div>
                  <div className="pt-6">
                    <p className="text-base text-muted-foreground/80 font-light leading-luxury">
                      Join us in worship every Wednesday and Sunday as we seek the face of God together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Shepherd;
