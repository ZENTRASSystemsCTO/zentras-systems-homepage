import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PlaceholderGraphic } from "@/components/PlaceholderGraphic";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Briefcase } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former Chief Medical Information Officer with 20+ years transforming healthcare organizations through technology.",
  },
  {
    name: "Marcus Thompson",
    role: "CTO",
    bio: "Engineering leader who scaled health tech platforms serving millions of patients at leading health systems.",
  },
  {
    name: "Elena Rodriguez",
    role: "Chief Medical Officer",
    bio: "Board-certified internist and clinical informatics expert focused on improving patient outcomes through data.",
  },
  {
    name: "David Kim",
    role: "VP of Product",
    bio: "Product strategist with deep healthcare domain expertise, previously at Epic Systems and Cerner.",
  },
  {
    name: "Jennifer Walsh",
    role: "VP of Engineering",
    bio: "Infrastructure expert specializing in HIPAA-compliant cloud architectures and healthcare data security.",
  },
  {
    name: "Dr. Michael Okonkwo",
    role: "VP of Clinical Strategy",
    bio: "Practicing physician and health IT consultant who bridges the gap between clinical needs and technology.",
  },
  {
    name: "Amanda Liu",
    role: "VP of Customer Success",
    bio: "Healthcare operations veteran dedicated to ensuring every customer achieves their transformation goals.",
  },
  {
    name: "Robert Martinez",
    role: "VP of Sales",
    bio: "Enterprise sales leader with a track record of building trusted partnerships with health systems.",
  },
  {
    name: "Priya Patel",
    role: "Head of Design",
    bio: "UX leader focused on creating intuitive interfaces that healthcare professionals love to use.",
  },
  {
    name: "Thomas Anderson",
    role: "Head of Data Science",
    bio: "ML engineer developing predictive models that help clinicians make better decisions faster.",
  },
  {
    name: "Catherine Hughes",
    role: "Head of Compliance",
    bio: "Healthcare regulatory expert ensuring ZENTRAS meets the highest standards of security and privacy.",
  },
  {
    name: "James Wilson",
    role: "Head of Partnerships",
    bio: "Strategic alliance builder connecting ZENTRAS with leading EHR vendors and health tech innovators.",
  },
];

const openRoles = [
  { title: "Senior Full Stack Engineer", department: "Engineering", location: "Remote" },
  { title: "Product Manager, Analytics", department: "Product", location: "San Francisco" },
  { title: "Implementation Consultant", department: "Customer Success", location: "New York" },
  { title: "Healthcare Data Analyst", department: "Data Science", location: "Remote" },
];

const Team = () => {
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
                  Our Team
                </span>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                  The people
                  <span className="text-secondary"> behind ZENTRAS</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                  We're a team of healthcare veterans, technologists, and innovators united by a mission 
                  to transform how healthcare organizations operate and deliver care.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="flex flex-wrap gap-4">
                  <Link to="/demo">
                    <Button variant="default" size="lg" className="rounded-full">
                      Get in Touch
                      <ArrowRight size={18} />
                    </Button>
                  </Link>
                  <a href="#careers">
                    <Button variant="outline" size="lg" className="rounded-full">
                      View Open Roles
                    </Button>
                  </a>
                </div>
              </AnimatedSection>
            </div>

            {/* Right: Team Visual Placeholder */}
            <AnimatedSection delay={400}>
              {/* GRAPHIC PLACEHOLDER: team group photo or abstract illustration representing collaboration, tinted to match zentras palette. */}
              <PlaceholderGraphic
                label="Team Collaboration Visual"
                description="Team group photo or abstract illustration of collaboration, tinted with zentras palette"
                aspectRatio="square"
                variant="gradient"
                icon={<Users size={48} />}
                className="min-h-[400px]"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Full-width Team Photo */}
      <section className="relative">
        {/* GRAPHIC PLACEHOLDER: large team or office photograph, high quality, with colors that do not clash with #15566f and #00bbd1. */}
        <div className="h-[300px] lg:h-[500px] gradient-hero flex items-center justify-center">
          <div className="text-center text-primary-foreground">
            <Users size={64} className="mx-auto mb-4 opacity-50" />
            <p className="text-lg font-medium">Full Team Photo Placeholder</p>
            <p className="text-sm opacity-70 max-w-md mx-auto mt-2">
              Large team or office photograph, high quality, with colors harmonizing with zentras palette
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Grid with Sticky Intro */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left: Sticky introduction */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <AnimatedSection>
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    Leadership team
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Our leadership brings together decades of experience in healthcare, technology, 
                    and enterprise software to guide ZENTRAS toward our vision of transforming healthcare IT.
                  </p>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-brand-surface border border-border">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <Users size={24} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">150+</p>
                      <p className="text-sm text-muted-foreground">Team members worldwide</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            {/* Right: Scrollable team cards */}
            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                  <AnimatedSection key={member.name} delay={index * 50}>
                    {/* GRAPHIC PLACEHOLDER: individual headshot (portrait), consistent style and background. */}
                    <TeamMemberCard {...member} />
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section id="careers" className="py-20 lg:py-28 bg-brand-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <div className="w-16 h-16 rounded-2xl gradient-brand flex items-center justify-center mx-auto mb-6 shadow-brand">
              <Briefcase size={28} className="text-primary-foreground" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Join our team
            </h2>
            <p className="text-lg text-muted-foreground">
              We're always looking for talented people who share our passion for improving healthcare through technology.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {openRoles.map((role, index) => (
                <AnimatedSection key={role.title} delay={index * 100}>
                  <div className="p-6 rounded-2xl bg-card border border-border hover:border-secondary transition-all duration-300 hover-lift">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{role.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {role.department} · {role.location}
                        </p>
                      </div>
                      <Button variant="outline" className="rounded-full shrink-0">
                        View Role
                        <ArrowRight size={16} />
                      </Button>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={400} className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Don't see a role that fits? We'd still love to hear from you.
              </p>
              <Button variant="default" className="rounded-full">
                Send General Application
                <ArrowRight size={18} />
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
              Want to learn more about ZENTRAS?
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8">
              Connect with our team to see how we can help transform your healthcare organization.
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

export default Team;
