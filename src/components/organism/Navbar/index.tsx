import { Bebas_Neue } from "next/font/google";
import { useEffect, useState } from "react";
import gsap from "gsap";
import axios from "axios";
import { error } from "console";

const BebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  const menuList = ["Work", "Stack", "Contact"];

  const [ctime, setTime] = useState("");
  const [isMenuWrapper, setIsMenuWrapper] = useState(false);

  useEffect(() => {
    setInterval(() => {
      axios
        .get("http://worldtimeapi.org/api/timezone/Asia/Jakarta", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          setTime(new Date(res.data.datetime).toLocaleTimeString());
        })
        .catch((error) => {
          console.log("error", error);
        });
    }, 1000);
  }, []);

  return (
    <div className="navbar-wrapper tw-px-2 lg:tw-px-8 tw-pt-4 tw-fixed tw-w-full ">
      <div
        className={`tw-flex tw-font-['Anton'] jeekwar-wrapper tw-w-['fit-content']`}
      >
        <h1 className="J">J</h1>
        <h1 className="E1">E</h1>
        <h1 className="E2">E</h1>
        <h1 className="K">K</h1>
        <h1 className="W">W</h1>
        <h1 className="A">A</h1>
        <h1 className="R">R</h1>
      </div>

      <div
        className={`${BebasNeue.className} menu-wrapper tw-text-xs tw-flex tw-flex-col tw-items-center tw-justify-center tw-w-auto`}
      >
        <p>Jakarta, Indonesia</p>
        <p>{ctime}</p>
      </div>

      <div
        className="menu-wrapper tw-flex tw-justify-between tw-gap-4 tw-items-center"
        onMouseEnter={() => setIsMenuWrapper(true)}
        onMouseLeave={() => setIsMenuWrapper(false)}
      >
        {menuList.map((item, index) => (
          <p
            key={index}
            className={`${BebasNeue.className} tw-text-xl ${
              isMenuWrapper ? "tw-opacity-50 " : "tw-opacity-100"
            } hover:tw-opacity-100 tw-duration-500 tw-cursor-pointer`}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
