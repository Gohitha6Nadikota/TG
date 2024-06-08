"use client";
import Image from "next/image";
function Explore1() {
  return (
    <div>
      <div className="m-5">
        <div className="flex items-start h-[400px] bg-black ">
          <div className="bg-[#bbbbbb] flex items-center justify-between w-[100%]">
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
              <p>Copy Code</p>
            </div>
          </div>
        </div>
        <div className="bg-[#e4e2a9] flex space-y-3 space-x-2 flex-wrap">
          <button>Curl://</button>
          <Image
            src={"/assets/js.png"}
            style={{ color: "black" }}
            alt={"js"}
            width={40}
            height={40}
          />
          <Image
            src={"/assets/php.png"}
            style={{ color: "black" }}
            alt={"php"}
            width={40}
            height={40}
          />
          <Image
            src={"/assets/python.png"}
            style={{ color: "black" }}
            alt={"python"}
            width={40}
            height={40}
          />
          <Image
            src={"/assets/ruby.png"}
            style={{ color: "black" }}
            alt={"ruby"}
            width={40}
            height={40}
          />
          <Image
            src={"/assets/js.png"}
            style={{ color: "black" }}
            alt={"js"}
            width={40}
            height={40}
          />
          <Image
            src={"/assets/php.png"}
            style={{ color: "black" }}
            alt={"php"}
            width={40}
            height={40}
          />
          <Image
            src={"/assets/python.png"}
            style={{ color: "black" }}
            alt={"python"}
            width={40}
            height={40}
          />
          <Image
            src={"/assets/ruby.png"}
            style={{ color: "black" }}
            alt={"ruby"}
            width={40}
            height={40}
          />
        </div>
        <div>
          <h1
            style={{
              fontFamily: "Inter",
              fontSize: "24px",
              fontWeight: 600,
              lineHeight: "29.05px",
              textAlign: "center",
            }}
          >
            Build your own voice agent in{" "}
            <span
              style={{
                fontFamily: "Inter",
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: "28.41px",
                textAlign: "center",
                display: "inline-block",
              }}
            >
              just few lines of code
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
export default Explore1;
