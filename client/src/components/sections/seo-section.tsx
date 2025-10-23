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
          className="max-w-4xl mx-auto prose prose-invert"
        >
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center">
            Looking for a <strong>beginner piano course in Bangalore</strong>? The Nathaniel School of Music 
            offers comprehensive <strong>online piano lessons</strong> and hybrid learning options that 
            combine <strong>accompaniment and solo skills</strong> in a <strong>structured 6-month 
            training program</strong>. Our foundation course covers piano technique, music theory, ear 
            training, and rhythm, preparing students for real-world performance. Whether you're in 
            Langford Town, Sahakar Nagar, or anywhere in the world, our expert instruction and flexible 
            learning modes make professional piano education accessible to everyone.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
