'use client';
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
    title: "Ultra-Fast Response",
    description:
      "Experience lightning-quick interactions with an impressive 500 ms response time, ensuring seamless conversations.",
    image: "/assets/Lightning Bolt.png",
  },
  {
    title: "Smart Interruption Management",
    description:
      "Our system adeptly handles interruptions, ensuring smooth, natural dialogues just like human conversations.",
    image: "/assets/Private.png",
  },
  {
    title: "Advanced Memory Recall",
    description:
      "Remembering context and details from earlier in the conversation, our AI provides a personalized and coherent interaction.",
    image: "/assets/Brain.png",
  },
  {
    title: "Dynamic Conversational Flows",
    description:
      "Navigate through complex conversations with ease, thanks to our AI's ability to understand and adapt to various conversational pathways.",
    image: "/assets/Planned Path.png",
  },
  {
    title: "Custom AI Solutions",
    description:
      "Leverage our proprietary AI models tailored to your specific business needs for unparalleled efficiency and effectiveness.",
    image: "/assets/Key.png",
  },
  {
    title: "Scalability at Your Fingertips",
    description:
      "From one-on-one conversations to managing 10,000 concurrent calls, our platform scales effortlessly with your business.",
    image: "/assets/Scale Up.png",
  },
];

function Sliders() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="md:max-w-[96vw] max-w-[75vw] m-0 p-0">
      <Slider {...settings}>
        {feature.map((feature, index) => (
          <FeatureBox
            key={index}
            title={feature.title}
            description={feature.description}
            image={feature.image}
          />
        ))}
      </Slider>
    </div>
  );
}

export default Sliders;
