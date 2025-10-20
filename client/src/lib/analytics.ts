// Google Analytics utility functions

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: url,
    });
  }
};

// Specific event tracking functions for conversion optimization
export const trackEnrollmentClick = (source: string) => {
  trackEvent('enrollment_click', {
    event_category: 'engagement',
    event_label: source,
    value: 1,
  });
};

export const trackWhatsAppClick = () => {
  trackEvent('whatsapp_click', {
    event_category: 'engagement',
    event_label: 'contact',
  });
};

export const trackEmailClick = () => {
  trackEvent('email_click', {
    event_category: 'engagement',
    event_label: 'contact',
  });
};

export const trackVideoPlay = (videoId: string) => {
  trackEvent('video_play', {
    event_category: 'engagement',
    event_label: videoId,
  });
};

export const trackSectionView = (sectionName: string) => {
  trackEvent('section_view', {
    event_category: 'engagement',
    event_label: sectionName,
  });
};
