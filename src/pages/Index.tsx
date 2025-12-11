import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PlatformCard } from "@/components/PlatformCard";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, FileText, BarChart3, Database } from "lucide-react";

// Hero background image (OR scene with tablet)
import heroBackground from "@/assets/hero-background.png";

const platforms = [
  {
    title: "Documentation Suite",
    description: "Webbasierte Click-Through-Dokumentation für diverse interventionelle Eingriffe.",
    href: "/platform/documentation",
    iconPlaceholder: "DS",
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
  return (
    <Layout>
      {/* Hero Section - Full background image with text overlay */}
      <section className="relative overflow-hidden min-h-[70vh] lg:min-h-[85vh] -mt-16 lg:-mt-20 pt-16 lg:pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroBackground} 
            alt="ZENTRAS Tablet im OP-Saal" 
            className="w-full h-full object-cover object-center"
          />
          {/* Dark overlay for text readability - stronger on left */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-primary/30" />
        </div>

        {/* Text Content - Left aligned */}
        <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="max-w-xl lg:max-w-lg xl:max-w-xl">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse-soft" />
                <span className="text-sm text-primary-foreground/90">Pilotprojekte aktiv</span>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                Dokumentation.
                <span className="text-accent"> Einmal. Richtig.</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-base lg:text-lg text-primary-foreground/80 mb-8">
                Dokumentieren Sie Ihre Eingriffe in Zukunft einmalig, in Echtzeit, direkt am Point-of-Care. 
                Verzichten Sie auf redundante, unpräzise nachgereichte Dokumentation.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="flex flex-wrap gap-4">
                <Link to="/demo">
                  <Button variant="hero" size="lg" className="rounded-full">
                    Demo anfragen
                    <ArrowRight size={18} />
                  </Button>
                </Link>
                <Link to="/platform">
                  <Button variant="heroOutline" size="lg" className="rounded-full">
                    Plattform entdecken
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
        
        {/* Bottom fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-20" />
      </section>


      {/* Intro Grid / Value Props */}
      <section className="py-20 lg:py-28 bg-background">
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
                <div className="p-6 rounded-2xl bg-card border border-border hover:border-secondary transition-all duration-300 hover-lift">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <prop.icon size={24} className="text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground">{prop.label}</h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Highlight Section with Sticky Storytelling */}
      <section className="py-20 lg:py-28 bg-brand-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left: Sticky explanation */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <AnimatedSection>
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
                    Die ZENTRAS Suite
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
                  <AnimatedSection key={platform.title} delay={index * 100}>
                    <PlatformCard
                      {...platform}
                      variant={index === 0 ? "featured" : "default"}
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
              { icon: FileText, title: "Befundberichte", desc: "Strukturierte medizinische Dokumentation direkt am Point-of-Care." },
              { icon: Database, title: "OPS-Codes & QS-Daten", desc: "Automatische Kodierung und Qualitätssicherung in einem Schritt." },
              { icon: BarChart3, title: "Registerdaten", desc: "Direkte Anbindung an Register wie DeGIR, ohne Mehraufwand." },
            ].map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 100}>
                <div className="group p-8 rounded-2xl bg-card border border-border hover:border-accent transition-all duration-300 hover-lift">
                  {/* GRAPHIC PLACEHOLDER: small abstract icon representing this feature (SVG in zentras colors). */}
                  <div className="w-14 h-14 rounded-xl gradient-brand flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow">
                    <feature.icon size={28} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-brand-surface-tinted">
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
      <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
        {/* GRAPHIC PLACEHOLDER: abstract background illustration or pattern using the zentras squares motif. */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 rounded-2xl bg-accent rotate-12" />
          <div className="absolute bottom-20 right-20 w-40 h-40 rounded-2xl bg-secondary -rotate-12" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-3xl bg-accent-green rotate-45" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Bereit für effizientere Dokumentation?
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8">
              Lernen Sie ZENTRAS Systems kennen und erfahren Sie, wie Sie Dokumentationsaufwand reduzieren 
              und Datenqualität verbessern können.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/demo">
                <Button variant="hero" size="xl" className="rounded-full">
                  Demo anfragen
                  <ArrowRight size={20} />
                </Button>
              </Link>
              <Link to="/platform">
                <Button variant="heroOutline" size="xl" className="rounded-full text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10">
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
