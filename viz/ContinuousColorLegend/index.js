import ReactDOM from "react-dom";
import * as d3 from "d3";
import { ColorLegend } from "./ColorLegend";

const colorScale = d3
  .scaleLinear()
  .domain([0, 100])
  .range(["#69b3a2", "purple"]);

const rootElement = document.getElementById("root");

ReactDOM.render(
  <ColorLegend width={400} height={100} colorScale={colorScale} />,
  rootElement
);
