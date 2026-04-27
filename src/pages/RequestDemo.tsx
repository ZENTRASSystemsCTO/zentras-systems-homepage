import { useState, useEffect } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { ArrowRight, Check, Users, Calendar, MessageCircle, Rocket } from "lucide-react";
import tuvSudBadge from "@/assets/TÜV_Süd_logo.svg.png";

const isoCertificateHref = "/70701ms27001_de.pdf";

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
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    source: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const source = searchParams.get('source');
    if (source === 'strykersymposium') {
      setFormData(prev => ({
        ...prev,
        source: source || "",
        message: "Sehr geehrter Herr Ulrich,\n\nich habe eben Ihren Vortrag gehört zu AngioAssist und würde gerne mit Ihnen in Kontakt treten.\n\nBitte senden Sie mir Infomaterial zu AngioAssist und eine individuelle ROI-Schätzung."
      }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Choose Web3Forms access key based on source routing
      // TODO: Update the first key with Elias's token once the email is verified
      const accessKey = formData.source === 'strykersymposium' 
        ? "be195f29-e104-4009-a333-c25ab9208d4e" 
        : "be195f29-e104-4009-a333-c25ab9208d4e";
        
      const payload = {
        access_key: accessKey,
        subject: `Neue Demo-Anfrage von ${formData.name} (${formData.company})`,
        from_name: "ZENTRAS Website",
        replyto: formData.email,
        ...formData
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || 'Ein Fehler ist aufgetreten');
      }

      setIsSuccess(true);

      // Redirect to homepage after successful submission
      setTimeout(() => {
        navigate('/');
      }, 2500);
    } catch (err: any) {
      console.error("Error:", err);
      toast({
        title: "Fehler beim Senden",
        description: err.message || "Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt per E-Mail.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-background py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
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

            {/* Right: Contact Form */}
            <AnimatedSection delay={400}>
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
                      rows={8}
                      className="rounded-lg resize-none min-h-56"
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

      {/* About Section */}
      <section className="py-20 lg:py-28 bg-brand-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
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
                  { value: "ISO 27001", label: "zertifiziert", href: isoCertificateHref, badgeSrc: tuvSudBadge },
                  { value: "Setup", label: "in Minuten" },
                  { value: "Made in", label: "Germany" },
                ].map((stat) => (
                  <div key={stat.label} className="group relative p-4 rounded-xl bg-card border border-border">
                    {stat.href ? (
                      <a
                        href={stat.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-secondary hover:text-primary transition-colors"
                      >
                        <span className="text-2xl font-bold">{stat.value}</span>
                        {stat.badgeSrc ? (
                          <img
                            src={stat.badgeSrc}
                            alt="TÜV Süd Zertifizierungssiegel"
                            className="absolute -top-5 -right-4 h-16 w-auto object-contain drop-shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105"
                          />
                        ) : null}
                      </a>
                    ) : (
                      <p className="text-2xl font-bold text-secondary">{stat.value}</p>
                    )}
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
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
              <Button
                variant="hero"
                size="xl"
                className="rounded-full"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Demo anfragen
                <ArrowRight size={20} />
              </Button>
              <Link to="/platform">
                <Button variant="heroOutline" size="xl" className="rounded-full text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10">
                  Mehr erfahren
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Success Overlay */}
      {isSuccess && (
        <div className="fixed inset-0 bg-white/90 backdrop-blur-sm z-[100] flex flex-col items-center justify-center animate-in fade-in duration-300">
          <div className="w-24 h-24 rounded-full bg-accent-green/20 flex items-center justify-center mb-6 animate-scale-in">
            <Check size={48} className="text-accent-green animate-in zoom-in duration-500 delay-150" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-2 animate-fade-up">Anfrage erfolgreich gesendet!</h2>
          <p className="text-muted-foreground animate-fade-up" style={{ animationDelay: '100ms' }}>
            Vielen Dank! Wir melden uns in Kürze bei Ihnen.
          </p>
        </div>
      )}
    </Layout>
  );
};

export default RequestDemo;
