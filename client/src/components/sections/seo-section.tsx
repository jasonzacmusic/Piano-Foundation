import { motion } from "framer-motion";

export function SEOSection() {
  return (
    <section className="py-8 md:py-12 bg-card/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <div className="text-base md:text-lg text-muted-foreground leading-relaxed space-y-4">
            <p>
              Looking for <strong>piano lessons in Bangalore</strong> or wanting to <strong>learn piano from home</strong>?
            </p>
            
            <p>
              The <strong>Nathaniel School of Music</strong>, recognised as one of the <strong>best music schools in Bangalore</strong>, 
              offers comprehensive, performance based <strong>piano classes</strong>.
            </p>
            
            <p>
              Our 6-month <strong>Piano Foundation Course</strong> is perfect for beginners and combines practical playing skills, 
              <strong>music theory</strong>, <strong>ear training</strong>, and mastery of <strong>chords and scales</strong>. 
              Whether you are searching for "<strong>piano classes near me</strong>" or "<strong>beginner piano courses online</strong>", 
              this course provides a structured, hands-on learning experience.
            </p>
            
            <p>
              You can choose the learning mode that suits you: online, offline, hybrid, private, or group.
            </p>
            
            <p>
              Join students from across Bangalore and around the globe who have trusted <strong>Jason Zac's piano courses</strong> to 
              start their musical journey. With our structured curriculum, <strong>chord progression</strong> training, and personalised 
              guidance, the <strong>Nathaniel School of Music</strong> is your go-to destination for <strong>piano lessons in Bangalore</strong> and 
              <strong>online piano classes</strong>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
