import { data } from "./data";
import { Barplot, COLORS } from "./Barplot";

const HEADER_HEIGHT = 60;

export const BarplotStackedHorizontalDemo = ({ width = 700, height = 400 }) => {
  return (
    <>
      <div
        style={{ height: HEADER_HEIGHT, display: "flex", alignItems: "center" }}
      >
        <span style={{ fontSize: 17, marginLeft: 30 }}>
          How much my friends spend on{" "}
          <span style={{ color: COLORS[0] }}>
            <b>travel</b>
          </span>
          ,{" "}
          <span style={{ color: COLORS[1] }}>
            <b>food</b>
          </span>{" "}
          and{" "}
          <span style={{ color: COLORS[2] }}>
            <b>beer</b>
          </span>
          .
        </span>
      </div>
      <Barplot data={data} width={width} height={height - HEADER_HEIGHT} />
    </>
  );
};
