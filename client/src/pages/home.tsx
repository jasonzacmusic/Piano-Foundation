import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { HeroSection } from "@/components/sections/hero-section";
import { USPSection } from "@/components/sections/usp-section";
import { SyllabusSection } from "@/components/sections/syllabus-section";
import { CourseStructureSection } from "@/components/sections/course-structure-section";
import { WhoIsForSection } from "@/components/sections/who-is-for-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FeesSection } from "@/components/sections/fees-section";
import { FAQSection } from "@/components/sections/faq-section";
import { SEOSection } from "@/components/sections/seo-section";
import { Footer } from "@/components/sections/footer";
import { StickyCTA } from "@/components/sticky-cta";
import { VideoModal } from "@/components/video-modal";
import { StructuredData } from "@/components/structured-data";
import landingData from "../../../content/landing.json";

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [userRegion, setUserRegion] = useState<"domestic" | "international">("international");

  const { data: geoData } = useQuery({
    queryKey: ["/api/geo"],
  });

  useEffect(() => {
    if (geoData?.region) {
      setUserRegion(geoData.region);
    }
  }, [geoData]);

  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      <StructuredData />
      
      <HeroSection 
        data={landingData.hero} 
        onVideoClick={() => setIsVideoOpen(true)}
      />
      
      <USPSection data={landingData.usps} />
      
      <SyllabusSection data={landingData.syllabus} />
      
      <CourseStructureSection data={landingData.structure} />
      
      <WhoIsForSection data={landingData.whoIsFor} />
      
      <TestimonialsSection data={landingData.testimonials} />
      
      <FeesSection 
        data={landingData.fees} 
        userRegion={userRegion}
      />
      
      <FAQSection data={landingData.faq} />
      
      <SEOSection />
      
      <Footer data={landingData.footer} />
      
      <StickyCTA enrollLink={landingData.hero.buttons.primary.link} />
      
      <VideoModal 
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl={landingData.hero.buttons.secondary.link}
      />
    </div>
  );
}
