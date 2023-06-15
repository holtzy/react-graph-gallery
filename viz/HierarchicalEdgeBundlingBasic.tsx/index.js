import ReactDOM from "react-dom";
import { data } from "./data";
import { HierarchicalEdgeBundling } from "./HierarchicalEdgeBundling";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <HierarchicalEdgeBundling data={data} width={600} height={600} />,
  rootElement
);
