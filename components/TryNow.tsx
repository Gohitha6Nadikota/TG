"use client";
import { useState } from "react";
import { IoCall } from "react-icons/io5";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function TryNow() {
  const [phone, setPhone] = useState("");
  return (
    <div
      style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.18)" }}
      className="w-[80%] h-[426px] text-black bg-gradient-to-t from-white to-[#FFD3B4] rounded-[20px] border border-[#E9E9E9] shadow-md m-0 md:m-0 pt-8 flex flex-col justify-center items-center space-y-4"
    >
      <h1 className="w-32 h-9 text-black font-inter text-2xl font-bold leading-[36.31px] text-left">
        Try Now
      </h1>
      <h2 className="w-48 max-w-[80%] h-5 font-inter text-sm lg:text-md font-medium leading-[19.36px] text-left text-[#989898]">
        Get a call from Toingg
      </h2>
      <label className="w-[80%] h-[40px] font-inter text-base font-medium leading-[19.36px] text-left rounded-[10px] ">
        <input
          type="text"
          placeholder="Name"
          className="w-full border rounded p-2 bg-transparent border-black mt-2"
        />
      </label>
      <label className="w-[80%] h-[42px] font-inter text-base font-medium leading-[19.36px] text-left rounded-[10px] border-[0.5px] border-[#000000]">
        <PhoneInput
          country={"us"}
          value={phone}
          onChange={(phone) => setPhone(phone)}
          inputStyle={{
            width: "100%",
            height: "40px",
            background: "transparent",
          }}
          dropdownStyle={{
            background: "#FFD3B4",
          }}
          buttonStyle={{
            background: "transparent !important",
          }}
        />
      </label>
      <label className="w-[80%] font-inter text-[10px] font-medium leading-[19.36px] text-left bg-transparent">
        <select className="border rounded-[10px] p-1 w-[100%] h-[40px] border-black bg-transparent">
          <option disabled selected className="bg-[#FFD3B4]">
            Choose your language
          </option>
          <option value="hindi" className="bg-[#FFD3B4]">
            Hindi
          </option>
          <option value="english" className="bg-[#FFD3B4]">
            English
          </option>
        </select>
      </label>
      <button className="bg-[#FF9345B0] rounded-full p-5">
        <IoCall className="text-2xl text-white" />
      </button>
    </div>
  );
}

export default TryNow;
