import { CheckCircle, Shield, Zap, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="bg-accent py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Τι κάνει τη <span className="text-primary">ThessPrint</span> μοναδική
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Με δεκαετίες εμπειρίας και συνεχή επένδυση στην τεχνολογία, 
              προσφέρουμε υπηρεσίες υψηλής ποιότητας που ξεπερνούν τις προσδοκίες.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Εμπειρία & Εξειδίκευση
                  </h3>
                  <p className="text-muted-foreground">
                    Πάνω από 20 χρόνια στον κλάδο των γραφικών τεχνών, με βαθιά γνώση και εξειδίκευση 
                    σε εκτυπώσεις μεγάλης κλίμακας offset.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Πιστοποιήσεις Ποιότητας
                  </h3>
                  <p className="text-muted-foreground">
                    Διαθέτουμε πιστοποιήσεις ISO 9001, ISO 14001 και FSC, διασφαλίζοντας 
                    την υψηλότερη ποιότητα και περιβαλλοντική ευθύνη.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Άμεση Εξυπηρέτηση
                  </h3>
                  <p className="text-muted-foreground">
                    Κατανοούμε τις ανάγκες των πελατών μας και παρέχουμε γρήγορες, 
                    αποτελεσματικές λύσεις χωρίς συμβιβασμούς στην ποιότητα.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Απόλυτη Ικανοποίηση
                  </h3>
                  <p className="text-muted-foreground">
                    Η ικανοποίηση των πελατών-συνεργατών μας είναι η προτεραιότητά μας. 
                    Δουλεύουμε στενά μαζί τους για να πετύχουμε το τέλειο αποτέλεσμα.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">20+</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Χρόνια Εμπειρίας</h3>
                <p className="text-muted-foreground">στις γραφικές τέχνες</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-foreground">Ποιότητα Εκτύπωσης</span>
                  <span className="text-sm text-primary font-semibold">99.8%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '99.8%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-foreground">Ικανοποίηση Πελατών</span>
                  <span className="text-sm text-primary font-semibold">98%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '98%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-foreground">Έγκαιρη Παράδοση</span>
                  <span className="text-sm text-primary font-semibold">95%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;