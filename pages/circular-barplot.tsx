import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import ChartFamilySection from "../component/ChartFamilySection";
import Contact from "../component/Contact";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/UI/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import Link from "next/link";
import DatavizInspirationParallaxLink from "../component/DatavizInspirationParallaxLink";
import { CircularBarplotBasicDemo } from "../viz/CircularBarplotBasic/CircularBarplotBasicDemo";
import { CircularBarplotLabelDemo } from "../viz/CircularBarplotLabel/CircularBarplotLabelDemo";

const graphDescription = (
  <p>
    A{" "}
    <a href="https://www.data-to-viz.com/graph/circularbarplot.html">
      circular barplot
    </a>{" "}
    is the equivalent of a <Link href="barplot">barplot</Link>, with bars
    displayed around a circle. This page describes how to deal with radial
    coordinates with <code>d3.js</code> and <code>react</code>. It's a step by
    step tutorial with several interactive sandboxes.
  </p>
);

const snippet1 = `
const xScale = d3
      .scaleBand()
      .domain(groups)
      .range([0, 2 * Math.PI])
      .padding(BAR_PADDING)

const yScale = d3
      .scaleRadial()
      .domain([0, max])
      .range([innerRadius, outerRadius])
`.trim();

const snippet2 = `
const arcPathGenerator = d3.arc();

const allShapes = data.map((group, i) => {
  const path = arcPathGenerator({
    innerRadius: innerRadius,
    outerRadius: yScale(group.value),
    startAngle: xScale(group.name),
    endAngle: xScale(group.name) + xScale.bandwidth(),
  });
})
`.trim();

export default function Home() {
  return (
    <Layout
      title="Circular Barplot with React"
      seoDescription="How to build a circular barplot with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription
        title="Circular Barplot"
        description={graphDescription}
        chartType="circularBarplot"
      />

      <AccordionSection title={"Dataset"} startOpen={true}>
        <p>
          The dataset required to build a circular barplot is usually an array
          where each item is an object providing the <code>name</code> and the{" "}
          <code>value</code> of the group.
        </p>
        <br />
        <p>Here is a minimal example</p>
        <CodeBlock code={snippet1} />
        <p>
          Note: if your data is in <code>.csv</code> format, you can translate
          it thanks to the <code>d3.csv()</code> function as suggested{" "}
          <a href="https://d3-graph-gallery.com/graph/barplot_horizontal.html">
            here
          </a>
          .
        </p>
      </AccordionSection>

      <AccordionSection title={"Bars in radial coordinates"} startOpen={true}>
        <p>
          Even if the process to build a circular barplot is very different than
          for the common <Link href="barplot">barplot</Link>, I strongly advise
          to have a good understanding of the common version first.{" "}
          <Link href="barplot">Check it out</Link>.
        </p>
        <p>Here is an overview of the main differences.</p>

        <h3>&rarr; Radial coordinates</h3>
        <p>
          Do you remember you high school lectures about trigonometry? Me either
          🙃. But we need it here. Using radial coordinates, each point is
          defined using an <b>angle</b> and its <b>distance to the center</b> of
          the chart.
        </p>
        <p>
          <b>Angle</b> is defined between <code>0</code> (top) and{" "}
          <code>2*Pi</code> (top again). A value of <code>Pi</code> will be at
          the bottom.
        </p>
        <p>
          <b>Distance</b> to the center goes from <code>innerRadius</code> to{" "}
          <code>outerRadius</code>. The inner radius is arbitraty. Do not use
          something too small or your bars will be very distorded. The upper
          value is computed from the svg dimenstion to fill it properly.
        </p>
        <p>
          The X scale (for the groups) is a <code>scaleBand</code> like for a
          common barplot, but it goes from <code>0</code> to <code>2*Pi</code>{" "}
          instead of going from <code>0</code> to <code>width</code>.{" "}
        </p>

        <h3>&rarr; Y Scale</h3>
        <p>
          The Y scale uses a very specific <code>scaleRadial</code>. Indeed,
          bars are wider at their top than at their bottom. This{" "}
          <code>scaleRadial</code> takes it into account and bring some sort of
          correction. Check the{" "}
          <a href="https://github.com/d3/d3-scale#radial-scales">doc</a>, or
          even this{" "}
          <a href="https://github.com/d3/d3-scale/issues/90">explanation</a> for
          more.
        </p>
        <p>At the end of the day, that's how our scales look like:</p>
        <CodeBlock code={snippet1} />

        <h3>
          &rarr; Drawing with <code>path</code>, not <code>rect</code>.
        </h3>
        <p>
          We are not drawing rectangles here, so the svg <code>rect</code>{" "}
          element won't be helpful.
        </p>
        <p>
          Instead, we are drawing <b>fractions of a rings</b>, that you can call
          arcs.
        </p>
        <p>
          Fortunately, d3.js has an <code>arc()</code> function that will
          generate the svg <code>path</code> for us. It's the same process that
          is used to create a <Link href="pie-plot">pie chart</Link> or a{" "}
          <Link href="donut">donut chart</Link>.
        </p>
        <p>
          Here is an idea on how the function can be used to generate all the
          svg shapes:
        </p>
        <CodeBlock code={snippet2} />

        <h3>&rarr; Rendering</h3>
        <p>
          Not much to add. Just include the paths in a <code>svg</code> element.
          Remember that 0,0 is the center of the chart instead of being the
          top-left corner. So we need to apply a <code>translate</code> at some
          point.
        </p>

        <ChartOrSandbox
          vizName={"CircularBarplotBasic"}
          VizComponent={CircularBarplotBasicDemo}
          height={500}
          maxWidth={600}
          caption={
            <span>
              Most basic circular barplot built with d3.js and react, using
              radial coordinates and <code>path</code> instead of{" "}
              <code>rect</code>.
            </span>
          }
        />

        <p>
          That's a good start but it looks pretty much like a snail so far.
          Let's make it a real chart with labels and values.
        </p>
      </AccordionSection>

      <AccordionSection title={"Labels and Values"} startOpen={true}>
        <p>
          Add a text element to show the name of each bar. A bit or logic to
          write to determine wether or not a label must be flipped, and how to
          position it properly.
        </p>
        <ChartOrSandbox
          vizName={"CircularBarplotLabel"}
          VizComponent={CircularBarplotLabelDemo}
          height={500}
          maxWidth={600}
          caption={
            "Add some labels to each bar of the circular barchart to make it insightful"
          }
        />
      </AccordionSection>

      <DatavizInspirationParallaxLink chartId="circularBarplot" />

      <AccordionSection title={"Vertical barplot"} startOpen={true}>
        <p>
          The vertical option is less common since it makes is much harder to
          read the labels. But if you really need it, it is just a matter of
          swaping the X and Y axes of the previous example. Here is a working
          version.
        </p>
      </AccordionSection>

      <br />
      <br />
      <br />
      <div className="full-bleed border-t h-0 bg-gray-100 my-3" />
      <ChartFamilySection chartFamily="partOfAWhole" />

      <div className="mt-20" />
      <Contact />
    </Layout>
  );
}
