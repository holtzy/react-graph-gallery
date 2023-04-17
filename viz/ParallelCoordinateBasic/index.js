import ReactDOM from "react-dom";
import { data } from "./data";
import { PieChart } from "./ParallelCoordinate";

const rootElement = document.getElementById("root");
ReactDOM.render(<PieChart data={data} width={400} height={400} />, rootElement);
