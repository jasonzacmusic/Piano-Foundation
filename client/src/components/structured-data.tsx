import { useEffect } from "react";

export function StructuredData() {
  useEffect(() => {
    const courseSchema = {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Foundation Piano Course",
      "description": "Structured 6-month piano training program combining playing, theory, ear training & rhythm. Learn online, offline, or hybrid.",
      "provider": {
        "@type": "Organization",
        "name": "Nathaniel School of Music",
        "url": window.location.origin,
        "logo": `${window.location.origin}/images/NSM LOGO White_1760966677704.png`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "addressCountry": "IN",
          "streetAddress": "Langford Town"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-77604-56847",
          "contactType": "Enrollment",
          "email": "music@nathanielschool.com"
        },
        "sameAs": [
          "https://youtube.com/jasonzac",
          "https://instagram.com/jasonzac"
        ]
      },
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": ["online", "onsite", "blended"],
        "duration": "P6M",
        "instructor": {
          "@type": "Person",
          "name": "Jason Zac"
        }
      },
      "offers": [
        {
          "@type": "Offer",
          "price": "20000",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "eligibleRegion": {
            "@type": "Place",
            "name": "India"
          }
        },
        {
          "@type": "Offer",
          "price": "420",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(courseSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
