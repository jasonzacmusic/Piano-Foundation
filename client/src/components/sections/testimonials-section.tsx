import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  photo: string;
}

interface TestimonialsSectionProps {
  data: Testimonial[];
}

export function TestimonialsSection({ data }: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2; // Show 2 testimonials at a time on desktop, 1 on mobile

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const visibleTestimonials = data.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Student Success Stories
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real students
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[400px]">
            {visibleTestimonials.map((testimonial, index) => {
              const globalIndex = currentIndex * itemsPerPage + index;
              return (
                <motion.div
                  key={globalIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card 
                    className="p-8 md:p-10 h-full hover-elevate transition-all"
                    data-testid={`card-testimonial-${globalIndex}`}
                  >
                    <div className="space-y-6">
                      <Quote className="w-10 h-10 text-primary/30" />
                      
                      <p className="text-lg md:text-xl italic leading-relaxed">
                        "{testimonial.quote}"
                      </p>

                      <div className="flex items-center gap-4 pt-4 border-t border-border">
                        <Avatar className="w-16 h-16 ring-2 ring-primary/30 bg-muted">
                          <AvatarImage 
                            src={testimonial.photo} 
                            alt={testimonial.name}
                          />
                          <AvatarFallback className="bg-gradient-to-br from-primary/20 to-accent/30 text-xs flex flex-col items-center justify-center">
                            <span className="text-2xl">{testimonial.name.charAt(0)}</span>
                            <span className="text-[8px] opacity-60">Add Photo</span>
                          </AvatarFallback>
                        </Avatar>
                        
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              data-testid="button-carousel-prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30"
                  }`}
                  data-testid={`button-carousel-dot-${index}`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              data-testid="button-carousel-next"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
