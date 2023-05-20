import { useState } from "react";
import { data, data2 } from "./data";
import { LineChart } from "./LineChart";

export const LineChartSyncCursorDemo = ({ width = 700, height = 400 }) => {
  const [cursorPosition, setCursorPosition] = useState<number | null>(null);

  return (
    <div style={{ display: "flex" }}>
      <LineChart
        data={data}
        width={width / 2}
        height={height}
        cursorPosition={cursorPosition}
        setCursorPosition={setCursorPosition}
        color={"#e85252"}
      />
      <LineChart
        data={data2}
        width={width / 2}
        height={height}
        cursorPosition={cursorPosition}
        setCursorPosition={setCursorPosition}
        color={"#6689c6"}
      />
    </div>
  );
};
