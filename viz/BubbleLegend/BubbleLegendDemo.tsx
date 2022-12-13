import { BubbleLegend } from "./BubbleLegend";
import * as d3 from "d3";

export const BubbleLegendDemo = ({ width = 700, height = 400 }) => {
  const sizeScale = d3.scaleSqrt().domain([0, 100]).range([0, 80]).nice();

  return (
    <div
      style={{
        width,
        height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BubbleLegend scale={sizeScale} tickNumber={4} />
    </div>
  );
};
