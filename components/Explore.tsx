"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Explore() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="">
      <div className="w-[90vw] m-[50px] bg-[#FEECDF] flex flex-col md:flex-row-reverse md:justify-evenly rounded-2xl min-h-[680px]">
        <div className="flex items-center justify-center ">
          <video
            className="p-7"
            style={{ maxWidth: "100%", maxHeight: "auto" }}
            controls
            autoPlay
            loop
            muted
          >
            <source src="/videos/U.mp4" type="video/mp4" />
            Your browser does not support the video tag. Please use a modern web
            browser to view this content.
          </video>
        </div>
        <div className="flex items-center justify-center flex-col ">
          <h1 className="font-inter text-3xl font-semibold leading-7 text-center">
            Explore TOINGG in{" "}
            <span className="font-inter text-3xl font-semibold leading-7 text-center text-[#D38751]">
              GPT
            </span>{" "}
            store
          </h1>
          <ul className="flex flex-col list-disc p-7 space-y-4">
            <li className="font-inter text-base font-normal leading-[19.36px] text-left">
              Interactive Communication: Engage in single or batch calls using
              TOINGG GPT.
            </li>
            <li>
              Advanced Features: Leverage GPT for real-time sentiment analysis
              during calls.
            </li>
            <li>Data Export: Conveniently export call logs to CSV.</li>
            <li>
              Enhanced Usability: Tailored for users familiar with CSV
              functionalities.
            </li>
          </ul>
          <button className=" bg-[#D38751] p-4 text-white">Explore More</button>
        </div>
      </div>
    </div>
  );
}
export default Explore;
