import ReactDOM from "react-dom";
import { data } from "./data/";
import { StackedAreaChart } from "./StackedAreaChart";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StackedAreaChart data={data} width={400} height={400} />,
  rootElement
);
