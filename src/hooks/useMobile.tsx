"use client";

import { useState, useEffect } from "react";

export type ScreenSize = "mobile" | "tablet" | "desktop" | "large";

export function useMobile() {
  const [screenSize, setScreenSize] = useState<ScreenSize>("desktop");
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const checkScreenSize = () => {
      const currentWidth = window.innerWidth;
      setWidth(currentWidth);

      if (currentWidth < 768) {
        setScreenSize("mobile");
      } else if (currentWidth < 992) {
        setScreenSize("tablet");
      } else if (currentWidth < 1200) {
        setScreenSize("desktop");
      } else {
        setScreenSize("large");
      }
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return {
    screenSize,
    width,
    isMobile: screenSize === "mobile",
    isTablet: screenSize === "tablet",
    isDesktop: screenSize === "desktop" || screenSize === "large",
  };
}
