import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";

const Datenschutz = () => {
  return (
    <Layout>
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <AnimatedSection>
            <h1 className="text-4xl font-bold text-foreground mb-8">Datenschutzerklärung</h1>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Datenschutz auf einen Blick</h2>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Allgemeine Hinweise</h3>
              <p className="text-muted-foreground mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                persönlich identifiziert werden können.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Datenerfassung auf dieser Website</h3>
              <p className="text-muted-foreground mb-4">
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
                <br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können
                Sie dem Impressum dieser Website entnehmen.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Wie erfassen wir Ihre Daten?</strong>
                <br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um
                Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer
                Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Verantwortliche Stelle</h2>
              <p className="text-muted-foreground mb-4">
                Zentras Systems UG (haftungsbeschränkt)
                <br />
                Pater-Prinz-Weg 9<br />
                50997 Köln
                <br />
                <br />
                E-Mail: kontakt@zentras-systems.com
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Hosting</h2>
              <p className="text-muted-foreground mb-4">
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>
              <p className="text-muted-foreground mb-4">
                {/* PLACEHOLDER: Bitte mit Hosting-Anbieter-Informationen ausfüllen */}
                IONOS SE
                <br />
                Elgendorfer Str. 57, 56410 Montabaur
                <br />
                <br />
                Details entnehmen Sie der Datenschutzerklärung des Anbieters.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                4. Allgemeine Hinweise und Pflichtinformationen
              </h2>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Datenschutz</h3>
              <p className="text-muted-foreground mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
                personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie
                dieser Datenschutzerklärung.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Hinweis zur verantwortlichen Stelle</h3>
              <p className="text-muted-foreground mb-4">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist im Impressum genannt.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Speicherdauer</h3>
              <p className="text-muted-foreground mb-4">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
                Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                Widerruf Ihrer Einwilligung zur Datenverarbeitung
              </h3>
              <p className="text-muted-foreground mb-4">
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine
                bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
                Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Ihre Rechte</h2>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Recht auf Auskunft</h3>
              <p className="text-muted-foreground mb-4">
                Sie haben das Recht, jederzeit unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
                gespeicherten personenbezogenen Daten zu erhalten.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Recht auf Berichtigung</h3>
              <p className="text-muted-foreground mb-4">
                Sie haben das Recht, die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten
                personenbezogenen Daten zu verlangen.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Recht auf Löschung</h3>
              <p className="text-muted-foreground mb-4">
                Sie haben das Recht, die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen,
                soweit nicht die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung, zur Erfüllung einer
                rechtlichen Verpflichtung oder aus Gründen des öffentlichen Interesses erforderlich ist.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                Recht auf Einschränkung der Verarbeitung
              </h3>
              <p className="text-muted-foreground mb-4">
                Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Recht auf Datenübertragbarkeit</h3>
              <p className="text-muted-foreground mb-4">
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung automatisiert verarbeiten, in einem
                gängigen, maschinenlesbaren Format zu erhalten.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                Beschwerderecht bei der Aufsichtsbehörde
              </h3>
              <p className="text-muted-foreground mb-4">
                Ihnen steht ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Datenerfassung auf dieser Website</h2>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Kontaktformular</h3>
              <p className="text-muted-foreground mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
                inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall
                von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Server-Log-Dateien</h3>
              <p className="text-muted-foreground mb-4">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
                Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. SSL- bzw. TLS-Verschlüsselung</h2>
              <p className="text-muted-foreground mb-4">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-
                bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des
                Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>

              <p className="text-muted-foreground mt-8 text-sm">Stand: Dezember 2025</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Datenschutz;
