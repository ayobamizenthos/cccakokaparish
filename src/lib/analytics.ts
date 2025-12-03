import { getAnalytics, isSupported } from 'firebase/analytics';
import app from './firebase';

let analytics: any = null;

export const initializeAnalytics = async () => {
  const gaTrackingId = import.meta.env.VITE_GA_TRACKING_ID;

  if (gaTrackingId) {
    // Initialize Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', gaTrackingId);

    // Initialize Firebase Analytics if supported
    if (await isSupported()) {
      analytics = getAnalytics(app);
    }
  }
};

export const logEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (analytics && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackPageView = (pagePath: string) => {
  logEvent('page_view', { page_path: pagePath });
};

export const trackCustomEvent = (eventName: string, parameters?: Record<string, any>) => {
  logEvent(eventName, parameters);
};

// Custom events for church website
export const trackSermonPlay = (sermonId: string, sermonTitle: string) => {
  trackCustomEvent('sermon_play', { sermon_id: sermonId, sermon_title: sermonTitle });
};

export const trackDonation = (amount: number, currency: string = 'USD') => {
  trackCustomEvent('donation', { value: amount, currency });
};

export const trackNewsletterSignup = (email: string) => {
  trackCustomEvent('newsletter_signup', { method: 'website' });
};

export const trackLiveServiceJoin = () => {
  trackCustomEvent('live_service_join');
};

export const trackContactFormSubmit = () => {
  trackCustomEvent('contact_form_submit');
};

export const trackSearchQuery = (query: string, resultsCount: number) => {
  trackCustomEvent('search', { search_term: query, results_count: resultsCount });
};

export const trackBlogPostRead = (postId: string, postTitle: string) => {
  trackCustomEvent('blog_post_read', { post_id: postId, post_title: postTitle });
};

export const trackFeedbackSubmit = (type: string) => {
  trackCustomEvent('feedback_submit', { feedback_type: type });
};

export const trackAdminAction = (action: string, details?: Record<string, any>) => {
  trackCustomEvent('admin_action', { action, ...details });
};

// Declare gtag and dataLayer on window
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
    dataLayer: any[];
  }
}