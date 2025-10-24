import { motion } from "framer-motion";
import { Award, Users, Music, Mic } from "lucide-react";
import teacherImage from "@assets/Jason's Riffs and Tutorials_October 10th '24 Photos (1 of 1)-10_1761334416663.jpg";

export function TeacherSection() {
  const highlights = [
    {
      icon: Award,
      title: "10+ Years Teaching",
      description: "Result-driven method and engaging teaching style"
    },
    {
      icon: Users,
      title: "Multi-Genre Performer",
      description: "Blues, Folk, Gospel, Indian Classical, and more"
    },
    {
      icon: Music,
      title: "Producer & Composer",
      description: "Three solo albums and countless productions"
    },
    {
      icon: Mic,
      title: "Session Musician",
      description: "Works with top bands like Thermal and a Quarter"
    }
  ];

  return (
    <section className="py-8 md:py-12 lg:py-14 bg-card/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12 space-y-4"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            About Your Teacher
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn from Jason Zachariah, a multi-instrumentalist educator with deep roots in India's music legacy
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src={teacherImage}
                alt="Jason Zachariah at the piano"
                className="w-full h-full object-cover"
                data-testid="img-teacher"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Jason Zachariah hails from an illustrious family of musician stalwarts. His grandfather, 
                <strong className="text-foreground"> Walter Nathaniel</strong>, was one of the first proponents 
                of Western Classical Music in India, while his paternal side has a rich tradition in Indian Classical Music.
              </p>
              
              <p>
                With over a decade of teaching experience, Jason jointly heads the 
                <strong className="text-foreground"> Nathaniel School of Music</strong> in Bangalore, where he teaches 
                piano, bass, and music production. His students describe him as an engaging and inspirational educator 
                with a result-driven method.
              </p>
              
              <p>
                As a performer, Jason has been part of numerous bands including <strong className="text-foreground">Allegro Fudge</strong> (folk 
                with Indian influences), <strong className="text-foreground">Blues Before Sunrise</strong> (blues and funk), and sessions 
                for industry leaders like <strong className="text-foreground">Thermal and a Quarter</strong>, 
                <strong className="text-foreground"> The Raghu Dixit Project</strong>, and <strong className="text-foreground">Lagori</strong>.
              </p>
              
              <p>
                His solo project culminates years of training and influences, blending Indian Classical Music with Celtic 
                Folk across three albums. Jason is also a <strong className="text-foreground">Pro Tools certified operator</strong> and 
                runs the Nathaniel Production House, producing jingles, singles, EPs, and albums for artists across the country.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-accent/30 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-4 h-4 text-accent-foreground" />
                      </div>
                      <h3 className="font-semibold text-sm">{item.title}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
