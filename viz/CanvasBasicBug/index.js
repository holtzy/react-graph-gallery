import ReactDOM from "react-dom";
import { CanvasShape } from "./CanvasShape";

const rootElement = document.getElementById("root");
ReactDOM.render(<CanvasShape width={300} height={300} />, rootElement);
