import { motion } from "framer-motion";

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
          {photos.map((photo, index) => (
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
