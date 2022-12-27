import ReactDOM from "react-dom";
import { data } from "./data";
import { Contour } from "./Contour";

const rootElement = document.getElementById("root");
ReactDOM.render(<Contour data={data} width={400} height={400} />, rootElement);
