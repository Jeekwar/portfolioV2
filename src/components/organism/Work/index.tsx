import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
import { Barlow_Condensed, Bebas_Neue } from "next/font/google";
import Image from "next/image";

const BebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });
const BarlowCondensed = Barlow_Condensed({ subsets: ["latin"], weight: "400" });

export const Work = () => {
  const imgSource = [
    "/assets/img/kelas-pintar-preview.png",
    "/assets/img/anelist.png",
  ];

  const removeExtraImages = (container: any) => {
    while (container?.children.length > 10) {
      container.removeChild(container.firstChild);
    }
  };

  const appendImages = (src: string) => {
    const preview1 = document.querySelector(".preview-img");
    // const preview2 = document.querySelector(".preview-img-2");

    const img1 = document.createElement("img");
    // const img2 = document.createElement("img");

    img1.src = src;
    img1.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";

    // img2.src = src;
    // img2.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";

    preview1?.appendChild(img1);
    // preview2?.appendChild(img2);

    gsap.to([img1], {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      duration: 0.5,
      ease: "power3.out",
      onComplete: () => {
        removeExtraImages(preview1);
        // removeExtraImages(preview2);
      },
    });
  };

  // const mouseOverAnimation = (elem) => {
  //   gsap.to(elem.querySelectorAll("p"));
  // };

  useEffect(() => {
    // document.addEventListener("mousemove", function (e) {
    //   const preview = document.querySelector(".preview");
    //   gsap.to(preview, {
    //     y: e.clientY,
    //     x: e.clientX,
    //     duration: 1,
    //     ease: "power3.out",
    //   });
    // });
  });

  return (
    <div className="tw-bg-[#b3bfce] tw-relative tw-z-[2]">
      <div className="tw-bg-[#242424] tw-relative tw-z-[2] content-wrapper lg:tw-w-[95%] tw-m-auto tw-rounded-xl tw-overflow-hidden ">
        <div className="tw-w-full tw-flex tw-flex-col tw-gap-[2rem] tw-h-full tw-px-[2rem] tw-py-[2rem]">
          <div className="tw-flex tw-justify-start-start tw-w-full work-title-wrapper tw-overflow-hidden ">
            <h2
              className={` tw-text-[#b3bfce]  tw-font-['Anton'] tw-text-[13vh] work-title`}
            >
              W
            </h2>
            <h2
              className={`tw-text-[#b3bfce]  tw-font-['Anton'] tw-text-[13vh] work-title`}
            >
              O
            </h2>
            <h2
              className={` tw-text-[#b3bfce]  tw-font-['Anton'] tw-text-[13vh] work-title`}
            >
              R
            </h2>
            <h2
              className={`tw-text-[#b3bfce]  tw-font-['Anton'] tw-text-[13vh] work-title`}
            >
              K
            </h2>
            <h2
              className={`tw-text-[#b3bfce]  tw-font-['Anton'] tw-text-[13vh] work-title`}
            >
              &
            </h2>
            <h2
              className={`tw-text-[#b3bfce]  tw-font-['Anton'] tw-text-[13vh] work-title`}
            >
              P
            </h2>
            <h2
              className={`tw-text-[#b3bfce]  tw-font-['Anton'] tw-text-[13vh] work-title`}
            >
              R
            </h2>
            <h2
              className={`tw-text-[#b3bfce]  tw-font-['Anton'] tw-text-[13vh] work-title`}
            >
              O
            </h2>
            <h2
              className={`tw-text-[#b3bfce]  tw-font-['Anton'] tw-text-[13vh] work-title`}
            >
              J
            </h2>
            <h2
              className={`tw-text-[#b3bfce]  tw-font-['Anton'] tw-text-[13vh] work-title`}
            >
              E
            </h2>
            <h2
              className={`tw-text-[#b3bfce]  tw-font-['Anton'] tw-text-[13vh] work-title`}
            >
              C
            </h2>
            <h2
              className={`tw-text-[#b3bfce]  tw-font-['Anton'] tw-text-[13vh] work-title`}
            >
              T
            </h2>
          </div>
          <div className="preview">
            <div className="preview-img"></div>
          </div>
          <div
            className="work-items tw-flex tw-flex-col tw-justify-between"
            onMouseOut={() => {
              gsap.to(".preview-img img", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                duration: 0.5,
                ease: "power3.out",
              });
            }}
          >
            <hr className="tw-mt-[6rem]" />
            <div
              className="work-item work-item-1 tw-py-3 tw-px-2"
              onMouseEnter={() => {
                appendImages(imgSource[0]);
              }}
            >
              <div>
                <p
                  className={`tw-text-[1.6rem] tw-font-bold ${BebasNeue.className}`}
                >
                  Kelas Pintar
                </p>
                <p className={`suisse-font tw-text-xs`}>June 2024 - Present</p>
              </div>
              <div className="tw-w-3/5">
                <p className={`tw-text-justify suisse-font`}>
                  {`As a developer, I collaborated with UI/UX designers to create a user-friendly product using the Next.js framework and worked with Backend, DevOps, QA, and the Project Manager to prioritize the technical backlog. I ensured effective, understandable code and validated requirements with the Product Manager to select appropriate technologies. This collaborative effort led to a successful revamp completed in September 2023, including bug fixes and usability testing.`}
                </p>
              </div>
            </div>
            <hr />
            <div
              className="work-item work-item-2 tw-py-3 tw-px-2"
              onMouseEnter={() => {
                appendImages(imgSource[1]);
              }}
            >
              <div>
                <p
                  className={`tw-text-[1.6rem] tw-font-bold ${BebasNeue.className}`}
                >
                  Self Employed
                </p>
                <p className={`suisse-font tw-text-xs`}>April 2019 - 2022</p>
              </div>
              <div className="tw-w-3/5">
                <p className={`tw-text-justify suisse-font`}>
                  {`I created and designed a web-based solution to meet the client's specific needs, enhancing their ideas to optimize the user interface and experience. Using HTML, JavaScript, CSS, PHP, and MySQL, I conducted end-to-end development for e-commerce websites, from planning to launch. After launching, I delivered the project to the client, performed usability testing, and fixed any bugs.`}
                </p>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};
