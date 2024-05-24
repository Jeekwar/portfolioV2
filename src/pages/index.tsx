import Jumbotron from "@/components/organism/Jumbotron";
import Navbar from "@/components/organism/Navbar";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      delay: 0.3,
    });

    tl.to("h1", {
      transform: "scale(1, 1)",
      duration: 1,
      ease: "power3.out",
      stagger: 0.03,
    });

    tl.to("h1", {
      y: 0,
      duration: 0.5,
      ease: "power3.out",
    });

    tl.to("h1", {
      fontSize: "2rem",
      margin: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.03,
    });

    tl.to(".navbar-wrapper", {
      display: "flex",
      justifyContent: "space-between",
      height: "fit-content",
      duration: 0.3,
    });

    // gsap.set(".menu-wrapper ul", { opacity: 1 });

    tl.to([".menu-wrapper"], {
      opacity: 1,
      duration: 0.5,
      ease: "power1.out",
    });

    tl.to(".jumbotron", {
      opacity: 1,
      top: 0,
      duration: 0.5,
      ease: "power1.out",
    });

    tl.to(".jumbotron-desc-wrapper", {
      opacity: 1,
      top: 0,
      duration: 0.5,
      ease: "power1.out",
    });

    tl.to([".scroll-wrapper", ".scroll-arrow1", ".scroll-arrow2"], {
      opacity: 1,
      duration: 0.5,
      ease: "power1.out",
    });

    tl.to(".content-wrapper", {
      display: "block",
      duration: 0.5,
      ease: "power1.out",
    });

    gsap.to(".work-title", {
      y: "0px",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".work-title",
        start: "top bottom",
        onToggle: (self) => console.log(self),
      },
    });

    // tl.fromTo(
    //   ".jumbotron-desc-wrapper",
    //   {
    //     opacity: 1,
    //   },
    //   {
    //     opacity: 0,
    //     scrollTrigger: {
    //       trigger: ".work-title",
    //       start: "center bottom",
    //       end: "+=200",
    //       scrub: true,
    //     },
    //   }
    // );
  }, []);

  return (
    <main>
      <div className="tw-bg-[#b3bfce] tw-h-screen tw-fixed tw-w-full"></div>
      <Navbar />
      <Jumbotron />

      <div className="tw-h-screen tw-bg-[#b3bfce] tw-relative tw-z-[2] ">
        <div className="tw-h-screen tw-bg-[#242424] tw-relative tw-z-[2] content-wrapper lg:tw-w-[95%] tw-m-auto tw-rounded-xl tw-overflow-hidden lg:tw-px-4">
          <div className="tw-absolute tw-w-full tw-z-[9] tw-flex tw-flex-col tw-gap-[10rem]">
            <div className="tw-flex tw-justify-start-start tw-w-full tw-pt-16 work-title-wrapper tw-overflow-hidden tw-mx-4">
              <h2
                className={` tw-text-[#b3bfce] tw-text-5xl tw-font-['Anton'] tw-text-[12vw] work-title`}
              >
                C
              </h2>
              <h2
                className={`tw-text-[#b3bfce] tw-text-5xl tw-font-['Anton'] tw-text-[12vw] work-title`}
              >
                O
              </h2>
              <h2
                className={` tw-text-[#b3bfce] tw-text-5xl tw-font-['Anton'] tw-text-[12vw] work-title`}
              >
                R
              </h2>
              <h2
                className={`tw-text-[#b3bfce] tw-text-5xl tw-font-['Anton'] tw-text-[12vw] work-title`}
              >
                E
              </h2>
            </div>
            <div className="works-items">
              <hr />
              <div className="works-item">
                <p>Item Name</p>
              </div>
              <hr />
              <div className="works-item">
                <p>Item Name</p>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
