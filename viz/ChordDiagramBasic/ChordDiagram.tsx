import * as d3 from "d3";

const MARGIN_X = 150;
const MARGIN_Y = 30;
const NODE_THICKNESS = 15;
const NODE_CONNECTION_PADDING = 5;
const COLORS = ["#e0ac2b", "#e85252", "#6689c6", "#9a6fb0", "#a53253"];
const INFLEXION_PADDING = 20; // space between donut and label inflexion point

type ChordDiagramProps = {
  width: number;
  height: number;
  data: number[][];
  groups: string[];
};

export const ChordDiagram = ({
  width,
  height,
  data,
  groups,
}: ChordDiagramProps) => {
  //
  // Compute the chord details: angle of nodes and connections
  //
  const chordGenerator = d3
    .chordDirected()
    .padAngle(0.05) // padding between entities (black arc)
    .sortSubgroups(d3.descending);
  const chord = chordGenerator(data);

  //
  // Nodes: They are drawn using arcs, like for a donut chart
  //
  const radius = Math.min(width, height) / 2 - Math.min(MARGIN_X, MARGIN_Y);
  const arcPathGenerator = d3.arc();

  const allNodes = chord.groups.map((group, i) => {
    const d = arcPathGenerator({
      innerRadius: radius - NODE_THICKNESS,
      outerRadius: radius,
      startAngle: group.startAngle,
      endAngle: group.endAngle,
    });
    if (d) {
      return <path key={i} d={d} fill={COLORS[group.index]} />;
    }
  });

  //
  // Connections: They are drawn using path thanks to the ribbon function
  //
  const ribbonGenerator = d3
    .ribbon()
    .radius(radius - NODE_THICKNESS - NODE_CONNECTION_PADDING);

  const allConnections = chord.map((connection, i) => {
    const d = ribbonGenerator(connection); // TODO: fix type.
    const color = COLORS[connection.source.index];
    return (
      <path
        key={i}
        d={d}
        fill={color}
        stroke={color}
        strokeOpacity=".4"
        fillOpacity=".3"
      />
    );
  });

  //
  // Labels: inspired fron the donut chart labels
  //
  const labels = chord.groups.map((group, i) => {
    // First arc is for the donut
    const sliceInfo = {
      innerRadius: radius - NODE_THICKNESS,
      outerRadius: radius,
      startAngle: group.startAngle,
      endAngle: group.endAngle,
    };
    const centroid = arcPathGenerator.centroid(sliceInfo);
    const slicePath = arcPathGenerator(sliceInfo);

    // Second arc is for the legend inflexion point
    const inflexionInfo = {
      innerRadius: radius - NODE_THICKNESS + INFLEXION_PADDING,
      outerRadius: radius + INFLEXION_PADDING,
      startAngle: group.startAngle,
      endAngle: group.endAngle,
    };
    const inflexionPoint = arcPathGenerator.centroid(inflexionInfo);

    const isRightLabel = inflexionPoint[0] > 0;
    const labelPosX = inflexionPoint[0] + 50 * (isRightLabel ? 1 : -1);
    const textAnchor = isRightLabel ? "start" : "end";
    const label = groups[group.index] + " (" + group.value + ")";

    return (
      <g key={i}>
        <circle cx={centroid[0]} cy={centroid[1]} r={2} />
        <line
          x1={centroid[0]}
          y1={centroid[1]}
          x2={inflexionPoint[0]}
          y2={inflexionPoint[1]}
          stroke={"black"}
          fill={"black"}
        />
        <line
          x1={inflexionPoint[0]}
          y1={inflexionPoint[1]}
          x2={labelPosX}
          y2={inflexionPoint[1]}
          stroke={"black"}
          fill={"black"}
        />
        <text
          x={labelPosX + (isRightLabel ? 2 : -2)}
          y={inflexionPoint[1]}
          textAnchor={textAnchor}
          dominantBaseline="middle"
          fontSize={14}
        >
          {label}
        </text>
      </g>
    );
  });
  return (
    <div>
      <svg width={width} height={height}>
        <g transform={`translate(${width / 2}, ${height / 2})`}>
          {allNodes}
          {allConnections}
          {labels}
        </g>
      </svg>
    </div>
  );
};
