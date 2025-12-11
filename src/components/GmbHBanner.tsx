import { useState, useEffect } from "react";
import { X, ExternalLink } from "lucide-react";

const BANNER_DISMISSED_KEY = "zentras_gmbh_banner_dismissed";

export const GmbHBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isDismissed = localStorage.getItem(BANNER_DISMISSED_KEY);
    if (!isDismissed) {
      // Small delay so it appears after page load
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem(BANNER_DISMISSED_KEY, "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 w-[380px] bg-white rounded-2xl p-6 animate-fade-in"
      style={{
        boxShadow: "0 0 60px 20px rgba(255, 255, 255, 0.4), 0 8px 32px rgba(0, 0, 0, 0.12)"
      }}
    >
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 p-1.5 hover:bg-muted rounded-lg transition-colors"
        aria-label="Popup schließen"
      >
        <X size={20} className="text-muted-foreground" />
      </button>
      
      <h3 className="text-lg font-semibold text-foreground mb-2 pr-8">
        Du bist auf der Zentras Systems Seite
      </h3>
      
      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
        Dies ist die Website von <strong className="text-foreground">Zentras Systems</strong> – 
        unsere Lösung für digitale Dokumentation in der interventionellen Medizin.
      </p>
      
      <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
        Suchst du die <strong className="text-foreground">Zentras GmbH</strong>? 
        Die findest du unter zentras.de
      </p>
      
      <a 
        href="https://zentras.de" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors text-sm font-medium"
      >
        Zur Zentras GmbH Website
        <ExternalLink size={16} />
      </a>
    </div>
  );
};
