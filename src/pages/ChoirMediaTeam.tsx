import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Play, ExternalLink } from "lucide-react";
import { useState } from "react";
import LazyImage from "@/components/LazyImage";
import SEO from "@/components/SEO";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface ChoirHighlight {
  title: string;
  image: string;
  youtubeUrl: string;
}

interface MediaHighlight {
  title: string;
  image: string;
  link?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Grace Okonkwo",
    role: "Lead Vocalist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
  },
  {
    name: "David Adeleke",
    role: "Choir Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
  },
  {
    name: "Blessing Chukwu",
    role: "Keyboardist",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop"
  },
  {
    name: "Samuel Eze",
    role: "Media Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  },
  {
    name: "Chioma Nwankwo",
    role: "Vocalist",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop"
  },
  {
    name: "Emmanuel Obi",
    role: "Drummer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
  },
  {
    name: "Faith Adebayo",
    role: "Guitarist",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop"
  },
  {
    name: "Peter Okoro",
    role: "Sound Engineer",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop"
  },
  {
    name: "Joy Amadi",
    role: "Videographer",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop"
  }
];

const choirHighlights: ChoirHighlight[] = [
  {
    title: "Praise Night 2024",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop",
    youtubeUrl: "https://youtube.com/@cccakokaparish"
  },
  {
    title: "Easter Celebration Performance",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&h=600&fit=crop",
    youtubeUrl: "https://youtube.com/@cccakokaparish"
  },
  {
    title: "Worship Experience 2024",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop",
    youtubeUrl: "https://youtube.com/@cccakokaparish"
  }
];

const mediaHighlights: MediaHighlight[] = [
  {
    title: "Christmas Service Coverage",
    image: "https://images.unsplash.com/photo-1482575832494-771f74bf6857?w=800&h=600&fit=crop",
    link: "https://youtube.com/@cccakokaparish"
  },
  {
    title: "Youth Program Broadcast",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop",
    link: "https://youtube.com/@cccakokaparish"
  },
  {
    title: "Sunday Service Highlights",
    image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800&h=600&fit=crop",
    link: "https://youtube.com/@cccakokaparish"
  },
  {
    title: "Behind the Scenes",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop"
  }
];

const musicPlatforms = [
  { name: "Audiomack", url: "#", icon: "/audiomack-icon.png" },
  { name: "Boomplay", url: "#", icon: "/boomplay-logo.png" },
  { name: "Apple Music", url: "#", icon: "/apple-music-icon.png" },
  { name: "SoundCloud", url: "#", icon: "/soundcloud-icon.png" },
  { name: "YouTube Music", url: "https://youtube.com/@cccakokaparish", icon: "/youtube-music-icon.png" }
];

const ChoirMediaTeam = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const choirMediaJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Choir & Media Team - CCC Akoka Parish",
    "description": "Celebrate the heart of our worship — where voices and visuals come alive. Meet our talented choir and creative media team.",
    "url": "https://cccakokaparish.org/choir-media",
    "mainEntity": {
      "@type": "Organization",
      "name": "CCC Akoka Parish Choir & Media Team",
      "description": "Our voices unite to lift hearts, spread joy, and glorify God through music and media.",
      "member": teamMembers.map(member => ({
        "@type": "Person",
        "name": member.name,
        "jobTitle": member.role
      }))
    }
  };

  return (
    <>
      <SEO
        title="Choir & Media Team - CCC Akoka Parish"
        description="Celebrate the heart of our worship — where voices and visuals come alive. Meet our talented choir and creative media team at Christ Church Cathedral Akoka Parish."
        url="/choir-media"
        image="/church-interior.jpg"
        jsonLd={choirMediaJsonLd}
      />
      <div className="min-h-screen">
        <Navigation />
      
      <div className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-background mb-6 animate-fade-in">
            Choir & Media
          </h1>
          <p className="text-xl text-background/90 max-w-3xl mx-auto leading-relaxed animate-slide-up italic">
            Celebrate the heart of our worship — where voices and visuals come alive.
          </p>
        </div>
      </div>

      {/* Choir Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            🕊️ Meet Our Amazing Choir
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto italic">
            Our voices unite to lift hearts, spread joy, and glorify God through music.
          </p>
        </div>

        {/* Featured Choir Photo */}
        <div className="mb-16 animate-slide-up">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            <LazyImage
              src="/church-interior.jpg"
              alt="CCC Akoka Parish Choir"
              className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              webpSrc="/church-interior.webp"
              srcSet="/church-interior-400.jpg 400w, /church-interior-800.jpg 800w, /church-interior-1200.jpg 1200w"
              webpSrcSet="/church-interior-400.webp 400w, /church-interior-800.webp 800w, /church-interior-1200.webp 1200w"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex items-end justify-center pb-8">
              <p className="text-background text-2xl md:text-3xl font-heading font-bold">Our Choir in Worship</p>
            </div>
          </div>
        </div>

        {/* Choir Song Feature */}
        <div className="mb-16 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12 shadow-lg animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-3">
              🎶 Our Treasure — The Song That Speaks Our Faith
            </h3>
            <p className="text-muted-foreground text-lg">
              Listen to our original worship song across all platforms
            </p>
          </div>
          
          <div className="relative rounded-xl overflow-hidden shadow-xl mb-8 group">
            <LazyImage
              src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&h=600&fit=crop"
              alt="Choir Song Cover"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-primary/60 flex items-center justify-center transition-opacity group-hover:bg-primary/50">
              <div className="w-20 h-20 bg-background rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <Play className="w-10 h-10 text-secondary ml-1" fill="currentColor" />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6">
            {musicPlatforms.map((platform, index) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 transition-all duration-300 hover:scale-110 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-16 h-16 rounded-xl bg-background shadow-lg overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                  <img 
                    src={platform.icon} 
                    alt={`${platform.name} icon`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {platform.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Choir Highlights Grid */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary text-center mb-8">
            Performance Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {choirHighlights.map((highlight, index) => (
              <a
                key={highlight.title}
                href={highlight.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <LazyImage
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex items-end p-6">
                  <div className="text-background">
                    <h4 className="text-xl font-heading font-bold mb-2">{highlight.title}</h4>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Watch on YouTube</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Media Section */}
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              🎥 Our Creative Media Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto italic">
              Capturing the Spirit, Sharing the Light.
            </p>
          </div>

          {/* Media Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {mediaHighlights.map((highlight, index) => (
              <div
                key={highlight.title}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => highlight.link ? window.open(highlight.link, '_blank') : setSelectedImage(highlight.image)}
              >
                <LazyImage
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent flex items-end p-5">
                  <div className="text-background">
                    <h4 className="text-lg font-heading font-bold">{highlight.title}</h4>
                    {highlight.link && (
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity mt-2">
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">View Coverage</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


        <Footer />
      </div>
    </>
  );
};

export default ChoirMediaTeam;
