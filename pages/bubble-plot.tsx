import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import ChartFamilySection from "../component/ChartFamilySection";
import Contact from "../component/Contact";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/UI/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import Link from "next/link";
import { BubblePlotBasicDemo } from "../viz/BubblePlotBasic/BubblePlotBasicDemo";
import { BubblePlotLegendDemo } from "../viz/BubblePlotLegend/BubblePlotLegendDemo";
import { BubblePlotTooltipDemo } from "../viz/BubblePlotTooltip/BubblePlotTooltipDemo";
import TableOfContent from "../component/TableOfContent";

const graphDescription = (
  <p>
    A <a href="https://www.data-to-viz.com/graph/bubble.html">bubble plot</a> is
    an extension of a scatterplot, where each circle has its size proportional
    to a numeric values. This page describes how to build a bubble chart with
    <code>d3.js</code> in the context of a <code>react</code> application.
  </p>
);

const snippet1 = `
const data = [
  {
    "country": "Afghanistan",
    "continent": "Asia",
    "lifeExp": 43.828,
    "pop": 31889923,
    "gdpPercap": 974.5803384
  },
  {
    "country": "Albania",
    "continent": "Europe",
    "lifeExp": 76.423,
    "pop": 3600523,
    "gdpPercap": 5937.029526
  },
  ...
]
`.trim();

export default function Home() {
  return (
    <Layout
      title="Bubble plot with React"
      seoDescription="How to build a bubble plot with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription
        title="Bubble plot"
        description={graphDescription}
        chartType="bubble"
      />

      <AccordionSection title={"The data"} startOpen={true} toc={"data"}>
        <p>
          The dataset used to build a bubble plot is usually an array of object
          where each object is a data point. For each object, at least{" "}
          <b>3 properties</b> are required.
        </p>
        <p>
          Two properties are used for the <b>X</b> and <b>Y</b> axis, the third
          one is used for the circle <b>size</b>.
        </p>
        <p>
          Note that you can add even more properties to the object, that can be
          used to color the bubbles like the <code>continent</code> on the
          example below.
        </p>
        <CodeBlock code={snippet1} />
        <p>
          <u>Note</u>: this section is based on the{" "}
          <a href="https://www.data-to-viz.com/story/ThreeNum.html">
            gapminder
          </a>{" "}
          dataset that provides some info like the life expectancy and the
          population for every country.
        </p>
      </AccordionSection>

      <div className="mt-20">
        <blockquote>
          <b>Note</b>: This page considers you're already familiar with the
          process to build a <Link href="scatter-plot">scatterplot</Link>. Start
          there for some basic examples!
        </blockquote>
      </div>

      <AccordionSection
        title={"Static bubble chart"}
        startOpen={true}
        toc={"Static"}
      >
        <p>
          A few additional steps are required to move from a{" "}
          <Link href="scatter-plot">scatterplot</Link> to a bubble chart.
        </p>
        <ul>
          <li>
            One more <code>linearScale</code> is needed to control the circle
            size. The <code>range</code> is an arbitrary array where you define
            the min and max sizes you want to display. Don't forget you can use
            a log scale if you have extreme values in the dataset.
          </li>
          <li>
            Optionally, a fourth scale can be added for the color using a{" "}
            <code>scaleOrdinal</code>.
          </li>
          <li>
            A bubble chart often have circle overlaps. It's strongly advised to
            use transparency and to sort the data: draw the big bubbles below,
            the small ones on top.
          </li>
        </ul>

        <ChartOrSandbox
          VizComponent={BubblePlotBasicDemo}
          vizName={"BubblePlotBasic"}
          maxWidth={600}
          height={500}
          caption="A clean bubble chart built with d3.js in a react context. A color scale is used to represent a categorical variable."
        />

        <p>
          This is starting to look not too bad, but we definitely need a{" "}
          <b>legend</b> here, to understand what the size and color of each
          circle mean.
        </p>
      </AccordionSection>

      <AccordionSection
        title={"Bubble chart with legend"}
        startOpen={true}
        toc={"Legend"}
      >
        <p>
          There are{" "}
          <a href="https://d3-graph-gallery.com/graph/custom_legend.html">
            many different ways
          </a>{" "}
          to add a legend to a d3.js graph.
        </p>
        <p>
          Here we need a legend that will properly describe both a numeric value
          (for the bubble <b>size</b>) and an ordinal value (for the{" "}
          <b>color</b>).
        </p>

        <ChartOrSandbox
          VizComponent={BubblePlotLegendDemo}
          vizName={"BubblePlotLegend"}
          maxWidth={600}
          height={500}
          caption="Adding a legend to make sense of the bubble size. Legend is hand made, adding svg shapes with React."
        />

        <p>
          Not too bad but note to self: this needs some polish and a complete
          write-up.
        </p>
      </AccordionSection>

      <AccordionSection
        title={"Bubble chart with tooltip"}
        startOpen={true}
        toc={"Tooltip"}
      >
        <p>Complete writeup</p>

        <ChartOrSandbox
          VizComponent={BubblePlotTooltipDemo}
          vizName={"BubblePlotTooltip"}
          maxWidth={600}
          height={500}
          caption="A clean bubble chart built with d3.js in a react context. A color scale is used to represent a categorical variable."
        />

        <p>
          Not too bad but note to self: this needs some polish and a complete
          write-up.
        </p>
      </AccordionSection>

      <br />
      <br />
      <br />
      <div className="full-bleed border-t h-0 bg-gray-100 my-3" />
      <ChartFamilySection chartFamily="correlation" />

      <div className="mt-20" />
      <Contact />
    </Layout>
  );
}
