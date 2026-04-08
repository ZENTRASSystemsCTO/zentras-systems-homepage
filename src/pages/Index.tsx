import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PlatformCard } from "@/components/PlatformCard";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { PageLoader } from "@/components/PageLoader";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, FileText, BarChart3, Database, ChevronDown } from "lucide-react";

// Hero background image (OR scene with tablet)
import heroBackground from "@/assets/HERO_Graphic_Revised.webp";

const platforms = [
  {
    title: "AngioAssist Suite",
    description: "Webbasierte Click-Through-Dokumentation für diverse interventionelle Eingriffe.",
    href: "/platform/documentation",
    iconPlaceholder: "AS",
  },
  {
    title: "Tablets",
    description: "Vorkonfigurierte, sterile Tablets im abgesicherten Kiosk Modus, an Halterungen für den OP-Saal.",
    href: "/platform/hardware",
    iconPlaceholder: "HW",
  },
  {
    title: "Analytics Platform",
    description: "Export, Schnittstellen und Reporting für BI-Integration. Daten auswerten, Register anbinden und Berichte erstellen.",
    href: "/platform/analytics",
    iconPlaceholder: "AP",
  },
];

const valueProps = [
  { label: "Weniger Doppelarbeit", icon: FileText },
  { label: "Bessere Datenqualität", icon: BarChart3 },
  { label: "Schneller Rollout", icon: Zap },
  { label: "ISO-27001 orientiert", icon: Shield },
];

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const valueSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Preload the hero image
    const img = new Image();
    img.src = heroBackground;
    img.onload = () => setIsLoading(false);
    img.onerror = () => setIsLoading(false);
    
    // Fallback timeout in case image takes too long
    const timeout = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  // Hide scroll indicator on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNextSection = () => {
    valueSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      {/* <PageLoader isLoading={isLoading} /> */}
      
      {/* Hero Section - Apple Style Minimalist */}
      <section className="relative overflow-hidden pt-4 lg:pt-8 pb-10 lg:pb-16 bg-gradient-to-b from-brand-surface to-background flex flex-col items-center text-center">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 flex flex-col items-center">
          
          <AnimatedSection delay={100} className="w-full max-w-[800px] xl:max-w-4xl mx-auto flex justify-center px-4 relative z-0">
            {/* The actual product mockup shown correctly tightly in the hero, now above text, no shadow, smaller max-width */}
            <img 
              src={heroBackground} 
              alt="Zentras Tablet AngioAssist Mockup" 
              className="w-full h-auto max-h-[55vh] lg:max-h-[60vh] object-contain object-top transition-transform duration-1000 lg:hover:scale-[1.02]" 
            />
          </AnimatedSection>

          {/* Pull text up with negative margin to lie directly over the white fade-out */}
          <div className="max-w-4xl relative z-20 -mt-16 sm:-mt-24 md:-mt-32 lg:-mt-40 xl:-mt-48">

            <AnimatedSection delay={300}>
              <h1 
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-foreground tracking-tight leading-tight mb-6"
              >
                Dokumentation.<br/>Einmal. Richtig.
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <p 
                className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto font-medium"
              >
                Dokumentieren Sie Ihre Eingriffe in Zukunft einmalig, in Echtzeit, direkt am Point-of-Care. 
              </p>
            </AnimatedSection>

            <AnimatedSection delay={500}>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/demo">
                  <Button variant="hero" size="lg" className="rounded-full px-8">
                    Demo anfragen
                  </Button>
                </Link>
                <Link to="/platform">
                  <Button variant="heroOutline" size="lg" className="rounded-full px-8">
                    Plattform entdecken
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Intro Grid / Value Props */}
      <section ref={valueSectionRef} className="pt-10 lg:pt-16 pb-20 lg:pb-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Dokumentation neu gedacht
            </h2>
            <p className="text-lg text-muted-foreground">
              Einmalige Erfassung, die alle Anforderungen erfüllt. QS, Register, Studien und Evaluationen aus derselben Datengrundlage.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((prop, index) => (
              <AnimatedSection key={prop.label} delay={index * 100}>
                <div className="p-8 rounded-3xl bg-brand-surface transition-all duration-500 hover:scale-[1.02] flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-background flex items-center justify-center mb-6 shadow-sm shadow-black/5">
                    <prop.icon size={26} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{prop.label}</h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Highlight Section with Sticky Storytelling */}
      <section className="py-24 lg:py-40 bg-brand-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left: Sticky explanation */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <AnimatedSection>
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
                    Das Angebot von Zentras Systems
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    Drei Bausteine,
                    <br />
                    eine Lösung
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Unsere Lösung umfasst die Hardware, die Dokumentationsanwendungen und eine Business Intelligence Anbindung.
                  </p>
                  <Link to="/platform">
                    <Button variant="default" size="lg" className="rounded-full">
                      Alle Produkte ansehen
                      <ArrowRight size={18} />
                    </Button>
                  </Link>
                </AnimatedSection>
              </div>
            </div>

            {/* Right: Scrollable platform cards */}
            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-6">
                {platforms.map((platform, index) => (
                  <AnimatedSection key={platform.title} delay={index * 100} className="h-full">
                    <PlatformCard
                      {...platform}
                    />
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Gallery */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Was Sie dokumentieren können
            </h2>
            <p className="text-lg text-muted-foreground">
              Strukturierte Erfassung aller relevanten Daten während des Eingriffs.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { icon: FileText, title: "Befundberichte", desc: "Strukturierte medizinische Dokumentation nach etablierten Vorlagen und Standards." },
              { icon: Database, title: "OPS-Codes & QS-Daten", desc: "Automatische Kodierung und Qualitätssicherung in einem Schritt." },
              { icon: BarChart3, title: "Registerdaten", desc: "Direkte Anbindung an Register wie DeGIR, ohne Mehraufwand." },
            ].map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 100} className="h-full">
                <div className="group p-8 rounded-3xl bg-brand-surface hover:scale-[1.02] transition-all duration-500 h-full flex flex-col">
                  {/* GRAPHIC PLACEHOLDER: small abstract icon representing this feature */}
                  <div className="w-14 h-14 rounded-2xl bg-background flex items-center justify-center mb-6 shadow-sm shadow-black/5">
                    <feature.icon size={26} className="text-primary group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground flex-1">{feature.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-40 bg-brand-surface-tinted">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Das sagen unsere Nutzer
            </h2>
            <p className="text-lg text-muted-foreground">
              Stimmen aus der klinischen Praxis
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <TestimonialCarousel />
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA Block */}
      <section className="py-24 lg:py-40 bg-brand-dark-teal text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Bereit für effizientere Dokumentation?
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8">
              Lernen Sie Zentras Systems kennen und erfahren Sie, wie Sie Dokumentationsaufwand reduzieren 
              und Datenqualität verbessern können.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/demo">
                <Button variant="hero" size="xl" className="rounded-full bg-background text-foreground hover:bg-background/90 hover:scale-105">
                  Demo anfragen
                </Button>
              </Link>
              <Link to="/platform">
                <Button variant="heroOutline" size="xl" className="rounded-full text-background border-background/20 hover:bg-background/10 hover:border-background/30 hover:scale-105">
                  Mehr erfahren
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
