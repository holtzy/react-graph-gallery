import ReactDOM from "react-dom";
import { data } from "./data/";
import { Lollipop } from "./Lollipop";

const rootElement = document.getElementById("root");
ReactDOM.render(<Lollipop data={data} width={400} height={400} />, rootElement);
