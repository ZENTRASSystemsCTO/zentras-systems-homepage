import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PlaceholderGraphic } from "@/components/PlaceholderGraphic";
import { PlatformCard } from "@/components/PlatformCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Layers } from "lucide-react";

const platforms = [
  {
    title: "Clinical Suite",
    description: "Comprehensive clinical workflow management with real-time patient tracking and care coordination.",
    href: "/platform/clinical",
    iconPlaceholder: "CS",
    features: ["Patient Scheduling", "Clinical Documentation", "Care Coordination"],
  },
  {
    title: "Analytics Platform",
    description: "Transform raw data into actionable insights with AI-powered analytics and reporting.",
    href: "/platform/analytics",
    iconPlaceholder: "AP",
    features: ["Predictive Analytics", "Population Health", "Financial Reporting"],
  },
  {
    title: "Integration Hub",
    description: "Connect your existing systems with seamless interoperability and data exchange.",
    href: "/platform/integration",
    iconPlaceholder: "IH",
    features: ["HL7 FHIR Support", "API Gateway", "Legacy Integration"],
  },
  {
    title: "Patient Portal",
    description: "Empower patients with self-service tools and transparent communication channels.",
    href: "/platform/portal",
    iconPlaceholder: "PP",
    features: ["Appointment Booking", "Secure Messaging", "Health Records Access"],
  },
  {
    title: "Revenue Cycle",
    description: "Optimize financial operations with automated billing and claims management.",
    href: "/platform/revenue",
    iconPlaceholder: "RC",
    features: ["Claims Processing", "Payment Posting", "Denial Management"],
  },
  {
    title: "Security Center",
    description: "Enterprise-grade security with comprehensive compliance and access management.",
    href: "/platform/security",
    iconPlaceholder: "SC",
    features: ["Identity Management", "Audit Logging", "Compliance Reporting"],
  },
];

const metrics = [
  { value: "500+", label: "Healthcare Organizations" },
  { value: "15M+", label: "Patients Served" },
  { value: "99.9%", label: "System Uptime" },
  { value: "50%", label: "Efficiency Improvement" },
];

const industries = [
  "Hospitals",
  "Clinics",
  "Laboratories",
  "Pharmacies",
  "Rehabilitation",
  "Mental Health",
  "Home Care",
  "Specialty Care",
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
                  Platform Suite
                </span>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                  The complete healthcare
                  <span className="text-secondary"> platform</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                  ZENTRAS delivers an integrated suite of solutions designed to address every aspect of 
                  healthcare IT—from clinical workflows to financial operations.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="flex flex-wrap gap-4">
                  <Link to="/demo">
                    <Button variant="default" size="lg" className="rounded-full">
                      Schedule a Demo
                      <ArrowRight size={18} />
                    </Button>
                  </Link>
                  <Link to="/platform/clinical">
                    <Button variant="outline" size="lg" className="rounded-full">
                      Explore Clinical Suite
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>
            </div>

            {/* Right: Platform Visualization Placeholder */}
            <AnimatedSection delay={400}>
              {/* GRAPHIC PLACEHOLDER: abstract visualization of the zentras platform suite (dashboard mockup, nodes and connections) in brand colors. */}
              <PlaceholderGraphic
                label="Platform Suite Visualization"
                description="Dashboard mockup showing interconnected platform modules (SVG or Lottie animation)"
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
              Comprehensive platform solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              Each module is designed to work seamlessly together or integrate with your existing systems.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <AnimatedSection key={platform.title} delay={index * 75}>
                <Link
                  to={platform.href}
                  className="group block p-6 rounded-2xl bg-card border border-border hover:border-secondary transition-all duration-300 hover-lift h-full"
                >
                  {/* GRAPHIC PLACEHOLDER: platform-specific icon or pictogram for this SKU. */}
                  <div className="w-14 h-14 rounded-xl gradient-placeholder flex items-center justify-center text-sm font-bold text-muted-foreground mb-4">
                    {platform.iconPlaceholder}
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
                    Learn more
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
            <h3 className="text-xl font-semibold text-foreground mb-2">Built for every healthcare segment</h3>
            <p className="text-muted-foreground">Tailored solutions for diverse healthcare environments</p>
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
              Ready to see the platform in action?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule a personalized demo to see how ZENTRAS can transform your healthcare organization.
            </p>
            <Link to="/demo">
              <Button variant="default" size="xl" className="rounded-full">
                Request a Demo
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
