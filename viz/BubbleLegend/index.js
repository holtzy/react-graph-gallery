import ReactDOM from "react-dom";
import { BubbleLegend } from "./BubbleLegend";
import * as d3 from "d3";

const rootElement = document.getElementById("root");

const sizeScale = d3.scaleSqrt().domain([0, 100]).range([0, 80]).nice();

ReactDOM.render(
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
  </div>,
  rootElement
);
