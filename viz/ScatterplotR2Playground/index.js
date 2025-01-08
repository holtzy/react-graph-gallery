import ReactDOM from "react-dom";
import { data } from "./data";
import { Scatterplot } from "./Scatterplot";

const rootElement = document.getElementById("root");
ReactDOM.render(<Scatterplot data={data} width={400} height={400} />, rootElement);
