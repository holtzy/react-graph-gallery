import { useEffect } from "react";
import * as d3 from "d3";
import { interpolatePath } from "d3-interpolate-path";

const shape1 = "M50,10 L90,50 L50,90 L10,50 Z ";
const shape2 = "M10,10 L50,30 L90,10 L90,90 L50,70 L10,90 Z";
const shape3 = "M40,40 L80,20 L60,60 L20,80 Z";
const shape4 = "M40,40 L60,40 L60,60 L45,55 Z";
const shape5 = "M10,40 L90,40 L90,60 L10,60 Z";
const shape6 =
  "M10,40 L20,20 L35,25 L55,10 L90,40 L90,40 L90,40 L90,60 L10,60 Z";

const animate = () => {
  d3.select("#path1")
    .attr("d", shape1)
    .attr("fill", "#9a6fb0")
    .attr("fill-opacity", 0.1)
    .attr("stroke", "#9a6fb0")
    .attr("stroke-width", 1)
    .transition()
    .delay(1000)
    .duration(1000)
    .ease(d3.easeBounce)
    .attrTween("d", function () {
      return interpolatePath(shape1, shape2);
    })
    .transition()
    .duration(9000)
    .ease(d3.easeElastic)
    .attrTween("d", function () {
      return interpolatePath(shape2, shape3);
    })
    .transition()
    .duration(1000)
    .ease(d3.easeCubic)
    .attrTween("d", function () {
      return interpolatePath(shape3, shape4);
    })
    .transition()
    .duration(1000)
    .attrTween("d", function () {
      return interpolatePath(shape4, shape5);
    })
    .transition()
    .duration(2000)
    .attrTween("d", function () {
      return interpolatePath(shape5, shape6);
    })
    .transition()
    .delay(1000)
    .duration(100)
    .attrTween("d", function () {
      return interpolatePath(shape6, shape1);
    })
    .on("end", animate);
};

export const D3InterpolatePathDemo = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => {
  useEffect(() => animate(), []);
  return (
    <svg
      height={width}
      width={height}
      viewBox="0 0 100 100"
      style={{ display: "inline-block" }}
    >
      <path id="path1" />
    </svg>
  );
};
