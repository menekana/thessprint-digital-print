import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";
import corporateCatalogs from "@/assets/portfolio-corporate-catalogs.webp";
import booksMagazines from "@/assets/portfolio-books-magazines.webp";
import marketingMaterials from "@/assets/portfolio-marketing-materials.webp";
import packaging from "@/assets/portfolio-packaging.webp";
import businessStationery from "@/assets/portfolio-business-stationery.webp";
import customProjects from "@/assets/portfolio-custom-projects.webp";
const PortfolioSection = () => {
  return <section className="bg-accent py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Οραματιστείτε το <span className="text-primary">Αποτέλεσμα</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Δείτε παραδείγματα του τι μπορούμε να δημιουργήσουμε για εσάς - 
            από επαγγελματικά έντυπα έως εταιρικό υλικό υψηλής ποιότητας.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Portfolio Placeholders */}
          <div className="group relative bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-[4/3] relative overflow-hidden">
              <img 
                src={corporateCatalogs} 
                alt="Εταιρικοί Κατάλογοι"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Εταιρικοί Κατάλογοι</h3>
              <p className="text-muted-foreground text-sm">Υψηλής ποιότητας εκτυπώσεις για εταιρικούς καταλόγους προϊόντων</p>
            </div>
          </div>

          <div className="group relative bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-[4/3] relative overflow-hidden">
              <img 
                src={booksMagazines} 
                alt="Εκδοτικά Έργα"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Εκδοτικά Έργα</h3>
              <p className="text-muted-foreground text-sm">Εκτύπωση και βιβλιοδεσία βιβλίων και περιοδικών</p>
            </div>
          </div>

          <div className="group relative bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-[4/3] relative overflow-hidden">
              <img 
                src={marketingMaterials} 
                alt="Διαφημιστικό Υλικό"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Διαφημιστικό Υλικό</h3>
              <p className="text-muted-foreground text-sm">Brochures, flyers και διαφημιστικά έντυπα</p>
            </div>
          </div>

          <div className="group relative bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-[4/3] relative overflow-hidden">
              <img 
                src={packaging} 
                alt="Εκτυπώσεις Συσκευασιών"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Εκτυπώσεις Συσκευασιών</h3>
              <p className="text-muted-foreground text-sm">Ειδικές κατασκευές συσκευασιών προϊόντων</p>
            </div>
          </div>

          <div className="group relative bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-[4/3] relative overflow-hidden">
              <img 
                src={businessStationery} 
                alt="Επαγγελματικό Υλικό"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Επαγγελματικό Υλικό</h3>
              <p className="text-muted-foreground text-sm">Επαγγελματικές κάρτες, φακέλους και έντυπα</p>
            </div>
          </div>

          <div className="group relative bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-[4/3] relative overflow-hidden">
              <img 
                src={customProjects} 
                alt="Προσαρμοσμένα Έργα"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Προσαρμοσμένα Έργα</h3>
              <p className="text-muted-foreground text-sm">Μοναδικές λύσεις για ειδικές απαιτήσεις</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          
        </div>
      </div>
    </section>;
};
export default PortfolioSection;