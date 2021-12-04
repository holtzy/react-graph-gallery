import ReactDOM from "react-dom";
import { data } from "./data";
import { EventBarChart } from "./EventBarChart";

const rootElement = document.getElementById("root");
ReactDOM.render(<EventBarChart data={data} width={800} height={400} />, rootElement);
