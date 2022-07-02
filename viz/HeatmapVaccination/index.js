import ReactDOM from "react-dom";
import { data } from "./data";
import { Heatmap } from "./Heatmap";

const rootElement = document.getElementById("root");
ReactDOM.render(<Heatmap data={data} width={700} height={400} />, rootElement);
