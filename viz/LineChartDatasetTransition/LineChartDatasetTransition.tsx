import { useState } from "react";
import { data } from "./data";
import { LineChart } from "./LineChart";

const BUTTONS_HEIGHT = 50;

type LineChartDatasetTransitionProps = {
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

export const LineChartDatasetTransition = ({
  width,
  height,
}: LineChartDatasetTransitionProps) => {
  const [selectedGroup, setSelectedGroup] = useState<"melanie" | "yan">(
    "melanie"
  );

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
      <LineChart
        width={width}
        height={height - BUTTONS_HEIGHT}
        data={data}
        selectedGroup={selectedGroup}
      />
    </div>
  );
};
