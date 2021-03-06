import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import Contact from "../component/Contact";
import { data } from "../viz/HeatmapBasic/data";
import ChartFamilySection from "../component/ChartFamilySection";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import { Heatmap as HeatmapBasic } from "../viz/HeatmapBasic/Heatmap";
import { HeatmapBasicDemo } from "../viz/HeatmapBasic/HeatmapBasicDemo";
import { HeatmapVaccinationDemo } from "../viz/HeatmapVaccination/HeatmapVaccinationDemo";
import { HeatmapTooltipDemo } from "../viz/HeatmapTooltip/HeatmapHeatmapTooltipDemo";

const graphDescription = (
  <p>
    This page explains how to build a{" "}
    <a href="https://www.data-to-viz.com/graph/heatmap.html">heatmap</a> using
    <code>react</code> and <code>d3.js</code>. It starts by describing how the
    input data must be formatted and build a very basic heatmap from it. Then,
    several examples with code explain how to add the usual customizations:
    responsiveness, tooltip, hover interaction and more.
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
      title="Heatmap with React"
      seoDescription="How to build a heatmap with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription
        title="Heatmap"
        description={graphDescription}
        chartType="heatmap"
      />

      <AccordionSection title={"Dataset"} startOpen={true}>
        <p>
          The dataset is an array where each item provides information for a
          cell of the heatmap.
        </p>
        <p>
          Each item of the object requires at least a <code>value</code>{" "}
          property that is a number. This number will be used to color the cell.
        </p>
        <p>
          Each item also requires some <code>x</code> and <code>y</code>{" "}
          properties, providing the position of the cell in the 2d space. Note
          that those values are strings since anything can be used. We are
          dealing with ordinal scales here.
        </p>
        <p>
          Note that you can add any kind of information in those cell objects
          that you can use to customize the cell later on. For instance, any
          information that you would like to add in a tooltip.
        </p>
        <br />
        <p>Here is a minimal example of the data structure:</p>

        <CodeBlock code={snippet1} />
      </AccordionSection>

      <AccordionSection
        title={"Most basic heatmap with React and D3.js"}
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
        <h3>&rarr; Scales</h3>
        <p>
          The X and Y scale are{" "}
          <a href="https://github.com/d3/d3-scale#scaleBand">band scales</a>,
          computed with the <code>scaleBand()</code> function of d3.js. In our
          simple example below, calling a the x Scale with{" "}
          <code>xScale("A")</code> will return <code>0</code>, and{" "}
          <code>xScale.bandwidth()</code> will return the width of a cell.
        </p>
        <CodeBlock code={snippet2} />
        <p>
          The color scale is much more tricky to compute. We encode a numeric
          variable that can have any kind of distribution with a color, and
          that's not an easy step.
        </p>
        <p>
          Below we're applying a sequential scale with{" "}
          <code>scaleSequential()</code> together with the <code>inferno</code>{" "}
          color palette. Many other options could make sense, but that deserves
          its own blogpost.
        </p>
        <h3>&rarr; Rendering</h3>
        <p>
          With the scales available, rendering is just a matter of mapping
          through the dataset and creating a set of svg <code>rect</code>.
        </p>
        <p>
          Note that for the X and Y axis just adding a set of svg{" "}
          <code>text</code> element does a pretty good job, so no need to go
          through the{" "}
          <a href="https://www.react-graph-gallery.com/build-axis-with-react">
            usual axis hassle
          </a>
          .
        </p>
        <br />
        <ChartOrSandbox
          VizComponent={HeatmapBasicDemo}
          vizName={"HeatmapBasic"}
          maxWidth={600}
          height={300}
          caption={"Most basic heatmap made with react and d3.js"}
        />
      </AccordionSection>

      <AccordionSection
        title={"Responsive heatmap with react"}
        startOpen={true}
      >
        <p>
          The component above is not responsive. It expects 2 props called{" "}
          <code>width</code> and <code>height</code> and will render a heatmap
          of those dimensions.
        </p>
        <p>
          Making the heatmap responsive requires to add a <b>wrapper</b>{" "}
          component that gets the dimension of the parent <code>div</code>, and
          listen to a potential dimension change.
        </p>
        <p>
          The process is extensively described in{" "}
          <a href="https://www.react-graph-gallery.com/make-a-graph-responsive">
            this post
          </a>{" "}
          of the gallery. Basically most of the job is made by a hook called{" "}
          <code>useDimensions</code> that targets a specific <code>ref</code>.
          This is a quick summary of how it works:
        </p>
        <CodeBlock code={snippet3} />
        <a href="https://www.react-graph-gallery.com/make-a-graph-responsive">
          Read more about responsiveness
        </a>
      </AccordionSection>

      <AccordionSection title={"Adding a tooltip"} startOpen={true}>
        <p>
          The tooltip is a must have for a heatmap. It allows to get as much
          detail as needed for each cell. It's not an easy task though. There
          are several strategies described more in depth here, but here is what
          I suggest in the following example:
        </p>
        <h3>&rarr; Two layers: renderer and tooltip</h3>
        <p>
          The first task is to split the <code>Heatmap</code> component in 2
          layers. The first layer called <code>Renderer</code> will render the
          cells as seen previously. The second is an <code>absolute</code> div
          put on top of the first one, used only to show the tooltip{" "}
          <code>div</code>.
        </p>
        <p>
          This way, the x & y coordinates of cells in the first layer correspond
          with the second layer.
        </p>
        <CodeBlock code={snippet4} />

        <h3>&rarr; A common state</h3>
        <p>
          On top of the 2 layers we need a state that stores information about
          the cell being hovered over. You can create it with a{" "}
          <code>useState</code>
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
          The heatmap cells listen to <code>onMouseEnter</code> events and
          update the tooltip state with accurate coordinates when it happens.
        </p>
        <p>
          The tooltip renders a div at the right position thanks to those
          informations.
        </p>
        <p>
          There is much more to say about those parts, but it deserves its own
          blog post since it's then used for all chart types.
        </p>

        <p></p>
        <br />
        <ChartOrSandbox
          VizComponent={HeatmapTooltipDemo}
          vizName={"HeatmapTooltip"}
          maxWidth={600}
          height={300}
          caption={
            "This heatmap has a tooltip! Hover over a cell to get its exact value."
          }
        />
        <p>Read more on tooltips</p>
      </AccordionSection>

      <AccordionSection
        title={"Application to a real dataset"}
        startOpen={true}
      >
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
          <a href="https://www.tycho.pitt.edu/data/">here</a>.
        </p>
        <p>
          It was necessary to tweak the color scale, switching to a square
          transformation with <code>scaleSequentialSqrt</code>. This allows to
          give less importance the extreme values that would absorb the
          variation otherwise.
        </p>
        <ChartOrSandbox
          VizComponent={HeatmapVaccinationDemo}
          vizName={"HeatmapVaccination"}
          maxWidth={1300}
          height={700}
          caption={
            "Number of Measles infected people over 70-some years and across all 50 states. Can you guess when a vaccine was introduced?"
          }
        />{" "}
      </AccordionSection>

      <div className="full-bleed border-t h-0 bg-gray-100 my-3" />
      <ChartFamilySection chartFamily="correlation" />

      <div className="mt-20" />
      <Contact />
    </Layout>
  );
}
