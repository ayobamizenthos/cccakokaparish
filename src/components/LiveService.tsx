import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Radio, Youtube, Facebook, Instagram, Play, Pause } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { useState, useEffect } from "react";

const LiveService = () => {
  const [isLive, setIsLive] = useState(false);
  const [viewerCount, setViewerCount] = useState(0);

  // Simulate live status and viewer count
  useEffect(() => {
    const checkLiveStatus = () => {
      // In a real app, this would check an API for live status
      const now = new Date();
      const day = now.getDay(); // 0 = Sunday
      const hour = now.getHours();
      // Assume service is live on Sundays between 10 AM and 12 PM
      const isServiceTime = day === 0 && hour >= 10 && hour < 12;
      setIsLive(isServiceTime);
      if (isServiceTime) {
        setViewerCount(Math.floor(Math.random() * 500) + 100);
      } else {
        setViewerCount(0);
      }
    };

    checkLiveStatus();
    const interval = setInterval(checkLiveStatus, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-4">
            <span className="relative flex h-3 w-3">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isLive ? 'bg-red-500' : 'bg-secondary'} opacity-75`}></span>
              <span className={`relative inline-flex rounded-full h-3 w-3 ${isLive ? 'bg-red-500' : 'bg-secondary'}`}></span>
            </span>
            <span className="text-sm font-semibold text-secondary">
              {isLive ? 'Live Now' : 'Next Service Soon'}
            </span>
            {isLive && (
              <span className="text-xs text-muted-foreground ml-2">
                {viewerCount} watching
              </span>
            )}
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Join Our Live Service
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6">
            Experience worship from anywhere in the world
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-2 border-secondary/20">
            <CardHeader className="bg-gradient-to-r from-primary to-primary/90 text-white">
              <CardTitle className="flex items-center gap-3 text-2xl">
                {isLive ? <Play className="h-6 w-6 text-red-400" /> : <Pause className="h-6 w-6 text-secondary" />}
                {isLive ? 'Live Worship Stream' : 'Service Schedule'}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              {isLive ? (
                <div className="aspect-video bg-muted rounded-lg mb-6">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
                    title="Live Service Stream"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
              ) : (
                <div className="aspect-video bg-muted rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Radio className="h-16 w-16 text-muted-foreground mx-auto" />
                    <p className="text-muted-foreground">
                      Service will begin soon
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Sundays at 10:00 AM
                    </p>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <p className="text-center text-sm text-muted-foreground">
                  Watch our live service on your preferred platform:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 hover:bg-red-50 hover:border-red-500 hover:text-red-600"
                    aria-label="Watch live service on YouTube"
                  >
                    <Youtube className="h-5 w-5" aria-hidden="true" />
                    YouTube
                  </Button>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600"
                    aria-label="Watch live service on Facebook"
                  >
                    <Facebook className="h-5 w-5" aria-hidden="true" />
                    Facebook
                  </Button>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 hover:bg-pink-50 hover:border-pink-500 hover:text-pink-600"
                    aria-label="Watch live service on Instagram"
                  >
                    <Instagram className="h-5 w-5" aria-hidden="true" />
                    Instagram
                  </Button>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 hover:bg-gray-50 hover:border-gray-500 hover:text-gray-700"
                    aria-label="Watch live service on TikTok"
                  >
                    <FaTiktok className="h-5 w-5" aria-hidden="true" />
                    TikTok
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LiveService;
