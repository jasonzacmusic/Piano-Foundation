import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface WhoIsForItem {
  title: string;
  description: string;
}

interface WhoIsForSectionProps {
  data: WhoIsForItem[];
}

export function WhoIsForSection({ data }: WhoIsForSectionProps) {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-card/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-8 md:mb-12 space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Who Is This Course For?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Designed for learners at every stage of their musical journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card 
                className="p-6 md:p-8 text-center hover-elevate transition-all h-full"
                data-testid={`card-who-${index}`}
              >
                <h3 className="font-serif text-xl md:text-2xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
