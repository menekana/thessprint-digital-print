import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const EquipmentSection = () => {
  const equipmentImages = [
    { id: 1, src: "/new_10χρωμη MITSUBISHI TANDEM - gold.jpg", alt: "10χρωμη MITSUBISHI TANDEM DIAMOND εκτυπωτική μηχανή" },
    { id: 2, src: "/new_5χρωμη MITSUBISHI - gold.jpg", alt: "5χρωμη MITSUBISHI 3F-16000 εκτυπωτική μηχανή" },
    { id: 3, src: "/new_Εισαγωγή σακούλας - gold.jpg", alt: "Σακουλοποιητική μηχανή IMPAL STOCK για προστασία εντύπων" },
    { id: 4, src: "/new_Καρφίτσα - gold.jpg", alt: "Εξοπλισμός βιβλιοδεσίας και διαμόρφωσης" },
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