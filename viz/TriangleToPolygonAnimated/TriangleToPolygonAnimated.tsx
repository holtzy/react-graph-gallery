import { useMemo, useState } from "react";
import { interpolate } from "flubber"; // ES6
import { animated, useSpring, to } from "react-spring";

type TriangleToPolygonAnimatedProps = {
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

export const TriangleToPolygonAnimated = ({
  width,
  height,
}: TriangleToPolygonAnimatedProps) => {
  const [step, setStep] = useState(0);

  const pathInterpolator = interpolate(shape1, shape2);

  const springProps = useSpring({
    from: { t: 0 },
    t: 1,
  });

  const [flip, set] = useState(false);
  const { number } = useSpring({
    reset: true,
    reverse: flip,
    from: { number: 0 },
    number: 1,
    delay: 200,
    onRest: () => set(!flip),
  });

  return <animated.div>{number.to((n) => n.toFixed(2))}</animated.div>;

  // return (
  //   <div>
  //     <div>
  //       <button style={buttonStyle} onClick={() => setStep(0)}>
  //         Triangle
  //       </button>
  //       <button style={buttonStyle} onClick={() => setStep(0.99)}>
  //         Polygon
  //       </button>
  //     </div>
  //     <div>
  //       <svg
  //         width={width}
  //         height={height}
  //         style={{ backgroundColor: "#f8f9fa", display: "inline-block" }}
  //       >
  //         <animated.path
  //           d={springProps.t.to((t) => pathInterpolator(t))}
  //           fill="transparent"
  //           stroke="#9a6fb0"
  //           strokeWidth={2}
  //         />
  //       </svg>
  //     </div>
  //   </div>
  // );
};
