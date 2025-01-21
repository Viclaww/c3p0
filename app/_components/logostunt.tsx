"use client"
import { Titillium_Web } from "next/font/google";

const titillium = Titillium_Web({weight: "700", subsets: ["latin"]});
const LogoStunt = ({showing} : {showing: boolean}) => {

    console.log("showing", showing);
    return (
      <div className={` ${showing ? "" : "opacity-0 pointer-events-none"}  absolute duration-300 w-screen text-9xl bg-black h-screen flex flex-col items-center justify-center gap-4 top-0 left-0`}>
        <h2 className={`${titillium.className} fade-out-0 duration-300 `}>
          C- <span className="text-[#DAEBF7]">3P0</span>
        </h2>
      </div>
    );
}

export default LogoStunt;