import ReactDOM from "react-dom";
import { data } from "./data";
import { Histogram } from "./Histogram";

const rootElement = document.getElementById("root");
ReactDOM.render(<Histogram data={data} width={400} height={400} />, rootElement);
