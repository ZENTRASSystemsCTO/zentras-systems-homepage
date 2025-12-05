import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PlaceholderGraphic } from "@/components/PlaceholderGraphic";
import { PlatformCard } from "@/components/PlatformCard";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { Button } from "@/components/ui/button";
import { Check, Dna, ArrowRight, Shield, Zap, Users, BarChart3, Database, Cloud } from "lucide-react";

const platforms = [
  {
    title: "Clinical Suite",
    description: "Comprehensive clinical workflow management for modern healthcare facilities.",
    href: "/platform/clinical",
    iconPlaceholder: "CS",
  },
  {
    title: "Analytics Platform",
    description: "Real-time insights and predictive analytics for informed decision-making.",
    href: "/platform/analytics",
    iconPlaceholder: "AP",
  },
  {
    title: "Integration Hub",
    description: "Seamless connectivity between existing systems and new technologies.",
    href: "/platform/integration",
    iconPlaceholder: "IH",
  },
  {
    title: "Patient Portal",
    description: "Engaging digital experience for patient communication and care coordination.",
    href: "/platform/portal",
    iconPlaceholder: "PP",
  },
];

const teamMembers = [
  { name: "Dr. Sarah Chen", role: "CEO & Co-Founder", bio: "20+ years in healthcare technology leadership." },
  { name: "Marcus Thompson", role: "CTO", bio: "Former engineering lead at major health systems." },
  { name: "Elena Rodriguez", role: "Chief Medical Officer", bio: "Board-certified physician and informatics expert." },
  { name: "David Kim", role: "VP of Product", bio: "Product strategist with deep healthcare domain expertise." },
];

const valueProps = [
  { label: "HIPAA Compliant", icon: Shield },
  { label: "99.9% Uptime", icon: Zap },
  { label: "24/7 Support", icon: Users },
  { label: "Real-time Analytics", icon: BarChart3 },
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
                  <span className="text-sm text-primary-foreground/80">Now serving 500+ healthcare organizations</span>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                  Healthcare IT
                  <span className="text-accent"> reimagined</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <p className="text-lg text-primary-foreground/70 mb-8 max-w-xl">
                  ZENTRAS Systems delivers next-generation IT solutions that transform how healthcare organizations operate, 
                  enabling better patient outcomes and streamlined workflows.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="flex flex-wrap gap-4">
                  <Link to="/demo">
                    <Button variant="hero" size="lg" className="rounded-full">
                      Request Demo
                      <ArrowRight size={18} />
                    </Button>
                  </Link>
                  <Link to="/platform">
                    <Button variant="heroOutline" size="lg" className="rounded-full">
                      Explore Platform
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
                    <p className="text-primary-foreground font-medium mb-2">DNA Animation Placeholder</p>
                    <p className="text-primary-foreground/60 text-sm max-w-xs">
                      Looped DNA helix animation (Lottie JSON or MP4 loop) in zentras brand colors
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
            <p className="text-sm text-muted-foreground text-center mb-8">Trusted by leading healthcare organizations</p>
          </AnimatedSection>
          
          {/* GRAPHIC PLACEHOLDER: partner / hospital / vendor logos (SVG or PNG) tinted or framed to match zentras palette. */}
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <AnimatedSection key={i} delay={i * 50}>
                <div className="w-32 h-12 rounded-lg border border-border bg-muted/30 flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">Logo {i}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Grid / Value Props */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Built for modern healthcare
            </h2>
            <p className="text-lg text-muted-foreground">
              Enterprise-grade security, reliability, and performance that healthcare organizations demand.
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
                    <span className="text-sm text-muted-foreground">Verified</span>
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
                    Platform Suite
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    One platform,
                    <br />
                    infinite possibilities
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    The ZENTRAS platform suite provides comprehensive tools for every aspect of healthcare IT management. 
                    From clinical workflows to advanced analytics, we've got you covered.
                  </p>
                  <Link to="/platform">
                    <Button variant="default" size="lg" className="rounded-full">
                      View All Products
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
              Features that drive results
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover how ZENTRAS empowers healthcare organizations to achieve operational excellence.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { icon: Database, title: "Unified Data", desc: "Centralize all patient data in one secure, accessible platform." },
              { icon: Cloud, title: "Cloud-Native", desc: "Scale effortlessly with our modern cloud infrastructure." },
              { icon: Shield, title: "Security First", desc: "End-to-end encryption and compliance built into every layer." },
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
                Meet the team
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                Healthcare veterans and technology experts working together to transform the industry.
              </p>
            </div>
            <Link to="/team">
              <Button variant="outline" className="rounded-full">
                View Full Team
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

      {/* Recent Articles */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Latest insights
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay updated with the latest in healthcare technology and industry trends.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "The Future of Interoperability in Healthcare", date: "Dec 3, 2025" },
              { title: "AI-Powered Clinical Decision Support", date: "Nov 28, 2025" },
              { title: "Building Resilient Health IT Infrastructure", date: "Nov 15, 2025" },
            ].map((article, index) => (
              <AnimatedSection key={article.title} delay={index * 100}>
                <div className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-secondary transition-all duration-300 hover-lift">
                  {/* GRAPHIC PLACEHOLDER: article cover image (abstract illustration in zentras colors). */}
                  <PlaceholderGraphic
                    label="Article Cover"
                    description="Abstract illustration"
                    aspectRatio="video"
                    variant="default"
                    className="rounded-none border-0"
                  />
                  <div className="p-6">
                    <p className="text-sm text-secondary mb-2">{article.date}</p>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-secondary transition-colors">
                      {article.title}
                    </h3>
                  </div>
                </div>
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
              Ready to transform your healthcare IT?
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8">
              Join 500+ healthcare organizations already using ZENTRAS to deliver better patient outcomes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/demo">
                <Button variant="hero" size="xl" className="rounded-full">
                  Request a Demo
                  <ArrowRight size={20} />
                </Button>
              </Link>
              <Link to="/platform">
                <Button variant="heroOutline" size="xl" className="rounded-full text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10">
                  Learn More
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
