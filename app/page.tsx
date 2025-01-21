"use client";
import React from "react";
import { Titillium_Web } from "next/font/google";
import LogoStunt from "./_components/logostunt";
import InfoSection from "./_components/infoboxes";
import LoginButton from "./_components/login-button";

const titillium = Titillium_Web({
  weight: ["200", "300", "400", "600", "700", "900"],
  subsets: ["latin"],
});

const Graph = () => {
  const [isShowingLogoStunt, setIsShowingLogoStunt] = React.useState(true);

  React.useEffect(() => {
    if (isShowingLogoStunt) {
      setTimeout(() => {
        setIsShowingLogoStunt(false);
      }, 2000);
    }
  }, [isShowingLogoStunt]);

  if (isShowingLogoStunt) {
    return <LogoStunt showing={isShowingLogoStunt} />;
  }
  return (
    <div className={`w-full h-full matrixbg font-bold ${titillium.className}`}>
      <div className="flex flex-col items-center justify-center h-screen pt-16 pb-4">
        <div className="w-full h-full flex flex-col items-center  gap-4">
          <h3>C-P30</h3>
          <div className="flex justify-center items-center md:w-1/2 flex-col text-center">
            <h3 className="text-[#93C7B1]">Your AI-Powered Assistant</h3>
            <h2 className={`text-4xl leading-relaxed ${titillium.className}`}>
              Smarter Tools, Trending Insights, and Effortless Trades – All in
              One Place
            </h2>
            <p className="text-xs font-light leading-relaxed">
              Experience the future with C-3P0. Dive straight into a world of
              trending ideas, seamless trades, and powerful AI integrations.
            </p>
            <LoginButton />
          </div>
          <InfoSection />
        </div>
      </div>
    </div>
  );
};

export default Graph;
