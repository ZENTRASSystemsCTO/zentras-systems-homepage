import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface PageLoaderProps {
  isLoading: boolean;
  minDuration?: number;
}

/**
 * Full-page loading overlay with Zentras branding.
 * Fades out smoothly once loading is complete.
 */
export const PageLoader = ({ isLoading, minDuration = 600 }: PageLoaderProps) => {
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
      }, minDuration + 500);

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
        "fixed inset-0 z-[100] flex items-center justify-center bg-primary transition-opacity duration-500",
        fadeOut ? "opacity-0" : "opacity-100"
      )}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Animated logo/brand element */}
        <div className="relative">
          {/* Pulsing ring */}
          <div className="absolute inset-0 rounded-full bg-accent/30 animate-ping" style={{ animationDuration: "1.5s" }} />
          
          {/* Logo container */}
          <div className="relative w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-1">
              <div className="w-3 h-3 rounded-sm bg-accent animate-pulse" style={{ animationDelay: "0ms" }} />
              <div className="w-3 h-3 rounded-sm bg-secondary animate-pulse" style={{ animationDelay: "150ms" }} />
              <div className="w-3 h-3 rounded-sm bg-secondary animate-pulse" style={{ animationDelay: "300ms" }} />
              <div className="w-3 h-3 rounded-sm bg-accent-green animate-pulse" style={{ animationDelay: "450ms" }} />
            </div>
          </div>
        </div>

        {/* Brand name */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold text-primary-foreground tracking-wide">
            zentras systems
          </span>
        </div>

        {/* Loading bar */}
        <div className="w-48 h-1 bg-primary-foreground/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-accent rounded-full animate-loading-bar"
            style={{
              animation: "loading-bar 1.2s ease-in-out infinite"
            }}
          />
        </div>
      </div>
    </div>
  );
};
