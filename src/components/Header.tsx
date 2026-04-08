import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ZentrasLogo } from "./ZentrasLogo";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/platform", label: "Produkte" },
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isHomePage
          ? isScrolled
            ? "bg-primary/90 backdrop-blur-xl border-primary-foreground/10 shadow-sm"
            : "bg-transparent backdrop-blur-xl border-transparent"
          : isScrolled
            ? "bg-background/95 backdrop-blur-xl border-border/20 shadow-sm"
            : "bg-background/80 backdrop-blur-xl border-border/10"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            {/* GRAPHIC PLACEHOLDER: official zentras logo (SVG) in brand colors. */}
            <ZentrasLogo variant={isHomePage ? "light" : "dark"} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200",
                  location.pathname === link.href
                    ? isHomePage
                      ? "text-accent"
                      : "text-foreground"
                    : isHomePage
                      ? "text-primary-foreground/80 hover:text-primary-foreground"
                      : "text-foreground/70 hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
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
            className={cn(
              "md:hidden p-2",
              isHomePage ? "text-primary-foreground" : "text-foreground"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menü umschalten"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={cn(
            "md:hidden py-4 border-t animate-fade-in",
            isHomePage ? "border-primary-foreground/10" : "border-border/20"
          )}>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "text-base font-medium py-2 transition-colors duration-200",
                    location.pathname === link.href
                      ? isHomePage
                        ? "text-accent"
                        : "text-foreground"
                      : isHomePage
                        ? "text-primary-foreground/80"
                        : "text-foreground/70"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/demo" className="mt-2">
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
