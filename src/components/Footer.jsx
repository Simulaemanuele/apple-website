import React, { useEffect, useState } from "react";
import { footerLinks } from "../constants";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  const windowDimensions = useWindowDimensions();

  console.log("windowDimension: ", windowDimensions);

  const handleResize = () => {
    if (windowDimensions.width <= 760) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    console.log("isMobile: ", isMobile);
  };

  useEffect(() => {
    handleResize();
  }, [windowDimensions]);

  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop:{" "}
            <span className="underline text-blue"> Find an Apple Store</span> or{" "}
            <span className="underline text-blue"> other retailer</span> near
            you.
          </p>
          <p className="font-semibold text-gray text-xs">
            Or call 000800-041-1954
          </p>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />
        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Copyright @ 2024 Apple Inc. all rights reserved.
          </p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p
                key={link + i}
                className={`font-semibold text-gray text-xs ${
                  isMobile && "mr-2 mt-3"
                }`}
              >
                {link}{" "}
                {i !== footerLinks.length - 1 && (
                  <>{isMobile === false && <span className="mx-2"> | </span>}</>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
