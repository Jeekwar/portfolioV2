import { Bebas_Neue, Anton, Barlow_Condensed } from "next/font/google";
import { IconArrowNarrowDown } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import gsap from "gsap";

// const BebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });
const BarlowCondensed = Barlow_Condensed({ subsets: ["latin"], weight: "400" });

const Jumbotron = () => {
  const [mouseEnter, setMouseEnter] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.1 });

    if (mouseEnter) {
      tl.to([".scroll-arrow1", ".scroll-arrow2"], {
        top: 0,
        duration: 0.3,
        ease: "power1.out",
      });
    }

    if (!mouseEnter) {
      tl.to([".scroll-arrow1", ".scroll-arrow2"], {
        top: "-24px",
        duration: 0.3,
        ease: "power1.out",
      });
    }
  }, [mouseEnter]);

  return (
    <div
      className={`tw-h-screen tw-flex tw-flex-col tw-gap-24 tw-items-center tw-justify-center`}
    >
      <div className="tw-overflow-hidden tw-relative">
        <div className={`tw-font-['Anton'] jumbotron tw-top-14 tw-flex`}>
          <h5 className="w">W</h5>
          <h5 className="e">E</h5>
          <h5 className="b">B</h5>
          <h5 className="strip">-</h5>
          <h5 className="d">D</h5>
          <h5 className="e2">E</h5>
          <h5 className="v">V</h5>
        </div>
      </div>

      <div className="tw-flex tw-justify-start tw-w-full tw-px-12">
        <div className="tw-w-[480px] tw-text-[24px] jumbotron-desc-wrapper">
          <div className="tw-relative tw-overflow-hidden">
            <p
              className={`${BarlowCondensed.className} desc-jumbotron1 tw-top-14 tw-text-white`}
            >
              With years of <span className="tw-text-black">experience</span>, I
              specialize in{" "}
              <span className="tw-text-black">creating dynamic</span> and{" "}
              <span className="tw-text-black">
                user-friendly web solutions.
              </span>
            </p>
          </div>
          <div
            className={`${BarlowCondensed.className} tw-relative tw-overflow-hidden`}
          >
            <p className="desc-jumbotron2 tw-top-14 tw-text-white">
              {"Let's build something amazing together!"}
            </p>
          </div>
          {/* <p className="tw-text-white tw-relative">
            I excel in collaborating with product managers and UI/UX designers
            to deliver projects that meet requirements and optimize system
            performance.
          </p> */}
        </div>
      </div>
      <div className="tw-w-full tw-flex tw-justify-end tw-relative tw-pr-[6rem]">
        <div className="scroll-wrapper tw-flex tw-flex-col tw-items-center tw-gap-2">
          <div
            className="tw-border-2 tw-border-[#fff] tw-flex tw-justify-center tw-items-center tw-rounded-3xl tw-p-2 tw-px-8"
            onMouseEnter={() => setMouseEnter(true)}
            onMouseLeave={() => setMouseEnter(false)}
          >
            <p className="tw-text-black">Scroll down</p>
          </div>
          <div className="tw-h-7 tw-overflow-hidden">
            <IconArrowNarrowDown color="white" className="scroll-arrow1 " />
            <IconArrowNarrowDown color="white" className="scroll-arrow2 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
