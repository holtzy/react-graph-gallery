import ReactDOM from "react-dom";
import { data } from "./data";
import { Violin } from "./Violin";

const rootElement = document.getElementById("root");
ReactDOM.render(<Violin data={data} width={400} height={400} />, rootElement);
