export type ConsentStatus = 'accepted' | 'rejected' | 'pending';

const CONSENT_KEY = 'thessprint-cookie-consent';

export const getConsentStatus = (): ConsentStatus => {
  const consent = localStorage.getItem(CONSENT_KEY);
  return (consent as ConsentStatus) || 'pending';
};

export const setConsentStatus = (status: ConsentStatus) => {
  localStorage.setItem(CONSENT_KEY, status);
};

export const loadGoogleAnalytics = () => {
  // Only load GA if user has accepted cookies
  if (getConsentStatus() !== 'accepted') return;

  // Create GA script element
  const gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-WC6JWQ9YRR';
  document.head.appendChild(gaScript);

  // Initialize gtag
  gaScript.onload = () => {
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', 'G-WC6JWQ9YRR');
    (window as any).gtag = gtag;
  };
};