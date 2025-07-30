import { Award, Zap, UserCheck, Users } from "lucide-react";
const AboutSection = () => {
  return <section id="about" className="bg-accent py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Γιατί <span className="text-primary">ThessPrint</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">Με συνεχή επένδυση στην τεχνολογία, προσφέρουμε υπηρεσίες υψηλής ποιότητας που ξεπερνούν τις προσδοκίες.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">ThessPrecision</h3>
                  <p className="text-muted-foreground">
                    Ποιότητα, πιστή τήρηση προδιαγραφών
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    ThessPerformance
                  </h3>
                  <p className="text-muted-foreground">
                    Σταθερά υψηλή απόδοση σε ταχύτητα και ποιότητα
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <UserCheck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    ThessProfessionalism
                  </h3>
                  <p className="text-muted-foreground">
                    Επαγγελματισμός στη συμπεριφορά και στην εξυπηρέτηση
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    ThessPartnership
                  </h3>
                  <p className="text-muted-foreground">
                    Εστίαση στη συνεργασία με πελάτες και προμηθευτές
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/c459e49d-a37e-4a3a-b3ce-e4b43db71c90.png" 
                alt="ThessPrint Statistics - 20+ Years Experience" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;