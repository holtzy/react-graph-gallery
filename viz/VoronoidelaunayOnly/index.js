import ReactDOM from "react-dom";
import { data } from "./data";
import { Voronoi } from "./Voronoi";

const rootElement = document.getElementById("root");
ReactDOM.render(<Voronoi data={data} width={400} height={400} />, rootElement);
