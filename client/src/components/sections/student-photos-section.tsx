import { motion } from "framer-motion";
import { useState } from "react";

export function StudentPhotosSection() {
  const photos = [
    {
      src: "/images/student-playing-2.jpg",
      alt: "Student learning piano in class",
      orientation: "left"
    },
    {
      src: "/images/student-3.jpg",
      alt: "Young student with headphones at keyboard",
      orientation: "right"
    },
    {
      src: "/images/student-9.jpg",
      alt: "Student performing at keyboard",
      orientation: "left"
    },
    {
      src: "/images/student-4.jpg",
      alt: "Band ensemble with keyboard player",
      orientation: "right"
    },
    {
      src: "/images/student-7.jpg",
      alt: "Student practicing piano technique",
      orientation: "center"
    },
    {
      src: "/images/student-playing-1.jpg",
      alt: "Student performing at piano",
      orientation: "right"
    },
    {
      src: "/images/student-8.jpg",
      alt: "Experienced student at keyboard",
      orientation: "center"
    },
    {
      src: "/images/student-5.jpg",
      alt: "Advanced student performing",
      orientation: "right"
    },
    {
      src: "/images/student-6.jpg",
      alt: "Adult learner at piano",
      orientation: "right"
    }
  ];

  // Course highlights pool - randomly assigned to photos
  const courseHighlights = [
    "Learn all 12 keys - go beyond C major!",
    "Performance-based learning in just 6 months",
    "From knowing nothing to figuring out chords for any song",
    "Bottom-up approach: Start with rhythm & chords",
    "Master blues, gospel, Bollywood, pop & Indian ragas",
    "Play confidently in every key with proper technique",
    "Accompaniment + Solo playing skills combined",
    "Jason is an incredible teacher with a natural ability",
    "Students from age 7 to 75+ successfully learning",
    "Weekly assignments with structured feedback",
    "Learn chord progressions & harmony fundamentals",
    "Develop your ear to play songs by listening",
    "Live online, offline or hybrid - your choice",
    "Experience jamming with a band & live performances",
    "Very structured way of teaching - understand theory well",
    "HD recordings available for every class",
    "Intro to ragas & transposition techniques",
    "Afro-Cuban rhythms, swing feels & Konnakol basics",
    "20 instrument classes + 12 musicianship classes",
    "Transcribe melodies & identify scales by ear",
    "From beginner to performer - real stage experience"
  ];

  // Randomly assign one highlight to each photo
  const getRandomHighlight = (index: number) => {
    // Use index as seed for consistent but varied selection
    return courseHighlights[(index * 7) % courseHighlights.length];
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-card/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 space-y-4"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Our Students in Action
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Real students, real progress, real performances
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 max-w-6xl mx-auto">
          {photos.map((photo, index) => {
            const highlight = getRandomHighlight(index);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden group border border-primary/20"
                data-testid={`img-student-${index}`}
              >
                <div className="relative md:aspect-square" style={{ aspectRatio: "3 / 2" }}>
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{
                      filter: "sepia(0.3) brightness(0.85) contrast(1.15) saturate(0.85) hue-rotate(10deg)",
                      objectPosition: photo.orientation === "left" ? "left center" : 
                                     photo.orientation === "right" ? "right center" : 
                                     "center center"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-60" />
                  
                  {/* Highlight overlay - visible on hover (desktop) or always visible (mobile) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/80 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:opacity-0 touch:opacity-100">
                    <p className="text-sm md:text-base font-medium text-foreground leading-relaxed">
                      ✨ {highlight}
                    </p>
                  </div>

                  {/* Mobile-only: Always show highlight at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-3 md:hidden">
                    <p className="text-xs font-medium text-foreground/90 leading-tight">
                      ✨ {highlight}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
