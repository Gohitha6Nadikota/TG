"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const GPTcard: React.FC = () => {
  const card2Ref = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);
  const [isCard2Visible, setCard2Visible] = useState(false);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartXRef.current = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndXRef.current = e.changedTouches[0].screenX;
      checkSwipeDirection();
    };

    const handleMouseDown = (e: MouseEvent) => {
      touchStartXRef.current = e.screenX;
    };

    const handleMouseUp = (e: MouseEvent) => {
      touchEndXRef.current = e.screenX;
      checkSwipeDirection();
    };

    const checkSwipeDirection = () => {
      if (touchEndXRef.current - touchStartXRef.current > 100) {
        // threshold for swipe right
        animateCardIn();
      }
    };

    const animateCardIn = () => {
      if (card2Ref.current) {
        setCard2Visible(true);
        gsap.fromTo(
          card2Ref.current,
          { x: "-100%" },
          { x: "0%", duration: 0.5, ease: "power2.out" }
        );
      }
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="relative w-72 h-48">
      <div className="absolute inset-0 flex items-center justify-center bg-white shadow-lg rounded-lg">
        Card 1
      </div>
      <div
        ref={card2Ref}
        className={`absolute inset-0 flex items-center justify-center bg-white shadow-lg rounded-lg ${
          isCard2Visible ? "" : "hidden"
        }`}
      >
        Card 2
      </div>
    </div>
  );
};

export default GPTcard;
