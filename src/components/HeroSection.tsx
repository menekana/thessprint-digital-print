import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Clock } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
const HeroSection = () => {
  const [api, setApi] = useState<any>();
  const heroImages = [{
    desktop: "/lovable-uploads/8a401504-2366-43a8-97e3-70e66b83848c.png",
    mobile: "/lovable-uploads/ec04d02a-edbc-4955-9659-f3c193dfd56c.png",
    alt: "ThessPrint Facility Main View"
  }, {
    desktop: "/lovable-uploads/b030c290-50f0-43fc-af99-4cfd28efb882.png",
    mobile: "/lovable-uploads/bfbbc7bd-22e7-4f54-abba-a0bbc99c53ef.png",
    alt: "ThessPrint Production Floor"
  }];
  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [api]);
  return <section className="bg-background py-8 lg:py-16">
      <div className="container mx-auto px-6">
        {/* Hero Images Carousel */}
        <div className="mb-12 lg:mb-16 relative">
          <Carousel setApi={setApi} className="w-full" opts={{
          align: "start",
          loop: true
        }}>
            <CarouselContent>
              {heroImages.map((image, index) => <CarouselItem key={index}>
                  {/* Mobile Image */}
                  <img src={image.mobile} alt={image.alt} className="w-full h-auto rounded-lg shadow-lg object-cover object-top max-h-[70vh] block md:hidden" />
                  {/* Desktop Image */}
                  <img src={image.desktop} alt={image.alt} className="w-full h-auto rounded-lg shadow-lg object-cover object-top max-h-[70vh] hidden md:block" />
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
            Η βιομηχανική εταιρεία γραφικών τεχνών και εκτυπώσεων{" "}
            <span className="text-amber-600">thessprint.</span>
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
              <p className="text-sm text-muted-foreground">Με ανθρώπινο δυναμικό που μετρά πολλές δεκαετίες στον κλάδο των γραφικών τεχνών</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-accent p-4 rounded-full mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Πιστοποιήσεις</h3>
              <p className="text-sm text-muted-foreground">Ποιότητας ISO 9001:2015, Περιβάλλοντος ISO 14001:2004, Προέλευσηες ψαρτιού  FSC/CoC πιστοποιημένο</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-accent p-4 rounded-full mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Ποικίλες Εφαρμογές</h3>
              <p className="text-sm text-muted-foreground">Εκτυπώσεις offset για κάθε ανάγκη</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;