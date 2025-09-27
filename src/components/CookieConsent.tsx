import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Cookie } from 'lucide-react';
import { getConsentStatus, setConsentStatus, loadGoogleAnalytics } from '@/lib/cookieConsent';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Show banner only if user hasn't made a choice yet
    if (getConsentStatus() === 'pending') {
      setIsVisible(true);
      setIsAnimating(true);
    }
  }, []);

  const handleAccept = () => {
    setConsentStatus('accepted');
    loadGoogleAnalytics();
    hideBanner();
  };

  const handleReject = () => {
    setConsentStatus('rejected');
    hideBanner();
  };

  const hideBanner = () => {
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 bg-card border-t border-border shadow-2xl transition-transform duration-300 ${
        isAnimating ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Cookie Icon & Message */}
        <div className="flex items-center gap-3 flex-1">
          <Cookie className="h-6 w-6 text-primary flex-shrink-0" />
          <div className="text-sm text-foreground">
            <p className="font-medium mb-1">
              Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία σας
            </p>
            <p className="text-muted-foreground text-xs">
              Τα analytics cookies μας βοηθούν να βελτιώσουμε τις υπηρεσίες μας. 
              <a href="#" className="text-primary hover:underline ml-1">
                Πολιτική Απορρήτου
              </a>
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={handleReject}
            className="text-xs px-4"
          >
            Απόρριψη
          </Button>
          <Button
            size="sm"
            onClick={handleAccept}
            className="text-xs px-4"
          >
            Αποδοχή
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={hideBanner}
            className="p-1 h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;