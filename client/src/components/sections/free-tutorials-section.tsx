import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { trackVideoPlay } from "@/lib/analytics";

interface Tutorial {
  title: string;
  url: string;
  category: "piano" | "ear-training" | "chords" | "rhythm" | "theory";
}

const allTutorials: Tutorial[] = [
  {
    title: "How to Play Bella Ciao on Piano (Beginner to Advanced Lesson)",
    url: "https://youtu.be/BaTywzMGA2U",
    category: "piano"
  },
  {
    title: "Beginner Piano Lesson to Get Your Hands Flowing Together",
    url: "https://youtu.be/hUCw78d0HKQ",
    category: "piano"
  },
  {
    title: "12-Bar Blues Piano for Beginners – SING & PLAY",
    url: "https://www.youtube.com/watch?v=DtH5pDjc0Cg",
    category: "piano"
  },
  {
    title: "5 Finger Piano Exercises for Beginners – Designed to Inspire!",
    url: "https://www.youtube.com/watch?v=5XnCmm8qVzk",
    category: "piano"
  },
  {
    title: "Beginner Piano Exercises that ACTUALLY Sound Nice!",
    url: "https://www.youtube.com/watch?v=OytZmkGClK4",
    category: "piano"
  },
  {
    title: "Ear Training Exercises for Beginners (5 Piano Levels)",
    url: "https://www.youtube.com/watch?v=NNEjziA2GY0",
    category: "ear-training"
  },
  {
    title: "Beginner's Guide to Chord Inversions: Step-by-Step Piano Lesson",
    url: "https://youtu.be/KU4YLMlN5hk",
    category: "chords"
  },
  {
    title: "4 Left-Hand Piano Chord Patterns for Beginners",
    url: "https://youtu.be/CAV2SafUsZ4",
    category: "chords"
  },
  {
    title: "How to Use the Metronome (5 Techniques) – Beginner & Advanced",
    url: "https://youtu.be/w3zw7PE9pW0",
    category: "rhythm"
  },
  {
    title: "MIDI Recording for Beginners | DAW, Setup, Signal Flow",
    url: "https://youtu.be/a5i6jIHw20o",
    category: "theory"
  }
];

export function FreeTutorialsSection() {
  const [selectedTutorials, setSelectedTutorials] = useState<Tutorial[]>([]);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  // Select 4 diverse tutorials ensuring at least 1 from each major category
  useEffect(() => {
    const selectDiverseTutorials = () => {
      const selected: Tutorial[] = [];
      
      // Ensure we have at least one from each required category
      const pianoOptions = allTutorials.filter(t => t.category === "piano");
      const earTrainingOptions = allTutorials.filter(t => t.category === "ear-training");
      const chordsOptions = allTutorials.filter(t => t.category === "chords");
      const rhythmTheoryOptions = allTutorials.filter(t => t.category === "rhythm" || t.category === "theory");
      
      // Pick one random from each category
      if (pianoOptions.length > 0) {
        selected.push(pianoOptions[Math.floor(Math.random() * pianoOptions.length)]);
      }
      
      if (earTrainingOptions.length > 0) {
        selected.push(earTrainingOptions[Math.floor(Math.random() * earTrainingOptions.length)]);
      }
      
      if (chordsOptions.length > 0) {
        selected.push(chordsOptions[Math.floor(Math.random() * chordsOptions.length)]);
      }
      
      if (rhythmTheoryOptions.length > 0) {
        selected.push(rhythmTheoryOptions[Math.floor(Math.random() * rhythmTheoryOptions.length)]);
      }
      
      setSelectedTutorials(selected);
    };
    
    selectDiverseTutorials();
  }, []);

  const getVideoId = (url: string) => {
    return url.split("v=")[1]?.split("&")[0] || url.split("/").pop();
  };

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = getVideoId(url);
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  };

  const getYouTubeThumbnail = (url: string) => {
    const videoId = getVideoId(url);
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  const handlePlayClick = (url: string, title: string) => {
    setPlayingVideo(url);
    trackVideoPlay(`free_tutorial_${title.substring(0, 20)}`);
  };

  if (selectedTutorials.length === 0) return null;

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12 space-y-4"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Free Beginner Tutorials
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Start learning right away with these hand-picked lessons from our YouTube channel
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {selectedTutorials.map((tutorial, index) => (
            <motion.div
              key={tutorial.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover-elevate">
                <div className="relative aspect-video w-full bg-muted">
                  {playingVideo !== tutorial.url ? (
                    <div 
                      className="absolute inset-0 cursor-pointer group"
                      onClick={() => handlePlayClick(tutorial.url, tutorial.title)}
                      data-testid={`button-tutorial-play-${index}`}
                    >
                      <img
                        src={getYouTubeThumbnail(tutorial.url)}
                        alt={tutorial.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/60" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground ml-0.5" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <iframe
                      src={getYouTubeEmbedUrl(tutorial.url)}
                      title={tutorial.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                      data-testid={`iframe-tutorial-video-${index}`}
                    />
                  )}
                </div>
                
                <div className="p-3 md:p-4">
                  <h3 className="text-sm md:text-base font-medium leading-tight line-clamp-2">
                    {tutorial.title}
                  </h3>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
