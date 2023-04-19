import React from "react";
import Image from "next/image";
import { useTrail, animated } from "@react-spring/web";

const Stagger = ({ className, children }: any) => {
  const items = React.Children.toArray(children);
  const [trails, api] = useTrail(
    1,
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
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

const Header = () => {
  return (
    <div className="tw-flex tw-justify-between tw-items-center">
      <div>
        <Stagger>
          <Image
            alt="logo jeekwar"
            src={"/../public/assets/img/logoJeekwar.png"}
            width={20}
            height={60}
          />
        </Stagger>
      </div>
      <Stagger>
        <ul className="tw-flex tw-text-base tw-font-BebasNeue tw-gap-12">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </Stagger>
    </div>
  );
};

export default Header;
