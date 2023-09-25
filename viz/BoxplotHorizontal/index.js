import ReactDOM from "react-dom";
import { data } from "./data";
import { Boxplot } from "./Boxplot";

const rootElement = document.getElementById("root");
ReactDOM.render(<Boxplot data={data} width={400} height={400} />, rootElement);
