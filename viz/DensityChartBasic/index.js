import ReactDOM from "react-dom";
import { data } from "./data/";
import { PieChartBasic } from "./PieChartBasic";

const rootElement = document.getElementById("root");
ReactDOM.render(<PieChartBasic data={data} width={400} height={400} />, rootElement);
