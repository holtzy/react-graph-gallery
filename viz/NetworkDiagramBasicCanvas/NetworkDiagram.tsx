import * as d3 from 'd3';
import { useEffect, useRef, useState } from 'react';

const COLORS = ['#e0ac2b', '#e85252', '#6689c6', '#9a6fb0', '#a53253'];
const RADIUS = 14;

type Data = {
  nodes: { id: string; group: string }[];
  links: { source: string; target: string; value: number }[];
};

type NetworkDiagramProps = {
  width: number;
  height: number;
  data: Data;
};

export const NetworkDiagram = ({
  width,
  height,
  data,
}: NetworkDiagramProps) => {
  // The force simulation mutates links and nodes, so create a copy
  // so that re-evaluating this cell produces the same result.
  // note: node positions are initialized by d3
  const links = data.links.map((d) => ({ ...d }));
  const nodes = data.nodes.map((d) => ({ ...d }));

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // set dimension of the canvas element
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!context) {
      return;
    }

    d3.forceSimulation(nodes)
      .force(
        'link',
        d3.forceLink(links).id((d) => d.id)
      )
      .force('collide', d3.forceCollide().radius(RADIUS).iterations(10))
      .force('charge', d3.forceManyBody())
      .force('center', d3.forceCenter(width / 2, height / 2))
      .on('tick', () => {
        drawNetwork(context, width, height, nodes, links);
      });
  }, [width, height, nodes, links]);

  return (
    <div>
      <canvas
        ref={canvasRef}
        style={{
          width,
          height,
        }}
        width={width}
        height={height}
      />
    </div>
  );
};

const drawNetwork = (
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  nodes: any,
  links: any
) => {
  console.log({ nodes, links });

  context.clearRect(0, 0, width, height);
  context.fillStyle = 'grey';
  context.fillRect(0, 0, width, height);

  // Draw the links
  for (let i = 1; i < links.length; ++i) {
    const link = links[i];
    context.beginPath();
    context.moveTo(link.source.x, link.source.y);
    context.lineTo(link.target.x, link.target.y);
    context.stroke();
  }

  // Draw the nodes
  for (let i = 1; i < nodes.length; ++i) {
    const d = nodes[i];

    context.beginPath();
    context.moveTo(d.x + RADIUS, d.y);
    context.arc(d.x, d.y, RADIUS, 0, 2 * Math.PI);
    context.fillStyle = 'red';
    context.fill();
  }
};
