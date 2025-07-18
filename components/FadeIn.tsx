import React, { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";

type FadeInProps = {
  children: React.ReactNode;
  duration?: number;
  className?: string;
};

const FadeIn = ({ children, duration = 0, className }: FadeInProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = elementRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, duration);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [duration]);

  return (
    <div
      ref={elementRef}
      className={clsx(
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2",
        className
      )}
    >
      {children}
    </div>
  );
};

export default FadeIn;
