import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import { trackEnrollmentClick, trackEnrollmentFormOpened } from "@/lib/analytics";
import { SiWhatsapp } from "react-icons/si";

interface HeroProps {
  data: {
    headline: string;
    subheadline: string;
    buttons: {
      primary: { text: string; link: string };
      secondary: { text: string; link: string };
    };
    trust: string[];
    heroImage: string;
  };
  onEnrollClick?: () => void;
}

export function HeroSection({ data, onEnrollClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/images/hero-background.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "sepia(0.3) brightness(0.7) contrast(1.05) saturate(0.85)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/75 to-background/85" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight"
            data-testid="text-hero-headline"
          >
            {data.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed"
            data-testid="text-hero-subheadline"
          >
            {data.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="text-base md:text-lg px-8 py-6 min-h-14"
              onClick={() => {
                trackEnrollmentClick('hero_primary_cta');
                trackEnrollmentFormOpened('hero_primary_cta');
                onEnrollClick?.();
                window.open(data.buttons.primary.link, '_blank');
              }}
              data-testid="button-enrol-hero"
            >
              {data.buttons.primary.text}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 md:gap-6 justify-center items-center pt-4"
          >
            {data.trust.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm md:text-base text-muted-foreground"
                data-testid={`text-trust-${index}`}
              >
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
