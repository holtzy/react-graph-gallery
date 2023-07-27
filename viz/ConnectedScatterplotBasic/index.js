import ReactDOM from "react-dom";
import { data } from "./data/";
import { LineChart } from "./LineChart";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <LineChart data={data} width={400} height={400} />,
  rootElement
);
