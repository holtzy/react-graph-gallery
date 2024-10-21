import { useEffect, useMemo, useRef, useState } from 'react';
import * as d3 from 'd3';
import styles from './histogram.module.css';

const MARGIN = { top: 30, right: 30, bottom: 40, left: 50 };
const BUCKET_PADDING = 0;

const annotations = [
  { x: 180, label: '3:00', y: 350 },
  { x: 210, label: '3:30', y: 180 },
  { x: 240, label: '4:00', y: 60 },
];

type HistogramProps = {
  width: number;
  height: number;
  data: number[];
  bucketNumber: number;
};

type InteractionData = {
  min: number;
  max: number;
  num: number;
};

export const Histogram = ({
  width,
  height,
  data,
  bucketNumber,
}: HistogramProps) => {
  const [interactionData, setInteractionData] =
    useState<null | InteractionData>(null);

  const axesRef = useRef(null);
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const xScale = useMemo(() => {
    return d3
      .scaleLinear()
      .domain([100, 500]) // note: limiting to 1000 instead of max here because of extreme values in the dataset
      .range([10, boundsWidth]);
  }, [data, width]);

  const buckets = useMemo(() => {
    const bucketGenerator = d3
      .bin()
      .value((d) => d)
      .domain(xScale.domain())
      .thresholds(xScale.ticks(bucketNumber));
    return bucketGenerator(data);
  }, [xScale, bucketNumber]);

  const yScale = useMemo(() => {
    const max = Math.max(...buckets.map((bucket) => bucket?.length));
    return d3.scaleLinear().range([boundsHeight, 0]).domain([0, max]).nice();
  }, [data, height, bucketNumber]);

  // Render the X axis using d3.js, not react
  useEffect(() => {
    const svgElement = d3.select(axesRef.current);
    svgElement.selectAll('*').remove();

    const xAxisGenerator = d3.axisBottom(xScale);
    svgElement
      .append('g')
      .attr('transform', 'translate(0,' + boundsHeight + ')')
      .call(xAxisGenerator);

    const yAxisGenerator = d3.axisLeft(yScale);
    svgElement.append('g').call(yAxisGenerator);
  }, [xScale, yScale, boundsHeight]);

  const allRects = buckets.map((bucket, i) => {
    return (
      <rect
        key={i}
        className={styles.rectangle}
        fill="#69b3a2"
        stroke="black"
        x={xScale(bucket.x0) + BUCKET_PADDING / 2}
        width={xScale(bucket.x1) - xScale(bucket.x0) - BUCKET_PADDING}
        y={yScale(bucket.length)}
        height={boundsHeight - yScale(bucket.length)}
        onMouseOver={(e) => {
          setInteractionData({
            min: bucket.x0,
            max: bucket.x1,
            num: bucket.length,
          });
        }}
        onMouseLeave={() => setInteractionData(null)}
        shapeRendering={'crispEdges'}
      />
    );
  });

  const minHoursDisplay = Math.floor(interactionData?.min / 60);
  const minMinutesDisplay = interactionData?.min % 60;

  const maxHoursDisplay = Math.floor(interactionData?.max / 60);
  const maxMinutesDisplay = interactionData?.max % 60;

  return (
    <div className="relative">
      {interactionData && (
        <div className="absolute top-3 right-3">
          <p className="text-xs max-w-44">
            {interactionData.num} people ran the marathon in more than{' '}
            <b>
              {minHoursDisplay} hours and {minMinutesDisplay} minutes
            </b>{' '}
            but less than{' '}
            <b>
              {maxHoursDisplay} hours and {maxMinutesDisplay} minutes
            </b>
            .
          </p>
        </div>
      )}
      <svg width={width} height={height} className="overflow-visible">
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
          className={styles.container}
        >
          {allRects}
          {bucketNumber > 130 &&
            annotations.map((annot, i) => {
              return (
                <g key={i}>
                  <line
                    x1={xScale(annot.x)}
                    y1={annot.y - 60 - 30} // top of segment
                    x2={xScale(annot.x)}
                    y2={annot.y - 60} // bottom of segment
                    stroke="black"
                    stroke-width="1"
                  />
                  <circle
                    cx={xScale(annot.x)}
                    cy={annot.y}
                    r={60}
                    fill={'none'}
                    stroke="black"
                    stroke-width="1"
                  />
                  <text
                    x={xScale(annot.x)}
                    y={annot.y - 60 - 30 - 10}
                    fontSize={12}
                    textAnchor="middle"
                  >
                    {annot.label}
                  </text>
                </g>
              );
            })}
        </g>
        <g
          width={boundsWidth}
          height={boundsHeight}
          ref={axesRef}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
        />
      </svg>
    </div>
  );
};
