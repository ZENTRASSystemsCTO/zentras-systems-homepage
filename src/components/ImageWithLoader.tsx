import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  className?: string;
  skeletonClassName?: string;
}

export const ImageWithLoader = ({ 
  src, 
  alt, 
  className,
  skeletonClassName
}: ImageWithLoaderProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative">
      {/* Skeleton overlay - visible until image loads */}
      <div 
        className={cn(
          "absolute inset-0 z-10 transition-opacity duration-500",
          isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        )}
      >
        <Skeleton 
          className={cn(
            "w-full h-full rounded-xl",
            skeletonClassName
          )} 
        />
      </div>
      
      {/* Image with fade-in effect */}
      <img
        src={src}
        alt={alt}
        loading="eager"
        className={cn(
          className,
          "transition-opacity duration-500",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};
