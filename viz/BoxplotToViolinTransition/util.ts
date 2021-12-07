import * as d3 from "d3";
import { ScaleLinear } from "d3-scale";

// A function that builds the svg path of a violin from a set of numbers
export const buildViolinPath = (data: number[], yScale: d3.ScaleLinear<number, number, never>, width: number) => {
    const binBuilder = d3.bin()
      .domain(yScale.domain() as [number, number])
      .thresholds(yScale.ticks(27))
      .value((d) => d);
    const bins = binBuilder(data);

    const biggestBin = Math.max(...bins.map((b) => b.length));

    const wScale = d3.scaleLinear()
      .domain([-biggestBin, biggestBin])
      .range([0, width]);

    const areaBuilder = d3
      .area()
      .x0((d) => wScale(-d.length))
      .x1((d) => wScale(d.length))
      .y((d) => yScale(d.x0))
      .curve(d3.curveBumpY);

    return areaBuilder(bins);
  };

  // A function that builds the svg path of a boxplot from a set of numbers
  export const buildBoxplotPath = (data: number[], yScale: d3.ScaleLinear<number, number, never>, width: number) => {
    const data_sorted = data.sort(d3.ascending);
    const q1 = d3.quantile(data_sorted, 0.25);
    const median = d3.quantile(data_sorted, 0.5);
    const q3 = d3.quantile(data_sorted, 0.75);
    const interQuantileRange = q3 - q1;
    const min = q1 - 1.5 * interQuantileRange;
    const max = q1 + 1.5 * interQuantileRange;

    const path = `M ${width/2} ${yScale(max)} L ${width/2} ${yScale(q3)} L ${width} ${yScale(q3)} L ${width} ${yScale(q1)} L ${width/2} ${yScale(q1)} L ${width/2} ${yScale(min)} L ${width/2} ${yScale(q1)} L ${0} ${yScale(q1)} L ${0} ${yScale(q3)} L ${width/2} ${yScale(q3)} Z M ${0} ${yScale(median)} L ${width} ${yScale(median)}`;

    return path;
  };
