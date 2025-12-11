import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  className?: string;
  skeletonClassName?: string;
  aspectRatio?: string; // e.g., "16/9", "4/3", "1/1"
}

export const ImageWithLoader = ({ 
  src, 
  alt, 
  className,
  skeletonClassName,
  aspectRatio = "16/9"
}: ImageWithLoaderProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Preload image
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setHasError(true);
  }, [src]);

  if (hasError) {
    return (
      <div 
        className={cn("bg-muted rounded-xl flex items-center justify-center", skeletonClassName)}
        style={{ aspectRatio }}
      >
        <span className="text-muted-foreground text-sm">Bild konnte nicht geladen werden</span>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Skeleton placeholder with fixed aspect ratio */}
      {!isLoaded && (
        <Skeleton 
          className={cn(
            "w-full rounded-xl",
            skeletonClassName
          )}
          style={{ aspectRatio }}
        />
      )}
      {/* Image - only render when loaded */}
      {isLoaded && (
        <img
          src={src}
          alt={alt}
          className={cn(
            className,
            "animate-fade-in"
          )}
        />
      )}
    </div>
  );
};
