import React, { useMemo } from 'react';
import * as d3 from 'd3';
import { Delaunay } from 'd3-delaunay';

interface Node {
  name: string;
  value: number;
  children?: Node[];
}

interface VoronoiTreemapProps {
  data: Node;
  width: number;
  height: number;
}

const generatePoints = (
  data: Node,
  width: number,
  height: number
): [number, number][] => {
  const points: [number, number][] = [];

  const generatePointsRecursive = (
    node: Node,
    x: number,
    y: number,
    w: number,
    h: number
  ) => {
    if (!node.children) {
      // For leaf nodes, generate points based on their value
      const numPoints = Math.max(1, Math.floor(node.value / 10));
      for (let i = 0; i < numPoints; i++) {
        points.push([x + Math.random() * w, y + Math.random() * h]);
      }
      return;
    }

    // For non-leaf nodes, recursively generate points for children
    const totalValue = node.children.reduce(
      (sum, child) => sum + child.value,
      0
    );
    let currentX = x;

    node.children.forEach((child) => {
      const childWidth = (child.value / totalValue) * w;
      generatePointsRecursive(child, currentX, y, childWidth, h);
      currentX += childWidth;
    });
  };

  generatePointsRecursive(data, 0, 0, width, height);
  return points;
};

export const VoronoiTreemap: React.FC<VoronoiTreemapProps> = ({
  data,
  width,
  height,
}) => {
  const { voronoi, polygons } = useMemo(() => {
    const points = generatePoints(data, width, height);
    const delaunay = Delaunay.from(points);
    const voronoi = delaunay.voronoi([0, 0, width, height]);
    const polygons = Array.from(voronoi.cellPolygons());
    return { voronoi, polygons };
  }, [data, width, height]);

  return (
    <svg width={width} height={height}>
      {polygons.map((polygon, i) => (
        <path
          key={i}
          d={`M${polygon.join('L')}Z`}
          fill={d3.interpolateRainbow(i / polygons.length)}
          stroke="white"
          strokeWidth={1}
        />
      ))}
    </svg>
  );
};
