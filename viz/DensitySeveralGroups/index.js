import ReactDOM from "react-dom";
import { data } from "./data";
import { Density } from "./Density";

const rootElement = document.getElementById("root");
ReactDOM.render(<Density data={data} width={400} height={400} />, rootElement);
