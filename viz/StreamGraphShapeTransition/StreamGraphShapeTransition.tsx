import { useState } from "react";
import { StreamGraph } from "./StreamGraph";
import { data } from "./data";

const BUTTON_HEIGHT = 250;

export const StreamGraphShapeTransition = ({ width = 700, height = 400 }) => {
  const [offsetType, setOffsetType] = useState("silouhette");
  const [curveType, setCurveType] = useState("catMullRom");

  return (
    <div>
      <div
        style={{
          height: BUTTON_HEIGHT,
          display: "flex",
          marginTop: 20,
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: 14, marginRight: 5 }}>Offset type</span>
        <select
          onChange={(e) => {
            setOffsetType(e.target.value);
          }}
          value={offsetType}
          style={{ fontSize: 14 }}
        >
          <option value="silouhette">Silouhette</option>
          <option value="none">None</option>
          <option value="wiggle">Wiggle</option>
          <option value="diverging">Diverging</option>
          <option value="expand">Expand</option>
        </select>
        <span style={{ fontSize: 14, marginRight: 5, marginLeft: 35 }}>
          Curve type
        </span>
        <select
          onChange={(e) => {
            setCurveType(e.target.value);
          }}
          value={curveType}
          style={{ fontSize: 14 }}
        >
          <option value="curveBasis">Cubic basis spline</option>
          <option value="bumpX">Bezier Curve Horizontal</option>
          <option value="bumpY">Bezier Curve Vertical</option>
          <option value="curveCardinal">Cubic cardinal spline </option>
          <option value="catMullRom">Catmull–Rom spline</option>
          <option value="curveLinear">Polyline</option>
          <option value="curveNatural">Natural cubic spline</option>
          <option value="curveStep">Step function</option>
        </select>
      </div>
      <StreamGraph
        data={data}
        width={width}
        height={height - BUTTON_HEIGHT}
        offsetType={offsetType}
        curveType={curveType}
      />
    </div>
  );
};
