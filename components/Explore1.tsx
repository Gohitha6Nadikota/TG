"use client";
import Image from "next/image";
function Explore1() {
  return (
    <div>
      <div className="w-[90vw] m-[50px] bg-[#FEECDF] flex flex-col md:flex-row-reverse md:justify-evenly rounded-2xl h-[680px] items-center justify-start ">
        <div className="flex items-start h-[400px] bg-black flex-col ">
          <div className="bg-[#bbbbbb] flex flex-row items-center justify-between w-[100%]">
            <p>Python</p>
            <div className="flex items-center justify-center">
              <p>
                <Image
                  src={"/assets/copy.png"}
                  style={{ backgroundColor: "grey" }}
                  alt={"copyicon"}
                  width={40}
                  height={40}
                />
              </p>
              <p className="pl-2">Copy Code</p>
            </div>
          </div>
          <div className="bg-[#e4e2a9] flex space-y-3 space-x-2 flex-wrap mt-[300px]">
            <button className="w-[60px] h-[40px] mt-[25px]">Curl://</button>
            <Image
              src={"/assets/js.png"}
              style={{ color: "black" }}
              alt={"js"}
              width={60}
              height={40}
            />
            <Image
              src={"/assets/php.png"}
              style={{ color: "black" }}
              alt={"php"}
              width={60}
              height={40}
            />
            <Image
              src={"/assets/python.png"}
              style={{ color: "black" }}
              alt={"python"}
              width={60}
              height={40}
            />
            <Image
              src={"/assets/ruby.png"}
              style={{ color: "black" }}
              alt={"ruby"}
              width={60}
              height={40}
            />
            <Image
              src={"/assets/php.png"}
              style={{ color: "black" }}
              alt={"php"}
              width={60}
              height={40}
            />
            <Image
              src={"/assets/python.png"}
              style={{ color: "black" }}
              alt={"python"}
              width={60}
              height={40}
            />
            <Image
              src={"/assets/ruby.png"}
              style={{ color: "black" }}
              alt={"ruby"}
              width={60}
              height={40}
            />
          </div>
        </div>
        <div className="mt-[150px] md:m-0 flex flex-col h-[200px] items-center justify-evenly">
          <h1 className="font-inter text-2xl md:text-4xl font-semibold leading-7 text-center">
            Build your own voice agent in
          </h1>
          <span className="font-inter text-lg md:text-2xl leading-7 text-center inline-block">
            just few lines of code
          </span>
        </div>
      </div>
    </div>
  );
}
export default Explore1;
