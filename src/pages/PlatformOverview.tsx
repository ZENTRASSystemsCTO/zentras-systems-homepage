import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, FileText, Tablet, BarChart3 } from "lucide-react";
import plattformVisualisierung from "@/assets/plattform-visualisierung.webp";

const isoCertificateHref = "/iso-27001-zertifikat.pdf";

const platforms = [
  {
    title: "AngioAssist Suite",
    description: "Webbasierte Click-Through-Dokumentation für diverse interventionelle Eingriffe.",
    href: "/platform/documentation",
    iconPlaceholder: "AS",
    icon: FileText,
    features: ["Befundberichte", "OPS-Codes", "QS-Daten", "Registerdaten (z.B. DeGIR)"],
  },
  {
    title: "Tablets",
    description: "Vorkonfigurierte, sterile Tablets im abgesicherten Kiosk Modus, an Halterungen für den OP-Saal.",
    href: "/platform/hardware",
    iconPlaceholder: "HW",
    icon: Tablet,
    features: ["KIOSK Mode", "Automatische Updates", "Sterile Halterungen", "Bruch- & Diebstahlschutz"],
  },
  {
    title: "Analytics Platform",
    description: "Export, Schnittstellen und Reporting für BI-Integration. Daten auswerten, Register anbinden und Berichte erstellen.",
    href: "/platform/analytics",
    iconPlaceholder: "AP",
    icon: BarChart3,
    features: ["Datenexport", "Register-Anbindung", "Reporting-Dashboards", "BI-Integration"],
  },
];

const metrics = [
  { value: "3", label: "Pilotkliniken" },
  { value: "ISO 27001", label: "zertifiziert", href: isoCertificateHref },
  { value: "Minuten", label: "Setup-Zeit" },
  { value: "1x", label: "Dokumentieren" },
];

const industries = [
  "Interventionelle Radiologie",
  "Angiographie",
  "Kardiologie",
  "Neuroradiologie",
  "Gefäßchirurgie",
];

const PlatformOverview = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-background py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div>
              <AnimatedSection>
                <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
                  Das Angebot von Zentras Systems
                </span>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                  Drei Bausteine für Ihre
                  <span className="text-secondary"> Dokumentation</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                  Zentras Systems bietet eine Lösung für die digitale Dokumentation in der interventionellen Medizin. 
                  Dazu gehören OP-geeignete Tablets, unsere Click-Through-Dokumentationssoftware und Schnittstellen für weiterführende Analysen.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="flex flex-wrap gap-4">
                  <Link to="/demo">
                    <Button variant="default" size="lg" className="rounded-full">
                      Demo anfragen
                      <ArrowRight size={18} />
                    </Button>
                  </Link>
                  <Link to="/platform/documentation">
                    <Button variant="outline" size="lg" className="rounded-full">
                      AngioAssist Suite entdecken
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>
            </div>

            {/* Right: Platform Visualization */}
            <AnimatedSection delay={400}>
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src={plattformVisualisierung} 
                  alt="Zentras Plattform Visualisierung - Die drei Bausteine von Zentras Systems" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Metrics Row */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <AnimatedSection key={metric.label} delay={index * 100}>
                <div className="text-center">
                  {metric.href ? (
                    <a
                      href={metric.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-3xl lg:text-4xl font-bold text-accent hover:text-primary-foreground transition-colors mb-2"
                    >
                      {metric.value}
                    </a>
                  ) : (
                    <p className="text-3xl lg:text-4xl font-bold text-accent mb-2">{metric.value}</p>
                  )}
                  <p className="text-sm text-primary-foreground/70">{metric.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Unsere Produkte
            </h2>
            <p className="text-lg text-muted-foreground">
              Unsere Produkte sind aufeinander abgestimmt und flexibel kombinierbar. Die Analytics Platform setzt die Nutzung unserer Dokumentationssoftware voraus. Tablets liefern wir in der Regel im Paket mit unserer Software aus, auf Wunsch ist die Software auch für vorhandene Hardware verfügbar.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <AnimatedSection key={platform.title} delay={index * 75}>
                <Link
                  to={platform.href}
                  className="group block p-6 rounded-2xl bg-card border border-border hover:border-secondary transition-all duration-300 hover-lift h-full"
                >
                  {/* GRAPHIC PLACEHOLDER: platform-specific icon or pictogram for this SKU. */}
                  <div className="w-14 h-14 rounded-xl gradient-brand flex items-center justify-center mb-4">
                    <platform.icon size={28} className="text-primary-foreground" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                    {platform.title}
                  </h3>

                  <p className="text-muted-foreground mb-4">{platform.description}</p>

                  <ul className="space-y-2 mb-4">
                    {platform.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check size={14} className="text-accent-green" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 text-sm font-medium text-secondary group-hover:text-brand-cyan transition-colors">
                    Mehr erfahren
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Belt */}
      <section className="py-16 bg-brand-surface border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <h3 className="text-xl font-semibold text-foreground mb-2">Entwickelt für die interventionelle Medizin</h3>
            <p className="text-muted-foreground">Spezialisierte Lösungen für verschiedene Fachbereiche</p>
          </AnimatedSection>

          {/* GRAPHIC PLACEHOLDER: industry icons (SVG) with strokes in #15566f or #6fadc6. */}
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <AnimatedSection key={industry} delay={index * 50}>
                <div className="px-5 py-3 rounded-full bg-card border border-border hover:border-secondary transition-colors">
                  <span className="text-sm font-medium text-foreground">{industry}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Block */}
      <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
        {/* Decorative squares */}
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
              Lernen Sie Zentras Systems kennen und erfahren Sie, wie Sie Dokumentationsaufwand reduzieren 
              und Datenqualität verbessern können.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/demo">
                <Button variant="hero" size="xl" className="rounded-full">
                  Demo anfragen
                  <ArrowRight size={20} />
                </Button>
              </Link>
              <Link to="/platform/angioassist">
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

export default PlatformOverview;
