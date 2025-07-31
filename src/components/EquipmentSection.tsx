import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const EquipmentSection = () => {
  // Placeholder images for now
  const equipmentImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop", alt: "Εκτυπωτικός εξοπλισμός 1" },
    { id: 2, src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop", alt: "Εκτυπωτικός εξοπλισμός 2" },
    { id: 3, src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop", alt: "Εκτυπωτικός εξοπλισμός 3" },
    { id: 4, src: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=600&fit=crop", alt: "Εκτυπωτικός εξοπλισμός 4" },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Σύγχρονος Εξοπλισμός Υψηλής Ποιότητας
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