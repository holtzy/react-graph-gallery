import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import Contact from "../component/Contact";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import ChartFamilySection from "../component/ChartFamilySection";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/UI/CodeBlock";
import { DonutChartBasicDemo } from "../viz/DonutChartBasic/DonutChartBasicDemo";
import Link from "next/link";
import { DonutChartLegendDemo } from "../viz/DonutChartLegend/DonutChartLegendDemo";
import { DonutChartHoverDemo } from "../viz/DonutChartHover/DonutChartHoverDemo";
import { DonutDatasetTransitionDemo } from "viz/DonutDatasetTransition/DonutDatasetTransitionDemo";

const graphDescription = (
  <p>
    The <a href="https://www.data-to-viz.com/graph/donut.html">donut chart</a>{" "}
    is a very common yet{" "}
    <a href="https://www.data-to-viz.com/caveat/pie.html">criticized</a> way to
    represent the value of a few groups in a dataset. This page explains how to
    build one using d3.js and react. It starts with a basic example and then
    focus on customization like legends, hover effect and dataset transition.
  </p>
);

const snippet1 = `
const data = [
  {name:"Mark", value: 90},
  {name:"Robert", value: 12},
  {name:"Emily", value: 34},
  {name:"Marion", value: 53},
  {name:"Nicolas", value: 98},
]
`.trim();

const snippet2 = `
const pieGenerator = d3.pie().value((d) => d.value);
const pie = pieGenerator(data);
`.trim();

const snippet3 = `
const arcPathGenerator = d3.arc();
const arcs pie.map((p) =>
      arcPathGenerator({
        innerRadius: 50, // makes a donut instead of a pie
        outerRadius: radius,
        startAngle: p.startAngle,
        endAngle: p.endAngle,
      })
    );
`.trim();

const snippet4 = `
const sliceInfo = {
  innerRadius,
  outerRadius: radius,
  startAngle: start,
  endAngle: end,
};
const centroid = arcGenerator.centroid(sliceInfo); // [x,y] position of the centroid
const slicePath = arcGenerator(sliceInfo); // string: the path of the slice
`.trim();

const snippet5 = `
onMouseEnter={() => {
  if (ref.current) {
    ref.current.classList.add(hasHighlight);
  }
}}
`.trim();

const snippet6 = `
.container .slice {
  transition-duration: 0.3s;
  transition-property: filter, opacity;
  filter: saturate(100%);
  opacity: 1;
}

.container.hasHighlight .slice {
  filter: saturate(50%);
  opacity: 0.2;
}

.container.hasHighlight .slice:hover {
  filter: saturate(100%);
  opacity: 1;
}
`.trim();

export default function Home() {
  return (
    <Layout
      title="Donut chart with React"
      seoDescription="How to build a donuu chart with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription
        title="Donut chart"
        description={graphDescription}
        chartType="donut"
      />

      <AccordionSection title={"Dataset"} startOpen={true}>
        <p>
          The dataset required to build a donut chart is an array where each
          item represents a group. Each item is an object with 2 properties.
          They provide the group name (<code>name</code>) and its value (
          <code>value</code>).
        </p>
        <br />
        <p>
          For instance, here is the dataset used for the simple donut chart
          below:
        </p>
        <CodeBlock code={snippet1} />
      </AccordionSection>

      <AccordionSection title={"Most basic donut chart"} startOpen={true}>
        <p>
          The process to build a donut chart is highly similar as the process to
          build a <Link href="pie">pie chart</Link>. It is extensively descibed{" "}
          <Link href="pie">here</Link>.
        </p>
        <br />
        <p>
          Basically, the <code>pie()</code> function of d3 is used to compute
          the start and end angles of each group.
        </p>
        <CodeBlock code={snippet2} />
        <br />
        <p>
          This allows to compute arcs thanks to the <code>arc()</code> function
          of d3. This function expects a <code>innerRadius</code> argument that
          controls the size of the inner circle of the donut chart. The only
          difference between a pie and a donut is this inner radius.
        </p>
        <CodeBlock code={snippet3} />
        <br />
        <p>
          And that's it. This array of path can be renderer using react using a
          map as shown in the example below.
        </p>
        <br />
        <br />

        <ChartOrSandbox
          vizName={"DonutChartBasic"}
          VizComponent={DonutChartBasicDemo}
          maxWidth={400}
          height={400}
          caption="basic donut chart with react and d3.js"
        />
      </AccordionSection>

      <AccordionSection title={"Legend"} startOpen={true}>
        <p>
          The minimal donut chart above is completely useless as long as it does
          not display the group names. Adding a side legend would be
          straightforward but that's a bad practice. It's indeed very annoying
          for the reader to continuously switch between the legend and the
          chart.
        </p>
        <p>
          Instead I suggest to add clean inline legends. A little dot will be
          located on each slice centroid. From there a first segment will go out
          of the donut, followed by a second horizontal segment that goes to the
          label.
        </p>
        <p>
          The difficulty here is to get the position of the slice centroid and
          of the line inflexion point.
        </p>
        <p>
          The <code>centroid()</code> function of d3 is all we need for that. It
          gives the <code>x</code> and <code></code>y positions of the centroid
          of an <code>arc</code>, arc that we used to build the donut slice
          anyway.
        </p>
        <CodeBlock code={snippet4} />
        <p>
          The exact same techniique is used to get the position of the inflexion
          point. An additional arc is computed, located out of the donut area,
          and with a thickness of 0. Its centroid is the inflexion point.
        </p>
        <ChartOrSandbox
          vizName={"DonutChartLegend"}
          VizComponent={DonutChartLegendDemo}
          maxWidth={800}
          height={400}
          caption="A donut chart with clean inline legends, built thanks to the centroid function of d3.js."
        />
        <p>
          This approach is a good start when it comes to add legend on a donut
          chart. It has some limitations though.
        </p>
        <p>
          If many groups are available, we will likely get some overlaps between
          labels, resulting in a messy figure. This could be avoided but would
          require a good amount of additional code. It is thus ignored here.
        </p>
      </AccordionSection>

      <AccordionSection title={"Hover effect"} startOpen={true}>
        <p>
          A nice interactive touch for a donut chart is to add a hover effect.
          On the graph below, hovering over a slice will highlight it.
        </p>
        <p>
          Several approaches are available to trigger that king of interaction.
          They are extensively described in this{" "}
          <Link href="add-hover-interaction-to-graph">specific post</Link>.
        </p>
        <p>
          For a donut chart I suggest to slightly dim the groups that are not
          hovered over. This can be done by toogling a class on the donut svg
          container and using css selectors smartly.
        </p>
        <p>
          Adding a <code>hasHighlight</code> class can be done using the{" "}
          <code>onMouseEnter</code> attribute of any svg element. The opposite
          can then be done using <code>onMouseLeave</code> and the{" "}
          <code>remove()</code> function.
        </p>
        <CodeBlock code={snippet5} />
        <p>
          Then, this is how the css should look like to keep a strong opacity on
          the hovered group only:
        </p>
        <CodeBlock code={snippet6} />

        <ChartOrSandbox
          vizName={"DonutChartHover"}
          VizComponent={DonutChartHoverDemo}
          maxWidth={800}
          height={400}
          caption="A donut chart with clean inline legends, built thanks to the centroid function of d3.js."
        />
      </AccordionSection>

      <ChartOrSandbox
        vizName={"DonutDatasetTransition"}
        VizComponent={DonutDatasetTransitionDemo}
        maxWidth={800}
        height={400}
        caption="A donut chart with clean inline legends, built thanks to the centroid function of d3.js."
      />

      <div className="full-bleed border-t h-0 bg-gray-100 my-3" />
      <ChartFamilySection chartFamily="partOfAWhole" />

      <div className="mt-20" />
      <Contact />
    </Layout>
  );
}
