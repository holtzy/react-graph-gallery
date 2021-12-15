import ReactDOM from "react-dom";
import { data } from "./data";
import { ViolinBasic } from "./ViolinBasic";

const rootElement = document.getElementById("root");
ReactDOM.render(<ViolinBasic data={data} width={400} height={400} />, rootElement);
