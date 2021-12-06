import { useMemo, useState } from "react";
import { interpolate } from "flubber"; // ES6
import { animated, useSpring, config } from "react-spring";

type TriangleToPolygonAnimatedProps = {
  width: number;
  height: number;
};

const shape1 = "M10,140 L50,60 L90,140 Z";
const shape2 = "M350,50 L400,83 L400,116 L350,150 L300,116 L300,83 Z";

const buttonStyle = {
  border: "1px solid #9a6fb0",
  borderRadius: "3px",
  padding: "4px 8px",
  margin: "10px 2px",
  fontSize: 14,
  color: "#9a6fb0",
};

export const TriangleToPolygonAnimated = ({
  width,
  height,
}: TriangleToPolygonAnimatedProps) => {
  const [direction, setDirection] = useState(0);

  const pathInterpolator = interpolate(shape1, shape2);

  const springProps = useSpring({
    from: { t: 0 },
    t: 1,
    reverse: direction === 0,
    config: config.molasses,
  });

  return (
    <div>
      <div>
        <button style={buttonStyle} onClick={() => setDirection(0)}>
          Triangle
        </button>
        <button style={buttonStyle} onClick={() => setDirection(0.99)}>
          Polygon
        </button>
      </div>
      <div>
        <svg
          width={width}
          height={height}
          style={{ backgroundColor: "#f8f9fa", display: "inline-block" }}
        >
          <animated.path
            d={springProps.t.to((t: any) => pathInterpolator(t))}
            stroke="#9a6fb0"
            fill="#9a6fb0"
            strokeWidth={2}
            fillOpacity={springProps.t}
          />
        </svg>
      </div>
    </div>
  );
};
