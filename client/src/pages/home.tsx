import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useABTest } from "@/hooks/use-ab-test";
import { AB_TESTS, trackABTestConversion } from "@/lib/ab-testing";
import { trackEnrollmentFormReturn } from "@/lib/analytics";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero-section";
import { PianoDivider } from "@/components/sections/piano-divider";
import { USPSection } from "@/components/sections/usp-section";
import { SyllabusSection } from "@/components/sections/syllabus-section";
import { CourseStructureSection } from "@/components/sections/course-structure-section";
import { CoursePreviewSection } from "@/components/sections/course-preview-section";
import { WhoIsForSection } from "@/components/sections/who-is-for-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FeesSection } from "@/components/sections/fees-section";
import { FAQSection } from "@/components/sections/faq-section";
import { SEOSection } from "@/components/sections/seo-section";
import { Footer } from "@/components/sections/footer";
import { StickyCTA } from "@/components/sticky-cta";
import { StructuredData } from "@/components/structured-data";
import landingData from "../../../content/landing.json";

export default function Home() {
  const [userRegion, setUserRegion] = useState<"domestic" | "international">("international");

  // A/B Testing
  const heroHeadlineTest = useABTest(AB_TESTS.HERO_HEADLINE);
  const primaryCTATest = useABTest(AB_TESTS.PRIMARY_CTA);

  const { data: geoData } = useQuery({
    queryKey: ["/api/geo"],
  });

  useEffect(() => {
    if (geoData?.region) {
      setUserRegion(geoData.region);
    }
  }, [geoData]);

  // Track when user returns to page (potential form completion)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        trackEnrollmentFormReturn();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Create dynamic hero data based on A/B test variants
  const heroData = {
    ...landingData.hero,
    headline: (heroHeadlineTest.variant as any).headline || landingData.hero.headline,
    subheadline: (heroHeadlineTest.variant as any).subheadline || landingData.hero.subheadline,
    buttons: {
      ...landingData.hero.buttons,
      primary: {
        ...landingData.hero.buttons.primary,
        text: (primaryCTATest.variant as any).name || landingData.hero.buttons.primary.text,
      },
    },
  };

  // Track conversion when user clicks enrollment
  const handleEnrollmentClick = () => {
    trackABTestConversion(AB_TESTS.HERO_HEADLINE.testId, heroHeadlineTest.variantId, 'enrollment_click');
    trackABTestConversion(AB_TESTS.PRIMARY_CTA.testId, primaryCTATest.variantId, 'enrollment_click');
  };

  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      <StructuredData />
      <Header />
      
      <HeroSection 
        data={heroData} 
        onEnrollClick={handleEnrollmentClick}
      />
      
      <PianoDivider />
      
      <CoursePreviewSection data={landingData.coursePreview} />
      
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
    </div>
  );
}
