import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

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

  const reelUrls = [
    "https://www.instagram.com/reel/DC3eKETSdOP/",
    "https://www.instagram.com/reel/DCweqcXSaiz/",
    "https://www.instagram.com/reel/DCqo4XwyQGz/",
    "https://www.instagram.com/reel/DCkxkQRyP-z/",
    "https://www.instagram.com/reel/DCfMSIdSUke/",
    "https://www.instagram.com/reel/DCbWwfYS2Nr/",
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6 md:mb-8"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
            Student Performances & Highlights
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Watch our students in action
          </p>
        </motion.div>

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
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 snap-center"
              >
                <iframe
                  src={`${url}embed/`}
                  width="320"
                  height="570"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency
                  allow="encrypted-media"
                  className="rounded-lg shadow-lg"
                  data-testid={`iframe-reel-${index}`}
                />
              </motion.div>
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
