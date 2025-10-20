import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { trackVideoPlay } from "@/lib/analytics";

interface CoursePreviewProps {
  data: {
    title: string;
    subtitle: string;
    videoUrl: string;
    description: string;
  };
}

export function CoursePreviewSection({ data }: CoursePreviewProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split("v=")[1]?.split("&")[0] || url.split("/").pop();
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  };

  const handlePlayClick = () => {
    setIsPlaying(true);
    trackVideoPlay('course_preview_demo');
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16 space-y-4"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            {data.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {data.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <Card className="p-6 md:p-8 space-y-6">
            <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-muted">
              {!isPlaying ? (
                <div 
                  className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                  onClick={handlePlayClick}
                  data-testid="button-preview-play"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
                  <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground ml-1" />
                    </div>
                    <p className="text-lg md:text-xl font-semibold">Watch Demo Lesson</p>
                  </div>
                </div>
              ) : (
                <iframe
                  src={getYouTubeEmbedUrl(data.videoUrl)}
                  title="Course Preview Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  data-testid="iframe-preview-video"
                />
              )}
            </div>

            <div className="text-center">
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                {data.description}
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
