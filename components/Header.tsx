"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import Link from "next/link";
import TryNow from "./TryNow";
function NavBar() {
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 const toggleMenu = () => {
   setIsMenuOpen(!isMenuOpen);
 };
  return (
    <header className="py-6 w-[100%]">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="font-inter text-xl font-semibold leading-[21.78px] pl-[15px]">
          Toingg
        </h1>
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu
            style={{ color: "#D38751" }}
            className="text-2xl mr-[4vw]"
          />
        </button>
        <nav className="md:flex hidden">
          <ul className="md:flex md:space-x-4 md:items-center">
            <li className="px-[6px] py-[15px] hover:bg-[#D38751] rounded-lg">
              <Link href="#">Contact</Link>
            </li>
            <li className="px-[6px] py-[15px] hover:bg-[#D38751] rounded-lg">
              <Link href="#">Pricing</Link>
            </li>
            <li className="px-[6px] py-[15px] hover:bg-[#D38751] rounded-lg">
              <Link href="#">Documentation</Link>
            </li>
            <li className="px-[6px] py-[15px] hover:bg-[#D38751] rounded-lg">
              <Link href="#">Join our Community</Link>
            </li>
          </ul>
        </nav>
      </div>
      {isMenuOpen ? (
        <nav className="md:hidden z-10 bg-gradient-to-b from-[#FEECDF] to-[#D38751] rounded-lg m-5 pt-[30px]">
          <ul className="md:flex md:space-x-4 md:items-center text-black font-semibold w-[94vw] h-[561px] flex items-center justify-start space-y-[60px] flex-col">
            <li className="px-6 py-15 flex items-center justify-between w-[100%]">
              <a href="#">Contact</a>
              <LiaLongArrowAltRightSolid className="mr-3" />
            </li>
            <li className="px-6 py-15 flex items-center justify-between w-[100%]">
              <a href="#">Pricing</a>
              <LiaLongArrowAltRightSolid className="mr-3" />
            </li>
            <li className="px-6 py-15 flex items-center justify-between w-[100%]">
              <a href="#">Documentation</a>
              <LiaLongArrowAltRightSolid className="mr-3" />
            </li>
            <li className="px-6 py-15 flex items-center justify-between w-[100%]">
              <a href="#">Join our Community</a>
              <LiaLongArrowAltRightSolid className="mr-3" />
            </li>
          </ul>
        </nav>
      ) : (
        <div className="flex flex-col md:flex-row justify-center items-center w-[100vw]">
          <div className="flex justify-evenly items-center m-6 md:m-0 flex-col mt-24">
            <h1 className="font-inter text-[#868686] text-5xl font-medium leading-[60.51px] text-center">
              Build AI Calling Agent that can do
            </h1>
            <span className="font-inter text-4xl font-bold leading-[58.09px] text-left">
              Sales Call
            </span>
            <div className="flex md:flex-row flex-col justify-center items-center">
              <button className=" bg-gradient-to-br from-[#FFA96B] to-[#995B2E] shadow-md m-5 p-3 flex justify-center flex-col items-center">
                <h1 className="text-white text-xl font-semibold leading-[21.78px] text-left">
                  Build your own voice agent
                </h1>
                <h2 className="text-black text-base font-medium leading-[19.36px] text-left p-2">
                  It's free
                </h2>
              </button>
              <button className="w-[251px] h-[54px] top-[554px] left-[113px] gap-0 border border-black rounded-lg m-5 p-3">
                <h1 className="text-black">Hear it in action</h1>
              </button>
            </div>
          </div>
          <div className="md:ml-1">
            <TryNow />
          </div>
        </div>
      )}
    </header>
  );
}

export default NavBar;
