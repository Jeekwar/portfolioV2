import { Bebas_Neue, Anton } from "next/font/google";

const BebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const Jumbotron = (props) => {
  return (
    <div
      className={`${props.className} tw-h-screen tw-flex tw-flex-col tw-gap-24 tw-items-center tw-justify-center`}
    >
      {/* <p
        className={`${BebasNeue.className} jumbotron tw-opacity-0 tw-relative tw-top-14`}
      >
        Welcome home, I'm Jeekwar
      </p> */}

      <h5 className={` tw-font-['Anton'] jumbotron tw-top-14`}>
        WEB DEVELOPER
      </h5>

      <div className="jumbotron tw-top-14 tw-flex tw-justify-start tw-w-full tw-px-12">
        <p className={`tw-font-[''] tw-text-lg`}>
          With years of experience, I specialize in creating dynamic and
          user-friendly web solutions. <br /> I excel in collaborating with
          product managers and UI/UX designers <br /> to deliver projects that
          meet requirements and optimize system performance. <br /> Let's build
          something amazing together!
        </p>
      </div>
    </div>
  );
};

export default Jumbotron;
