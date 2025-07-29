import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Palette, 
  FileText, 
  Printer, 
  BookOpen, 
  Wrench, 
  Truck,
  ArrowRight
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Users,
      title: "Τεχνοοικονομική Συμβουλευτική",
      description: "Εξειδικευμένη συμβουλευτική για την βελτιστοποίηση των εκτυπωτικών σας αναγκών"
    },
    {
      icon: Palette,
      title: "Γραφιστική Υποστήριξη",
      description: "Δημιουργικές λύσεις σχεδιασμού που αναδεικνύουν την ταυτότητα της επιχείρησής σας"
    },
    {
      icon: FileText,
      title: "Προεκτύπωση",
      description: "Προηγμένη προετοιμασία αρχείων για άψογο αποτέλεσμα στην τελική εκτύπωση"
    },
    {
      icon: Printer,
      title: "Εκτύπωση",
      description: "Υψηλής ποιότητας εκτυπώσεις offset για όλες τις επαγγελματικές σας ανάγκες"
    },
    {
      icon: BookOpen,
      title: "Βιβλιοδεσία & Υπηρεσίες Προστιθέμενης Αξίας",
      description: "Ολοκληρωμένες λύσεις βιβλιοδεσίας και φινιρίσματος για εντυπωσιακά αποτελέσματα"
    },
    {
      icon: Wrench,
      title: "Ειδικές Κατασκευές",
      description: "Προσαρμοσμένες λύσεις εκτύπωσης για μοναδικές και ειδικές απαιτήσεις"
    },
    {
      icon: Truck,
      title: "Διακίνηση & Logistics",
      description: "Αξιόπιστη διακίνηση και παράδοση των προϊόντων σας σε όλη την Ελλάδα και την Ευρώπη"
    }
  ];

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Οι <span className="text-primary">Υπηρεσίες</span> μας
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Από την αρχική ιδέα έως την τελική παράδοση, σας συνοδεύουμε σε κάθε βήμα 
            της εκτυπωτικής διαδικασίας με επαγγελματισμό και προσοχή στη λεπτομέρεια.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground">
            Δείτε Όλες τις Υπηρεσίες
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;