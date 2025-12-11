import { Link } from "react-router-dom";
import { ZentrasLogo } from "./ZentrasLogo";
import { Mail, MapPin } from "lucide-react";

const footerLinks = {
  produkte: [
    { label: "Übersicht", href: "/platform" },
    { label: "AngioAssist Suite", href: "/platform/documentation" },
    { label: "Tablets", href: "/platform/hardware" },
    { label: "Analytics", href: "/platform/analytics" },
  ],
  unternehmen: [
    { label: "Kontakt", href: "/demo" },
  ],
  rechtliches: [
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "Impressum", href: "/impressum" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* GRAPHIC PLACEHOLDER: official zentras logo (SVG) in brand colors. */}
            <ZentrasLogo variant="light" className="mb-6" />
            <p className="text-primary-foreground/70 text-sm max-w-sm mb-6">
              Zentras Systems unterstützt die digitale Dokumentation in der interventionellen Medizin 
              direkt am Point-of-Care. Eine Erfassung, die alle Anforderungen erfüllt.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail size={16} className="text-accent" />
                <span>kontakt@zentras.systems</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <MapPin size={16} className="text-accent" />
                <span>Deutschland</span>
              </div>
            </div>
          </div>

          {/* Produkte Links */}
          <div>
            <h4 className="font-semibold mb-4">Produkte</h4>
            <ul className="space-y-3">
              {footerLinks.produkte.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Unternehmen Links */}
          <div>
            <h4 className="font-semibold mb-4">Unternehmen</h4>
            <ul className="space-y-3">
              {footerLinks.unternehmen.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtliches Links */}
          <div>
            <h4 className="font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-3">
              {footerLinks.rechtliches.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Zentras Systems UG. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/datenschutz" className="text-sm text-primary-foreground/50 hover:text-accent transition-colors">
              Datenschutz
            </Link>
            <Link to="/impressum" className="text-sm text-primary-foreground/50 hover:text-accent transition-colors">
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
