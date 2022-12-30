import ReactDOM from "react-dom";
import { VerticalViolinShape } from "./VerticalViolinShape";
import * as d3 from "d3";

const data = [
  -1, 0, 0, 4, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 2, 3, 4, 3, 2, 3, 10,
  3, 5, 5, 6, 4, 3, 5, 6, 6, 9, 9, 1, 9, 9, 8, 9, 9, 10, 6, 4, 3, 4, 3, 4, 3,
  10, 11,
];

const yScale = d3.scaleLinear().domain([-2, 12]).range([400, 0]);

const rootElement = document.getElementById("root");

ReactDOM.render(
  <svg style={{ width: 400, height: 400 }}>
    <VerticalViolinShape
      width={400}
      yScale={yScale}
      data={data}
      binNumber={10}
    />
  </svg>,
  rootElement
);
