import { useParams, Link } from "react-router-dom";
import { sermons } from "@/data/sermons";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FileText, Download, Calendar, User, Book, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const SermonDetail = () => {
  const { id } = useParams();
  const sermon = sermons.find((s) => s.id === id);

  if (!sermon) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">
            Sermon Not Found
          </h1>
          <Link to="/sermons" className="text-secondary hover:text-accent">
            Back to Sermons
          </Link>
        </div>
      </div>
    );
  }

  const sermonJsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": sermon.title,
    "description": sermon.theme,
    "url": `https://cccakokaparish.org/sermon/${sermon.id}`,
    "thumbnailUrl": `https://cccakokaparish.org${sermon.thumbnail}`,
    "embedUrl": `https://www.youtube.com/embed/${sermon.youtubeId}`,
    "uploadDate": new Date(sermon.date).toISOString(),
    "duration": "PT30M", // Approximate duration
    "author": {
      "@type": "Person",
      "name": sermon.pastor
    },
    "publisher": {
      "@type": "Organization",
      "name": "Christ Church Cathedral Akoka Parish",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cccakokaparish.org/ccc-logo.png"
      }
    },
    "about": {
      "@type": "CreativeWork",
      "name": sermon.bibleReference,
      "genre": "Religious Sermon"
    }
  };

  return (
    <>
      <SEO
        title={`${sermon.title} - CCC Akoka Parish`}
        description={`${sermon.theme} - Watch this inspiring sermon by ${sermon.pastor} from Christ Church Cathedral Akoka Parish.`}
        url={`/sermon/${sermon.id}`}
        image={sermon.thumbnail}
        type="video.other"
        publishedTime={new Date(sermon.date).toISOString()}
        author={sermon.pastor}
        section="Sermons"
        tags={[sermon.bibleReference, sermon.pastor, "Christian", "Sermon"]}
        jsonLd={sermonJsonLd}
      />
      <div className="min-h-screen">
        <Navigation />
      
      <div className="pt-20 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <Link
            to="/sermons"
            className="inline-flex items-center text-secondary hover:text-accent mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Sermons
          </Link>
          
          <div className="max-w-4xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-background mb-4">
              {sermon.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-background/90 mb-4">
              <div className="flex items-center">
                <Book className="w-4 h-4 mr-2" />
                {sermon.bibleReference}
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {sermon.pastor}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {sermon.date}
              </div>
            </div>
            {sermon.seriesTitle && (
              <p className="text-secondary font-medium">
                Series: {sermon.seriesTitle}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 animate-slide-up rounded-lg overflow-hidden shadow-elegant">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${sermon.youtubeId}`}
                title={sermon.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 mb-8 shadow-lg animate-fade-in">
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">
              Reference
            </h2>
            <p className="text-foreground">{sermon.bibleReference}</p>
          </div>

          {sermon.sermonNotesPdf && (
            <div className="bg-card rounded-lg p-8 mb-8 shadow-lg animate-fade-in">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4 flex items-center">
                <FileText className="w-6 h-6 mr-2" />
                Sermon Notes
              </h2>
              <Button
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-primary"
                asChild
              >
                <a href={sermon.sermonNotesPdf} download>
                  <Download className="w-4 h-4 mr-2" />
                  Download Notes (PDF)
                </a>
              </Button>
            </div>
          )}

          <div className="bg-card rounded-lg p-8 mb-8 shadow-lg animate-fade-in">
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">
              Theme
            </h2>
            <p className="text-foreground leading-relaxed">{sermon.theme}</p>
          </div>

          <div className="bg-card rounded-lg p-8 mb-8 shadow-lg animate-fade-in">
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">
              Sermon Overview
            </h2>
            <p className="text-foreground leading-relaxed">{sermon.overview}</p>
          </div>

          <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg p-8 shadow-lg animate-fade-in">
            <h2 className="text-2xl font-heading font-bold text-primary mb-6">
              Key Takeaways
            </h2>
            <ul className="space-y-4">
              {sermon.keyTakeaways.map((takeaway, index) => (
                <li
                  key={index}
                  className="flex items-start animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center text-primary font-bold mr-4 mt-1">
                    {index + 1}
                  </span>
                  <p className="text-foreground leading-relaxed pt-1">{takeaway}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

        <Footer />
      </div>
    </>
  );
};

export default SermonDetail;
