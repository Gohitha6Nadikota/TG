import { FaLinkedinIn, FaInstagramSquare, FaDiscord } from "react-icons/fa";
import { TbLetterX } from "react-icons/tb";

function Footer() {
  return (
    <div className=" w-[100%] flex items-center justify-center flex-col bg-gradient-to-t p-5 from-white to-[#FFD6B8]">
      <h1 className="font-inter text-5xl font-semibold leading-[60.51px] text-left w-197 h-61 top-5878 left-136">
        TOINGG
      </h1>
      <h2 className="font-inter text-xl md:text-2xl font-semibold leading-[29.05px] text-center w-324 h-58 top-5946 left-73 text-white">
        We are here to grow your business <span>❤️</span>
      </h2>
      <div className="flex flex-col md:flex-row m-3 items-center justify-center p-2">
        <h2 className="p-2">Terms and Conditions</h2>
        <h2 className="p-2">Privacy Policy</h2>
        <h2 className="p-2">Help Center</h2>
        <h2 className="p-2">API docs</h2>
        <h2 className="p-2">Careers</h2>
      </div>
      <div className=" w-[80%] flex flex-col md:flex-row-reverse items-center justify-center md:justify-between m-2 p-2">
        <div className="flex md:flex-row ">
          <FaLinkedinIn className="w-6 h-6 md:w-8 md:h-8 text-blue-500 mr-4" />
          <FaInstagramSquare className="w-6 h-6 md:w-8 md:h-8 text-pink-500 mr-4" />
          <TbLetterX className="w-6 h-6 md:w-8 md:h-8 text-gray-500 mr-4" />
          <FaDiscord className="w-6 h-6 md:w-8 md:h-8 text-purple-500" />
        </div>
        <div className="flex md:flex-row pt-5">
          <h2 className="font-inter text-base font-medium leading-[19.36px] text-left">
            Copyright © 2024
          </h2>
          <h2 className="font-inter text-base font-medium leading-[19.36px] text-left">
            Toingg, All rights reserved
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Footer;
