import ReactDOM from "react-dom";
import { data } from "./hierarchy-1-level-random";
import { Treemap } from "./Treemap"

const rootElement = document.getElementById("root");

ReactDOM.render(<Treemap data={data} width={400} height={400} />, rootElement);
