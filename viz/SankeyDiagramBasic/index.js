import ReactDOM from "react-dom";
import { data } from "./data/";
import { Sankey } from "./Sankey";

const rootElement = document.getElementById("root");
ReactDOM.render(<Sankey data={data} width={400} height={400} />, rootElement);
