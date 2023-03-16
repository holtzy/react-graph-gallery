import { CircularBarplot } from "./CircularBarplot";
import ReactDOM from "react-dom";
import { data } from "./data/";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <CircularBarplot data={data} width={400} height={400} />,
  rootElement
);
