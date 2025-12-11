import { useState } from "react";
import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { ArrowRight, Check, Users, Calendar, MessageCircle, Rocket } from "lucide-react";
import demoVisualisierung from "@/assets/demo-visualisierung.png";

const steps = [
  {
    icon: Calendar,
    title: "Kontakt",
    description: "Sie füllen das Formular aus",
  },
  {
    icon: MessageCircle,
    title: "Bedarfsanalyse",
    description: "Wir besprechen Ihre Anforderungen",
  },
  {
    icon: Users,
    title: "Demo",
    description: "Live-Vorführung der ZENTRAS Suite",
  },
  {
    icon: Rocket,
    title: "Pilotprojekt",
    description: "Testphase in Ihrer Klinik",
  },
];

const RequestDemo = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Anfrage erhalten!",
      description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
    });

    setFormData({ name: "", company: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-background py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div>
              <AnimatedSection>
                <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                  Kontakt
                </span>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                  Lernen Sie
                  <span className="text-secondary"> ZENTRAS kennen</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                  Vereinbaren Sie ein individuelles Beratungsgespräch. Wir zeigen Ihnen, wie ZENTRAS 
                  Ihre Dokumentation vereinfacht.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <ul className="space-y-3">
                  {[
                    "Individuelles Beratungsgespräch",
                    "Live-Demo der ZENTRAS Suite",
                    "Keine Verpflichtung",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-foreground">
                      <div className="w-5 h-5 rounded-full bg-accent-green/20 flex items-center justify-center">
                        <Check size={12} className="text-accent-green" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>

            {/* Right: Demo Visual */}
            <AnimatedSection delay={400}>
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src={demoVisualisierung} 
                  alt="ZENTRAS Demo Visualisierung - Interaktive Präsentation der Dokumentationssoftware" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Split Section: About + Form */}
      <section className="py-20 lg:py-28 bg-brand-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: About Zentras */}
            <AnimatedSection>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                Über Zentras Systems
              </h2>
              <p className="text-muted-foreground mb-6">
                Zentras Systems unterstützt die digitale Dokumentation in der interventionellen Medizin 
                direkt am Point-of-Care. Statt Befunde, OPS-Codes, QS-Berichte und Registerdaten mehrfach 
                zu erfassen, ermöglicht unsere Tool Suite eine strukturierte Echtzeit-Dokumentation 
                während des Eingriffs.
              </p>
              <p className="text-muted-foreground mb-8">
                Gegründet von Klinikern, die die Frustration der Mehrfachdokumentation selbst erlebt haben. 
                Unser Ziel: Echtzeit-Dokumentation am Point-of-Care zum Standard in der interventionellen 
                Medizin machen.
              </p>

              {/* Trust indicators */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "3", label: "Pilotkliniken" },
                  { value: "ISO 27001", label: "orientiert" },
                  { value: "Setup", label: "in Minuten" },
                  { value: "Made in", label: "Germany" },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-xl bg-card border border-border">
                    <p className="text-2xl font-bold text-secondary">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Right: Lead Capture Form */}
            <AnimatedSection delay={200}>
              <div className="p-8 rounded-2xl bg-card border border-border shadow-brand">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Demo anfragen
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Dr. Max Mustermann"
                        className="rounded-lg"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Klinik / Organisation *
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        placeholder="Universitätsklinikum"
                        className="rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        E-Mail *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="max.mustermann@klinik.de"
                        className="rounded-lg"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Telefon
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+49 123 456789"
                        className="rounded-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Ihre Nachricht
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Erzählen Sie uns von Ihrer Klinik und Ihren Anforderungen..."
                      rows={4}
                      className="rounded-lg resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    className="w-full rounded-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Wird gesendet..." : "Demo anfragen"}
                    <ArrowRight size={18} />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.
                  </p>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* How It Works Steps */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              So funktioniert es
            </h2>
            <p className="text-lg text-muted-foreground">
              Von der ersten Kontaktaufnahme bis zum Pilotprojekt begleiten wir Sie.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <AnimatedSection key={step.title} delay={index * 100}>
                <div className="text-center">
                  {/* GRAPHIC PLACEHOLDER: simple line icons for each step in zentras colors. */}
                  <div className="w-16 h-16 rounded-2xl gradient-brand flex items-center justify-center mx-auto mb-4 shadow-brand">
                    <step.icon size={28} className="text-primary-foreground" />
                  </div>
                  <div className="text-sm font-medium text-secondary mb-2">Schritt {index + 1}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
              Bereit für effizientere Dokumentation?
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8">
              Vereinbaren Sie jetzt Ihr individuelles Beratungsgespräch mit dem ZENTRAS Team.
            </p>
            <Button
              variant="hero"
              size="xl"
              className="rounded-full"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Jetzt Demo anfragen
              <ArrowRight size={20} />
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default RequestDemo;
