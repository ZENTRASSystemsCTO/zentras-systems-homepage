import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import zentrasLogo from "@/assets/zentras-logo.png";

interface PageLoaderProps {
  isLoading: boolean;
  minDuration?: number;
}

/**
 * Full-page loading overlay with Zentras branding.
 * Fades out smoothly once loading is complete.
 */
export const PageLoader = ({ isLoading, minDuration = 400 }: PageLoaderProps) => {
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      // Start fade out animation
      const fadeTimer = setTimeout(() => {
        setFadeOut(true);
      }, minDuration);

      // Remove from DOM after animation completes
      const removeTimer = setTimeout(() => {
        setShow(false);
      }, minDuration + 600);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [isLoading, minDuration]);

  if (!show) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-primary transition-opacity ease-out",
        fadeOut ? "opacity-0" : "opacity-100"
      )}
      style={{ transitionDuration: "600ms" }}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img 
            src={zentrasLogo} 
            alt="zentras Logo" 
            className="w-14 h-14 object-contain"
          />
          <span className="text-2xl font-semibold text-primary-foreground tracking-tight">
            zentras systems
          </span>
        </div>

        {/* Loading bar */}
        <div className="w-64 h-1.5 bg-primary-foreground/20 rounded-full overflow-hidden">
          <div 
            className="h-full w-1/3 bg-accent rounded-full"
            style={{
              animation: "loading-slide 1s ease-in-out infinite"
            }}
          />
        </div>
      </div>
    </div>
  );
};
