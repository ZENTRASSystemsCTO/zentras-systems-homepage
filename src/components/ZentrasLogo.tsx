import { cn } from "@/lib/utils";
import zentrasLogo from "@/assets/zentras-logo.png";

interface ZentrasLogoProps {
  variant?: "light" | "dark";
  className?: string;
  showWordmark?: boolean;
}

export const ZentrasLogo = ({ 
  variant = "dark", 
  className,
  showWordmark = true 
}: ZentrasLogoProps) => {
  const isLight = variant === "light";
  
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {/* Logomark */}
      <img 
        src={zentrasLogo} 
        alt="zentras Logo" 
        className="w-8 h-8 object-contain"
      />
      
      {/* Wordmark */}
      {showWordmark && (
        <span className={cn(
          "text-xl font-semibold tracking-tight",
          isLight ? "text-primary-foreground" : "text-primary"
        )}>
          zentras systems
        </span>
      )}
    </div>
  );
};
