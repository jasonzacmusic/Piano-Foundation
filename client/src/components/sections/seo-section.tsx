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
              Looking for <strong>piano lessons in Bangalore</strong> or want to <strong>learn piano from home</strong>? 
              The <strong>Nathaniel School of Music</strong> is recognized as the <strong>best music school in Bangalore</strong>, 
              offering comprehensive <strong>online piano classes</strong> taught by renowned instructor <strong>Jason Zac</strong>.
            </p>
            
            <p>
              Our <strong>online piano course</strong> is perfect for those searching for "<strong>piano classes near me</strong>" 
              or wanting to <strong>learn piano for beginners</strong>. This 6-month Foundation Piano Course combines practical 
              playing skills with essential <strong>music theory basics</strong>, comprehensive <strong>ear training</strong>, 
              and mastery of <strong>chords and scales</strong>.
            </p>
            
            <p>
              Whether you're in Langford Town, Sahakar Nagar, or anywhere in the world, our <strong>piano chords progressions</strong> training 
              and structured curriculum make us the <strong>best school in Bangalore for piano</strong>. Join students from across 
              the globe who have chosen <strong>Jason Zac piano</strong> courses for their musical journey. Our hybrid learning 
              model offers the flexibility of <strong>online piano classes</strong> with the option for in-person sessions at our 
              <strong>Bangalore music school</strong> locations.
            </p>

            <p className="text-sm">
              <em>Nathaniel School of Music - Where passion meets performance. Offering the finest piano education with courses 
              in piano technique, accompaniment, solo performance, music theory, ear training, and rhythm training for students 
              of all ages and skill levels.</em>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
