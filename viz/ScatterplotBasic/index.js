import ReactDOM from "react-dom";
import { data } from "./correlation-2-num-variables-gapminder";
import { ScatterplotBasic } from "./ScatterplotBasic";

const rootElement = document.getElementById("root");
ReactDOM.render(<ScatterplotBasic data={data} width={400} height={400} />, rootElement);
