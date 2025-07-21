import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CallToActionSection = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-dark py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Είστε έτοιμοι να ξεκινήσετε το επόμενο έργο σας;
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-12 leading-relaxed">
            Επικοινωνήστε μαζί μας σήμερα για να συζητήσουμε τις ανάγκες σας 
            και να σας προσφέρουμε την καλύτερη λύση εκτύπωσης.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Phone className="mr-2 h-5 w-5" />
              Καλέστε μας τώρα
            </Button>
            <Button size="lg" variant="outline" className="border-background bg-background text-foreground hover:bg-background/90">
              <Mail className="mr-2 h-5 w-5" />
              Στείλτε μήνυμα
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-primary-foreground/90">
            <div className="text-center">
              <h3 className="font-semibold mb-2">Γρήγορη Ανταπόκριση</h3>
              <p className="text-sm">Απαντάμε σε όλες τις επικοινωνίες εντός 24 ωρών</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Δωρεάν Προσφορά</h3>
              <p className="text-sm">Λάβετε λεπτομερή προσφορά χωρίς καμία υποχρέωση</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Εξειδικευμένη Συμβουλή</h3>
              <p className="text-sm">Συμβουλευτική για την καλύτερη λύση εκτύπωσης</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;