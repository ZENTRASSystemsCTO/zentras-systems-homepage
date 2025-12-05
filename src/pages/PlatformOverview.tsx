import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PlaceholderGraphic } from "@/components/PlaceholderGraphic";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Layers, FileText, Tablet, BarChart3 } from "lucide-react";

const platforms = [
  {
    title: "Dokutool Suite",
    description: "Webbasierte Click-Through-Dokumentation für interventionelle Eingriffe. Vorkonfigurierte Module für die häufigsten Interventionen.",
    href: "/platform/dokutool",
    iconPlaceholder: "DS",
    icon: FileText,
    features: ["Befundberichte", "OPS-Codes", "QS-Daten", "Registerdaten (z.B. DeGIR)", "Produktevaluationen"],
  },
  {
    title: "Hardware",
    description: "Vorkonfigurierte, desinfizierbare Tablets als Standard-Device im OP / Angiographie-Saal.",
    href: "/platform/hardware",
    iconPlaceholder: "HW",
    icon: Tablet,
    features: ["KIOSK Mode", "Automatische Updates", "Sterile Halterungen", "Bruch- & Diebstahlschutz"],
  },
  {
    title: "Analytics Platform",
    description: "Export, Schnittstellen und Reporting für BI-Integration und Datenauswertung.",
    href: "/platform/analytics",
    iconPlaceholder: "AP",
    icon: BarChart3,
    features: ["Datenexport", "Register-Anbindung", "Reporting-Dashboards", "BI-Integration"],
  },
];

const metrics = [
  { value: "2", label: "Pilotkliniken" },
  { value: "ISO 27001", label: "orientiert" },
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
                  Die ZENTRAS Suite
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
                  ZENTRAS Systems bietet eine modulare Suite für die digitale Dokumentation 
                  in der interventionellen Medizin – direkt am Point-of-Care.
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
                  <Link to="/platform/dokutool">
                    <Button variant="outline" size="lg" className="rounded-full">
                      Dokutool Suite entdecken
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>
            </div>

            {/* Right: Platform Visualization Placeholder */}
            <AnimatedSection delay={400}>
              {/* GRAPHIC PLACEHOLDER: abstract visualization of the zentras platform suite (dashboard mockup, nodes and connections) in brand colors. */}
              <PlaceholderGraphic
                label="Plattform-Visualisierung"
                description="Dashboard-Mockup mit den drei verbundenen Modulen (SVG oder Lottie)"
                aspectRatio="square"
                variant="gradient"
                icon={<Layers size={48} />}
                className="min-h-[400px]"
              />
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
                  <p className="text-3xl lg:text-4xl font-bold text-accent mb-2">{metric.value}</p>
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
              Jedes Modul funktioniert eigenständig oder nahtlos integriert mit Ihren bestehenden Systemen.
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

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Bereit für eine Demo?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Vereinbaren Sie ein individuelles Beratungsgespräch und erleben Sie ZENTRAS in Aktion.
            </p>
            <Link to="/demo">
              <Button variant="default" size="xl" className="rounded-full">
                Demo anfragen
                <ArrowRight size={20} />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default PlatformOverview;
