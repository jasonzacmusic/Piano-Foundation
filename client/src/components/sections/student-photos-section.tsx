import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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

  // Massive pool of 150+ course highlights
  const allHighlights = [
    // USPs & Core Features (15)
    "Learn all 12 keys - go beyond C major",
    "Bottom-up approach: Start with rhythm and chords first",
    "Accompaniment plus solo playing skills combined",
    "Performance-based learning in just 6 months",
    "Play confidently in every key with proper technique",
    "Master blues, gospel, Bollywood, pop and Indian ragas",
    "Students from age 7 to 75+ successfully learning",
    "Live online, offline or hybrid - your choice",
    "HD recordings available for every class",
    "Weekly assignments with structured feedback",
    "Graded certificate upon course completion",
    "Flexible modes: Online, Bangalore offline, or hybrid",
    "Real-world skills before traditional methods",
    "Every class recorded in HD quality",
    "Structured like a real music conservatory",
    
    // Student Testimonials (20)
    "From knowing nothing to figuring out chords for any song",
    "Jason is an incredible teacher with a natural ability",
    "Very structured way of teaching - understand theory well",
    "Experience jamming with a band and live performances",
    "Never played before, within 8 months picked up quite a bit",
    "Performance based learning - only place in Bangalore",
    "Learning music has been a joyride with Jason",
    "Play in front of live audience - wonders for confidence",
    "Outstanding platform for all-round growth of musicianship",
    "Jason makes complex methods easy to understand",
    "Discovered Jason through his amazing YouTube videos",
    "Private WhatsApp group for homework and questions",
    "Jason checks in during the week to review homework",
    "Supremely gifted, talented and super creative musician",
    "Teachers are very helpful and supportive",
    "Love the jam sessions and reviews before gigs",
    "This is the only place to learn music in Bangalore",
    "Got to mix with youngsters and enjoyed it",
    "Started to respect songs, musicians and instruments",
    "Curriculum is very well designed and practical",
    
    // Piano Skills (15)
    "Master major, minor, pentatonic and blues scales",
    "Learn chord inversions and block chords",
    "12-bar blues patterns and progressions",
    "Left-hand patterns plus right-hand melody coordination",
    "Waltz, Oom-Pah, Afro-Cuban, Folk and Rock styles",
    "Note recognition and 5-finger drill mastery",
    "Professional piano technique from day one",
    "Play both melody and harmony together",
    "Develop solid left-hand bass patterns",
    "Master right-hand melodic techniques",
    "Learn proper hand position and posture",
    "Build finger strength and independence",
    "Practice scales in all 12 keys",
    "Understand piano keyboard layout completely",
    "Develop sight-reading skills progressively",
    
    // Music Theory (15)
    "Understand staff notation and note values",
    "Master intervals and the circle of fifths",
    "Chord progressions and harmony fundamentals",
    "Learn ragas and transposition techniques",
    "Decode song structure like a professional",
    "Music theory taught in a practical manner",
    "Learn how chords are constructed",
    "Understand major and minor tonalities",
    "Master the Nashville number system",
    "Learn Roman numeral chord analysis",
    "Understand key signatures thoroughly",
    "Grasp time signatures and rhythm notation",
    "Learn music terminology and symbols",
    "Study chord extensions and alterations",
    "Understand harmonic functions in progressions",
    
    // Ear Training (15)
    "Develop your ear to play songs by listening",
    "Transcribe melodies and rhythms accurately",
    "Identify scales by ear with confidence",
    "Compute song keys just by listening",
    "Recognize intervals and melodic curves",
    "Train your ear to hear chord progressions",
    "Learn to identify chord qualities by sound",
    "Develop perfect pitch recognition skills",
    "Hear the difference between major and minor",
    "Recognize common chord progressions instantly",
    "Train ear to detect rhythm patterns",
    "Learn to transcribe songs from recordings",
    "Identify melodic intervals precisely",
    "Develop relative pitch accuracy",
    "Hear bass lines and chord voicings clearly",
    
    // Rhythm Training (12)
    "Master bars, beats and sub-beats",
    "Understand straight versus swing feels",
    "Triplets and sixteenth notes made simple",
    "Afro-Cuban rhythms and Clave patterns",
    "Learn basics of Konnakol rhythmic patterns",
    "Develop rock-solid timing and groove",
    "Count complex rhythms with confidence",
    "Learn syncopation and off-beat accents",
    "Master dotted rhythms and irregular meters",
    "Understand polyrhythms and cross-rhythms",
    "Practice with metronome for precision",
    "Develop internal sense of pulse and tempo",
    
    // Course Structure (12)
    "20 instrument classes plus 12 musicianship classes",
    "32+ hours of comprehensive training",
    "From beginner to performer in 6 months",
    "Weekly exams to track your progress",
    "Live sessions plus recordings for flexibility",
    "Assignments reviewed with detailed feedback",
    "Progressive curriculum building on each lesson",
    "Small batch sizes for personalized attention",
    "Regular assessments and performance reviews",
    "Structured syllabus covering all fundamentals",
    "Theory integrated with practical playing",
    "Final performance and graded certification",
    
    // Teaching Approach (12)
    "Support singers and bands or perform solo",
    "Learn by doing - practical from day one",
    "Genre diversity: Blues to Bollywood",
    "Focus on understanding, not just memorizing",
    "Real songs from the very first lesson",
    "Build musicianship alongside technique",
    "Learn to think like a musician",
    "Understand the why behind every concept",
    "Apply theory immediately to playing",
    "Creative freedom within structured learning",
    "Build confidence through regular practice",
    "Learn to listen critically and analytically",
    
    // For Different Learners (12)
    "Perfect for absolute beginners starting fresh",
    "Trinity and ABRSM students seeking practical skills",
    "Ideal for producers and DJs adding live skills",
    "Great for songwriters needing music theory",
    "Adults and seniors thriving in our classes",
    "Build foundation to become a music teacher",
    "Hobbyists turning passion into performance",
    "Classical students wanting contemporary skills",
    "Complete beginners to intermediate players",
    "Musicians from other instruments switching to piano",
    "Anyone serious about learning properly",
    "No prior music experience required",
    
    // Performance & Application (15)
    "Apply learning through live stage performances",
    "Studio recording experience included",
    "Jam sessions and band experience",
    "Showcase your skills in structured exams",
    "Real gigs and performance opportunities",
    "Perform at student concerts and showcases",
    "Learn stage presence and performance skills",
    "Experience playing with other musicians",
    "Develop confidence performing in public",
    "Record your progress in professional studio",
    "Play at cafes, events and music venues",
    "Collaborate with vocalists and bands",
    "Build a repertoire of performance pieces",
    "Learn to handle performance pressure",
    "Perform both covers and original compositions",
    
    // Advanced Skills (15)
    "Play by ear and improvise confidently",
    "Understand what you're playing, not just where",
    "Accompany singers in any key instantly",
    "Create your own chord progressions",
    "Develop musicianship beyond just playing notes",
    "Learn to arrange songs for piano",
    "Compose original melodies and harmonies",
    "Transpose songs to different keys easily",
    "Improvise over chord changes smoothly",
    "Create fills and embellishments naturally",
    "Develop your unique playing style",
    "Learn reharmonization techniques",
    "Master modal playing and scales",
    "Understand advanced chord substitutions",
    "Play with dynamics and expression",
    
    // Practical Benefits (12)
    "Turn your passion into performance",
    "Compose with deeper musical knowledge",
    "Add professional piano to your skill set",
    "Join a community of passionate learners",
    "Network with musicians across India and abroad",
    "Gain skills for teaching piano in future",
    "Build confidence in musical abilities",
    "Develop discipline through regular practice",
    "Understand music at a fundamental level",
    "Open doors to music career opportunities",
    "Enhance creativity and self-expression",
    "Experience joy of creating music yourself"
  ];

  // Track used highlights globally to avoid repeats across all images
  const [usedHighlights, setUsedHighlights] = useState<Set<string>>(new Set());
  const [photoHighlights, setPhotoHighlights] = useState<{ [key: number]: string }>({});

  // Initialize with unique random highlights for each photo (guaranteed no repeats)
  useEffect(() => {
    const initialHighlights: { [key: number]: string } = {};
    const shuffled = [...allHighlights].sort(() => Math.random() - 0.5);
    
    photos.forEach((_, index) => {
      initialHighlights[index] = shuffled[index];
    });
    
    const initialUsed = new Set(shuffled.slice(0, photos.length));
    setPhotoHighlights(initialHighlights);
    setUsedHighlights(initialUsed);
  }, []);

  // Get new random highlight on hover (never repeats until all exhausted)
  const getNewHighlight = (photoIndex: number) => {
    const available = allHighlights.filter(h => !usedHighlights.has(h));
    
    // If all highlights used, reset the pool
    if (available.length === 0) {
      const currentHighlight = photoHighlights[photoIndex];
      setUsedHighlights(new Set([currentHighlight]));
      const freshAvailable = allHighlights.filter(h => h !== currentHighlight);
      const randomIndex = Math.floor(Math.random() * freshAvailable.length);
      const newHighlight = freshAvailable[randomIndex];
      
      setPhotoHighlights(prev => ({ ...prev, [photoIndex]: newHighlight }));
      setUsedHighlights(new Set([currentHighlight, newHighlight]));
    } else {
      const randomIndex = Math.floor(Math.random() * available.length);
      const newHighlight = available[randomIndex];
      
      setPhotoHighlights(prev => ({ ...prev, [photoIndex]: newHighlight }));
      setUsedHighlights(prev => {
        const newSet = new Set(prev);
        newSet.add(newHighlight);
        return newSet;
      });
    }
  };

  return (
    <section className="py-8 md:py-12 lg:py-14 bg-card/30">
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
            A glimpse into our journey of learning, practice, and live performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 max-w-6xl mx-auto">
          {photos.map((photo, index) => {
            const highlight = photoHighlights[index] || allHighlights[0];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden group border border-primary/20"
                data-testid={`img-student-${index}`}
                onMouseEnter={() => getNewHighlight(index)}
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
                  
                  {/* Highlight overlay - visible on hover (desktop) */}
                  <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-end p-4">
                      <p className="text-sm md:text-base font-medium text-foreground leading-relaxed">
                        {highlight}
                      </p>
                    </div>
                  </div>

                  {/* Mobile-only: Always show highlight at bottom */}
                  <div className="md:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-3">
                    <p className="text-xs font-medium text-foreground/90 leading-tight">
                      {highlight}
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
