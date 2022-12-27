import { data } from "./data";
import { Violin } from "./Violin";
import { useState } from "react";

const HEADER_HEIGHT = 70;
const FOOTER_HEIGHT = 50;
const FONT_STYLE = { color: "grey", fontSize: 14 };

export const ViolinBucketSizeEffectDemo = ({ width = 700, height = 400 }) => {
  const [bucketNumber, setBucketNumber] = useState(5);
  const [smoothing, setSmoothing] = useState(false);

  return (
    <div style={{ height, width }}>
      {/* Row 1 = slider */}
      <div
        style={{
          height: HEADER_HEIGHT,
          marginLeft: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <i>
            <span style={FONT_STYLE}>
              {"Each violin shape based on approx. " +
                bucketNumber +
                " buckets "}
            </span>
          </i>
          <input
            type="range"
            min={2}
            max={20}
            value={bucketNumber}
            step={1}
            onChange={(e) => setBucketNumber(Number(e.target.value))}
            style={{ height: 2, opacity: 0.5, marginLeft: 10 }}
          />
        </div>
      </div>

      {/* Row 2 = chart */}
      <Violin
        data={data}
        width={width}
        height={height - HEADER_HEIGHT - FOOTER_HEIGHT}
        smoothing={smoothing}
        bucketNumber={bucketNumber}
      />

      {/* Row 3 = violin type */}
      <div style={{ height: FOOTER_HEIGHT }}>
        <i style={FONT_STYLE}>
          You can use{" "}
          <span
            style={{
              color: "purple",
              cursor: "pointer",
              textDecoration: smoothing ? "underline" : "none",
            }}
            onClick={() => setSmoothing(true)}
          >
            smoothing
          </span>{" "}
          or{" "}
          <span
            style={{
              color: "purple",
              cursor: "pointer",
              textDecoration: !smoothing ? "underline" : "none",
            }}
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
