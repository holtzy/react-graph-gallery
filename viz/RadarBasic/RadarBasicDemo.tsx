import { data } from "./data";
import { Radar } from "./Radar";

export const RadarBasicDemo = ({ width = 700, height = 400 }) => (
  <Radar
    data={data}
    width={width}
    height={height}
    axisConfig={[
      { name: "speed", max: 10 },
      { name: "acceleration", max: 10 },
      { name: "conso", max: 10 },
      { name: "safety", max: 2 },
      { name: "style", max: 1000 },
      { name: "price", max: 100 },
    ]}
  />
);
