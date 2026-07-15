import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";

// Team photos
import teamFoto from "@/assets/team-foto.jpg";
import michaelSchoenfeld from "@/assets/michael-schoenfeld.jpg";
import kaiLaukamp from "@/assets/kai-laukamp.png";
import eliasUlrich from "@/assets/elias-ulrich.jpg";

const teamMembers = [
  {
    name: "PD Dr. med. Michael Schönfeld",
    role: "Founder",
    bio: "", // BIO PLACEHOLDER: Kurze Biografie hier einfügen
    image: michaelSchoenfeld,
  },
  {
    name: "PD Dr. med. Kai Laukamp",
    role: "Founder",
    bio: "", // BIO PLACEHOLDER: Kurze Biografie hier einfügen
    image: kaiLaukamp,
  },
  {
    name: "Dr. med. Elias Ulrich",
    role: "",
    bio: "", // BIO PLACEHOLDER: Kurze Biografie hier einfügen
    image: eliasUlrich,
  },
  {
    name: "Caspar Münzinger",
    role: "",
    bio: "", // BIO PLACEHOLDER: Kurze Biografie hier einfügen
    image: teamFoto,
  },
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
                  Unser Team
                </span>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                  Das Team hinter
                  <span className="text-secondary"> zentras</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                  Kliniker und Technologen, die die Realität aus dem OP kennen – und Dokumentation neu denken.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="flex flex-wrap gap-4">
                  <Link to="/demo">
                    <Button variant="default" size="lg" className="rounded-full">
                      Kontakt aufnehmen
                      <ArrowRight size={18} />
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>
            </div>

            {/* Right: Team Visual */}
            <AnimatedSection delay={400}>
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src={teamFoto} 
                  alt="Zentras Team" 
                  className="w-full h-auto object-cover min-h-[400px]"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Full-width Team Photo */}
      <section className="relative">
        <div className="h-[300px] lg:h-[500px] overflow-hidden">
          <img 
            src={teamFoto} 
            alt="Zentras Team" 
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* Team Members Grid with Sticky Intro */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left: Sticky introduction with Origin Story */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <AnimatedSection>
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    Unsere Geschichte
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Zentras wurde von PD Dr. med. Michael Schönfeld und PD Dr. med. Kai Laukamp initiiert, 
                    die die Realität aus dem OP kennen: Derselbe Eingriff muss teils 5-6x in unterschiedlichen 
                    Systemen dokumentiert werden, obwohl sich die Inhalte stark überschneiden.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Aus dieser Frustration heraus entstand die Idee, die Dokumentation dorthin zu verlagern, 
                    wo sie fachlich ohnehin stattfindet und alle nachgelagerten 
                    Anforderungen (QS, Register, Studien, Evaluationen) aus derselben Datengrundlage zu bedienen.
                  </p>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-brand-surface border border-border">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <Users size={24} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">4</p>
                      <p className="text-sm text-muted-foreground">Teammitglieder</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            {/* Right: Scrollable team cards */}
            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-6">
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

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
              Mehr über Zentras erfahren?
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8">
              Vereinbaren Sie ein Gespräch mit unserem Team und erfahren Sie, wie wir Ihre Dokumentation 
              vereinfachen können.
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

export default Team;
