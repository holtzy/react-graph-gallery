import { useEffect, useRef } from "react";
import * as d3 from "d3";

type XAxisProps = {
  xScale: d3.ScaleTime<number, number, never>;
  width: number;
};

export const XAxis = ({ xScale, width }: XAxisProps) => {
  const axisRef = useRef(null);

  // Render the X and Y axis using d3.js, not react
  useEffect(() => {
    const xAxisElement = d3.select(axisRef.current);
    xAxisElement.selectAll("*").remove();

    let xAxisGenerator = d3.axisBottom(xScale);
    xAxisElement.append("g").call(xAxisGenerator);

    // Enable panning
    let isPanning = false;
    let startMouseX = 0;
    let startOldestDate = 0;
    let startLatestDate = 0;

    const handleMouseDown = (e) => {
      isPanning = true;
      startMouseX = e.clientX;
      startOldestDate = xScale.range()[0]; // Date at the very left of the X axis
      startLatestDate = xScale.range()[1]; // Date at the very left of the X axis
    };

    const handleMouseMove = (e) => {
      if (isPanning) {
        const dx = e.clientX - startMouseX;

        // When I move from 1 px, how many milliseconds further am I?
        const ratioPixelTime = xScale.invert(1) - xScale.invert(0);

        const newXDomain = xScale
          .domain()
          .map((value) => new Date(value - dx * ratioPixelTime));

        xScale.domain(newXDomain);

        xAxisElement.select("g").call(xAxisGenerator);
      }
    };

    const handleMouseUp = () => {
      isPanning = false;
    };

    xAxisElement
      .on("mousedown", handleMouseDown)
      .on("mousemove", handleMouseMove)
      .on("mouseup", handleMouseUp);

    return () => {
      // Cleanup event listeners
      xAxisElement.on("mousedown", null);
      xAxisElement.on("mousemove", null);
      xAxisElement.on("mouseup", null);
    };
  }, [xScale]);

  return <g width={width} ref={axisRef} />;
};
