import ReactDOM from "react-dom";
import { data } from "./data/";
import { Dumbbell } from "./Dumbbell";

const rootElement = document.getElementById("root");
ReactDOM.render(<Dumbbell data={data} width={400} height={400} />, rootElement);
