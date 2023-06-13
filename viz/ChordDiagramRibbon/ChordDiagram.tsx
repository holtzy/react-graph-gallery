import * as d3 from "d3";

const MARGIN = 30;
const NODE_THICKNESS = 15;
const NODE_CONNECTION_PADDING = 5;

type ChordDiagramProps = {
  width: number;
  height: number;
  data: number[][];
};

export const ChordDiagram = ({ width, height, data }: ChordDiagramProps) => {
  //
  // Compute the chord details: angle of nodes and connections
  //
  const chordGenerator = d3
    .chord()
    .padAngle(0.05) // padding between entities (black arc)
    .sortSubgroups(d3.descending);
  const chord = chordGenerator(data);

  //
  // Nodes: They are drawn using arcs, like for a donut chart
  //
  const radius = Math.min(width, height) / 2 - MARGIN;
  const arcPathGenerator = d3.arc();

  const allNodes = chord.groups.map((group, i) => {
    const d = arcPathGenerator({
      innerRadius: radius - NODE_THICKNESS,
      outerRadius: radius,
      startAngle: group.startAngle,
      endAngle: group.endAngle,
    });
    if (d) {
      return <path key={i} d={d} fill={"#69b3a2"} />;
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
    return <path key={i} d={d} fill="#69b3a2" opacity=".3" />;
  });

  return (
    <div>
      <svg width={width} height={height}>
        <g transform={`translate(${width / 2}, ${height / 2})`}>
          {allNodes}
          {allConnections}
        </g>
      </svg>
    </div>
  );
};
