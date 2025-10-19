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
  console.log('🍪 [updateConsentMode] Called with accepted:', accepted);
  
  const gtag = (window as any).gtag;
  
  // Initialize dataLayer if it doesn't exist
  (window as any).dataLayer = (window as any).dataLayer || [];
  const dataLayer = (window as any).dataLayer;
  
  console.log('🍪 [updateConsentMode] dataLayer exists:', !!dataLayer);
  console.log('🍪 [updateConsentMode] dataLayer length:', dataLayer.length);
  console.log('🍪 [updateConsentMode] gtag exists:', !!gtag);
  
  if (accepted) {
    // STEP 1: Push cookie_consent_accepted event FIRST (no consent required)
    console.log('🍪 [updateConsentMode] STEP 1: Pushing cookie_consent_accepted event');
    dataLayer.push({
      'event': 'cookie_consent_accepted',
      'consent_type': 'analytics'
    });
    console.log('🍪 [updateConsentMode] Event pushed! Current dataLayer:', dataLayer);
    
    // STEP 2: Update consent mode (if gtag is available)
    console.log('🍪 [updateConsentMode] STEP 2: Updating consent mode');
    if (gtag) {
      gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted',
        'functionality_storage': 'granted',
        'personalization_storage': 'granted'
      });
      console.log('🍪 [updateConsentMode] Consent mode updated via gtag');
    } else {
      console.warn('🍪 [updateConsentMode] gtag not available, skipping consent update');
    }
    
    // STEP 3: Send analytics_consent_granted event (after consent is granted)
    console.log('🍪 [updateConsentMode] STEP 3: Pushing analytics_consent_granted event');
    dataLayer.push({
      'event': 'analytics_consent_granted',
      'consent_type': 'analytics'
    });
    console.log('🍪 [updateConsentMode] All events pushed successfully!');
    
    // STEP 4: Send page_view event directly to GA4
    console.log('🍪 [updateConsentMode] STEP 4: Sending page_view event to GA4');
    if (gtag) {
      gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname
      });
      console.log('🍪 [updateConsentMode] page_view event sent to GA4');
    } else {
      console.warn('🍪 [updateConsentMode] gtag not available, skipping page_view event');
    }
  } else {
    // Push cookie rejection event first
    dataLayer.push({
      'event': 'cookie_consent_rejected',
      'consent_type': 'analytics'
    });
    
    // Update consent mode to denied (if gtag is available)
    if (gtag) {
      gtag('consent', 'update', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied',
        'functionality_storage': 'denied',
        'personalization_storage': 'denied'
      });
    }
  }
};