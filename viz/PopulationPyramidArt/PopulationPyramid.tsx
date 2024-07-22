import * as d3 from 'd3';
import { useMemo, useState } from 'react';
import { DataItem } from './types';
import { HistogramLayer } from './HistogramLayer';
import { AnnotationLayer } from './AnnotationLayer';
import { LinesLayer } from './LinesLayer';

const MARGIN = { top: 30, right: 0, bottom: 30, left: 0 };

type PopulationPyramidProps = {
  width: number;
  height: number;
  data: DataItem[];
  highlightedYear: number | undefined;
  isHistogramEnabled: boolean;
  isLineEnabled: boolean;
};

export const PopulationPyramid = ({
  width,
  height,
  data,
  highlightedYear,
  isHistogramEnabled,
  isLineEnabled,
}: PopulationPyramidProps) => {
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const [mouseY, setMouseY] = useState(null);

  const yScale = useMemo(() => {
    return d3.scaleLinear().range([boundsHeight, 0]).domain([0, 100]);
  }, [boundsHeight]);

  // Males on the left
  const xScaleMale = d3
    .scaleLinear()
    .range([0, boundsWidth / 2 - 10])
    .domain([10, 0]);

  const xScaleFemale = d3
    .scaleLinear()
    .range([boundsWidth / 2 + 10, boundsWidth])
    .domain([0, 10]);

  const handleMouseMove = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    const { clientY } = event;
    const { top } = event.target.getBoundingClientRect();
    const mousePosY = clientY - top;

    // Ensure mousePosY is within boundsHeight
    if (mousePosY >= 0 && mousePosY <= boundsHeight) {
      setMouseY(mousePosY);
    }
  };

  return (
    <div className="relative">
      <svg width={width} height={height}>
        <AnnotationLayer width={width} height={height} marginTop={MARGIN.top} />

        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setMouseY(null)}
        >
          {/* A transparent rect to capture mouse events */}
          <rect width="100%" height="100%" fill="transparent" />

          {mouseY && (
            <g>
              <line
                x1={100}
                x2={width - 100}
                y1={mouseY}
                y2={mouseY}
                stroke="white"
                strokeDasharray="5,5"
              />
              <text
                x={width - 100 - 70}
                y={mouseY - 10}
                fill="white"
                fontSize={12}
              >
                {Math.round(yScale.invert(mouseY)) + ' years old'}
              </text>
            </g>
          )}
        </g>

        {isLineEnabled && (
          <g
            width={boundsWidth}
            height={boundsHeight}
            transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
          >
            <LinesLayer
              data={data}
              xScaleFemale={xScaleFemale}
              xScaleMale={xScaleMale}
              yScale={yScale}
              highlightedYear={highlightedYear}
            />
          </g>
        )}

        {isHistogramEnabled && (
          <g
            width={boundsWidth}
            height={boundsHeight}
            transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
          >
            <HistogramLayer
              data={data}
              height={boundsHeight}
              xScaleFemale={xScaleFemale}
              xScaleMale={xScaleMale}
            />
          </g>
        )}
      </svg>
    </div>
  );
};
