import React, { useEffect } from "react";
import anime from "animejs";
import { SplashStore } from "@/stores/splash-store";

export default function Splash() {
  const useSplashStore = SplashStore();

  const update = (anim: boolean) => {
    useSplashStore.setIsDoneLoading(anim);
  };

  useEffect(() => {
    const animationFinished = () => {
      anime({
        targets: "#loading-svg path",
        fill: "#737373",
        complete: function (anim) {
          update(anim.completed);
        },
      });
    };

    const animationSplahs = anime({
      targets: "#loading-svg path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutQuad",
      translateX: 44,
      translateY: 70,
      strokeWidth: 3,
      scale: 0.5,
      delay: 500,
      duration: 2000,
      direction: "alternate",
      loop: false,
    });

    animationSplahs.finished.then(animationFinished);
  }, []);

  return (
    <svg id="loading-svg" width="164px" height="326px">
      <path
        stroke={"white"}
        strokeWidth={0}
        fill="none"
        d="M132.335,210.643 L101.585,210.643 L98.19,197.721 L98.19,306.173 C98.19,318.975 91.573,325.375 78.683,325.375 L19.63,325.375 C6.441,325.375 0.130,318.975 0.130,306.173 L0.130,254.476 L31.417,254.476 L31.417,298.385 L66.598,298.385 L66.598,193.771 L61.974,210.643 L31.90,210.643 L0.340,0.230 L32.164,0.230 L48.412,124.840 C48.680,129.137 49.37,135.538 49.486,144.41 C49.574,139.745 49.977,133.345 50.694,124.840 L68.822,74.230 L94.603,74.230 L97.468,82.230 L98.19,82.230 L98.19,83.766 L112.730,124.840 C112.999,129.137 113.402,135.538 113.939,144.41 C114.27,139.745 114.386,133.345 115.13,124.840 L131.261,0.230 L163.84,0.230 L132.335,210.643 Z"
      ></path>
    </svg>
  );
}
