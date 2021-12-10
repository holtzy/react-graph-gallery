import ReactDOM from "react-dom";
import { BoxplotToViolinTransition } from "./BoxplotToViolinTransition";
import { data } from "./data/distribution-multi-groups-random";

const rootElement = document.getElementById("root");
ReactDOM.render(<BoxplotToViolinTransition width={800} height={300} data={data}/>, rootElement);
