import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

import michaelSchoenfeld from "@/assets/michael-schoenfeld.jpg";
import kaiLaukamp from "@/assets/kai-laukamp-gateway.jpg";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  institution?: string;
  image: string;
  imagePosition?: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Mit den Tools aus der AngioAssist Suite können wir unsere interventionellen Eingriffe bereits während der Prozedur zügig dokumentieren. Die Datenqualität hat sich deutlich verbessert, weil wir nicht mehr auf verzögerte Dokumentation aus der Erinnerung angewiesen sind.",
    name: "PD Dr. med. Michael Schönfeld",
    title: "Facharzt für Radiologie",
    institution: "Uniklinik Köln",
    image: michaelSchoenfeld,
  },
  {
    quote: "AngioAssist gibt mir Sicherheit bei komplexen Eingriffen. Die strukturierte Führung vereinfacht die Einarbeitung und Ausbildung neuer Mitarbeiter und unterstützt eine gleichbleibend hohe Qualität. Durch die automatische Berichterstellung lässt sich die notwendige qualitätssichernde Dokumentation ohne relevante Zusatzarbeit in den Workflow integrieren. Das ist für mich ein entscheidender Vorteil.",
    name: "PD Dr. med. Kai Laukamp",
    title: "Facharzt für Radiologie und Neuroradiologie",
    image: kaiLaukamp,
    imagePosition: "center 25%",
  },
];

export const TestimonialCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
              <div className="bg-card border border-border rounded-2xl p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
                  {/* Image */}
                  <div className="shrink-0">
                    <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-2xl overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: testimonial.imagePosition }}
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <Quote className="w-10 h-10 text-accent/30 mb-4 mx-auto lg:mx-0" />
                    <blockquote className="text-lg lg:text-xl text-foreground mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-muted-foreground">{testimonial.title}</p>
                      {testimonial.institution && (
                        <p className="text-secondary font-medium">{testimonial.institution}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={scrollPrev}
          className="p-2 rounded-full bg-secondary/10 hover:bg-secondary/20 transition-colors disabled:opacity-50"
          aria-label="Vorheriges Testimonial"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
        
        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                selectedIndex === index 
                  ? "bg-accent w-6" 
                  : "bg-secondary/30 hover:bg-secondary/50"
              )}
              aria-label={`Gehe zu Testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={scrollNext}
          className="p-2 rounded-full bg-secondary/10 hover:bg-secondary/20 transition-colors disabled:opacity-50"
          aria-label="Nächstes Testimonial"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>
      </div>
    </div>
  );
};
