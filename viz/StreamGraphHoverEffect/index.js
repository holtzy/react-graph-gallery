import ReactDOM from "react-dom";
import { data } from "./data/";
import { StreamGraph } from "./StreamGraph";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StreamGraph data={data} width={400} height={400} />,
  rootElement
);
