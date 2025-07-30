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
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    <span style={{
                    color: 'rgb(185,135,71)'
                  }}>Thess</span>Precision
                  </h3>
                  <p className="text-muted-foreground">Πιστή τήρηση προδιαγραφών</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    <span style={{
                    color: 'rgb(185,135,71)'
                  }}>Thess</span>Performance
                  </h3>
                  <p className="text-muted-foreground">Υψηλή ποιότητα και ταχύτητα ολοκλήρωσης</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <UserCheck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    <span style={{
                    color: 'rgb(185,135,71)'
                  }}>Thess</span>Professionalism
                  </h3>
                  <p className="text-muted-foreground">Συνέπεια στη συνεννόηση και στην τήρηση χρονοδιαγράμματος</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    <span style={{
                    color: 'rgb(185,135,71)'
                  }}>Thess</span>Partnership
                  </h3>
                  <p className="text-muted-foreground">Εστίαση στην άριστη συνεργασία με πελάτες και προμηθευτές</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="/lovable-uploads/96fe9746-516d-411f-9bfd-4cb5e970d822.png" alt="ThessPrint Printing Process - Yellow Ink Application" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;