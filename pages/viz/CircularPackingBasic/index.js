import ReactDOM from "react-dom";
import { data } from "./hierarchy-1-level-random";
import { CircularPackingBasic } from "./CircularPackingBasic";

const rootElement = document.getElementById("root");
ReactDOM.render(<CircularPackingBasic data={data} width={400} height={400} />, rootElement);
