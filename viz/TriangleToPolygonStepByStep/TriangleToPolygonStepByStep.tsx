import { useMemo, useState } from "react";
import { interpolate } from "flubber"; // ES6

type TriangleToPolygonStepByStepProps = {
  width: number;
  height: number;
};

const shape1 = "M10,140 L50,60 L90,140 Z";
const shape2 = "M350,50 L400,83 L400,116 L350,150 L300,116 L300,83";

const buttonStyle = {
  border: "1px solid #9a6fb0",
  borderRadius: "3px",
  padding: "4px 8px",
  margin: "10px 2px",
  fontSize: 14,
  color: "#9a6fb0",
};

export const TriangleToPolygonStepByStep = ({
  width,
  height,
}: TriangleToPolygonStepByStepProps) => {
  const [step, setStep] = useState(0);

  const interpolator = interpolate(shape1, shape2);
  const interpolatedShape = interpolator(step);

  return (
    <div>
      <div>
        {step < 1 && (
          <button style={buttonStyle} onClick={() => setStep(step + 0.1)}>
            Next
          </button>
        )}
        {step > 0 && (
          <button style={buttonStyle} onClick={() => setStep(step - 0.1)}>
            Previous
          </button>
        )}
        <span style={buttonStyle}>{"step: " + step.toFixed(1)}</span>
      </div>
      <div>
        <svg
          width={width}
          height={height}
          style={{ backgroundColor: "#f8f9fa", display: "inline-block" }}
        >
          <path
            d={interpolatedShape}
            fill="transparent"
            stroke="#9a6fb0"
            strokeWidth={2}
          />
        </svg>
      </div>
    </div>
  );
};
