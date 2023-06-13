import ReactDOM from "react-dom";
import { data } from "./data/";
import { AreaChart } from "./AreaChart";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <AreaChart data={data} width={400} height={400} />,
  rootElement
);
