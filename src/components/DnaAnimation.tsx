import { useEffect, useRef, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

interface DnaAnimationProps {
  className?: string;
}

export const DnaAnimation = ({ className = "" }: DnaAnimationProps) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [animationData, setAnimationData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  // Load the animation
  useEffect(() => {
    fetch("/animations/dna-helix.json")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log("DNA animation loaded successfully");
        setAnimationData(data);
      })
      .catch((err) => {
        console.error("Failed to load animation:", err);
        setError(err.message);
      });
  }, []);

  // Set animation speed after it loads
  useEffect(() => {
    if (lottieRef.current && animationData) {
      // Reduce speed to 0.1x (very slow)
      lottieRef.current.setSpeed(0.1);
    }
  }, [animationData]);

  if (error) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <p className="text-primary-foreground/60 text-sm">Animation konnte nicht geladen werden</p>
      </div>
    );
  }

  if (!animationData) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="w-12 h-12 border-3 border-accent/30 border-t-accent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div 
      className={`relative ${className}`}
      style={{
        transform: "rotate(-45deg) scale(1.2)",
        transformOrigin: "center center",
        opacity: 0.5,
      }}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={true}
        autoplay={true}
        className="w-full h-full"
      />
    </div>
  );
};
