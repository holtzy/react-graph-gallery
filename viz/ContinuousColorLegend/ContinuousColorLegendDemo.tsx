import * as d3 from "d3";
import { ColorLegend } from "./ColorLegend";

export const ContinuousColorLegendDemo = ({ width = 700, height = 400 }) => {
  const colorScale = d3
    .scaleLinear<string>()
    .domain([0, 100])
    .range(["#69b3a2", "purple"]);

  return <ColorLegend width={width} height={height} colorScale={colorScale} />;
};
