import ReactDOM from "react-dom";
import { VerticalBox } from "./VerticalBox";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <svg  width={400} height={400}>
        <VerticalBox
            width={100}
            q1={100}
            median={200}
            q3={50}
            min={380}
            max={10}
            stroke="black"
            fill={"#ead4f5"}
        />
    </svg>,
rootElement);
