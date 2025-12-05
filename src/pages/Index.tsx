import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PlaceholderGraphic } from "@/components/PlaceholderGraphic";
import { PlatformCard } from "@/components/PlatformCard";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { Button } from "@/components/ui/button";
import { Check, Dna, ArrowRight, Shield, Zap, FileText, BarChart3, Tablet, Database } from "lucide-react";

const platforms = [
  {
    title: "Dokutool Suite",
    description: "Webbasierte Click-Through-Dokumentation für interventionelle Eingriffe. Befundberichte, OPS-Codes, QS-Daten und Registerdaten in einem System.",
    href: "/platform/dokutool",
    iconPlaceholder: "DS",
  },
  {
    title: "Hardware",
    description: "Vorkonfigurierte, desinfizierbare Tablets für den OP-Saal – bruch- und diebstahlgesichert mit KIOSK-Mode.",
    href: "/platform/hardware",
    iconPlaceholder: "HW",
  },
  {
    title: "Analytics Platform",
    description: "Export, Schnittstellen und Reporting für BI-Integration. Daten auswerten, Register anbinden, Berichte erstellen.",
    href: "/platform/analytics",
    iconPlaceholder: "AP",
  },
];

const teamMembers = [
  { name: "PD Dr. med. Michael Schönfeld", role: "Founder", bio: "" },
  { name: "PD Dr. med. Kai Laukamp", role: "Founder", bio: "" },
  { name: "Dr. med. Elias Ulrich", role: "", bio: "" },
  { name: "Caspar Münzinger", role: "", bio: "" },
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
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="relative z-10">
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                  <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse-soft" />
                  <span className="text-sm text-primary-foreground/80">Pilotprojekte aktiv</span>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                  Dokumentation.
                  <span className="text-accent"> Einmal. Richtig.</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <p className="text-lg text-primary-foreground/70 mb-8 max-w-xl">
                  Statt Befunde, OPS-Codes, QS-Berichte und Registerdaten mehrfach zu erfassen, 
                  ermöglicht ZENTRAS Systems eine strukturierte Echtzeit-Dokumentation während des Eingriffs – 
                  direkt am Point-of-Care.
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

            {/* Right: Hero Visual Placeholder */}
            <AnimatedSection delay={400} className="relative">
              {/* GRAPHIC PLACEHOLDER: looped DNA helix animation (Lottie or MP4 background loop), subtle, tech/medical vibe matching zentras colors. */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-brand-light-teal/10 to-accent-green/10 rounded-3xl blur-3xl" />
                <div className="relative gradient-card rounded-3xl p-8 lg:p-12 min-h-[400px] flex flex-col items-center justify-center">
                  <Dna size={80} className="text-accent mb-6 animate-float" />
                  <div className="text-center">
                    <p className="text-primary-foreground font-medium mb-2">Animation Platzhalter</p>
                    <p className="text-primary-foreground/60 text-sm max-w-xs">
                      Medizinische Animation (Lottie JSON oder MP4) in ZENTRAS Markenfarben
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Backed By Section */}
      <section className="py-12 lg:py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <p className="text-sm text-muted-foreground text-center mb-8">Bereits im Einsatz bei</p>
          </AnimatedSection>
          
          {/* GRAPHIC PLACEHOLDER: Uniklinik Köln und Uniklinik Hagen Logos (SVG oder PNG). */}
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            <AnimatedSection delay={50}>
              <div className="w-48 h-16 rounded-lg border border-border bg-muted/30 flex items-center justify-center">
                <span className="text-sm text-muted-foreground">Uniklinik Köln</span>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="w-48 h-16 rounded-lg border border-border bg-muted/30 flex items-center justify-center">
                <span className="text-sm text-muted-foreground">Uniklinik Hagen</span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Intro Grid / Value Props */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Dokumentation neu gedacht
            </h2>
            <p className="text-lg text-muted-foreground">
              Eine Erfassung – alle Anforderungen erfüllt. QS, Register, Studien und Evaluationen aus derselben Datengrundlage.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((prop, index) => (
              <AnimatedSection key={prop.label} delay={index * 100}>
                <div className="p-6 rounded-2xl bg-card border border-border hover:border-secondary transition-all duration-300 hover-lift">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <prop.icon size={24} className="text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{prop.label}</h3>
                  <div className="flex items-center gap-2">
                    <Check size={16} className="text-accent-green" />
                    <span className="text-sm text-muted-foreground">Verifiziert</span>
                  </div>
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
                    Derselbe Eingriff wurde bisher 5-6x in verschiedenen Systemen dokumentiert. 
                    ZENTRAS verlagert die Dokumentation dorthin, wo sie fachlich ohnehin stattfindet – 
                    direkt in den Eingriff.
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
              { icon: BarChart3, title: "Registerdaten", desc: "Direkte Anbindung an Register wie DeGIR – ohne Mehraufwand." },
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

      {/* Team Preview */}
      <section className="py-20 lg:py-28 bg-brand-surface-tinted">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Das Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                Kliniker und Technologen, die die Realität aus dem OP kennen und Dokumentation neu denken.
              </p>
            </div>
            <Link to="/team">
              <Button variant="outline" className="rounded-full">
                Ganzes Team ansehen
                <ArrowRight size={18} />
              </Button>
            </Link>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 100}>
                {/* GRAPHIC PLACEHOLDER: team member headshot (portrait photo), color graded to harmonize with zentras palette. */}
                <TeamMemberCard {...member} />
              </AnimatedSection>
            ))}
          </div>
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
