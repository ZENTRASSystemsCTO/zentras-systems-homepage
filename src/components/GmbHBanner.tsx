import { useState, useEffect } from "react";
import { X, ExternalLink } from "lucide-react";

const BANNER_DISMISSED_KEY = "zentras_gmbh_banner_dismissed";

export const GmbHBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isDismissed = localStorage.getItem(BANNER_DISMISSED_KEY);
    if (!isDismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem(BANNER_DISMISSED_KEY, "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="bg-secondary/20 border-b border-secondary/30">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between gap-4">
        <p className="text-sm text-foreground/80">
          Du suchst die <span className="font-medium">ZENTRAS GmbH</span>?{" "}
          <a 
            href="https://zentras.de" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:underline inline-flex items-center gap-1"
          >
            Zur ZENTRAS GmbH Website
            <ExternalLink size={14} />
          </a>
        </p>
        <button
          onClick={handleDismiss}
          className="p-1 hover:bg-secondary/30 rounded transition-colors"
          aria-label="Banner schließen"
        >
          <X size={18} className="text-foreground/60" />
        </button>
      </div>
    </div>
  );
};
