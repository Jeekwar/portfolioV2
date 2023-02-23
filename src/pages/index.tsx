// "use client";
import React, { useEffect } from "react";
import Splash from "@/components/splash";
// import { usePathname } from "next/navigation";
import { SplashStore } from "@/stores/splash-store";
import CSS from "csstype";

const Main = () => {
  const useSplashStore = SplashStore();

  const cardGlass: CSS.Properties = {
    background: "rgba( 255, 255, 255, 0.1 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 3px )",
    WebkitBackdropFilter: "blur( 3px )",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
  };

  useEffect(() => {
    console.log(useSplashStore.isDoneLoading);
  }, [useSplashStore]);

  return !useSplashStore.isDoneLoading ? (
    <div className="tw-bg-[#343433] tw-w-screen tw-h-screen tw-m-0 tw-flex tw-justify-center tw-items-center">
      <Splash />
      <div className="tw-absolute tw-bottom-4">
        <p className="tw-text-white">
          Coded by &bull;{" "}
          <a href="" className="">
            Jeekwar
          </a>{" "}
          All rights reserved &copy; 2023
        </p>
      </div>
    </div>
  ) : (
    <div className="tw-bg-white tw-h-screen tw-p-6">
      <div className="tw-w-full tw-h-full tw-flex tw-flex-col tw-bg-gradient-to-b tw-from-cyan-500 tw-to-blue-500 tw-rounded-3xl">
        <div className="tw-flex tw-justify-between tw-relative">
          <div className="tw-w-[20%] tw-h-20 tw-bg-white hover:tw-bg-transparent tw-transition tw-duration-300 tw-rounded-br-full tw-flex tw-items-center tw-justify-center">
            <p
              className="tw-text-[#708999] tw-font-semibold tw-font-Righteous tw-text-5xl hover:tw-text-6xl"
              style={{ transition: "0.3s" }}
            >
              Jeekwar
            </p>
          </div>
          <div>
            <nav className="tw-pr-6 tw-py-6">
              <ul className="tw-flex tw-gap-4 tw-font-semibold">
                <li className="hover:tw-pointer-events-auto animate__animated animate__fadeInUp">
                  About
                </li>
                <li className="animate__animated animate__fadeInUp">Project</li>
                <li className="animate__animated animate__fadeInUp">Contact</li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="tw-flex tw-items-center tw-justify-evenly tw-w-full tw-grow tw-flex-col">
          <div style={cardGlass} className="tw-p-24 ">
            <p className="tw-font-Righteous tw-font-semibold tw-text-3xl tw-text-cyan-900">
              JEFRI KURNIAWAN WARUWU
            </p>
          </div>
          <div>
            <p>{`I'm a Front End Web Developer, who based in Jakarta`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
