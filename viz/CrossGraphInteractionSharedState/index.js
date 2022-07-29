import ReactDOM from "react-dom";
import { data } from "./data/";
import { Barplot } from "./Barplot";

const rootElement = document.getElementById("root");
ReactDOM.render(<Barplot data={data} width={400} height={400} />, rootElement);
