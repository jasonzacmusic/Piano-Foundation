import { useEffect } from "react";

export function StructuredData() {
  useEffect(() => {
    const courseSchema = {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Foundation Piano Course - Piano Lessons in Bangalore",
      "description": "Learn piano from home with Jason Zac at Nathaniel School of Music, Bangalore's best music school. Online piano classes covering piano chords, progressions, music theory basics, ear training, chords and scales for beginners.",
      "keywords": "piano lessons in bangalore, piano classes near me, online piano course, learn piano for beginners, music theory basics, ear training, jason zac piano, online piano classes, piano chords progressions",
      "educationalLevel": "Beginner to Intermediate",
      "teaches": [
        "Piano technique and fundamentals",
        "Music theory basics",
        "Piano chords and progressions",
        "Ear training - chords and scales",
        "Rhythm and timing",
        "Accompaniment and solo performance"
      ],
      "provider": {
        "@type": "MusicSchool",
        "name": "Nathaniel School of Music",
        "alternateName": "NSM Bangalore",
        "description": "Best music school in Bangalore offering piano lessons, online piano courses, and comprehensive music education",
        "url": window.location.origin,
        "logo": `${window.location.origin}/images/NSM LOGO White_1760966677704.png`,
        "image": `${window.location.origin}/images/060A0073_1760966749362.JPG`,
        "address": [
          {
            "@type": "PostalAddress",
            "addressLocality": "Bangalore",
            "addressRegion": "Karnataka",
            "addressCountry": "IN",
            "streetAddress": "Langford Town"
          },
          {
            "@type": "PostalAddress",
            "addressLocality": "Bangalore",
            "addressRegion": "Karnataka",
            "addressCountry": "IN",
            "streetAddress": "Sahakar Nagar"
          }
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-77604-56847",
          "contactType": "Enrollment",
          "email": "music@nathanielschool.com",
          "availableLanguage": ["English", "Hindi", "Kannada"]
        },
        "sameAs": [
          "https://youtube.com/jasonzac",
          "https://instagram.com/jasonzac"
        ],
        "priceRange": "₹₹"
      },
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": ["online", "onsite", "blended"],
        "duration": "P6M",
        "inLanguage": "en",
        "instructor": {
          "@type": "Person",
          "name": "Jason Zac",
          "description": "Professional piano instructor specializing in online piano classes, music theory basics, and piano chords progressions",
          "jobTitle": "Piano Instructor & Music Educator",
          "sameAs": [
            "https://youtube.com/jasonzac",
            "https://instagram.com/jasonzac"
          ]
        },
        "courseWorkload": "PT2H",
        "location": [
          {
            "@type": "VirtualLocation",
            "name": "Online Piano Classes",
            "description": "Learn piano from home via Zoom"
          },
          {
            "@type": "Place",
            "name": "Nathaniel School of Music - Langford Town",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bangalore",
              "addressRegion": "Karnataka",
              "addressCountry": "IN"
            }
          }
        ]
      },
      "offers": [
        {
          "@type": "Offer",
          "price": "20000",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "eligibleRegion": {
            "@type": "Place",
            "name": "India",
            "geo": {
              "@type": "Country",
              "name": "India"
            }
          },
          "validFrom": "2024-01-01"
        },
        {
          "@type": "Offer",
          "price": "420",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "eligibleRegion": {
            "@type": "Place",
            "name": "International"
          },
          "validFrom": "2024-01-01"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "150",
        "bestRating": "5"
      }
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the best piano lessons in Bangalore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nathaniel School of Music offers the best piano lessons in Bangalore, taught by Jason Zac. Our Foundation Piano Course covers piano chords, progressions, music theory basics, ear training, and performance skills for beginners and intermediate learners."
          }
        },
        {
          "@type": "Question",
          "name": "Can I learn piano online from home?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Our online piano classes allow you to learn piano from home via Zoom. Jason Zac teaches comprehensive online piano courses covering piano technique, music theory basics, ear training, chords and scales, perfect for beginners."
          }
        },
        {
          "@type": "Question",
          "name": "What will I learn in the piano course?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You'll master piano chords progressions, music theory basics, ear training with chords and scales, rhythm training, and both accompaniment and solo performance skills. The course is designed for beginners to learn piano comprehensively."
          }
        },
        {
          "@type": "Question",
          "name": "Is Nathaniel School of Music the best music school in Bangalore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Nathaniel School of Music is recognized as one of the best music schools in Bangalore, offering structured piano courses with performance-based learning. We have centers in Langford Town and Sahakar Nagar, plus online piano classes worldwide."
          }
        }
      ]
    };

    const courseScript = document.createElement("script");
    courseScript.type = "application/ld+json";
    courseScript.text = JSON.stringify(courseSchema);
    document.head.appendChild(courseScript);

    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.text = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    return () => {
      document.head.removeChild(courseScript);
      document.head.removeChild(faqScript);
    };
  }, []);

  return null;
}
