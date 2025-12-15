import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";

const Impressum = () => {
  return (
    <Layout>
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <AnimatedSection>
            <h1 className="text-4xl font-bold text-foreground mb-8">Impressum</h1>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
              {/* PLACEHOLDER: Bitte mit echten Firmendaten ausfüllen */}
              <p className="text-muted-foreground mb-4">
                Zentras Systems UG (haftungsbeschränkt)
                <br />
                Pater-Prinz-Weg 9<br />
                50997 Köln
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Vertreten durch</h2>
              <p className="text-muted-foreground mb-4">
                PD Dr. med. Michael Schönfeld
                <br />
                PD Dr. med. Kai Laukamp
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Kontakt</h2>
              <p className="text-muted-foreground mb-4">
                Telefon: +49 160 905 22441
                <br />
                E-Mail: m.schoenfeld@zentras.de
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Registereintrag</h2>
              <p className="text-muted-foreground mb-4">
                Eintragung im Handelsregister.
                <br />
                Registergericht: Amtsgericht Köln
                <br />
                Registernummer: HRB 124385
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Umsatzsteuer-ID</h2>
              <p className="text-muted-foreground mb-4">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                <br />
                DE456837725
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p className="text-muted-foreground mb-4">
                PD Dr. med. Michael Schönfeld
                <br />
                Pater-Prinz-Weg 9<br />
                50997 Köln
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Haftungsausschluss</h2>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Haftung für Inhalte</h3>
              <p className="text-muted-foreground mb-4">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
                und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß
                § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§
                8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte
                fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Haftung für Links</h3>
              <p className="text-muted-foreground mb-4">
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Urheberrecht</h3>
              <p className="text-muted-foreground mb-4">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Impressum;
