"use client";
import Image from "next/image";
import { FaLock } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { BsFunnelFill } from "react-icons/bs";
import { MdOutlineBalance } from "react-icons/md";
import { AiOutlineAudit } from "react-icons/ai";
function Security() {
  return (
    <div className="w-[80%] flex justify-center items-center flex-col  md:flex-row space-y-2 space-x-3 m-5">
      <Image
        src={"/assets/Security Shield.png"}
        alt="secure"
        width={96}
        height={88}
      />
      <div className="flex justify-center items-center flex-col space-y-5">
        <h1 className="font-inter text-2xl font-semibold leading-[29.05px] text-center w-[100%]">
          Highest Standards of Trust and Safety
        </h1>
        <p className="font-inter text-base font-normal leading-[21.78px] text-center">
          With robust internal audits and stringent data governance, we champion
          the ethical use of AI, ensuring technology serves humanity's best
          interests. Our commitment sets the foundation for Advanced General
          Intelligence (AGI) with integrity.
        </p>
      </div>
      <div className="flex flex-wrap items-center flex-row md:flex-col justify-center ">
        <div className="flex flex-col items-center justify-center ">
          <button className="bg-[#e49054] rounded-full p-5 m-7">
            <IoCall className="text-3xl text-white " />
          </button>
          <h1>Call Monitoring</h1>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <button className="bg-[#e49054] rounded-full p-5 m-7">
            <BsFunnelFill className="text-3xl text-white " />
          </button>
          <h1>Prompt Injection</h1>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <button className="bg-[#e49054] rounded-full p-5 m-7">
            <MdOutlineBalance className="text-3xl text-white " />
          </button>
          <h1>Rate Limits</h1>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <button className="bg-[#e49054] rounded-full p-5 m-7">
            <AiOutlineAudit className="text-3xl text-white " />
          </button>
          <h1>Internal Hard Audits</h1>
        </div>
      </div>
    </div>
  );
}

export default Security;
