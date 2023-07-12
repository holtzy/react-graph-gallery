import * as d3 from 'd3';
import { FeatureCollection } from 'geojson';
import { useEffect, useRef } from 'react';

type MapProps = {
  width: number;
  height: number;
  data: FeatureCollection;
};

export const Map = ({ width, height, data }: MapProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const projection = d3.geoMercator().scale(340).center([-100, 0]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (!context) {
      return;
    }
    const geoPathGenerator = d3
      .geoPath()
      .projection(projection)
      .context(context); // if a context is provided, geoPath() understands that we work with canvas, not SVG

    context.clearRect(0, 0, width, height);
    context.beginPath();

    geoPathGenerator(data);

    context.fillStyle = 'grey';
    context.fill();

    context.strokeStyle = 'lightGrey';
    context.lineWidth = 0.1;
    context.stroke();
  }, [width, height, projection, data]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};
