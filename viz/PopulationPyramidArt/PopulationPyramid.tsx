import * as d3 from 'd3';
import { useMemo, useState } from 'react';
import { DataItem } from './types';
import { AnnotationLayer } from './plot/AnnotationLayer';
import { LinesLayer } from './plot/LinesLayer';
import { HistogramLayer } from './plot/HistogramLayer';

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

  // Males on the left
  const xScaleMale = d3
    .scaleLinear()
    .range([0, boundsWidth / 2 - 10])
    .domain([10, 0]);

  const xScaleFemale = d3
    .scaleLinear()
    .range([boundsWidth / 2 + 10, boundsWidth])
    .domain([0, 10]);

  return (
    <div className="relative">
      <svg width={width} height={height}>
        <AnnotationLayer width={width} height={height} marginTop={MARGIN.top} />

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
              highlightedYear={highlightedYear}
              width={boundsWidth}
              height={boundsHeight}
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
