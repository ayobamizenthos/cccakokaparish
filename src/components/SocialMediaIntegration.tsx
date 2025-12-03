import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Facebook, Instagram, Youtube, MessageCircle, Share2, Heart, MessageSquare, Play } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

interface SocialPost {
  id: string;
  platform: 'facebook' | 'instagram' | 'youtube' | 'tiktok';
  type: 'post' | 'video' | 'live';
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  timestamp: Date;
  url: string;
}

const SocialMediaIntegration = () => {
  const [posts, setPosts] = useState<SocialPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Mock data - in a real app, this would come from social media APIs
  useEffect(() => {
    const mockPosts: SocialPost[] = [
      {
        id: '1',
        platform: 'youtube',
        type: 'video',
        content: 'Sunday Service - "Walking in Faith" - Join us for an inspiring message about trusting God\'s plan.',
        image: '/api/placeholder/400/225',
        likes: 245,
        comments: 23,
        shares: 45,
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
        url: 'https://youtube.com/watch?v=example1'
      },
      {
        id: '2',
        platform: 'facebook',
        type: 'post',
        content: 'Thank you to everyone who joined our community outreach program this weekend. Your dedication to serving others is truly inspiring! 🙏',
        image: '/api/placeholder/400/300',
        likes: 89,
        comments: 12,
        shares: 15,
        timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
        url: 'https://facebook.com/posts/example2'
      },
      {
        id: '3',
        platform: 'instagram',
        type: 'post',
        content: 'Beautiful sunrise service this morning. Grateful for another day to worship and fellowship together. #ChurchLife #SpiritualGrowth',
        image: '/api/placeholder/400/400',
        likes: 156,
        comments: 8,
        shares: 22,
        timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
        url: 'https://instagram.com/p/example3'
      },
      {
        id: '4',
        platform: 'tiktok',
        type: 'video',
        content: 'Quick devotion: "Trust in the Lord with all your heart" - Proverbs 3:5 #DailyDevotion #Faith',
        image: '/api/placeholder/400/600',
        likes: 432,
        comments: 67,
        shares: 89,
        timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
        url: 'https://tiktok.com/@cccakokaparish/video/example4'
      }
    ];

    // Simulate API loading
    setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 1000);
  }, []);

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'facebook':
        return <Facebook className="h-4 w-4" />;
      case 'instagram':
        return <Instagram className="h-4 w-4" />;
      case 'youtube':
        return <Youtube className="h-4 w-4" />;
      case 'tiktok':
        return <FaTiktok className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'facebook':
        return 'bg-blue-500';
      case 'instagram':
        return 'bg-pink-500';
      case 'youtube':
        return 'bg-red-500';
      case 'tiktok':
        return 'bg-gray-800';
      default:
        return 'bg-gray-500';
    }
  };

  const formatTimestamp = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d ago`;
  };

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              Connect With Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-6">
                  <div className="h-48 bg-muted rounded-lg mb-4"></div>
                  <div className="h-4 bg-muted rounded mb-2"></div>
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Connect With Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6">
            Stay updated with our latest messages, events, and community updates across all platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {posts.map((post) => (
            <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/50">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className={`${getPlatformColor(post.platform)} text-white flex items-center gap-1`}>
                    {getPlatformIcon(post.platform)}
                    {post.platform.charAt(0).toUpperCase() + post.platform.slice(1)}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {formatTimestamp(post.timestamp)}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                {post.image && (
                  <div className="relative mb-4 rounded-lg overflow-hidden">
                    <img
                      src={post.image}
                      alt="Social media post"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {post.type === 'video' && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Play className="h-12 w-12 text-white" />
                      </div>
                    )}
                  </div>
                )}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {post.content}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Heart className="h-3 w-3" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="h-3 w-3" />
                      {post.comments}
                    </span>
                    <span className="flex items-center gap-1">
                      <Share2 className="h-3 w-3" />
                      {post.shares}
                    </span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors"
                  onClick={() => window.open(post.url, '_blank')}
                >
                  View on {post.platform.charAt(0).toUpperCase() + post.platform.slice(1)}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="flex justify-center gap-4 mb-6">
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600"
              onClick={() => window.open('https://facebook.com/cccakokaparish', '_blank')}
            >
              <Facebook className="mr-2 h-5 w-5" />
              Follow on Facebook
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-pink-50 hover:border-pink-500 hover:text-pink-600"
              onClick={() => window.open('https://instagram.com/cccakokaparish', '_blank')}
            >
              <Instagram className="mr-2 h-5 w-5" />
              Follow on Instagram
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-red-50 hover:border-red-500 hover:text-red-600"
              onClick={() => window.open('https://youtube.com/@cccakokaparish', '_blank')}
            >
              <Youtube className="mr-2 h-5 w-5" />
              Subscribe on YouTube
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-gray-50 hover:border-gray-500 hover:text-gray-700"
              onClick={() => window.open('https://tiktok.com/@cccakokaparish', '_blank')}
            >
              <FaTiktok className="mr-2 h-5 w-5" />
              Follow on TikTok
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Follow us on social media for daily inspiration, live streams, and community updates
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaIntegration;