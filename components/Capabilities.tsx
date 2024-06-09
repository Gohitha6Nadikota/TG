"use client";
import Image from "next/image";
import CapabilityBox from "./CapabilityBox";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeatureBox from "./FeatureBox";

interface Feature {
  title: string;
  description: string;
  image: string;
}

const feature: Feature[] = [
  {
    title: "Swipe Right",
    description: "Simple swipe right functionality for easy navigation.",
    image: "/assets/Voice.png",
  },
  {
    title: "Custom Tools",
    description:
      "Enable your phone agent to access external APIs, live during the call, to access customer records and knowledgebases, and perform actions like scheduling appointments.",
    image: "/assets/Tools.png",
  },
  {
    title: "Dedicated Infrastructure",
    description:
      "Even during moments of high volume, your enterprise’ infrastructure is partitioned from our general API, increasing the reliability of your phone agents.",
    image: "/assets/Voice.png",
  },
];

function Capabilities() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="flex justify-center items-center flex-col w-[100%] mt-[100px] pt-5 bg-gradient-to-br from-orange-100 to-white rounded-lg">
        <div className="md:max-w-[96vw] max-w-[75vw] m-0 p-0">
          <Slider {...settings}>
            {feature.map((feature, index) => (
              <CapabilityBox
                key={index}
                title={feature.title}
                description={feature.description}
                image={feature.image}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Capabilities;

