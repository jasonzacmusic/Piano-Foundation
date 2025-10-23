import { Card } from "@/components/ui/card";
import { Clock, BookOpen, Award } from "lucide-react";
import { motion } from "framer-motion";

interface CourseStructureProps {
  data: {
    duration: string;
    classes: string[];
    features: string[];
  };
}

export function CourseStructureSection({ data }: CourseStructureProps) {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-8 md:mb-12 space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Course Structure
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Structured for success with comprehensive support
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 md:p-12 bg-primary/5 border-primary/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                  <Clock className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold">
                  {data.duration}
                </h3>
              </div>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.classes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="p-6 md:p-8 hover-elevate transition-all"
                  data-testid={`card-class-${index}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-lg font-medium leading-relaxed">{item}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 border-card-border">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-primary" />
                <h4 className="font-serif text-xl md:text-2xl font-semibold">
                  What's Included
                </h4>
              </div>
              
              <ul className="space-y-3">
                {data.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-muted-foreground"
                    data-testid={`text-feature-${index}`}
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
