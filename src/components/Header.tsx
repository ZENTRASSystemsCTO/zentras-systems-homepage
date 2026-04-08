import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ZentrasLogo } from "./ZentrasLogo";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { 
    href: "/platform", 
    label: "Produkte",
    subLinks: [
      { href: "/platform/documentation", label: "AngioAssist Suite" },
      { href: "/platform/hardware", label: "Tablets" },
      { href: "/platform/analytics", label: "Analytics Platform" }
    ]
  },
  { href: "/demo", label: "Kontakt" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-background/95 backdrop-blur-xl border-b border-border/50"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <ZentrasLogo variant="dark" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                <Link
                  to={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200 py-2",
                    (location.pathname.startsWith(link.href) && link.href !== "/") || location.pathname === link.href
                        ? "text-primary"
                        : "text-foreground/60 hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
                
                {link.subLinks && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50">
                    <div className="bg-background border border-border/50 shadow-lg shadow-black/5 rounded-xl py-2 w-56 flex flex-col">
                      {link.subLinks.map(subLink => (
                        <Link 
                          key={subLink.href}
                          to={subLink.href} 
                          className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary hover:bg-muted/50 transition-colors"
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/demo">
              <Button className="btn-hero rounded-full px-6">
                Demo anfragen
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menü umschalten"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/20 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.href} className="flex flex-col">
                  <Link
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-base font-medium py-2 transition-colors duration-200",
                      (location.pathname.startsWith(link.href) && link.href !== "/") || location.pathname === link.href
                          ? "text-primary"
                          : "text-foreground/70"
                    )}
                  >
                    {link.label}
                  </Link>
                  {link.subLinks && (
                    <div className="flex flex-col ml-4 mt-2 border-l-2 border-border/30 pl-4 gap-3">
                      {link.subLinks.map(subLink => (
                        <Link
                          key={subLink.href}
                          to={subLink.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors"
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/demo" className="mt-4" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="btn-hero rounded-full w-full">
                  Demo anfragen
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
