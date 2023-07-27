import ReactDOM from "react-dom";
import { data } from "./data";
import { Hexbin } from "./Hexbin";

const rootElement = document.getElementById("root");
ReactDOM.render(<Hexbin data={data} width={400} height={400} />, rootElement);
