import { MapPin, Phone, Mail, Facebook } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
const Footer = () => {
  return <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img src="/Thessprint Logo.jpg" alt="ThessPrint Logo" className="h-12 w-auto mb-6" />
            <p className="text-secondary-foreground/80 mb-6 leading-relaxed max-w-md">
              Η βιομηχανική εταιρεία γραφικών τεχνών και εκτυπώσεων ThessPrint 
              προσφέρει καινοτόμες λύσεις εκτύπωσης με γνώμονα την ποιότητα και 
              την ικανοποίηση των πελατών.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/ThessPrint" className="bg-primary/10 p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5" />
              </a>
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
                  <p className="font-medium">Τηλέφωνο</p>
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
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="flex flex-col items-center mt-8 pt-8 border-t border-secondary-foreground/20">
          <h3 className="text-lg font-semibold mb-6">Πιστοποιήσεις</h3>
          
          {/* Mobile Carousel */}
          <div className="w-full max-w-xs mx-auto md:hidden">
            <Carousel className="w-full" opts={{ align: "center", loop: true }}>
              <CarouselContent>
                <CarouselItem>
                  <div className="flex justify-center">
                    <img src="/2026 03 08 ISO 9001-2015_page-0001.jpg" alt="ISO 9001:2015 Certification" className="h-32 w-auto" />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="flex justify-center">
                    <img src="/2026 04 15 ISO 14001-2015_page-0001.jpg" alt="ISO 14001:2015 Certification" className="h-32 w-auto" />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="flex justify-center">
                    <img src="/THESSPRINT S.A. FSC 2025-01_page-0001.jpg" alt="FSC Certification" className="h-32 w-auto" />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          {/* Desktop Horizontal Layout */}
          <div className="hidden md:flex items-center gap-6">
            <img src="/2026 03 08 ISO 9001-2015_page-0001.jpg" alt="ISO 9001:2015 Certification" className="h-24 w-auto" />
            <img src="/2026 04 15 ISO 14001-2015_page-0001.jpg" alt="ISO 14001:2015 Certification" className="h-24 w-auto" />
            <img src="/THESSPRINT S.A. FSC 2025-01_page-0001.jpg" alt="FSC Certification" className="h-24 w-auto" />
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-secondary-foreground/60">
            <p>© 2025 ThessPrint.</p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;