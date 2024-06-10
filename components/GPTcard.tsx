'use client'
import React, { useState } from "react";
import gsap from "gsap";
import Explore from "./Explore";
import Explore1 from "./Explore1";

const GPTcard: React.FC = () => {
  const [isCard1Visible, setCard1Visible] = useState(true);

  const handleCardClick = () => {
    if (isCard1Visible) {
      gsap.to("#card1", { opacity: 0, x: "-100%", duration: 0.5 });
      gsap.fromTo(
        "#card2",
        { opacity: 0, x: "100%" },
        { opacity: 1, x: "0%", duration: 0.5, ease: "power2.out" }
      );
    } else {
      gsap.to("#card2", { opacity: 0, x: "-100%", duration: 0.5 });
      gsap.fromTo(
        "#card1",
        { opacity: 0, x: "100%" },
        { opacity: 1, x: "0%", duration: 0.5, ease: "power2.out" }
      );
    }
    setCard1Visible(!isCard1Visible);
  };

  return (
    <div
      className="relative mt-[350px] m-0 w-[100%] flex items-center justify-center"
      onClick={handleCardClick}
    >
      <div
        id="card1"
        className="absolute inset-0 m-0 flex items-center justify-center bg-white shadow-lg rounded-lg w-[100%]"
      >
        <Explore />
      </div>
      <div
        id="card2"
        className="absolute inset-0 flex items-center justify-center bg-white shadow-lg rounded-lg w-[100%]"
        style={{ opacity: 0}}
      >
        <Explore1 />
      </div>
    </div>
  );
};

export default GPTcard;
