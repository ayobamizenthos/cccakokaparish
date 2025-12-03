import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [preferences, setPreferences] = useState({
    sermons: true,
    events: true,
    announcements: true,
    prayer: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call to newsletter service
      await new Promise(resolve => setTimeout(resolve, 1500));

      // In a real implementation, you would send this data to your newsletter service
      console.log("Newsletter signup:", { email, name, preferences });

      setIsSubscribed(true);
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for joining our newsletter community.",
      });

      // Reset form
      setEmail("");
      setName("");
      setPreferences({
        sermons: true,
        events: true,
        announcements: true,
        prayer: false,
      });
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePreferenceChange = (key: keyof typeof preferences) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (isSubscribed) {
    return (
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <Card className="max-w-md mx-auto text-center">
            <CardContent className="pt-8 pb-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Welcome to Our Community!</h3>
              <p className="text-muted-foreground">
                You've successfully subscribed to our newsletter. Stay tuned for updates!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Stay Connected
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6">
            Join our newsletter community and never miss important updates, events, and spiritual inspiration
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl border-2 border-secondary/20">
            <CardHeader className="bg-gradient-to-r from-primary to-primary/90 text-white">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Mail className="h-6 w-6 text-secondary" />
                Newsletter Signup
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="newsletter-name">Full Name</Label>
                    <Input
                      id="newsletter-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newsletter-email">Email Address</Label>
                    <Input
                      id="newsletter-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-base font-medium">What would you like to receive?</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="sermons"
                        checked={preferences.sermons}
                        onCheckedChange={() => handlePreferenceChange('sermons')}
                      />
                      <Label htmlFor="sermons" className="text-sm">Weekly Sermons</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="events"
                        checked={preferences.events}
                        onCheckedChange={() => handlePreferenceChange('events')}
                      />
                      <Label htmlFor="events" className="text-sm">Church Events</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="announcements"
                        checked={preferences.announcements}
                        onCheckedChange={() => handlePreferenceChange('announcements')}
                      />
                      <Label htmlFor="announcements" className="text-sm">Announcements</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="prayer"
                        checked={preferences.prayer}
                        onCheckedChange={() => handlePreferenceChange('prayer')}
                      />
                      <Label htmlFor="prayer" className="text-sm">Prayer Requests</Label>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Subscribing..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Subscribe to Newsletter
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center text-sm text-muted-foreground">
                <p>
                  We respect your privacy. Unsubscribe at any time.
                  <br />
                  Your information will never be shared with third parties.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;