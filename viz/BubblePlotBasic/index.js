import ReactDOM from "react-dom";
import { data } from "./data";
import { BubblePlot } from "./BubblePlot";

const rootElement = document.getElementById("root");
ReactDOM.render(<BubblePlot data={data} width={400} height={400} />, rootElement);
