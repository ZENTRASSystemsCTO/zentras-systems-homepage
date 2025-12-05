import { useState } from "react";
import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PlaceholderGraphic } from "@/components/PlaceholderGraphic";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { ArrowRight, Check, Users, Calendar, MessageCircle, Headphones } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "Schedule",
    description: "Pick a time that works for your team",
  },
  {
    icon: MessageCircle,
    title: "Discover",
    description: "Share your challenges and goals",
  },
  {
    icon: Users,
    title: "Demo",
    description: "See ZENTRAS tailored to your needs",
  },
  {
    icon: Headphones,
    title: "Support",
    description: "Get answers to all your questions",
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
      title: "Demo request received!",
      description: "Our team will contact you within 24 hours.",
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
                  Get Started
                </span>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                  Request a
                  <span className="text-secondary"> personalized demo</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                  See how ZENTRAS can transform your healthcare organization. Our team will walk you through 
                  the platform and answer all your questions.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <ul className="space-y-3">
                  {[
                    "30-minute personalized walkthrough",
                    "Custom solutions for your organization",
                    "No commitment required",
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

            {/* Right: Visual Placeholder */}
            <AnimatedSection delay={400}>
              {/* GRAPHIC PLACEHOLDER: illustration or photo representing a live demo or meeting (people collaborating), color graded with zentras palette. */}
              <PlaceholderGraphic
                label="Demo Meeting Visual"
                description="Illustration or photo of people in a demo meeting, color graded with zentras palette"
                aspectRatio="square"
                variant="gradient"
                icon={<Users size={48} />}
                className="min-h-[400px]"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Split Section: About + Form */}
      <section className="py-20 lg:py-28 bg-brand-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: About ZENTRAS */}
            <AnimatedSection>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                About ZENTRAS
              </h2>
              <p className="text-muted-foreground mb-6">
                ZENTRAS Systems is a leading provider of healthcare IT solutions, serving over 500 
                healthcare organizations worldwide. Our mission is to empower healthcare providers 
                with technology that improves patient outcomes and operational efficiency.
              </p>
              <p className="text-muted-foreground mb-8">
                Founded by healthcare and technology veterans, we understand the unique challenges 
                facing modern healthcare organizations. Our platform is built from the ground up 
                to address these challenges with innovative, user-friendly solutions.
              </p>

              {/* Trust indicators */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "500+", label: "Organizations" },
                  { value: "15M+", label: "Patients Served" },
                  { value: "50+", label: "Integrations" },
                  { value: "24/7", label: "Support" },
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
                  Request your demo
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="rounded-lg"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Organization *
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        placeholder="Healthcare Corp"
                        className="rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Work Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@healthcare.com"
                        className="rounded-lg"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="rounded-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      How can we help?
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your organization and what you're looking for..."
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
                    {isSubmitting ? "Submitting..." : "Request Demo"}
                    <ArrowRight size={18} />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you agree to our Privacy Policy and Terms of Service.
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
              How it works
            </h2>
            <p className="text-lg text-muted-foreground">
              From initial contact to implementation, we're with you every step of the way.
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
                  <div className="text-sm font-medium text-secondary mb-2">Step {index + 1}</div>
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
              Ready to get started?
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8">
              Join 500+ healthcare organizations already transforming their operations with ZENTRAS.
            </p>
            <Button
              variant="hero"
              size="xl"
              className="rounded-full"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Request Demo Now
              <ArrowRight size={20} />
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default RequestDemo;
