import ReactDOM from "react-dom";
import { data } from "./data";
import { CircularPacking } from "./CircularPacking";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <CircularPacking data={data} width={400} height={400} />,
  rootElement
);
