import { useState, useEffect } from 'react';
import { getABTestVariant, trackABTestExposure, ABTest } from '@/lib/ab-testing';

export const useABTest = (test: ABTest) => {
  const [variantId, setVariantId] = useState<string>(test.variants[0].id);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const selectedVariant = getABTestVariant(test);
    setVariantId(selectedVariant);
    setIsLoading(false);

    // Track exposure
    trackABTestExposure(test.testId, selectedVariant);
  }, [test]);

  const variant = test.variants.find(v => v.id === variantId) || test.variants[0];

  return { variantId, variant, isLoading };
};
