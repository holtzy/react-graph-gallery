import ReactDOM from "react-dom";
import { data } from "./data";
import { Correlogram } from "./Correlogram";

const rootElement = document.getElementById("root");
ReactDOM.render(<Correlogram data={data} width={400} height={400} />, rootElement);
