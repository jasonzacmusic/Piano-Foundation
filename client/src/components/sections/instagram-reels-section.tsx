import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import { useRef } from "react";
import { Card } from "@/components/ui/card";

export function InstagramReelsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const reels = [
    {
      url: "https://www.instagram.com/reel/DC3eKETSdOP/",
      thumbnail: "/images/student-1.jpg",
    },
    {
      url: "https://www.instagram.com/reel/DCweqcXSaiz/",
      thumbnail: "/images/student-2.jpg",
    },
    {
      url: "https://www.instagram.com/reel/DCqo4XwyQGz/",
      thumbnail: "/images/student-3.jpg",
    },
    {
      url: "https://www.instagram.com/reel/DCkxkQRyP-z/",
      thumbnail: "/images/student-4.jpg",
    },
    {
      url: "https://www.instagram.com/reel/DCfMSIdSUke/",
      thumbnail: "/images/student-5.jpg",
    },
    {
      url: "https://www.instagram.com/reel/DCbWwfYS2Nr/",
      thumbnail: "/images/student-6.jpg",
    },
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
            {reels.map((reel, index) => (
              <a
                key={index}
                href={reel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 snap-center block group"
                data-testid={`link-reel-${index}`}
              >
                <Card className="w-[280px] h-[500px] overflow-hidden hover-elevate active-elevate-2 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 z-10 group-hover:to-background/90 transition-all" />
                  <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Instagram className="w-5 h-5" />
                      Watch on Instagram
                    </span>
                  </div>
                  <img
                    src={reel.thumbnail}
                    alt="Instagram Reel"
                    className="w-full h-full object-cover"
                  />
                </Card>
              </a>
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
