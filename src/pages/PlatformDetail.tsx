import { Link, useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PlaceholderGraphic } from "@/components/PlaceholderGraphic";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ArrowLeft, Monitor, FileText, Tablet, BarChart3 } from "lucide-react";

// Platform data for all three products
const platformData: Record<string, {
  title: string;
  tagline: string;
  description: string;
  icon: typeof Monitor;
  features: { title: string; description: string }[];
  benefits: string[];
}> = {
  documentation: {
    title: "Documentation Suite",
    tagline: "Dokumentation am Point-of-Care",
    icon: FileText,
    description: "Die Documentation Suite ist unsere webbasierte Click-Through-Dokumentation für diverse interventionelle Eingriffe. Vorkonfigurierte Module für die häufigsten Interventionen, erweiterbar und remote anpassbar. Beispiel: Die AngioAssist Suite für die interventionelle Radiologie.",
    features: [
      {
        title: "Befundberichte",
        description: "Strukturierte Erfassung medizinischer Befunde direkt während des Eingriffs. Keine nachträgliche Dokumentation mehr nötig.",
      },
      {
        title: "OPS-Codes & QS-Daten",
        description: "Automatische Generierung von OPS-Codes und Qualitätssicherungsdaten aus der Dokumentation, ohne Mehraufwand.",
      },
      {
        title: "Registerdaten",
        description: "Direkte Anbindung an Register wie DeGIR. Die Daten fließen automatisch aus Ihrer Dokumentation in die erforderlichen Register.",
      },
      {
        title: "Produktevaluationen",
        description: "Strukturierte Erfassung von Evaluationsdaten für Medizinproduktehersteller, integriert in Ihren normalen Workflow.",
      },
    ],
    benefits: [
      "Einmalige Erfassung für alle Zwecke",
      "Vorkonfigurierte Module für schnellen Start",
      "Remote-Anpassungen möglich",
      "Webbasiert, läuft auf jedem Gerät",
    ],
  },
  hardware: {
    title: "Tablets",
    tagline: "Vorkonfiguriert für den OP-Saal",
    icon: Tablet,
    description: "Vorkonfigurierte, sterile Tablets im abgesicherten Kiosk Modus, an Halterungen für den OP-Saal. Desinfizierbar, bruch- und diebstahlgesichert mit automatischen Updates.",
    features: [
      {
        title: "KIOSK Mode",
        description: "Gesicherter Modus, der nur die ZENTRAS-Anwendung zulässt. Keine Ablenkung, keine Sicherheitsrisiken durch andere Apps.",
      },
      {
        title: "Automatische Updates",
        description: "Software-Updates werden automatisch eingespielt, ohne IT-Aufwand in Ihrer Klinik. Immer auf dem neuesten Stand.",
      },
      {
        title: "Sterile Halterungen",
        description: "Spezielle Halterungen für OP-Räume ermöglichen die Nutzung auch unter sterilen Bedingungen.",
      },
      {
        title: "Bruch- & Diebstahlschutz",
        description: "Robuste, gesicherte Geräte, die für den anspruchsvollen Klinikalltag entwickelt wurden.",
      },
    ],
    benefits: [
      "Setup in wenigen Minuten",
      "Desinfizierbar für den klinischen Einsatz",
      "Kein IT-Aufwand für Updates",
      "Out-of-the-box einsatzbereit",
    ],
  },
  analytics: {
    title: "Analytics Platform",
    tagline: "Daten auswerten und nutzen",
    icon: BarChart3,
    description: "Die Analytics Platform ermöglicht Export, Schnittstellen und Reporting für BI-Integration. Nutzen Sie Ihre Dokumentationsdaten für Auswertungen, Register-Anbindungen und individuelle Reports.",
    features: [
      {
        title: "Datenexport",
        description: "Flexible Exportmöglichkeiten in gängige Formate. Ihre Daten gehören Ihnen – nutzen Sie sie, wie Sie möchten.",
      },
      {
        title: "Register-Anbindung",
        description: "Direkte Schnittstellen zu Registern wie DeGIR. Automatischer Datentransfer ohne manuelle Eingabe.",
      },
      {
        title: "Reporting-Dashboards",
        description: "Übersichtliche Dashboards für Ihre wichtigsten Kennzahlen. Behalten Sie den Überblick über Eingriffe und Qualität.",
      },
      {
        title: "BI-Integration",
        description: "Anbindung an bestehende Business Intelligence Plattformen. Integrieren Sie ZENTRAS-Daten in Ihre Analyseumgebung.",
      },
    ],
    benefits: [
      "Flexible Exportformate",
      "Automatische Register-Übermittlung",
      "Individuelle Auswertungen",
      "Integration in bestehende BI-Systeme",
    ],
  },
};

const PlatformDetail = () => {
  const { slug = "documentation" } = useParams();
  const platform = platformData[slug] || platformData.documentation;
  const IconComponent = platform.icon;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-background py-20 lg:py-28 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <Link
              to="/platform"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Zurück zur Übersicht
            </Link>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div>
              <AnimatedSection>
                <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                  {platform.tagline}
                </span>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                  {platform.title}
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <p className="text-lg text-muted-foreground mb-8">{platform.description}</p>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="flex flex-wrap gap-4">
                  <Link to="/demo">
                    <Button variant="default" size="lg" className="rounded-full">
                      Demo anfragen
                      <ArrowRight size={18} />
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>
            </div>

            {/* Right: Product Visual Placeholder */}
            <AnimatedSection delay={400}>
              {/* GRAPHIC PLACEHOLDER: product-focused visual (for example detailed dashboard mockup, module diagram) in zentras colors. */}
              <PlaceholderGraphic
                label={`${platform.title} Ansicht`}
                description="Detailliertes Produkt-Mockup oder Modul-Diagramm (PNG, SVG oder interaktive Demo)"
                aspectRatio="video"
                variant="gradient"
                icon={<IconComponent size={48} />}
                className="min-h-[350px]"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="max-w-3xl mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Funktionen
            </h2>
            <p className="text-lg text-muted-foreground">
              Entdecken Sie die Funktionen, die {platform.title} zur bevorzugten Wahl für Kliniken machen.
            </p>
          </AnimatedSection>

          <div className="space-y-16">
            {platform.features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 100}>
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  {/* Alternate layout */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground mb-6">{feature.description}</p>
                    <div className="flex items-center gap-2 text-sm font-medium text-secondary">
                      <Check size={16} className="text-accent-green" />
                      Enthalten in {platform.title}
                    </div>
                  </div>

                  {/* GRAPHIC PLACEHOLDER: small supporting illustration or cropped screenshot. */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <PlaceholderGraphic
                      label={`${feature.title} Ansicht`}
                      description="Screenshot oder Illustration"
                      aspectRatio="video"
                      variant="outline"
                      className="min-h-[250px]"
                    />
                  </div>
                </div>

                {index < platform.features.length - 1 && (
                  <div className="border-b border-border mt-16" />
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-28 bg-brand-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Ihre Vorteile
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Kliniken, die {platform.title} nutzen, profitieren von messbaren Verbesserungen.
              </p>

              <ul className="space-y-4">
                {platform.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent-green/20 flex items-center justify-center">
                      <Check size={14} className="text-accent-green" />
                    </div>
                    <span className="text-foreground font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <PlaceholderGraphic
                label="Vorteile-Visualisierung"
                description="Diagramm oder Infografik zu den Vorteilen"
                aspectRatio="square"
                variant="default"
                className="min-h-[350px]"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
              {platform.title} in Aktion erleben
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8">
              Vereinbaren Sie eine individuelle Demo und erfahren Sie, wie {platform.title} Ihre Dokumentation vereinfacht.
            </p>
            <Link to="/demo">
              <Button variant="hero" size="xl" className="rounded-full">
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

export default PlatformDetail;
