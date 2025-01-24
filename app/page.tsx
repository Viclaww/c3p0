"use client";
import React from "react";
import { Titillium_Web } from "next/font/google";
import LogoStunt, { ImageStunt } from "./_components/logostunt";
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
  const [isShowingWalkin, setIsShowingWalkin] = React.useState(true);

  React.useEffect(() => {
    if (isShowingLogoStunt) {
      setTimeout(() => {
        setIsShowingLogoStunt(false);
      }, 4000);
      setTimeout(() => {
        setIsShowingWalkin(false);
      }, 9000);
    }
  }, [isShowingLogoStunt]);

  if (isShowingLogoStunt) {
    return <LogoStunt showing={isShowingLogoStunt} />;
  }
  if(isShowingWalkin){
    return <ImageStunt showing={isShowingWalkin}/>
  }
  return (
    <div className={`w-full h-full matrixbg font-bold ${titillium.className}`}>
      <div className="flex flex-col h-[100vh] items-center justify-center md:justify-start py-8 pb-4">
        <h3 className={cn("font-semibold text-xl", titillium.className)}>
          C-3PO
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
