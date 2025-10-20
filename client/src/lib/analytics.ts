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

// Form analytics tracking
export const trackFormStart = (formName: string) => {
  trackEvent('form_start', {
    event_category: 'forms',
    event_label: formName,
    value: 1,
  });
};

export const trackFormAbandoned = (formName: string, timeSpent: number) => {
  trackEvent('form_abandoned', {
    event_category: 'forms',
    event_label: formName,
    value: Math.round(timeSpent / 1000), // Convert to seconds
  });
};

export const trackFormCompleted = (formName: string) => {
  trackEvent('form_completed', {
    event_category: 'forms',
    event_label: formName,
    value: 1,
  });
};

// Enhanced enrollment form tracking
export const trackEnrollmentFormOpened = (source: string) => {
  const timestamp = Date.now();
  sessionStorage.setItem('enrollment_form_opened', timestamp.toString());
  sessionStorage.setItem('enrollment_form_source', source);
  
  trackEvent('enrollment_form_opened', {
    event_category: 'forms',
    event_label: source,
    value: 1,
  });
};

// Track when user returns from form (indicating potential completion)
export const trackEnrollmentFormReturn = () => {
  const openedTime = sessionStorage.getItem('enrollment_form_opened');
  const source = sessionStorage.getItem('enrollment_form_source');
  
  if (openedTime) {
    const timeSpent = Date.now() - parseInt(openedTime);
    
    // If user spent more than 30 seconds, likely they engaged with form
    if (timeSpent > 30000) {
      trackEvent('enrollment_form_engaged', {
        event_category: 'forms',
        event_label: source || 'unknown',
        value: Math.round(timeSpent / 1000),
      });
    }
    
    sessionStorage.removeItem('enrollment_form_opened');
    sessionStorage.removeItem('enrollment_form_source');
  }
};
