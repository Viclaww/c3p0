"use client"
// import { Titillium_Web } from "next/font/google";
import Image from "next/image";
// const titillium = Titillium_Web({weight: "700", subsets: ["latin"]});
const LogoStunt = ({showing} : {showing: boolean}) => {
    console.log("showing", showing);
    return (
      <div className={` ${showing ? "" : "opacity-0 pointer-events-none"}  absolute duration-300 w-screen text-9xl bg-black h-screen flex flex-col items-center justify-center gap-4 top-0 left-0`}>
       <Image className="w-full h-full bg-cover md:hidden" src="/video.gif" alt="100" width={100} height={100}/>
       <Image className="w-full h-full bg-auto hidden md:block" src="/desktop.gif" alt="100" width={100} height={100}/>
      </div>
    );
}

export default LogoStunt;