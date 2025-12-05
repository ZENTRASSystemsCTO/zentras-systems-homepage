import { Link, useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PlaceholderGraphic } from "@/components/PlaceholderGraphic";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ArrowLeft, Monitor } from "lucide-react";

// Sample platform data - in production this would come from an API/CMS
const platformData: Record<string, {
  title: string;
  tagline: string;
  description: string;
  features: { title: string; description: string }[];
  benefits: string[];
}> = {
  clinical: {
    title: "Clinical Suite",
    tagline: "Streamline clinical workflows",
    description: "The ZENTRAS Clinical Suite provides comprehensive tools for managing patient care, from scheduling and documentation to care coordination and outcomes tracking.",
    features: [
      {
        title: "Intelligent Scheduling",
        description: "AI-powered scheduling that optimizes provider time and reduces patient wait times while accounting for appointment complexity and resource availability.",
      },
      {
        title: "Clinical Documentation",
        description: "Streamlined documentation workflows with voice-to-text, smart templates, and automated coding suggestions that reduce administrative burden.",
      },
      {
        title: "Care Coordination",
        description: "Real-time communication tools and task management for seamless handoffs between care team members across departments and facilities.",
      },
      {
        title: "Outcomes Tracking",
        description: "Comprehensive dashboards for monitoring patient outcomes, identifying trends, and driving continuous quality improvement initiatives.",
      },
    ],
    benefits: [
      "40% reduction in documentation time",
      "25% improvement in patient throughput",
      "Real-time care team collaboration",
      "Automated compliance reporting",
    ],
  },
  analytics: {
    title: "Analytics Platform",
    tagline: "Transform data into insights",
    description: "Harness the power of your healthcare data with AI-driven analytics that surface actionable insights for clinical, operational, and financial decision-making.",
    features: [
      {
        title: "Predictive Analytics",
        description: "Machine learning models that identify at-risk patients, predict readmissions, and forecast resource needs with clinical-grade accuracy.",
      },
      {
        title: "Population Health",
        description: "Comprehensive tools for managing patient populations, identifying care gaps, and measuring performance across quality metrics.",
      },
      {
        title: "Financial Intelligence",
        description: "Real-time visibility into revenue cycle performance, cost drivers, and margin opportunities with drill-down capabilities.",
      },
      {
        title: "Custom Dashboards",
        description: "Self-service analytics tools that empower stakeholders to build custom reports and visualizations without IT support.",
      },
    ],
    benefits: [
      "15% reduction in readmission rates",
      "Real-time operational visibility",
      "Self-service reporting capabilities",
      "Integration with existing BI tools",
    ],
  },
  integration: {
    title: "Integration Hub",
    tagline: "Connect your healthcare ecosystem",
    description: "Seamlessly connect disparate systems with our enterprise integration platform that supports modern standards and legacy protocols alike.",
    features: [
      {
        title: "HL7 FHIR Native",
        description: "Built from the ground up with FHIR support, enabling modern interoperability with health information exchanges and partner systems.",
      },
      {
        title: "API Gateway",
        description: "Secure, scalable API management with rate limiting, authentication, and comprehensive logging for all data exchanges.",
      },
      {
        title: "Legacy Connectors",
        description: "Pre-built adapters for legacy systems including HL7 v2, X12, CCDA, and proprietary vendor interfaces.",
      },
      {
        title: "Data Transformation",
        description: "Visual mapping tools and transformation engine that normalize data across disparate sources into a unified format.",
      },
    ],
    benefits: [
      "50+ pre-built connectors",
      "99.99% message delivery guarantee",
      "Sub-second data latency",
      "Complete audit trail",
    ],
  },
};

const PlatformDetail = () => {
  const { slug = "clinical" } = useParams();
  const platform = platformData[slug] || platformData.clinical;

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
              Back to Platform Overview
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
                      Request Demo
                      <ArrowRight size={18} />
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="rounded-full">
                    View Documentation
                  </Button>
                </div>
              </AnimatedSection>
            </div>

            {/* Right: Product Visual Placeholder */}
            <AnimatedSection delay={400}>
              {/* GRAPHIC PLACEHOLDER: product-focused visual (for example detailed dashboard mockup, module diagram) in zentras colors. */}
              <PlaceholderGraphic
                label={`${platform.title} Dashboard`}
                description="Detailed product mockup or module diagram (PNG, SVG, or interactive demo)"
                aspectRatio="video"
                variant="gradient"
                icon={<Monitor size={48} />}
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
              Key capabilities
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore the features that make {platform.title} the preferred choice for healthcare organizations.
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
                      Included in {platform.title}
                    </div>
                  </div>

                  {/* GRAPHIC PLACEHOLDER: small supporting illustration or cropped screenshot. */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <PlaceholderGraphic
                      label={`${feature.title} Visual`}
                      description="Supporting illustration or screenshot"
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
                Measurable impact
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Organizations using {platform.title} report significant improvements across key metrics.
              </p>

              <ul className="space-y-4">
                {platform.benefits.map((benefit, index) => (
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
                label="Impact Metrics Visualization"
                description="Chart or infographic showing ROI and outcomes"
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
              See {platform.title} in action
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8">
              Schedule a personalized demo to explore how {platform.title} can transform your organization.
            </p>
            <Link to="/demo">
              <Button variant="hero" size="xl" className="rounded-full">
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

export default PlatformDetail;
