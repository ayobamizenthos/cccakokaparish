import { Link } from "react-router-dom";
import { sermons } from "@/data/sermons";
import { Play } from "lucide-react";
import LazyImage from "./LazyImage";

const SermonsGrid = () => {
  const recentSermons = sermons.slice(0, 3);

  return (
    <section className="py-32 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-6 animate-[reverent-rise_0.8s_ease-out]">
          <h2 className="text-5xl md:text-7xl font-heading font-light text-primary tracking-luxury leading-tight">
            Recent Sermons
          </h2>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto" />
          <p className="text-xl md:text-2xl text-muted-foreground/80 max-w-3xl mx-auto font-light tracking-editorial leading-luxury">
            Watch our latest messages and be inspired by the Word of God
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {recentSermons.map((sermon, index) => (
            <Link
              key={sermon.id}
              to={`/sermon/${sermon.id}`}
              className="group animate-[reverent-rise_1s_ease-out]"
              style={{ animationDelay: `${index * 150}ms` }}
              aria-label={`Watch sermon: ${sermon.title} by ${sermon.bibleReference}`}
            >
              <div className="bg-card/80 backdrop-blur-luxury rounded-2xl overflow-hidden shadow-glass transition-all duration-700 hover:shadow-lift hover:-translate-y-2">
                <div className="relative aspect-video overflow-hidden">
                  <LazyImage
                    src={sermon.thumbnail}
                    alt={sermon.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    webpSrc={sermon.thumbnail.replace('.jpg', '.webp')}
                    srcSet={`${sermon.thumbnail.replace('.jpg', '-400.jpg')} 400w, ${sermon.thumbnail.replace('.jpg', '-800.jpg')} 800w`}
                    webpSrcSet={`${sermon.thumbnail.replace('.jpg', '-400.webp')} 400w, ${sermon.thumbnail.replace('.jpg', '-800.webp')} 800w`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-60" />
                  <div className="absolute inset-0 bg-primary/50 opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center backdrop-blur-sm">
                    <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-500">
                      <Play className="w-10 h-10 text-primary fill-primary ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-6 right-6 bg-secondary text-primary px-4 py-2 rounded-full text-xs font-medium tracking-wide shadow-glow">
                    New
                  </div>
                </div>
                
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-heading font-light text-primary mb-3 group-hover:text-secondary transition-all duration-500 tracking-editorial">
                    {sermon.title}
                  </h3>
                  <p className="text-sm text-muted-foreground/80 font-light tracking-wide">{sermon.date}</p>
                  <p className="text-base text-foreground/70 line-clamp-2 font-light leading-luxury">
                    {sermon.theme}
                  </p>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent my-4" />
                  <div className="flex items-center justify-between text-sm text-muted-foreground/80">
                    <span className="font-light">{sermon.bibleReference}</span>
                    <span className="text-secondary group-hover:text-accent transition-all duration-500 font-medium">
                      Watch →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/sermons"
            className="inline-block px-12 py-5 bg-secondary text-primary font-medium rounded-xl hover:bg-secondary/90 transition-all duration-500 hover:shadow-glow tracking-wide text-lg"
            aria-label="View all sermons page"
          >
            View All Sermons
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SermonsGrid;
