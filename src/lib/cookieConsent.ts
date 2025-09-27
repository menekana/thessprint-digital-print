export type ConsentStatus = 'accepted' | 'rejected' | 'pending';

const CONSENT_KEY = 'thessprint-cookie-consent';

export const getConsentStatus = (): ConsentStatus => {
  const consent = localStorage.getItem(CONSENT_KEY);
  return (consent as ConsentStatus) || 'pending';
};

export const setConsentStatus = (status: ConsentStatus) => {
  localStorage.setItem(CONSENT_KEY, status);
};

// Set default consent mode (called on page load)
export const setConsentModeDefaults = () => {
  // Initialize dataLayer
  (window as any).dataLayer = (window as any).dataLayer || [];
  
  function gtag(...args: any[]) {
    (window as any).dataLayer.push(args);
  }
  
  // Set default consent to denied
  gtag('consent', 'default', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied',
    'functionality_storage': 'denied',
    'personalization_storage': 'denied',
    'security_storage': 'granted',
    'wait_for_update': 2000,
  });
  
  (window as any).gtag = gtag;
};

// Load GTM with consent mode (called on page load)
export const loadGoogleTagManager = () => {
  // Set consent defaults first
  setConsentModeDefaults();
  
  // Initialize dataLayer if it doesn't exist
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
  });

  // Create GTM script element
  const gtmScript = document.createElement('script');
  gtmScript.async = true;
  gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-MT8GHWLV';
  
  // Insert GTM script before the first script tag
  const firstScript = document.getElementsByTagName('script')[0];
  if (firstScript && firstScript.parentNode) {
    firstScript.parentNode.insertBefore(gtmScript, firstScript);
  } else {
    document.head.appendChild(gtmScript);
  }
  
  // After GTM loads, check existing consent and update if needed
  gtmScript.onload = () => {
    const consentStatus = getConsentStatus();
    if (consentStatus === 'accepted') {
      updateConsentMode(true);
    } else if (consentStatus === 'rejected') {
      updateConsentMode(false);
    }
  };
};

// Update consent mode based on user choice
export const updateConsentMode = (accepted: boolean) => {
  const gtag = (window as any).gtag;
  if (!gtag) return;
  
  if (accepted) {
    gtag('consent', 'update', {
      'analytics_storage': 'granted',
      'ad_storage': 'granted',
      'functionality_storage': 'granted',
      'personalization_storage': 'granted'
    });
  } else {
    gtag('consent', 'update', {
      'analytics_storage': 'denied',
      'ad_storage': 'denied',
      'functionality_storage': 'denied',
      'personalization_storage': 'denied'
    });
  }
};