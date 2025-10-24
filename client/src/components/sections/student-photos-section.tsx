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
    "Build breath control and vocal power through proven exercises",
    "Learn proper vocal technique from the ground up",
    "Performance-based learning in just 6 months",
    "Sing confidently across multiple genres and styles",
    "Explore pop, rock, blues, gospel, Bollywood vocals",
    "Students from age 7 to 75+ successfully learning",
    "Live online, offline or hybrid - your choice",
    "HD recordings available for every class",
    "Weekly assignments with structured feedback",
    "Graded certificate upon course completion",
    "Flexible modes: Online, Bangalore offline, or hybrid",
    "Real-world vocal skills and performance techniques",
    "Every class recorded in HD quality",
    "Structured like a real music conservatory",
    "Develop your unique vocal style with proper foundation",
    
    // Student Testimonials (20)
    "From bathroom singer to performing confidently at events",
    "Faculty's patient guidance helped me find my voice",
    "Very structured way of teaching - understand theory well",
    "Experience jamming with a band and live performances",
    "Never sang before, within 6 months picked up quite a bit",
    "Performance based learning - only place in Bangalore",
    "Learning to sing has been an incredible journey",
    "Perform in front of live audience - wonders for confidence",
    "Outstanding platform for all-round growth of musicianship",
    "Faculty makes complex vocal techniques easy to understand",
    "Discovered the school through amazing online tutorials",
    "Regular feedback and homework through WhatsApp group",
    "Faculty checks in during the week to review progress",
    "Supremely talented and supportive vocal coaches",
    "Teachers are very helpful and knowledgeable",
    "Love the jam sessions and showcase performances",
    "This is the best place to learn vocals in Bangalore",
    "Got to perform with musicians of all ages",
    "Started to respect vocal artistry and musical craft",
    "Curriculum is very well designed and practical",
    
    // Vocal Skills (15)
    "Master warm-up exercises and vocal preparation",
    "Learn breath control and diaphragm strengthening",
    "Develop vocal dynamics: power, vibrato, phrasing",
    "Improve resonance and vocal placement techniques",
    "Register transitions: chest, middle and head voice",
    "Articulation exercises for clarity and diction",
    "Professional vocal technique from day one",
    "Sing with proper posture and breathing",
    "Develop solid vocal range and control",
    "Master melodic delivery and expression",
    "Learn proper vocal warm-up routines",
    "Build vocal stamina and endurance",
    "Practice scales across your vocal range",
    "Understand vocal anatomy and how voice works",
    "Develop sight-singing skills progressively",
    
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
    "20 vocal classes plus 12 musicianship classes",
    "32+ hours of comprehensive voice training",
    "From beginner to performer in 6 months",
    "Weekly exams to track your vocal progress",
    "Live sessions plus recordings for flexibility",
    "Vocal exercises reviewed with detailed feedback",
    "Progressive curriculum building on each lesson",
    "Small batch sizes for personalized attention",
    "Regular vocal assessments and performance reviews",
    "Structured syllabus covering all vocal fundamentals",
    "Theory integrated with practical singing",
    "Final performance and graded certification",
    
    // Teaching Approach (12)
    "Sing with bands or perform captivating solos",
    "Learn by doing - practical from day one",
    "Genre diversity: Pop to Classical vocals",
    "Focus on understanding, not just memorizing",
    "Real songs from the very first lesson",
    "Build musicianship alongside vocal technique",
    "Learn to think like a professional vocalist",
    "Understand the why behind every technique",
    "Apply theory immediately to your singing",
    "Creative freedom within structured learning",
    "Build confidence through regular practice",
    "Learn to listen critically and analytically",
    
    // For Different Learners (12)
    "Perfect for absolute beginners starting fresh",
    "Classical vocalists seeking contemporary styles",
    "Ideal for producers and songwriters adding vocal skills",
    "Great for performers wanting proper technique",
    "Adults and seniors thriving in our classes",
    "Build foundation to become a vocal coach",
    "Hobbyists turning passion into performance",
    "Traditional singers wanting modern techniques",
    "Complete beginners to intermediate singers",
    "Musicians from other backgrounds exploring vocals",
    "Anyone serious about learning to sing properly",
    "No prior singing experience required",
    
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
    "Sing by ear and improvise confidently",
    "Understand what you're singing, not just mimicking",
    "Harmonize with other singers in any key",
    "Create your own vocal improvisations",
    "Develop musicianship beyond just singing notes",
    "Learn to interpret and arrange songs vocally",
    "Compose original vocal melodies and harmonies",
    "Transpose songs to suit your vocal range",
    "Improvise over chord changes smoothly",
    "Add vocal runs and embellishments naturally",
    "Develop your unique singing style",
    "Learn advanced vocal techniques and riffs",
    "Master different vocal registers and transitions",
    "Understand vocal dynamics and expression",
    "Sing with emotion, power, and control",
    
    // Practical Benefits (12)
    "Turn your passion for singing into performance",
    "Compose and create with deeper musical knowledge",
    "Add professional vocals to your skill set",
    "Join a community of passionate singers",
    "Network with musicians across India and abroad",
    "Gain skills for teaching vocals in future",
    "Build confidence in your singing abilities",
    "Develop discipline through regular vocal practice",
    "Understand music and vocals at fundamental level",
    "Open doors to music performance opportunities",
    "Enhance creativity and vocal self-expression",
    "Experience joy of expressing yourself through voice"
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
