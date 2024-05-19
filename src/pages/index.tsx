import Jumbotron from "@/components/organism/Jumbotron";
import Navbar from "@/components/organism/Navbar";
import { useEffect } from "react";
import gsap from "gsap";

export default function Home() {
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    // const movements = [-100, 300, 150, -130, -90, 100, -200];

    // gsap.set("h1", { transform: "scale(1, -0)" });

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
    tl.to(".content-wrapper", {
      display: "block",
      duration: 0.5,
      ease: "power1.out",
    });

    // tl.to("h1", {
    //   fontSize: "2rem",
    //   duration: 0.7,
    //   ease: "power3.out",
    //   stagger: 0.03,
    // });
  }, []);

  return (
    <main>
      <div className="tw-bg-black tw-h-screen tw-fixed tw-w-full"></div>
      <Navbar />
      <Jumbotron />
      <div className="content-wrapper tw-h-screen tw-bg-yellow-200 tw-relative tw-z-[2]">
        <p className="tw-text-black ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis unde
          sequi magni dolores culpa est enim, dolor, vero fugiat mollitia earum
          illum accusamus fuga dignissimos obcaecati repudiandae eaque officiis
          consectetur.
        </p>
      </div>
    </main>
  );
}
