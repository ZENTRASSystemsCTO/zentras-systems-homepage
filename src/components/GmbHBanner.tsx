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
      className="fixed bottom-6 right-6 z-50 max-w-sm bg-white rounded-xl p-5 animate-fade-in"
      style={{
        boxShadow: "0 8px 40px rgba(255, 255, 255, 0.25), 0 4px 20px rgba(0, 0, 0, 0.15)"
      }}
    >
      <button
        onClick={handleDismiss}
        className="absolute top-3 right-3 p-1 hover:bg-muted rounded transition-colors"
        aria-label="Popup schließen"
      >
        <X size={18} className="text-muted-foreground" />
      </button>
      
      <p className="text-foreground pr-6 mb-3">
        Du suchst die <span className="font-semibold">ZENTRAS GmbH</span>?
      </p>
      
      <a 
        href="https://zentras.de" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
      >
        Zur ZENTRAS GmbH Website
        <ExternalLink size={16} />
      </a>
    </div>
  );
};
