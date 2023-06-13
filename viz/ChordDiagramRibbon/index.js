import ReactDOM from "react-dom";
import { data } from "./data/";
import { ChordDiagram } from "./ChordDiagram";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ChordDiagram data={data} width={400} height={400} />,
  rootElement
);
