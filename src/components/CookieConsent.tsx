import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Cookie } from 'lucide-react';
import { getConsentStatus, setConsentStatus, loadGoogleAnalytics, loadGoogleTagManager } from '@/lib/cookieConsent';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

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
    loadGoogleTagManager();
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
              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-primary hover:underline ml-1 underline-offset-2">
                    Πολιτική Απορρήτου
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Πολιτική Απορρήτου</DialogTitle>
                    <DialogDescription className="text-left space-y-4 text-sm leading-relaxed">
                      <p>
                        Σας ευχαριστούμε που εμπιστευτήκατε την thessprint. Γνωρίζουμε ότι η διαχείριση των προσωπικών σας δεδομένων είναι μια μεγάλη ευθύνη.
                      </p>
                      <p>
                        Αποθηκεύουμε ή/και έχουμε πρόσβαση σε πληροφορίες σε μια συσκευή, όπως μοναδικά αναγνωριστικά σε cookies για την επεξεργασία προσωπικών δεδομένων.
                      </p>
                      <div>
                        <p className="font-medium mb-2">Επεξεργαζόμαστε δεδομένα για να παρέχουμε:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Χρήση ακριβών δεδομένων γεωγραφικής τοποθεσίας</li>
                          <li>Ενεργή σάρωση των χαρακτηριστικών της συσκευής για αναγνώριση</li>
                          <li>Αποθήκευση ή/και πρόσβαση σε πληροφορίες σε μια συσκευή</li>
                          <li>Εξατομικευμένη διαφήμιση και περιεχόμενο</li>
                          <li>Μέτρηση διαφήμισης και περιεχομένου</li>
                          <li>Έρευνα κοινού και ανάπτυξη υπηρεσιών</li>
                        </ul>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
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