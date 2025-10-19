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

// Load GA4 script directly
const loadGA4Script = (): Promise<void> => {
  return new Promise((resolve) => {
    console.log('🍪 [loadGA4Script] Loading GA4 script...');
    
    // Check if GA4 script is already loaded
    if (document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) {
      console.log('🍪 [loadGA4Script] GA4 script already loaded');
      resolve();
      return;
    }
    
    // Create GA4 script element
    const ga4Script = document.createElement('script');
    ga4Script.async = true;
    ga4Script.src = 'https://www.googletagmanager.com/gtag/js?id=G-WC6JWWQ9YRR';
    
    ga4Script.onload = () => {
      console.log('🍪 [loadGA4Script] GA4 script loaded successfully');
      
      // Initialize gtag
      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) {
        (window as any).dataLayer.push(args);
      }
      (window as any).gtag = gtag;
      
      // Configure GA4
      gtag('js', new Date());
      gtag('config', 'G-WC6JWWQ9YRR', {
        'send_page_view': false // We'll send page_view manually
      });
      
      console.log('🍪 [loadGA4Script] GA4 initialized with config');
      resolve();
    };
    
    ga4Script.onerror = () => {
      console.error('🍪 [loadGA4Script] Failed to load GA4 script');
      resolve(); // Resolve anyway to not block the flow
    };
    
    document.head.appendChild(ga4Script);
  });
};

// Update consent mode based on user choice
export const updateConsentMode = async (accepted: boolean) => {
  console.log('🍪 [updateConsentMode] Called with accepted:', accepted);
  
  // Initialize dataLayer if it doesn't exist
  (window as any).dataLayer = (window as any).dataLayer || [];
  const dataLayer = (window as any).dataLayer;
  
  console.log('🍪 [updateConsentMode] dataLayer exists:', !!dataLayer);
  console.log('🍪 [updateConsentMode] dataLayer length:', dataLayer.length);
  
  if (accepted) {
    // STEP 1: Load GA4 script
    console.log('🍪 [updateConsentMode] STEP 1: Loading GA4 script');
    await loadGA4Script();
    
    const gtag = (window as any).gtag;
    console.log('🍪 [updateConsentMode] gtag exists:', !!gtag);
    // STEP 2: Update consent mode
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
    
    // STEP 3: Send page_view event directly to GA4
    console.log('🍪 [updateConsentMode] STEP 3: Sending page_view event to GA4');
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
    
    // STEP 4: Push GTM events
    console.log('🍪 [updateConsentMode] STEP 4: Pushing GTM events');
    dataLayer.push({
      'event': 'cookie_consent_accepted',
      'consent_type': 'analytics'
    });
    dataLayer.push({
      'event': 'analytics_consent_granted',
      'consent_type': 'analytics'
    });
    console.log('🍪 [updateConsentMode] All events pushed successfully!');
  } else {
    const gtag = (window as any).gtag;
    
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