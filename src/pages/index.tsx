import Jumbotron from "@/components/organism/Jumbotron";
import Navbar from "@/components/organism/Navbar";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Work } from "@/components/organism/Work";
import { Stack } from "@/components/organism/Stack";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Home() {
  const main = useRef<HTMLElement | any>();

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline({
        delay: 0.3,
        defaults: {
          inherit: false,
        },
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
        onComplete: () => {
          gsap.to([".jumbotron", ".jumbotron-desc-wrapper"], {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power1.out",
          });
        },
      });

      tl.to(".navbar-wrapper", {
        display: "flex",
        justifyContent: "space-between",
        height: "fit-content",
        duration: 0.3,
      });

      tl.to([".menu-wrapper"], {
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
      });

      tl.to([".scroll-wrapper", ".scroll-arrow1", ".scroll-arrow2"], {
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
      });

      tl.to(".content-wrapper", {
        height: "100vh",
        duration: 0,
        ease: "power1.out",
      }).then(() => tl.kill());

      gsap.to(".work-title", {
        inherit: false,
        scrollTrigger: {
          trigger: ".work-title",
          start: "top bottom",
          end: "+=200",
        },
        y: 0,
        stagger: 0.1,
        ease: "power1.out",
        duration: 0.3,
      });

      const scrollTl = gsap.timeline({
        defaults: {
          inherit: false,
        },
        scrollTrigger: {
          trigger: "main",
          pin: true,
          start: "top top",
          end: "+=300",
          scrub: 1,
        },
      });

      scrollTl.to(".w", {
        y: "-8rem",
        opacity: 0,
      });

      const scroll2Tl = gsap.timeline({
        defaults: {
          inherit: false,
        },
        scrollTrigger: {
          trigger: "main",
          pin: true,
          start: "+=20",
          end: "+=320",
          scrub: 1,
        },
      });
      scroll2Tl.to(".e", {
        y: "-8rem",
        opacity: 0,
      });

      const scrollBTl = gsap.timeline({
        defaults: {
          inherit: false,
        },
        scrollTrigger: {
          trigger: "main",
          pin: true,
          start: "+=40",
          end: "+340",
          scrub: 1,
        },
      });
      scrollBTl.to(".b", {
        y: "-8rem",
        opacity: 0,
      });

      const scrollStripTl = gsap.timeline({
        defaults: {
          inherit: false,
        },
        scrollTrigger: {
          trigger: "main",
          pin: true,
          start: "+=60",
          end: "+=360",
          scrub: 1,
        },
      });
      scrollStripTl.to(".strip", {
        y: "-8rem",
        opacity: 0,
      });

      // D scroll effect
      const scrollDTl = gsap.timeline({
        defaults: {
          inherit: false,
        },
        scrollTrigger: {
          trigger: "main",
          pin: true,
          start: "+=80",
          end: "+=380",
          scrub: 1,
        },
      });
      scrollDTl.to(".d", {
        y: "-8rem",
        opacity: 0,
      });

      // E2 Scroll effect
      const scrollE2Tl = gsap.timeline({
        defaults: {
          inherit: false,
        },
        scrollTrigger: {
          trigger: "main",
          pin: true,
          start: "+=100",
          end: "+=400",
          scrub: 1,
        },
      });
      scrollE2Tl.to(".e2", {
        y: "-8rem",
        opacity: 0,
      });

      // V scroll effect
      const scrollVTl = gsap.timeline({
        defaults: {
          inherit: false,
        },
        scrollTrigger: {
          trigger: "main",
          pin: true,
          start: "+=120",
          end: "+=420",
          scrub: 1,
        },
      });
      scrollVTl.to(".v", {
        y: "-8rem",
        opacity: 0,
      });

      // V scroll effect
      const scrolldescJumboTl = gsap.timeline({
        defaults: {
          inherit: false,
        },
        scrollTrigger: {
          trigger: "main",
          start: "+=20",
          end: "+=300",
          scrub: 1,
        },
      });
      scrolldescJumboTl.to([".desc1", ".desc2", ".desc3", ".scroll-wrapper"], {
        y: "-2rem",
        opacity: 0,
      });

      // tl.to(".work-title", {
      //   y: 0,
      // });

      // gsap.to(".work-title", {
      //   y: 0,
      //   defaults: {
      //     immediateRender: false,
      //   },
      //   scrollTrigger: {
      //     trigger: ".work-title",
      //     scrub: true,
      //     // markers: true,
      //   },
      // });
    },
    { scope: main }
  );

  return (
    <main ref={main}>
      <Navbar />
      <div className="tw-bg-[#b3bfce] tw-h-screen tw-w-full">
        <Jumbotron />
      </div>
      <Work />
      <Stack />
    </main>
  );
}
