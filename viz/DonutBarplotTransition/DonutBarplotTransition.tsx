import { useState } from "react";
import { data } from "./data";
import { DonutBarplotChart } from "./DonutBarplotChart";

const BUTTONS_HEIGHT = 50;

type DonutBarplotTransitionProps = {
  width: number;
  height: number;
};

const buttonStyle = {
  border: "1px solid #9a6fb0",
  borderRadius: "3px",
  padding: "0px 8px",
  margin: "10px 2px",
  fontSize: 14,
  color: "#9a6fb0",
  opacity: 0.7,
};

export const DonutBarplotTransition = ({
  width,
  height,
}: DonutBarplotTransitionProps) => {
  const [type, setType] = useState<"pie" | "bar">("pie");

  return (
    <div>
      <div style={{ height: BUTTONS_HEIGHT }}>
        <button style={buttonStyle} onClick={() => setType("pie")}>
          Pie chart
        </button>
        <button style={buttonStyle} onClick={() => setType("bar")}>
          Barplot
        </button>
      </div>
      <DonutBarplotChart
        width={width}
        height={height - BUTTONS_HEIGHT}
        data={data}
        type={type}
      />
    </div>
  );
};
