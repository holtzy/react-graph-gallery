import ReactDOM from "react-dom";
import { data } from "./data";
import { ArcDiagram } from "./ArcDiagram";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ArcDiagram data={data} width={400} height={400} />,
  rootElement
);
