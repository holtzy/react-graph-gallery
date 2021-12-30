import { useState } from "react";
import { CircleViz } from "./CircleViz";

type ReactSpringMostBasicProps = {
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
};

export const ReactSpringMostBasic = ({
  width,
  height,
}: ReactSpringMostBasicProps) => {
  const [position, setPosition] = useState(40);
  return (
    <div>
      <div>
        <button style={buttonStyle} onClick={() => setPosition(40)}>
          Left
        </button>
        <button style={buttonStyle} onClick={() => setPosition(width - 40)}>
          Right
        </button>
      </div>
      <div style={{ width, height }}>
        <CircleViz
          position={position}
          width={width}
          height={height}
          fill={position === 40 ? "#9a6fb0" : "#69b3a2"}
        />
      </div>
    </div>
  );
};
