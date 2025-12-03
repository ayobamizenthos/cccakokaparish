import { Link } from "react-router-dom";
import { sermons } from "@/data/sermons";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Play, Calendar, User, Book } from "lucide-react";
import SEO from "@/components/SEO";
import LazyImage from "@/components/LazyImage";

const Sermons = () => {
  const sermonsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Sermons - CCC Akoka Parish",
    "description": "Watch and be transformed by the powerful Word of God from Christ Church Cathedral Akoka Parish",
    "url": "https://cccakokaparish.org/sermons",
    "numberOfItems": sermons.length,
    "itemListElement": sermons.map((sermon, index) => ({
      "@type": "VideoObject",
      "position": index + 1,
      "name": sermon.title,
      "description": sermon.theme,
      "url": `https://cccakokaparish.org/sermon/${sermon.id}`,
      "thumbnailUrl": `https://cccakokaparish.org${sermon.thumbnail}`,
      "embedUrl": `https://www.youtube.com/embed/${sermon.youtubeId}`,
      "uploadDate": new Date(sermon.date).toISOString(),
      "author": {
        "@type": "Person",
        "name": sermon.pastor
      },
      "publisher": {
        "@type": "Organization",
        "name": "Christ Church Cathedral Akoka Parish"
      }
    }))
  };

  return (
    <>
      <SEO
        title="Sermons - CCC Akoka Parish"
        description="Watch and be transformed by the powerful Word of God from Christ Church Cathedral Akoka Parish. Explore our collection of inspiring sermons."
        url="/sermons"
        image="/ccc-logo.png"
        jsonLd={sermonsJsonLd}
      />
      <div className="min-h-screen">
        <Navigation />
      
      <div className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-background mb-4 animate-fade-in">
            Sermons
          </h1>
          <p className="text-xl text-background/90 max-w-2xl mx-auto animate-slide-up">
            Watch and be transformed by the powerful Word of God
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sermons.map((sermon, index) => (
            <Link
              key={sermon.id}
              to={`/sermon/${sermon.id}`}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="bg-card rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full">
                <div className="relative aspect-video overflow-hidden">
                  <LazyImage
                    src={sermon.thumbnail}
                    alt={sermon.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    webpSrc={sermon.thumbnail.replace('.jpg', '.webp')}
                    srcSet={`${sermon.thumbnail.replace('.jpg', '-400.jpg')} 400w, ${sermon.thumbnail.replace('.jpg', '-800.jpg')} 800w`}
                    webpSrcSet={`${sermon.thumbnail.replace('.jpg', '-400.webp')} 400w, ${sermon.thumbnail.replace('.jpg', '-800.webp')} 800w`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                      <Play className="w-8 h-8 text-primary fill-primary ml-1" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                    {sermon.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Book className="w-4 h-4 mr-2 text-secondary" />
                      {sermon.bibleReference}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2 text-secondary" />
                      {sermon.pastor}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-secondary" />
                      {sermon.date}
                    </div>
                  </div>
                  
                  <p className="text-sm text-foreground/80 line-clamp-3 mb-4">
                    {sermon.theme}
                  </p>
                  
                  {sermon.seriesTitle && (
                    <div className="text-xs text-secondary font-medium mb-3">
                      Series: {sermon.seriesTitle}
                    </div>
                  )}
                  
                  <div className="text-secondary group-hover:text-accent transition-colors font-medium text-sm">
                    Watch Sermon →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

        <Footer />
      </div>
    </>
  );
};

export default Sermons;
