import { useState } from "react";
import { data } from "./data";
import { LineChart } from "./LineChart";
import { csv } from "d3";

const BUTTONS_HEIGHT = 50;

type LineChartPageViewsProps = {
  width: number;
  height: number;
};

const buttonStyle = {
  border: "1px solid #9a6fb0",
  borderRadius: "3px",
  padding: "4px 8px",
  margin: "10px 2px",
  fontSize: 14,
  color: "#9a6fb0",
  opacity: 0.7,
};

export const LineChartPageViews = ({
  width,
  height,
}: LineChartPageViewsProps) => {
  const [selectedGroup, setSelectedGroup] = useState<"melanie" | "yan">(
    "melanie"
  );

  const jsonData = csv("./data.csv").then((d) => console.log(d));

  return (
    <div>
      <div style={{ height: BUTTONS_HEIGHT }}>
        <button style={buttonStyle} onClick={() => setSelectedGroup("melanie")}>
          Melanie
        </button>
        <button style={buttonStyle} onClick={() => setSelectedGroup("yan")}>
          Yan
        </button>
      </div>
      {/* <LineChart
        width={width}
        height={height - BUTTONS_HEIGHT}
        data={data}
        selectedGroup={selectedGroup}
      /> */}
    </div>
  );
};
