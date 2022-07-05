import ReactDOM from "react-dom";
import { data } from "./data";
import { DensityChart } from "./DensityChart";

const rootElement = document.getElementById("root");
ReactDOM.render(<DensityChart data={data} width={400} height={400} />, rootElement);
