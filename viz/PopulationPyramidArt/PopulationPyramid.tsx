import * as d3 from 'd3';
import { useRef } from 'react';
import { DataItem } from './types';
import { AnnotationLayer } from './plot/AnnotationLayer';
import { LinesLayer } from './plot/LinesLayer';
import { HistogramLayer } from './plot/HistogramLayer';
import { useDimensions } from 'hook/use-dimensions';

const MARGIN = { top: 30, right: 0, bottom: 30, left: 0 };

type ResponsivePopulationPyramidProps = {
  data: DataItem[];
  highlightedYear: number | undefined;
  isHistogramEnabled: boolean;
  isLineEnabled: boolean;
  histogramOpacity?: number;
};

export const ResponsivePopulationPyramid = (
  props: ResponsivePopulationPyramidProps
) => {
  const chartRef = useRef(null);
  const chartSize = useDimensions(chartRef);

  return (
    <div ref={chartRef} className="relative block h-full w-full">
      <PopulationPyramid
        {...props}
        width={chartSize.width}
        height={chartSize.height}
      />
    </div>
  );
};

type PopulationPyramidProps = ResponsivePopulationPyramidProps & {
  width: number;
  height: number;
};

const PopulationPyramid = ({
  width,
  height,
  data,
  highlightedYear,
  isHistogramEnabled,
  isLineEnabled,
  histogramOpacity = 1,
}: PopulationPyramidProps) => {
  if (width === 0 || height === 0) {
    return null;
  }

  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Males on the left
  const xScaleMale = d3
    .scaleLinear()
    .range([0, boundsWidth / 2 - 10])
    .domain([12, 0]);

  const xScaleFemale = d3
    .scaleLinear()
    .range([boundsWidth / 2 + 10, boundsWidth])
    .domain([0, 12]);

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
              histogramOpacity={histogramOpacity}
            />
          </g>
        )}
      </svg>
    </div>
  );
};
