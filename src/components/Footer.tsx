import { Link } from "react-router-dom";
import { ZentrasLogo } from "./ZentrasLogo";
import { Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  platform: [
    { label: "Overview", href: "/platform" },
    { label: "Clinical Suite", href: "/platform/clinical" },
    { label: "Analytics", href: "/platform/analytics" },
    { label: "Integration", href: "/platform/integration" },
  ],
  company: [
    { label: "About Us", href: "/team" },
    { label: "Careers", href: "/team#careers" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/demo" },
  ],
  resources: [
    { label: "Documentation", href: "/docs" },
    { label: "Support", href: "/support" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
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
              Transforming healthcare through innovative IT solutions. 
              Empowering medical organizations to deliver better patient outcomes.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail size={16} className="text-accent" />
                <span>contact@zentras.systems</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone size={16} className="text-accent" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <MapPin size={16} className="text-accent" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
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

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
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

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
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
            © {new Date().getFullYear()} ZENTRAS Systems. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-sm text-primary-foreground/50 hover:text-accent transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-sm text-primary-foreground/50 hover:text-accent transition-colors">
              Terms
            </Link>
            <Link to="/cookies" className="text-sm text-primary-foreground/50 hover:text-accent transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
