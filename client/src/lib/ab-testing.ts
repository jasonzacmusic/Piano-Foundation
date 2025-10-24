// A/B Testing utility with localStorage persistence

export interface ABTestVariant {
  id: string;
  name: string;
  weight?: number; // Optional weight for distribution (default: equal)
}

export interface ABTest {
  testId: string;
  variants: ABTestVariant[];
}

// Get or assign a variant for a specific test
export const getABTestVariant = (test: ABTest): string => {
  const storageKey = `ab_test_${test.testId}`;
  
  // Check if user already has an assigned variant
  const existingVariant = localStorage.getItem(storageKey);
  if (existingVariant && test.variants.some(v => v.id === existingVariant)) {
    return existingVariant;
  }

  // Assign a new variant based on weights
  const totalWeight = test.variants.reduce((sum, v) => sum + (v.weight || 1), 0);
  const random = Math.random() * totalWeight;
  
  let cumulativeWeight = 0;
  for (const variant of test.variants) {
    cumulativeWeight += variant.weight || 1;
    if (random <= cumulativeWeight) {
      localStorage.setItem(storageKey, variant.id);
      return variant.id;
    }
  }

  // Fallback to first variant
  const fallbackId = test.variants[0].id;
  localStorage.setItem(storageKey, fallbackId);
  return fallbackId;
};

// Track A/B test exposure
export const trackABTestExposure = (testId: string, variantId: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'ab_test_exposure', {
      event_category: 'experiment',
      test_id: testId,
      variant_id: variantId,
    });
  }
};

// Track A/B test conversion
export const trackABTestConversion = (testId: string, variantId: string, conversionType: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'ab_test_conversion', {
      event_category: 'experiment',
      test_id: testId,
      variant_id: variantId,
      conversion_type: conversionType,
    });
  }
};

// Define A/B tests
export const AB_TESTS = {
  HERO_HEADLINE: {
    testId: 'hero_headline_test',
    variants: [
      {
        id: 'original',
        name: 'Original Headline',
        headline: 'Learn Western Vocals – Structured Training for Beginner & Intermediate Singers',
        subheadline: 'Structured. Practical. Performance-based. For all ages.',
      },
      {
        id: 'focus_on_speed',
        name: 'Focus on Confidence and Expression',
        headline: 'Western Vocals Program | Learn to Sing with Confidence & Expression (All Levels)',
        subheadline: 'Structured. Practical. Performance-based. For all ages.',
      },
      {
        id: 'focus_on_mastery',
        name: 'Focus on Online and Offline',
        headline: 'Western Vocal Classes Online & Offline | For All Levels of Singers',
        subheadline: 'Structured. Practical. Performance-based. For all ages.',
      },
    ],
  },
  PRIMARY_CTA: {
    testId: 'primary_cta_test',
    variants: [
      { id: 'enrol_now', name: 'Enrol Now' },
      { id: 'start_learning', name: 'Start Learning' },
      { id: 'join_course', name: 'Join the Course' },
      { id: 'reserve_spot', name: 'Reserve Your Spot' },
    ],
  },
};
