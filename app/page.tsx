"use client";
import React from "react";
import { Titillium_Web } from "next/font/google";
import LogoStunt from "./_components/logostunt";
// import InfoSection from "./_components/infoboxes";
import LoginButton from "./_components/login-button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const titillium = Titillium_Web({
  weight: ["200", "300", "400", "600", "700", "900"],
  subsets: ["latin"],
});

const Graph = () => {
  const [isShowingLogoStunt, setIsShowingLogoStunt] = React.useState(true);
  const videoRef = React.useRef<HTMLVideoElement | null>(null);

  React.useEffect(() => {
    if (isShowingLogoStunt) {
      setTimeout(() => {
        setIsShowingLogoStunt(false);
        videoRef.current?.play();
      }, 4000);
    }
  }, [isShowingLogoStunt, videoRef]);

  if (isShowingLogoStunt) {
    return <LogoStunt showing={isShowingLogoStunt} />;
  }
  return (
    <div className={`w-full h-full matrixbg font-bold ${titillium.className}`}>
      {/* <div className="w-full md:hidden bg-white absolute h-full">
        <video
          className="fixed w-full top-0 left-0 h-screen"
          ref={videoRef}
          src="/c3p02.mp4"
        />
      </div> */}

      <div className="flex flex-col h-[100vh] items-center justify-center md:justify-start py-8 pb-4">
        <h3 className={cn("font-semibold text-xl", titillium.className)}>
          C-P30
        </h3>
        <div className="w-4/5 flex flex-col-reverse md:flex-row px-3 justify-center md:justify-around gap-6 items-center text-center mt-8">
          <div className="w-full md:w-1/2 flex items-center justify-center mb-10">
            <Image
              src="/Group 66.svg"
              alt="Image Profile"
              width={100}
              height={100}
              className="w-4/5"
            />
          </div>
          <div className="w-full md:w-1/2 ">
            <Image
              src="/Group 65.png"
              alt="Image Profile"
              width={400}
              height={200}
              className="w-full"
            />
          </div>
        </div>
        <div className=" flex flex-col items-center mb-20">
          <LoginButton />
        </div>
      </div>
    </div>
  );
};

export default Graph;
