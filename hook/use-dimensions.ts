import React, { useState, useEffect, useLayoutEffect } from "react";

// Hook:
// - check the dimension of a target ref
// - listen to window size change
// - return width and height

export const useDimensions = (targetRef: React.RefObject<HTMLDivElement>) => {

  const getDimensions = () => {
    return {
      width: targetRef.current ? targetRef.current.offsetWidth : 0,
      height: targetRef.current ? targetRef.current.offsetHeight : 0
    };
  };

  const [dimensions, setDimensions] = useState(getDimensions);

  const handleResize = () => {
    setDimensions(getDimensions());
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useLayoutEffect(() => {
    handleResize();
  }, []);

  return dimensions;
}

