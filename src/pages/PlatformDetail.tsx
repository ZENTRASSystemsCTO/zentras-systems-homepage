import { Link, useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PlaceholderGraphic } from "@/components/PlaceholderGraphic";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ArrowLeft, Monitor, FileText, Tablet, BarChart3 } from "lucide-react";

// Import images for Documentation Suite
import befundBerichtImg from "@/assets/befund-bericht.jpg";
import opsCodesImg from "@/assets/ops-codes.jpg";
import degirImg from "@/assets/degir-dokumentation.jpg";
import produktevaluationenImg from "@/assets/produktevaluationen.jpg";
import neuroEingriffeImg from "@/assets/neuro-eingriffe.jpg";
import ctEingriffeImg from "@/assets/ct-eingriffe.jpg";
import allgemeinEingriffeImg from "@/assets/allgemein-eingriffe.jpg";

// Import images for Tablets
import tabletBild03Img from "@/assets/tablet-bild-03.jpg";
import tabletBild04Img from "@/assets/tablet-bild-04.jpg";
import autoUpdateImg from "@/assets/auto-update.png";
import securedByKnoxImg from "@/assets/secured-by-knox.png";

// Import images for Analytics Platform
import analyticsScreenshotImg from "@/assets/analytics-screenshot.jpg";

// Platform data for all three products
const platformData: Record<string, {
  title: string;
  tagline: string;
  description: string;
  icon: typeof Monitor;
  heroImage?: string;
  features: { title: string; description: string; image?: string }[];
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
        image: befundBerichtImg,
      },
      {
        title: "OPS-Codes & QS-Daten",
        description: "Automatische Generierung von OPS-Codes und Qualitätssicherungsdaten aus der Dokumentation, ohne Mehraufwand.",
        image: opsCodesImg,
      },
      {
        title: "Registerdaten",
        description: "Direkte Anbindung an Register wie DeGIR. Die Daten fließen automatisch aus Ihrer Dokumentation in die erforderlichen Register.",
        image: degirImg,
      },
      {
        title: "Produktevaluationen",
        description: "Strukturierte Erfassung von Evaluationsdaten für Medizinproduktehersteller, integriert in Ihren normalen Workflow.",
        image: produktevaluationenImg,
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
    heroImage: tabletBild04Img,
    description: "Vorkonfigurierte, sterile Tablets im abgesicherten Kiosk Modus, an Halterungen für den OP-Saal. Desinfizierbar, bruch- und diebstahlgesichert mit automatischen Updates.",
    features: [
      {
        title: "KIOSK Mode",
        description: "Gesicherter Modus, der nur die ZENTRAS-Anwendung zulässt. Keine Ablenkung, keine Sicherheitsrisiken durch andere Apps.",
        image: securedByKnoxImg,
      },
      {
        title: "Automatische Updates",
        description: "Software-Updates werden automatisch eingespielt, ohne IT-Aufwand in Ihrer Klinik. Immer auf dem neuesten Stand.",
        image: autoUpdateImg,
      },
      {
        title: "Sterile Halterungen",
        description: "Spezielle Halterungen für OP-Räume ermöglichen die Nutzung auch unter sterilen Bedingungen. Desinfizierbar für den klinischen Einsatz.",
        image: tabletBild03Img,
      },
      {
        title: "Bruch- & Diebstahlschutz",
        description: "Robuste, gesicherte Geräte, die für den anspruchsvollen Klinikalltag entwickelt wurden.",
        image: tabletBild04Img,
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
    heroImage: analyticsScreenshotImg,
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

// Layered Screenshots Component for Documentation Suite Hero
const LayeredScreenshots = () => {
  return (
    <div className="relative w-full h-[400px] lg:h-[450px]">
      {/* Background screenshot - Allgemeinradiologische Eingriffe */}
      <div className="absolute top-0 right-0 w-[220px] h-[280px] z-10 rounded-xl shadow-lg overflow-hidden border border-border/30 bg-white rotate-3 hover:rotate-0 transition-transform duration-300">
        <div className="p-4 h-full overflow-hidden">
          <img 
            src={allgemeinEingriffeImg} 
            alt="Allgemeinradiologische Eingriffe" 
            className="w-full h-full object-contain object-top"
          />
        </div>
      </div>
      
      {/* Middle screenshot - CT-gesteuerte Eingriffe */}
      <div className="absolute top-8 left-[15%] w-[200px] h-[220px] z-20 rounded-xl shadow-xl overflow-hidden border border-border/30 bg-white -rotate-2 hover:rotate-0 transition-transform duration-300">
        <div className="p-4 h-full overflow-hidden">
          <img 
            src={ctEingriffeImg} 
            alt="CT-gesteuerte Eingriffe" 
            className="w-full h-full object-contain object-top"
          />
        </div>
      </div>
      
      {/* Front screenshot - Neuro Eingriffe */}
      <div className="absolute bottom-0 left-0 w-[220px] h-[260px] z-30 rounded-xl shadow-2xl overflow-hidden border border-border/30 bg-white rotate-1 hover:rotate-0 transition-transform duration-300">
        <div className="p-4 h-full overflow-hidden">
          <img 
            src={neuroEingriffeImg} 
            alt="Neuroradiologische Eingriffe" 
            className="w-full h-full object-contain object-top"
          />
        </div>
      </div>
    </div>
  );
};

const PlatformDetail = () => {
  const { slug = "documentation" } = useParams();
  const platform = platformData[slug] || platformData.documentation;
  const IconComponent = platform.icon;
  const isDocumentation = slug === "documentation";

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

            {/* Right: Product Visual */}
            <AnimatedSection delay={400}>
              {isDocumentation ? (
                <LayeredScreenshots />
              ) : platform.heroImage ? (
                <div className="rounded-xl overflow-hidden shadow-lg border border-border/50">
                  <img 
                    src={platform.heroImage} 
                    alt={`${platform.title} Ansicht`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ) : (
                <PlaceholderGraphic
                  label={`${platform.title} Ansicht`}
                  description="Detailliertes Produkt-Mockup oder Modul-Diagramm (PNG, SVG oder interaktive Demo)"
                  aspectRatio="video"
                  variant="gradient"
                  icon={<IconComponent size={48} />}
                  className="min-h-[350px]"
                />
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Section - Hidden for Analytics Platform */}
      {slug !== 'analytics' && (
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

                  {/* Feature image or placeholder */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    {feature.image ? (
                      <div className={`rounded-xl overflow-hidden shadow-lg border border-border/50 bg-white ${
                        feature.image === securedByKnoxImg || feature.image === autoUpdateImg 
                          ? 'p-12 flex items-center justify-center' 
                          : ''
                      }`}>
                        <img 
                          src={feature.image} 
                          alt={feature.title}
                          className={`object-contain ${
                            feature.image === securedByKnoxImg || feature.image === autoUpdateImg 
                              ? 'max-w-[200px] h-auto' 
                              : 'w-full h-auto'
                          }`}
                        />
                      </div>
                    ) : (
                      <PlaceholderGraphic
                        label={`${feature.title} Ansicht`}
                        description="Screenshot oder Illustration"
                        aspectRatio="video"
                        variant="outline"
                        className="min-h-[250px]"
                      />
                    )}
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
      )}

      {/* Benefits Section */}
      <section className="py-20 lg:py-28 bg-brand-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Ihre Vorteile
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Kliniken, die {platform.title} nutzen, profitieren von messbaren Verbesserungen.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {platform.benefits.map((benefit, index) => (
                <div key={benefit} className="flex items-center gap-3 text-left bg-background rounded-xl p-4 shadow-sm border border-border/50">
                  <div className="w-8 h-8 rounded-full bg-accent-green/20 flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-accent-green" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
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
