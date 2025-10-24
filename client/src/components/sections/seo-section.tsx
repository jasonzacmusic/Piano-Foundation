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
              Looking for <strong>singing lessons in Bangalore</strong> or wanting to <strong>learn singing from home</strong>?
            </p>
            
            <p>
              The <strong>Nathaniel School of Music</strong>, recognised as one of the <strong>best music schools in Bangalore</strong>, 
              offers comprehensive, performance-based <strong>vocal training</strong>.
            </p>
            
            <p>
              Our 6-month <strong>Vocal Foundation Course</strong> is perfect for beginners and combines proper vocal technique, 
              <strong>breath control</strong>, <strong>music theory</strong>, <strong>ear training</strong>, and <strong>performance skills</strong>. 
              Whether you are searching for "<strong>voice coach near me</strong>" or "<strong>beginner singing courses online</strong>", 
              this course provides a structured, hands-on learning experience.
            </p>
            
            <p>
              You can choose the learning mode that suits you: online, offline, hybrid, private, or group.
            </p>
            
            <p>
              Join students from across Bangalore and around the globe who have trusted the <strong>Nathaniel School of Music</strong> to 
              start their vocal journey. With our structured curriculum, <strong>vocal dynamics</strong> training, and personalised 
              guidance, we are your go-to destination for <strong>singing lessons in Bangalore</strong> and 
              <strong>online voice training</strong>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
