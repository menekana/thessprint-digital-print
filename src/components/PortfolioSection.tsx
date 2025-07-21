import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";

const PortfolioSection = () => {
  return (
    <section className="bg-accent py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Τα <span className="text-primary">Έργα</span> μας
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ανακαλύψτε ορισμένα από τα επιτυχημένα έργα που έχουμε υλοποιήσει 
            για τους πελάτες μας, με έμφαση στην ποιότητα και την προσοχή στη λεπτομέρεια.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Portfolio Placeholders */}
          <div className="group relative bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Εκτυπώσεις Καταλόγων</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Εταιρικοί Κατάλογοι</h3>
              <p className="text-muted-foreground text-sm">Υψηλής ποιότητας εκτυπώσεις για εταιρικούς καταλόγους προϊόντων</p>
            </div>
          </div>

          <div className="group relative bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Βιβλία & Περιοδικά</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Εκδοτικά Έργα</h3>
              <p className="text-muted-foreground text-sm">Εκτύπωση και βιβλιοδεσία βιβλίων και περιοδικών</p>
            </div>
          </div>

          <div className="group relative bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Διαφημιστικά Έντυπα</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Διαφημιστικό Υλικό</h3>
              <p className="text-muted-foreground text-sm">Brochures, flyers και διαφημιστικά έντυπα</p>
            </div>
          </div>

          <div className="group relative bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Συσκευασίες</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Εκτυπώσεις Συσκευασιών</h3>
              <p className="text-muted-foreground text-sm">Ειδικές κατασκευές συσκευασιών προϊόντων</p>
            </div>
          </div>

          <div className="group relative bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Εταιρικά Έντυπα</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Επαγγελματικό Υλικό</h3>
              <p className="text-muted-foreground text-sm">Επαγγελματικές κάρτες, φακέλους και έντυπα</p>
            </div>
          </div>

          <div className="group relative bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Ειδικές Κατασκευές</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Προσαρμοσμένα Έργα</h3>
              <p className="text-muted-foreground text-sm">Μοναδικές λύσεις για ειδικές απαιτήσεις</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Δείτε Περισσότερα Έργα
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;