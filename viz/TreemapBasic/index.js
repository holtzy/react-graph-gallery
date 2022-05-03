import ReactDOM from "react-dom";
import { data } from "./hierarchy-1-level-random";
import { TreemapBasic } from "./TreemapBasic"

const rootElement = document.getElementById("root");

ReactDOM.render(<TreemapBasic data={data} width={400} height={400} />, rootElement);
