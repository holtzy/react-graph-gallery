import ReactDOM from "react-dom";
import { data } from "./data";
import { ParallelCoordinate } from "./ParallelCoordinate";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ParallelCoordinate
    data={data}
    width={600}
    height={500}
    variables={["petalLength", "petalWidth", "sepalLength", "sepalWidth"]}
  />,
  rootElement
);
