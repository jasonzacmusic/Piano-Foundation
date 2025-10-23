export function StudentPhotosSection() {
  const photos = [
    {
      src: "/images/student-playing-2.jpg",
      alt: "Student learning piano in class"
    },
    {
      src: "/images/student-playing-1.jpg",
      alt: "Student performing at piano"
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-card/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Our Students in Action
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Real students, real progress, real performances
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {photos.map((photo, index) => (
            <div 
              key={index}
              className="relative rounded-lg overflow-hidden group"
              data-testid={`img-student-${index}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                style={{
                  filter: "sepia(0.3) brightness(0.85) contrast(1.15) saturate(0.85) hue-rotate(10deg)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
