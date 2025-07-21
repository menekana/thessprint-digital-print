import { MapPin, Phone, Mail, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <img 
              src="/lovable-uploads/b030c290-50f0-43fc-af99-4cfd28efb882.png" 
              alt="ThessPrint Logo" 
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-secondary-foreground/80 mb-6 leading-relaxed max-w-md">
              Η βιομηχανική εταιρεία γραφικών τεχνών και εκτυπώσεων ThessPrint 
              προσφέρει καινοτόμες λύσεις εκτύπωσης με γνώμονα την ποιότητα και 
              την ικανοποίηση των πελατών.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/ThessPrint" 
                className="bg-primary/10 p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Υπηρεσίες</h3>
            <ul className="space-y-3 text-secondary-foreground/80">
              <li><a href="#" className="hover:text-primary transition-colors">Τεχνοοικονομική Συμβουλευτική</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Γραφιστική Υποστήριξη</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Προεκτύπωση</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Εκτύπωση</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Βιβλιοδεσία</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Ειδικές Κατασκευές</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Επικοινωνία</h3>
            <div className="space-y-4 text-secondary-foreground/80">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Διεύθυνση</p>
                  <p className="text-sm">Θεσσαλονίκη, Ελλάδα</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium">Τηλέφωνο</p>
                  <p className="text-sm">+30 XXX XXX XXXX</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm">info@thessprint.gr</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-secondary-foreground/60">
            <p>© 2024 ThessPrint. Όλα τα δικαιώματα διατηρούνται.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">Όροι Χρήσης</a>
              <a href="#" className="hover:text-primary transition-colors">Πολιτική Απορρήτου</a>
              <a href="#" className="hover:text-primary transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;