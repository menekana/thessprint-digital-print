import { MapPin, Phone, Mail, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img src="/lovable-uploads/5f96572f-8cc6-47a6-bda5-e0d728365a0f.png" alt="ThessPrint Logo" className="h-12 w-auto mb-6" />
            <p className="text-secondary-foreground/80 mb-6 leading-relaxed max-w-md">
              Η βιομηχανική εταιρεία γραφικών τεχνών και εκτυπώσεων ThessPrint 
              προσφέρει καινοτόμες λύσεις εκτύπωσης με γνώμονα την ποιότητα και 
              την ικανοποίηση των πελατών.
            </p>
            
            {/* Certifications */}
            <div className="flex flex-wrap gap-4">
              <img src="/lovable-uploads/f290edb2-3258-4dee-9e2f-3d4c55d5b06c.png" alt="ISO 9001:2015 Certification" className="h-16 w-auto" />
              <img src="/lovable-uploads/5d58adcc-3ec6-4716-9b30-f626e5470c1a.png" alt="ISO 14001:2015 Certification" className="h-16 w-auto" />
              <img src="/lovable-uploads/f244f265-6c6a-4f12-aca1-6200291bf48a.png" alt="FSC Certification" className="h-16 w-auto" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Επικοινωνία</h3>
            <div className="space-y-4 text-secondary-foreground/80">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Διεύθυνση</p>
                  <p className="text-sm">ΒΙ.ΠΑ Λάκκωμα Χαλκιδικής, ΤΘ 129 ΤΚ 63080 Λάκκωμα</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium">Τηλέφωνα</p>
                  <p className="text-sm">+30 23990 20 393</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm">info@thessprint.gr</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 pt-4">
                <a href="https://facebook.com/ThessPrint" className="bg-primary/10 p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5" />
                </a>
                <span className="text-sm">Ακολουθήστε μας</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-secondary-foreground/60">
            <p>© 2025 ThessPrint.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;