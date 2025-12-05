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
    console.log("Loading DNA animation...");
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

  // Slow down animation after it loads
  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.15); // Very slow playback
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
    <div className={`relative ${className}`}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={true}
        autoplay={true}
        className="w-full h-full"
        style={{
          filter: "hue-rotate(-15deg) saturate(1.3) brightness(1.05)",
        }}
      />
    </div>
  );
};
