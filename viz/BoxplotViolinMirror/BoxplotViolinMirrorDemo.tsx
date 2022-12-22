import { data } from "./data";
import { BoxplotViolinMirror } from "./BoxplotViolinMirror";
import { useState } from "react";

const HEADER_HEIGHT = 70;
const FOOTER_HEIGHT = 50;

export const BoxplotViolinMirrorDemo = ({ width = 700, height = 400 }) => {
  const [mirrorPosition, setMirrorPosition] = useState(0.6);
  const [smoothing, setSmoothing] = useState(true);

  return (
    <div style={{ height, width }}>
      <div
        style={{
          height: HEADER_HEIGHT,
          marginLeft: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div>
          <input
            type="range"
            min={0}
            max={1}
            value={mirrorPosition}
            step={0.01}
            onChange={(e) => setMirrorPosition(Number(e.target.value))}
            style={{ height: 2, opacity: 0.5 }}
          />
        </div>
      </div>
      <BoxplotViolinMirror
        data={data}
        width={width}
        height={height - HEADER_HEIGHT - FOOTER_HEIGHT}
        mirrorPosition={mirrorPosition}
        smoothing={smoothing}
      />
      <div style={{ height: FOOTER_HEIGHT }}>
        <i style={{ color: "grey", fontSize: 14 }}>
          You can use{" "}
          <span
            style={{ color: "purple", cursor: "pointer" }}
            onClick={() => setSmoothing(true)}
          >
            smoothing
          </span>{" "}
          or{" "}
          <span
            style={{ color: "purple", cursor: "pointer" }}
            onClick={() => setSmoothing(false)}
          >
            steps
          </span>
          .
        </i>
      </div>
    </div>
  );
};
