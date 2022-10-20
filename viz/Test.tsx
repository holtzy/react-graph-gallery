import * as d3 from "d3";

const data = [
  2, 9, 10, 24, 34, 43, 12, 23, 12, 12, 13, 14, 12, 12, 43, 24, 34, 43, 12, 23,
  12, 12, 13, 14, 24, 34, 43, 12, 23, 12, 12, 13, 14, 43, 52, 52, 63, 74, 90,
  100,
];
const height = 500;
const width = 800;
const BAR_PADDING = 0.4;

export const Test = () => {
  const yScale = d3.scaleLinear().domain([0, 100]).range([height, 0]);

  const xScale = d3
    .scaleBand()
    .domain(data.map((v, i) => String(i)))
    .range([0, width])
    .padding(BAR_PADDING);
  console.log("xScale", xScale("13"));
  console.log("band", xScale.bandwidth());

  const allShapes = data.map((d, i) => {
    return (
      <g key={i}>
        <rect
          x={xScale(String(i))}
          y={yScale(d)}
          width={xScale.bandwidth()}
          height={height - yScale(d)}
          opacity={0.3}
          stroke="#cb1dd1"
          fill="#cb1dd1"
          fillOpacity={0.3}
          strokeWidth={1}
          rx={1}
        />
      </g>
    );
  });
  return (
    <div className="opacity-50">
      <svg height={height} width={width}>
        {allShapes}
      </svg>
    </div>
  );
};
