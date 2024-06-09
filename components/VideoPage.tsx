"use client";
import Image from "next/image";
function VideoPage() {
    return (
      <div className="flex justify-center items-center flex-col w-[100%]">
        <h1 className="pt-[38px] font-inter text-base font-medium leading-[21.78px] text-center text-[#797979] w-[100%]">
          Automate your agent with 5000+ integrations like
        </h1>
        <div className="h-[200px] w-[80%] flex flex-row items-center justify-center space-x-3">
          <button>
            <Image
              src={"https://call.toingg.com/images/google-sheets-icon.svg"}
              alt={"gsheet"}
              width={30}
              height={40}
            />
          </button>
          <button>
            <Image
              src={"https://call.toingg.com/images/Calendly.svg"}
              alt={"calendly"}
              width={30}
              height={40}
            />
          </button>
          <button>
            <Image
              src={"https://call.toingg.com/images/HubSpot.svg"}
              alt={"hubspot"}
              width={30}
              height={40}
            />
          </button>
          <button>
            <Image
              src={"https://call.toingg.com/images/salesforce.svg"}
              alt={"salesforce"}
              width={30}
              height={40}
            />
          </button>
          <button>
            <Image
              src={"https://call.toingg.com/images/slack.svg"}
              alt={"slack"}
              width={30}
              height={40}
            />
          </button>
        </div>
        <div className="w-[88vw] p-[6vw] md:p-[2vw]">
          <iframe
            width="100%"
            height="500"
            src={"https://www.youtube.com/embed/_La3wQlntgw"}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
}
export default VideoPage
