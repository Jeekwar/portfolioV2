import React from "react";
import { useTrail, animated } from "@react-spring/web";

const Stagger = ({ className, children }: any) => {
  const items = React.Children.toArray(children);
  const [trails, api] = useTrail(
    2,
    () => ({
      config: { mass: 5, tension: 2000, friction: 100 },
      from: { opacity: 0, y: 20 },
      to: { opacity: 1, y: 0 },
    }),
    []
  );

  return (
    <div>
      {trails.map((props, i) => (
        <animated.div style={props} className={className} key={i}>
          {items[i]}
        </animated.div>
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <div className="md:tw-min-h-[620px] tw-flex tw-items-center tw-justify-center">
      <Stagger className="tw-font-Anton tw-text-9xl tw-text-center">
        <span>{`I'm a FrontEnd Developer`}</span>
        <span>{`based in Jakarta`}</span>
      </Stagger>
    </div>
  );
};

export default Hero;
