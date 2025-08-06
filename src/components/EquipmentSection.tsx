import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const EquipmentSection = () => {
  const equipmentImages = [
    { id: 1, src: "/lovable-uploads/ec04d02a-edbc-4955-9659-f3c193dfd56c.png", alt: "Λεπτομέρεια εκτυπωτικής μηχανής σε λειτουργία" },
    { id: 2, src: "/lovable-uploads/c459e49d-a37e-4a3a-b3ce-e4b43db71c90.png", alt: "Εξοπλισμός επεξεργασίας χαρτιού με ρολά" },
    { id: 3, src: "/lovable-uploads/bfbbc7bd-22e7-4f54-abba-a0bbc99c53ef.png", alt: "Εκτυπωτική μηχανή MITSUBISHI με έτοιμα προϊόντα σε παλέτες" },
    { id: 4, src: "/lovable-uploads/b030c290-50f0-43fc-af99-4cfd28efb882.png", alt: "Πλήρης άποψη της μεγάλης εκτυπωτικής μηχανής MITSUBISHI" },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Σύγχρονος <span style={{ color: 'rgb(185,135,71)' }}>Εξοπλισμός</span> Υψηλής Ποιότητας
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            Ο εξοπλισμός offset εκτύπωσης της ThessPrint περιλαμβάνει μία 10χρωμη MITSUBISHI TANDEM DIAMOND 
            και μία 5χρωμη MITSUBISHI 3F-16000, επιτρέποντας υψηλή ταχύτητα, χαμηλό κόστος και ποιοτικά αποτελέσματα. 
            Για τη βιβλιοδεσία, διαμόρφωση και συσκευασία, χρησιμοποιούμε σύγχρονο εξοπλισμό όπως διπλωτικές μηχανές 
            MBO και STAHL, κοπτικές μονάδες POLAR, βιβλιοδετικές μηχανές MÜLLER MARTINI και BREHMER, καθώς και 
            σακουλοποιητική μηχανή IMPAL STOCK για προστασία και διανομή των εντύπων.
          </p>

          <div className="relative max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {equipmentImages.map((image) => (
                  <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2">
                      <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;