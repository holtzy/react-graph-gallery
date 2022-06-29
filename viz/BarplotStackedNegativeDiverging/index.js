import ReactDOM from "react-dom";
import { data } from "./data/";
import { StackedBarplot } from "./StackedBarplot";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StackedBarplot data={data} width={400} height={400} />,
  rootElement
);
