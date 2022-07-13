import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import Contact from "../component/Contact";
import ChartFamilySection from "../component/ChartFamilySection";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import { HeatmapBasicDemo } from "../viz/HeatmapBasic/HeatmapBasicDemo";
import { HeatmapVaccinationDemo } from "../viz/HeatmapVaccination/HeatmapVaccinationDemo";
import { HeatmapTooltipDemo } from "../viz/HeatmapTooltip/HeatmapHeatmapTooltipDemo";
import { TakeHome } from "../component/TakeHome";
import { WordcloudBasicDemo } from "../viz/WordcloudBasic/WordCloudBasic";

const graphDescription = (
  <p>
    This page explains how to build a{" "}
    <a href="https://www.data-to-viz.com/graph/wordcloud.html">wordcloud</a>{" "}
    using
    <code>react</code> and <code>d3.js</code>. It uses the{" "}
    <a href="https://github.com/jasondavies/d3-cloud">d3-cloud</a> plugin to
    compute the position of each word, and render them with react.
  </p>
);

const snippet1 = `
const data = [
  { x: 'A', y: 'A', value: 12 },
  { x: 'B', y: 'A', value: 2 },
  { x: 'C', y: 'A', value: 9 }
];
`.trim();

const snippet2 = `
const xScale = useMemo(() => {
  return d3
    .scaleBand()
    .range([0, boundsWidth])
    .domain(allXGroups)
    .padding(0.01);
}, [data, width]);
`.trim();

const snippet3 = `
// create a ref for the div that wrapps the viz:
const chartRef = useRef(null);

// The hook will check the dimension of the targeted div:
const chartSize = useDimensions(chartRef);

// chartSize is an object with the dimensions we need to pass to our viz component:
return(
  <div ref={chartRef}>
    <MyChartComponent
      height={chartSize.height}
      width={chartSize.width}
  </div>
)
`.trim();

const snippet4 = `
<div style={{ position: "relative" }}>
  <Renderer ..someProps />
  <Tooltip ..someProps />
</div>
`.trim();

const snippet5 = `
const [hoveredCell, setHoveredCell] = useState<HoveredCell | null>(null);
`.trim();

export default function Home() {
  return (
    <Layout
      title="Wordcloud with React"
      seoDescription="How to build a wordcloud with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription
        title="Wordcloud"
        description={graphDescription}
        chartType="wordcloud"
      />

      <blockquote>
        This page uses the{" "}
        <a href="https://github.com/jasondavies/d3-cloud">d3-cloud</a> plugin
        that you can install in your project with{" "}
        <code>npm install d3-cloud</code>
      </blockquote>

      <AccordionSection title={"Dataset"} startOpen={true}>
        <p>Pretty simple, just a set of words?</p>
        <CodeBlock code={snippet1} />
      </AccordionSection>

      <AccordionSection
        title={"Most basic wordcloud with React and D3.js"}
        startOpen={true}
      >
        <p>
          The process used to build a heatmap with react is very close from
          building it with d3.js only. (See the pure d3 implementation{" "}
          <a href="https://d3-graph-gallery.com/heatmap">here</a>).
        </p>

        <h3>&rarr; Data wrangling</h3>
        <p>
          Before building scales we need an exhaustive list of the X and Y axis
          steps. We also need to compute the min and max of the `value` property
          of the dataset to compute the color scale.
        </p>
        <p>
          As always, don't forget to wrap that kind of work in a{" "}
          <code>useMemo</code>. You want to compute it only when the{" "}
          <code>data</code> changes.
        </p>

        <br />
        <ChartOrSandbox
          VizComponent={WordcloudBasicDemo}
          vizName={"WordcloudBasic"}
          maxWidth={600}
          height={300}
          caption={"Most basic Wordcloud made with react and d3.js"}
        />
      </AccordionSection>

      <div className="full-bleed border-t h-0 bg-gray-100 my-3" />
      <ChartFamilySection chartFamily="ranking" />

      <div className="mt-20" />
      <Contact />
    </Layout>
  );
}
