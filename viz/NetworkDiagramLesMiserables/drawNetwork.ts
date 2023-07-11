import d3, { scaleOrdinal, schemeCategory10 } from 'd3';
import { Link, Node } from './data';

export const RADIUS = 7;

export const drawNetwork = (
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  nodes: Node[],
  links: Link[]
) => {
  context.clearRect(0, 0, width, height);

  // Color Scale
  const allGroups = [...new Set(nodes.map((d) => String(d.group)))];
  const colorScale = scaleOrdinal<string>()
    .domain(allGroups)
    .range(schemeCategory10);

  // Draw the links first
  context.globalAlpha = 0.6;
  context.strokeStyle = '#999';
  context.lineWidth = 1;
  links.forEach((link) => {
    context.beginPath();
    context.moveTo(link.source.x, link.source.y);
    context.lineTo(link.target.x, link.target.y);
    context.stroke();
  });

  // Draw the nodes
  context.globalAlpha = 1;
  context.strokeStyle = '#fff';
  context.lineWidth = 3;
  nodes.forEach((node) => {
    if (!node.x || !node.y) {
      return;
    }

    context.beginPath();
    context.moveTo(node.x + RADIUS, node.y);
    context.arc(node.x, node.y, RADIUS, 0, 2 * Math.PI);
    context.fillStyle = colorScale(String(node.group));
    context.stroke();
    context.fill();
  });
};
