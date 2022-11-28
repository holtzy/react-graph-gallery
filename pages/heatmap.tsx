import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import Contact from "../component/Contact";
import ChartFamilySection from "../component/ChartFamilySection";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/UI/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import { HeatmapBasicDemo } from "../viz/HeatmapBasic/HeatmapBasicDemo";
import { HeatmapVaccinationDemo } from "../viz/HeatmapVaccination/HeatmapVaccinationDemo";
import { HeatmapTooltipDemo } from "../viz/HeatmapTooltip/HeatmapHeatmapTooltipDemo";
import { ResponsiveExplanationSection } from "../component/ResponsiveExplanationSection";
import Link from "next/link";
import DatavizInspirationParallaxLink from "../component/DatavizInspirationParallaxLink";
import { ContinuousColorLegendDemo } from "../viz/ContinuousColorLegend/ContinuousColorLegendDemo";

const graphDescription = (
  <>
    <p>
      A <a href="https://www.data-to-viz.com/graph/heatmap.html">heat map</a>{" "}
      (or heatmap) is a chart type that shows the magnitude of a numeric
      variable as a color in two dimensions. This page is a step-by-step guide
      on how to build your own heatmap for the web, using{" "}
      <a href="https://reactjs.org/">React</a> and{" "}
      <a href="https://d3-graph-gallery.com/heatmap">D3.js</a>.
    </p>
    <p>
      It starts by describing how the <b>data</b> should be organized and
      potentially <b>normalized</b>. It then shows how to initialize the{" "}
      <b>heatmap component</b>, build band <b>scales</b> and add rectangles to
      get a first heatmap. Last but not least, <b>responsiveness</b> and{" "}
      <b>tooltip</b> are described in depth and a real dataset is used to get a
      heatmap application. 🙇‍♂️.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="How to build a heatmap with React and D3."
      seoDescription="A step-by-step guide to build your very own heatmap from scratch. Comes with explanations, code sandboxes, and ready-to-use templates."
    >
      <TitleAndDescription
        title="Heatmap"
        description={graphDescription}
        chartType="heatmap"
      />
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>
      <p>
        The dataset is usually an <b>array</b> where each item provides
        information for a <b>cell</b> of the heatmap.
      </p>
      <p>
        Each item is an <b>object</b> that requires at least a{" "}
        <code>value</code> property that is a <b>number</b>. This number will be
        used to color the cell.
      </p>
      <p>
        Each item also requires a <code>x</code> and a <code>y</code> property,
        providing the position of the cell in the 2-d space. Note that those
        values are <b>strings</b> since anything can be used. We are dealing
        with <b>ordinal scales</b> here.
      </p>
      <p>
        Note that you can add any kind of information in those cell objects.
        Such information can be included in tooltips later on.
      </p>
      <br />
      <p>Here is a minimal example of the data structure:</p>
      <CodeBlock code={snippet1} />
      {/*
      //
      // Skeleton
      //
      */}
      <h2 id="skeleton">Component skeleton</h2>
      <p>
        The goal here is to create a <code>Heatmap</code> component that will be
        stored in a <code>Heatmap.tsx</code> file. This component requires 3
        props to render: a <code>width</code>, a <code>height</code>, and some{" "}
        <code>data</code>.
      </p>
      <p>
        The shape of the <code>data</code> is described above. The{" "}
        <code>width</code> and <code>height</code> will be used to rendering a{" "}
        <code>svg</code> element in the DOM, in which we will insert the
        heatmap.
      </p>
      <p>
        To put it in a nutshell, that's the skeleton of our <code>Heatmap</code>{" "}
        component:
      </p>
      <CodeBlock code={snippetSkeleton} />
      <p>
        It's fundamental to understand that with this code organization, d3.js
        will be used to prepare the svg <code>rect</code>, but it's react that
        will render them in the <code>return()</code> statement. We won't use d3
        methods like <code>append</code> that you can find in usual{" "}
        <a href="https://www.d3-graph-gallery.com">d3.js examples</a>.
      </p>
      {/*
      //
      // Scales
      //
      */}
      <h2 id="Scales">Scales</h2>
      <p>
        We need a way to translate a group pair of the dataset (e.g. row of
        group <code>A</code>, column of group <code>C</code>) in a 2d coordinate
        (e.g. <i>x=103px</i>, <i>y=300px</i>). This is a concept called{" "}
        <b>scaling</b>.
      </p>
      <h3>&rarr; Data wrangling</h3>
      <p>
        Before building scales we need an exhaustive list of all groups
        displayed on the X and Y axes. We also need to compute the <b>min</b>{" "}
        and <b>max</b> of the <b>value</b> property to compute the color scale.
      </p>
      <p>
        As always, don't forget to wrap that kind of work in a{" "}
        <code>useMemo</code>. You want to compute it only when the{" "}
        <code>data</code> changes. This is how the computation looks like:
      </p>
      <CodeBlock code={snippetAllGroups} />
      <h3>&rarr; X and Y Scales</h3>
      <p>
        The X and Y scale are{" "}
        <a href="https://github.com/d3/d3-scale#scaleBand">band scales</a>,
        computed with the <code>scaleBand()</code> function of d3.js. It means
        that a band of pixels is attributed to each group.
      </p>
      <p>
        For instance, calling a the x scale with <code>xScale("A")</code> will
        return <code>0</code>, and <code>xScale.bandwidth()</code> will return
        the width of the band (e.g. <code>11px</code>).
      </p>
      <CodeBlock code={snippetXScale} />
      <p>
        The <code>padding</code> is the space assigned between each band
        (=between each cell).
      </p>
      <p>
        You can learn more about scales{" "}
        <a href="https://d3-graph-gallery.com/graph/custom_axis.html">here</a>.
      </p>
      <h3>&rarr; Color scale</h3>
      <p>
        The color scale of a heatmap is <b>tricky</b> to compute. We encode a{" "}
        <b>numeric variable</b> that can have any kind of distribution to a{" "}
        <b>color</b>, and that's not an easy step.
      </p>
      <p>
        Fortunately{" "}
        <a href="https://d3-graph-gallery.com/graph/custom_color.html">d3.js</a>{" "}
        (as always) has some life-saving utils to help. For instance, a
        sequential color scale can be applied with{" "}
        <code>scaleSequential()</code> together with the <code>inferno</code>{" "}
        color palette. Many other options could make sense, but that deserves
        its own blogpost.
      </p>
      <CodeBlock code={snippetColorScale} />
      {/*
      //
      // Rectangles
      //
      */}
      <h2 id="rectangles">Add rectangles, get a basic react heatmap</h2>
      <p>Finally! 🤪</p>
      <p>
        With the scales available, rendering is just a matter of mapping through
        the dataset and creating a set of svg <code>rect</code> for each cell.
      </p>
      <p>Something like:</p>
      <CodeBlock code={snippetRender} />
      <p>
        Note that for the X and Y axis labels, just adding a set of svg{" "}
        <code>text</code> element does a pretty good job, so no need to build
        complicated axis components as for a{" "}
        <a href="https://www.react-graph-gallery.com/scatter-plot">
          scatterplot
        </a>
        .
      </p>
      <br />
      <ChartOrSandbox
        VizComponent={HeatmapBasicDemo}
        vizName={"HeatmapBasic"}
        maxWidth={600}
        height={300}
        caption={
          "Most basic heatmap made with react and d3.js. d3 is used to compute scales, react for the rendering."
        }
      />
      <p>
        That's it, we have a first good looking <b>heatmap</b>!
      </p>
      <p>
        The process used to build a it with react is pretty close from building
        it with <b>d3.js only</b>. (Check the pure d3 implementation{" "}
        <a href="https://d3-graph-gallery.com/heatmap">here</a>).
      </p>
      {/*
      //
      // Responsiveness
      //
      */}
      <ResponsiveExplanationSection chartId="heatmap" />
      {/*
      //
      // Tooltip
      //
      */}
      <h2 id="tooltip">Tooltip</h2>
      <p>
        Adding a tooltip is an important improvement for a heatmap. It allows to
        get as much <b>detail</b> as needed for each cell.
      </p>
      <p>
        There are <b>many different approaches</b> to building tooltips, and I'm
        preparing a whole <Link href="/subscribe">dedicated blog post</Link> on
        the topic.
      </p>
      <p>
        In the example below I suggest to use the same strategy than for{" "}
        <Link href="/scatter-plot#tooltip">scatterplots</Link>. So you probably
        want to read it <Link href="/subscribe">there</Link> for in-depth
        explanation.
      </p>
      <h3>&rarr; Two layers: renderer and tooltip</h3>
      <p>
        The first task is to split the <code>Heatmap</code> component in 2
        layers. The first layer called <code>Renderer</code> will render the
        cells as seen previously. The second is an <code>absolute</code> div put
        on top of the first one, used only to show the tooltip <code>div</code>.
      </p>
      <p>
        This way, the <code>x</code> and <code>y</code> coordinates of cells in
        the first layer match with the coordinate of the second layer.
      </p>
      <CodeBlock code={snippet4} />
      <h3>&rarr; A common state</h3>
      <p>
        On top of the 2 layers we need a state that stores information about the
        cell being hovered over. You can create it with a <code>useState</code>{" "}
        statement.
      </p>
      <p>
        The state can now be passed to the <code>Tooltip</code> layer. The
        function to update it can be passed to the <code>Renderer</code> layer
        that will update it when a cell is hovered over.
      </p>
      <CodeBlock code={snippet5} />
      <h3>&rarr; Hover, update state, render tooltips</h3>
      <p>
        The heatmap cells listen to <code>onMouseEnter</code> events and update
        the tooltip state (<code>hoveredCell</code>) with accurate coordinates
        when it happens.
      </p>
      <p>
        This state is passed to the <code>Tooltip</code> component. It renders a{" "}
        <code>div</code> at the right position thanks to the information. A bit
        of smart css is used to make it pretty and include a <b>little arrow</b>
        .
      </p>
      <ChartOrSandbox
        VizComponent={HeatmapTooltipDemo}
        vizName={"HeatmapTooltip"}
        maxWidth={600}
        height={300}
        caption={
          "This heatmap has a tooltip. Hover over a cell to get its exact value."
        }
      />
      <p>
        There is much more to say about tooltips but hopefully that should get
        you started. <Link href="/subscribe">Subscribe</Link> to the gallery,
        I'll post more on this topic soon.
      </p>
      {/*
      //
      // Inspiration
      //
      */}
      <DatavizInspirationParallaxLink chartId="heatmap" />
      {/*
      //
      // Legend
      //
      */}
      <h2 id="legend">Heatmap legend</h2>
      <p>
        A heatmap uses a <b>color scale</b> to encode a numeric value into a
        color. As a result, it is very much advised to add a color <b>legend</b>{" "}
        to explicit how this color scale works.
      </p>
      <p>
        Let's consider a variable that goes from <code>0</code> to{" "}
        <code>100</code>. We want to encode <code>0</code> in{" "}
        <b>
          <span style={{ color: "#69b3a2" }}>blue</span>
        </b>{" "}
        and <code>100</code> in{" "}
        <b>
          <span style={{ color: "purple" }}>purple</span>
        </b>
        .
      </p>
      <ChartOrSandbox
        VizComponent={ContinuousColorLegendDemo}
        vizName={"ContinuousColorLegend"}
        maxWidth={300}
        height={100}
        caption={"A color legend built with react, canvas and d3."}
      />
      {/*
      //
      // Real life
      //
      */}
      <h2 id="real life">Application to a real dataset</h2>
      <p>
        This is an application of the heatmap component described above to a
        real life dataset.
      </p>
      <p>
        It's actually a recreation of{" "}
        <a href="http://graphics.wsj.com/infectious-diseases-and-vaccines/">
          this chart
        </a>{" "}
        by Tynan DeBold and Dov Friedman. Data was available{" "}
        <a href="https://www.tycho.pitt.edu/data/">here</a>. Chart war
        originally made with highcharts, original code being{" "}
        <a href="http://graphics.wsj.com/infectious-diseases-and-vaccines/js/script.min.js">
          here
        </a>
        .
      </p>
      <p>
        It was necessary to tweak the color scale, switching to a square
        transformation with <code>scaleSequentialSqrt</code>. This allows to
        give less importance the extreme values that would absorb the variation
        otherwise.
      </p>
      <ChartOrSandbox
        VizComponent={HeatmapVaccinationDemo}
        vizName={"HeatmapVaccination"}
        maxWidth={800}
        height={550}
        caption={
          "Number of Measles infected people over 70-some years and across all 50 states. Can you guess when a vaccine was introduced?"
        }
      />{" "}
      {/*
      //
      // Tail
      //
      */}
      <div className="full-bleed border-t h-0 bg-gray-100 my-3" />
      <ChartFamilySection chartFamily="correlation" />
      <div className="mt-20" />
    </Layout>
  );
}

const snippet1 = `
const data = [
  { x: 'A', y: 'A', value: 12 },
  { x: 'B', y: 'A', value: 2 },
  { x: 'C', y: 'A', value: 9 }
];
`.trim();

const snippetSkeleton = `
import * as d3 from "d3"; // we will need d3.js

type HeatmapProps = {
  width: number;
  height: number;
  data: { x: string; y: string, value: value: number | null }[];
};

export const Heatmap = ({ width, height, data }: HeatmapProps) => {

  // read the data
  // do some stuff with d3 like building scales
  // compute all the <rect>

  return (
    <div>
      <svg width={width} height={height}>
        // render all the <rect>
      </svg>
    </div>
  );
};
`.trim();

const snippetAllGroups = `
// List of unique items that will appear on the heatmap Y axis
const allYGroups = useMemo(() => [...new Set(data.map((d) => d.y))], [data]);
`.trim();

const snippetXScale = `
const xScale = useMemo(() => {
  return d3
    .scaleBand()
    .range([0, boundsWidth])
    .domain(allXGroups)
    .padding(0.01);
}, [data, width]);

// xScale("A") -> 0
// xScale.bandwidth() -> 11
`.trim();

const snippetColorScale = `
const colorScale = d3
  .scaleSequential()
  .interpolator(d3.interpolateInferno)
  .domain([min, max]);

// colorScale(34) -> #d3a4e9
`.trim();

const snippetRender = `
const allRects = data.map((d, i) => {
  if (d.value === null) {
    return;
  }
  return (
    <rect
      key={i}
      x={xScale(d.x)}
      y={yScale(d.y)}
      width={xScale.bandwidth()}
      height={yScale.bandwidth()}
      fill={colorScale(d.value)}
    />
  );
});
`.trim();

const snippet4 = `
<div style={{ position: "relative" }}>
  <Renderer ..someProps />
  <Tooltip ..someProps />
</div>
`.trim();

const snippet5 = `
const [hoveredCell, setHoveredCell] = useState<InteractionData | null>(null);
`.trim();
