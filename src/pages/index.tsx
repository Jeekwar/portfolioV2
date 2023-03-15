import React, { useEffect } from "react";
import Splash from "@/components/splash";
import { SplashStore } from "@/stores/splash-store";
import HomeMain from "@/components/HomeMain";


const Main = () => {
  const useSplashStore = SplashStore();

  useEffect(() => {
    console.log(useSplashStore.isDoneLoading);
  }, [useSplashStore]);

  return !useSplashStore.isDoneLoading ? (
    <div className="tw-bg-[#343433] tw-w-screen tw-h-screen tw-m-0 tw-flex tw-justify-center tw-items-center">
      <Splash />
      <div className="tw-absolute tw-bottom-4">
        <p className="animate__animated animate__fadeIn tw-text-white">
          Coded by &bull;{" "}
          <a href="" className="">
            Jeekwar
          </a>{" "}
          All rights reserved &copy; 2023
        </p>
      </div>
    </div>
  ) : (
    <HomeMain/>
  );
};

export default Main;
