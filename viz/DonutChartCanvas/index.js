import ReactDOM from "react-dom";
import { data } from "./data";
import { DonutChart } from "./DonutChart";

const rootElement = document.getElementById("root");
ReactDOM.render(<DonutChart data={data} width={400} height={400} />, rootElement);
