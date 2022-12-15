import { useState } from "react";
import { data } from "./data";
import { BubblePlot } from "./BubblePlot";

const BUTTONS_HEIGHT = 50;

type BubblePlotDatasetTransitionProps = {
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

export const BubblePlotDatasetTransition = ({
  width,
  height,
}: BubblePlotDatasetTransitionProps) => {
  const [year, setYear] = useState<number>(1952);

  const selectedData = data.filter((item) => item.year === year);

  const allYears = [...new Set(data.map((d) => d.year))];

  return (
    <div>
      {/* Select button */}
      <select value={year} onChange={(e) => setYear(Number(e.target.value))}>
        {allYears.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      <BubblePlot
        width={width}
        height={height - BUTTONS_HEIGHT}
        data={selectedData}
      />
    </div>
  );
};
