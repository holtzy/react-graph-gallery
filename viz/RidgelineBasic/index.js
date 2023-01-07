import ReactDOM from "react-dom";
import { data } from "./data";
import { Ridgeline } from "./Ridgeline";

const rootElement = document.getElementById("root");
ReactDOM.render(<Ridgeline data={data} width={400} height={400} />, rootElement);
