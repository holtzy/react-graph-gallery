type AxesProps = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export const Axes = ({ x, y, width, height }: AxesProps) => {
  return (
    <g>
      {/* vertical and horizontal lines */}
      <line
        x1={0}
        x2={width}
        y1={y}
        y2={y}
        stroke="#ababab"
        strokeDasharray="2"
      />
      <line
        x1={x}
        x2={x}
        y1={0}
        y2={height}
        stroke="#ababab"
        strokeDasharray="2"
      />

      {/* labels for X axis */}
      <text
        x={0}
        y={y - 15}
        fill="#ababab"
        fontSize={16}
        textRendering={"optimizeLegibility"}
        dominantBaseline={"Auto"}
      >
        High Readiness
      </text>
      <text
        x={0}
        y={y - 37}
        fill="#ababab"
        fontSize={16}
        textRendering={"optimizeLegibility"}
        dominantBaseline={"Auto"}
      >
        &uarr;
      </text>

      <text
        x={0}
        y={y + 15}
        fill="#ababab"
        fontSize={16}
        textRendering={"optimizeLegibility"}
        dominantBaseline={"Hanging"}
      >
        Low Readiness
      </text>
      <text
        x={0}
        y={y + 37}
        fill="#ababab"
        fontSize={16}
        textRendering={"optimizeLegibility"}
        dominantBaseline={"Hanging"}
      >
        &darr;
      </text>
    </g>
  );
};
