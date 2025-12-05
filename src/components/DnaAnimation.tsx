import { useEffect, useRef, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

interface DnaAnimationProps {
  className?: string;
}

export const DnaAnimation = ({ className = "" }: DnaAnimationProps) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const containerRef = useRef<HTMLDivElement>(null);
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
        setAnimationData(data);
      })
      .catch((err) => {
        console.error("Failed to load animation:", err);
        setError(err.message);
      });
  }, []);

  // Scroll-coupled animation
  useEffect(() => {
    if (!lottieRef.current || !animationData) return;

    const lottie = lottieRef.current;
    lottie.stop();

    const totalFrames = lottie.getDuration(true) || 100;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Use 2500px of scroll for animation (much slower progression)
      const scrollProgress = Math.min(scrollY / 2500, 1);
      const frame = scrollProgress * totalFrames;
      lottie.goToAndStop(frame, true);
    };

    // Initial frame
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
      ref={containerRef}
      className={`relative ${className}`}
      style={{
        transform: "rotate(-45deg) scale(1.8)",
        transformOrigin: "center center",
      }}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={false}
        autoplay={false}
        className="w-full h-full"
        style={{
          // Shift to ZENTRAS teal/cyan colors (original is purple/blue)
          filter: "hue-rotate(-40deg) saturate(1.2) brightness(1.15)",
        }}
      />
    </div>
  );
};
