import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Clock } from "lucide-react";
const HeroSection = () => {
  return <section className="bg-background py-8 lg:py-16">
      <div className="container mx-auto px-6">
        {/* Hero Images - Responsive */}
        <div className="mb-12 lg:mb-16">
          {/* Mobile Image */}
          <img 
            src="/lovable-uploads/ec04d02a-edbc-4955-9659-f3c193dfd56c.png" 
            alt="ThessPrint Facility" 
            className="w-full h-auto rounded-lg shadow-lg object-cover max-h-[60vh] block md:hidden"
          />
          {/* Desktop Image */}
          <img 
            src="/lovable-uploads/8a401504-2366-43a8-97e3-70e66b83848c.png" 
            alt="ThessPrint Facility" 
            className="w-full h-auto rounded-lg shadow-lg object-cover max-h-[60vh] hidden md:block"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
            Η βιομηχανική εταιρεία γραφικών τεχνών και εκτυπώσεων{" "}
            <span className="text-primary">«ThessPrint»</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">προσφέρει ποιοτικές, καινοτόμες και αποτελεσματικές λύσεις παραγωγής εντύπων, με γνώμονα την απόλυτη ικανοποίηση των πελατών-συνεργατών της.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground">
              <a href="#services" className="scroll-smooth">
                Εξερευνήστε τις Υπηρεσίες μας
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <a href="mailto:info@thessprint.gr">
                Επικοινωνήστε μαζί μας
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="bg-accent p-4 rounded-full mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Δεκαετίες Εμπειρίας</h3>
              <p className="text-sm text-muted-foreground">Με ανθρώπινο δυναμικό που μετρά από 20 χρόνια στον κλάδο των γραφικών τεχνών</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-accent p-4 rounded-full mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Πιστοποιήσεις Ποιότητας</h3>
              <p className="text-sm text-muted-foreground">ISO 9001:2015, ISO 14001:2004, FSC/CoC πιστοποιημένο</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-accent p-4 rounded-full mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Μεγάλης Κλίμακας</h3>
              <p className="text-sm text-muted-foreground">Εκτυπώσεις offset για κάθε ανάγκη</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;