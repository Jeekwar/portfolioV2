import React, { useEffect } from "react";
import anime from "animejs";

const Home = () => {
  useEffect(() => {
    // document.location = "/main";
    // const lineDrawing = anime.timeline({
    //   autoplay: true,
    //   delay: 200,
    // });

    // lineDrawing.add
    anime({
      targets: "#loading-svg path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "linear",
      fill: "white",
      duration: 10000,
      delay: function (el, i) {
        return i * 250;
      },
      direction: "alternate",
      loop: true,
    });
  }, []);

  return (
    <div className="tw-bg-black tw-w-screen tw-h-screen tw-m-0 tw-flex tw-justify-center tw-items-center">
      <svg id="loading-svg" width={1000} height={500}>
        <path
          stroke={"white"}
          strokeWidth={3}
          d="M195.21,157.942v67.407H152.241V157.942H95.979V341.23h56.262v-71.3H195.21v71.3h56.262V157.942H195.21ZM338.484,297.456V267.512h66.87V226.826h-66.87V200.239H421.2v-42.3H283.3V341.23H421.2V297.456H338.484Zm161.267-1.209v-138.3H443.489V341.23h128.5V296.247H499.751Zm148.108,0v-138.3H591.6V341.23H720.1V296.247H647.859Zm231.36,21.485q24.3-26.316,24.3-69.959,0-42.162-24.1-67.407t-62.372-25.244q-41.36,0-64.654,26.788t-23.3,67.877q0,42.972,24.371,68.616t63.043,25.647Q854.912,344.05,879.219,317.732Zm-89.563-66.468q0-54.515,27.661-54.516,25.645,0,25.647,47.8,0,33.031-6.244,45.452t-20.477,12.421q-26.587,0-26.587-51.16h0Z"
        ></path>
      </svg>
    </div>
  );
};

export default Home;
