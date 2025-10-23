import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useEffect } from "react";

export function InstagramReelsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.instagram.com/embed.js';
    document.body.appendChild(script);

    // Process embeds after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const reelUrls = [
    "https://www.instagram.com/p/DC3eKETSdOP/",
    "https://www.instagram.com/p/DCweqcXSaiz/",
    "https://www.instagram.com/p/DCqo4XwyQGz/",
    "https://www.instagram.com/p/DCkxkQRyP-z/",
    "https://www.instagram.com/p/DCfMSIdSUke/",
    "https://www.instagram.com/p/DCbWwfYS2Nr/",
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background border border-border rounded-full p-2 shadow-lg transition-all hover-elevate active-elevate-2 hidden md:block"
            aria-label="Scroll left"
            data-testid="button-reels-scroll-left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reelUrls.map((url, index) => (
              <div
                key={index}
                className="flex-shrink-0 snap-center"
                style={{ minWidth: '328px', maxWidth: '328px' }}
              >
                <blockquote
                  className="instagram-media"
                  data-instgrm-captioned
                  data-instgrm-permalink={url}
                  data-instgrm-version="14"
                  style={{
                    background: '#FFF',
                    border: 0,
                    borderRadius: '3px',
                    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                    margin: '0',
                    maxWidth: '328px',
                    minWidth: '328px',
                    padding: 0,
                    width: '100%',
                  }}
                  data-testid={`blockquote-reel-${index}`}
                >
                  <a href={url} target="_blank" rel="noopener noreferrer">View on Instagram</a>
                </blockquote>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background border border-border rounded-full p-2 shadow-lg transition-all hover-elevate active-elevate-2 hidden md:block"
            aria-label="Scroll right"
            data-testid="button-reels-scroll-right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
}
