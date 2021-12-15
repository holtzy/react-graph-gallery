import React, { useRef } from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import ChartFamilySection from "../component/ChartFamilySection";
import Contact from "../component/Contact";
import SectionLogo from "../component/SectionLogo";
import { ViolinBasic } from "../viz/ViolinBasic/ViolinBasic";
import { data } from "../data/distribution-multi-groups-random";
import { LinkAsButton } from "../component/LinkAsButton";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import { data as ViolinData } from "../data/distribution-multi-groups-random";
import { useDimensions } from "../hook/use-dimensions";
import { TakeHome } from "../component/TakeHome";
import Link from "next/link";
import { BoxplotToViolinTransition } from "../viz/BoxplotToViolinTransition/BoxplotToViolinTransition";

const graphDescription = (
  <p>
    A <a href="https://www.data-to-viz.com/graph/violin.html">violin chart</a>{" "}
    displays the distribution of a numeric variable, often for several groups of
    a dataset. D3.js is used to compute a histogram with the <code>bin()</code>{" "}
    function. It then adds smoothing to it with <code>curve()</code>. React is
    finally used to render the <code>path</code>.
  </p>
);

const snippet1 = `
const data = [
  { name: "A", value: 10.7577 },
  { name: "A", value: 19.9273 },
  { name: "B", value: 13.8917 },
  { name: "B", value: 0.5102 },
  { name: "C", value: 10.5524 },
  ...
]
`.trim();

const snippet2 = `
// data is something like [12, 4, 7, 9, ....]
const binBuilder = d3
  .bin()
  .domain([min, max])
  .thresholds(yScale.ticks(14)) // how many bins we want?
  .value((d) => d); // accessor function, just return the value since we're dealing with an array of number
const bins = binBuilder(data);
`.trim();

const snippet3 = `
const areaBuilder = d3
  .area()
  .x0((d) => wScale(-d.length))
  .x1((d) => wScale(d.length))
  .y((d) => yScale(d.x0))
  .curve(d3.curveBumpY);
const area = areaBuilder(bins);
`.trim();

export default function Home() {
  const violinChartRef = useRef<HTMLDivElement>(null);
  const violinChartSize = useDimensions(violinChartRef);

  return (
    <Layout
      title="Violin plot with React"
      seoDescription="How to build a violin plot with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription
        title="Violin plot"
        description={graphDescription}
        chartType="violin"
      />
      <h2>What are we trying to build?</h2>
      <p>
        A violin chart allows to visualize the distribution of one or several
        groups. Here, groups are spread on the X axis, when the Y axis
        represents the numeric value.
      </p>
      <div className="flex justify-center">
        <ViolinBasic data={data} height={400} width={600} />
      </div>

      <AccordionSection title={"The data"} startOpen={true}>
        <p>
          The dataset used to build a violin chart is usually an array of
          object. For each object, a <code>name</code> property provides the
          group name, and a <code>value</code> property provides the numeric
          value. It basically looks like this:
        </p>
        <CodeBlock code={snippet1} />
        <p>
          <u>Note</u>: violin plots are useful for big datasets. If you have
          less than ~100 data points, you probably better have to build a{" "}
          <a href="https://www.data-to-viz.com/caveat/boxplot.html#boxplotjitter">
            boxplot
          </a>{" "}
          with individual points on top.
        </p>
      </AccordionSection>

      <AccordionSection
        title={"Building a violin shape with d3.js"}
        startOpen={true}
      >
        <p>
          The process to build a violin chart with d3.js is described in depth
          in the{" "}
          <a href="https://www.d3-graph-gallery.com/violin">d3 graph gallery</a>
          . Let's remind the most important steps:
        </p>

        <h3>
          &rarr; slice the data with <code>d3.bin()</code>
        </h3>
        <p>
          Each violin represents the distribution of an array of numerical
          values. The first step to get there is to split the values in several
          bins and count how many values are in each bin. This is possible
          thanks to the <code>bin()</code> function:
        </p>
        <CodeBlock code={snippet2} />
        <p>
          The result (<code>bins</code>) in an array. Each item is an array that
          represents a bin and contains all the values inside this bins. It also
          have 2 additional properties x0 and x1 that are the bin boundaries.
        </p>

        <h3>
          &rarr; build the svg path with <code>d3.area()</code> and{" "}
          <code>curve()</code>
        </h3>
        <p>
          The bins object is all we need to draw an histogram since the{" "}
          <code>length</code>
          of each bin is the actual size of the bar. This is possible thanks to
          the <code>area()</code> function that can be called as follow. Last
          but not leas the curve() call adds some smoothing to the shape,
          transforming the histogram in a smooth density:
        </p>
        <CodeBlock code={snippet3} />

        <br />
        <TakeHome>
          We now have the logic to build a svg path for a violin from an array
          of values. Let's render it with react.
        </TakeHome>
      </AccordionSection>

      <AccordionSection
        title={"Rendering a basic violin chart with React"}
        startOpen={true}
      >
        <p>We now</p>

        <CodeBlock code={snippet2} />
        <p></p>
        <ChartOrSandbox vizName={"ViolinBasic"}>
          <div style={{ height: 300, width: "100%" }} ref={violinChartRef}>
            <ViolinBasic
              height={violinChartSize.height}
              width={violinChartSize.width}
              data={ViolinData}
            />
          </div>
        </ChartOrSandbox>
      </AccordionSection>
      <AccordionSection
        title={"Variation: violin to boxplot transition"}
        startOpen={false}
      >
        <p>
          The react graph gallery has a{" "}
          <Link href="/shape-morphism-for-dataviz-with-react">
            dedicated blog post
          </Link>{" "}
          on shape morphism that showcases a boxplot to violin plot transition.
          Here is the final result, but you should probably read it to
          understand how it works!
        </p>
        <br />
        <ChartOrSandbox vizName={"BoxplotToViolinTransition"}>
          <BoxplotToViolinTransition
            height={300}
            width={600}
            data={ViolinData}
          />
        </ChartOrSandbox>
      </AccordionSection>
      <AccordionSection
        title={"Variation: violin plot with jitter"}
        startOpen={false}
      >
        <p>Oh no! This chart isn't available yet!</p>
      </AccordionSection>

      <div className="mt-20" />
      <Contact />
    </Layout>
  );
}
