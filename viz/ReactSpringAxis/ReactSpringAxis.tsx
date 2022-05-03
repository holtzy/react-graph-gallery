import { useState } from "react";
import { AxisBottom } from "./AxisBottom";
import * as d3 from "d3";

type ReactSpringAxisProps = {
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

export const ReactSpringAxis = ({ width, height }: ReactSpringAxisProps) => {
  const [limit, setLimit] = useState(40);

  const xScale = d3.scaleLinear().domain([0, limit]).range([0, width]);

  return (
    <div>
      <div>
        <button style={buttonStyle} onClick={() => setLimit(40)}>
          40
        </button>
        <button style={buttonStyle} onClick={() => setLimit(400)}>
          400
        </button>
      </div>
      <div style={{ width, height }}>
        <svg width={width - 50} height={height}>
          <AxisBottom xScale={xScale} pixelsPerTick={60} />
        </svg>
      </div>
    </div>
  );
};
