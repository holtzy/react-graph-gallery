import * as d3 from 'd3';

const COLORS = ['#e0ac2b', '#e85252', '#6689c6', '#9a6fb0', '#a53253'];
const MARGIN = { top: 10, right: 30, bottom: 50, left: 30 };

type DataItem = {
  AgeGrp: string;
  Location: string;
  MidPeriod: string;
  PopFemale: string;
  PopMale: string;
};

type PopulationPyramidProps = {
  width: number;
  height: number;
  data: DataItem[];
};

export const PopulationPyramid = ({
  width,
  height,
  data,
}: PopulationPyramidProps) => {
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const dataFiltered = data.filter(
    (d) => d.Location === 'ADB region: Central and West Asia'
  );

  const allYears = [...new Set(data.map((d) => d.MidPeriod))].sort();

  const colorScale = d3
    .scaleLinear<string, string, never>()
    .range(['blue', 'green'])
    .domain([1900, 2020]);

  const opacityScale = d3.scaleLinear().range([0, 0.7]).domain([1900, 2020]);

  const yScale = d3.scaleLinear().range([boundsHeight, 0]).domain([0, 100]);

  // Males on the left
  const xScaleMale = d3
    .scaleLinear()
    .range([0, boundsWidth / 2])
    .domain([5000, 0]);

  const xScaleFemale = d3
    .scaleLinear()
    .range([boundsWidth / 2, boundsWidth])
    .domain([0, 5000]);

  const lineBuilderMale = d3
    .line<DataItem>()
    .x((d) => xScaleMale(Number(d.PopMale)))
    .y((d) => yScale(Number(d.AgeGrp)));

  const lineBuilderFemale = d3
    .line<DataItem>()
    .x((d) => xScaleFemale(Number(d.PopFemale)))
    .y((d) => yScale(Number(d.AgeGrp)));

  const allLinePathMale = allYears.map((year) => {
    const path = lineBuilderMale(
      dataFiltered.filter((d) => d.MidPeriod === year)
    );
    return (
      <path
        d={path}
        opacity={opacityScale(Number(year))}
        stroke={colorScale(year)}
        fill="none"
        strokeWidth={1}
      />
    );
  });

  const allLinePathFemale = allYears.map((year) => {
    const path = lineBuilderFemale(
      dataFiltered.filter((d) => d.MidPeriod === year)
    );
    return (
      <path
        d={path}
        opacity={opacityScale(Number(year))}
        stroke={colorScale(year)}
        fill="none"
        strokeWidth={1}
      />
    );
  });

  return (
    <div>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
        >
          {allLinePathMale}
          {allLinePathFemale}
        </g>
      </svg>
    </div>
  );
};
