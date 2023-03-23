import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import ChartFamilySection from "../component/ChartFamilySection";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/UI/CodeBlock";
import { DonutChartBasicDemo } from "../viz/DonutChartBasic/DonutChartBasicDemo";
import Link from "next/link";
import { DonutChartLegendDemo } from "../viz/DonutChartLegend/DonutChartLegendDemo";
import { DonutChartHoverDemo } from "../viz/DonutChartHover/DonutChartHoverDemo";
import { DonutDatasetTransitionDemo } from "viz/DonutDatasetTransition/DonutDatasetTransitionDemo";
import { LinkAsButton } from "component/LinkAsButton";
import { ResponsiveExplanationSection } from "component/ResponsiveExplanationSection";
import DatavizInspirationParallaxLink from "component/DatavizInspirationParallaxLink";
import { DonutBarplotTransitionDemo } from "viz/DonutBarplotTransition/DonutBarplotTransitionDemo";

const graphDescription = (
  <>
    <p>
      The <a href="https://www.data-to-viz.com/graph/donut.html">donut chart</a>{" "}
      is a very common yet{" "}
      <a href="https://www.data-to-viz.com/caveat/pie.html">criticized</a> way
      to represent the value of a few groups in a dataset. It is very close to
      the <Link href="/pie-plot">pie chart</Link> and thus suffers the same
      downsides.
    </p>
    <p>
      This page explains how to build a donut chart using <b>d3.js</b> and{" "}
      <b>React</b>. It starts with a basic example and then focus on
      customization like <b>legends</b>, <b>hover effect</b> and{" "}
      <b>dataset transition</b>.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Donut chart | The React Graph Gallery"
      seoDescription="How to build a donut chart with React and D3.js. A set of re-usable components with explanation and interactive code sandboxes."
    >
      <TitleAndDescription
        title="Donut chart"
        description={graphDescription}
        chartType="donut"
      />
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>
      <p>
        The dataset required to build a donut chart is an array where each item
        represents a group. Each item is an object with 2 properties. They
        provide the group name (<code>name</code>) and its value (
        <code>value</code>).
      </p>
      <br />
      <p>
        For instance, here is the dataset used for the simple donut chart below:
      </p>
      <CodeBlock code={snippet1} />
      {/*
      //
      // Most Basic
      //
      */}
      <h2 id="basic">Most basic donut chart</h2>{" "}
      <p>
        The process to build a donut chart is highly similar as the process to
        build a <Link href="/pie-plot">pie chart</Link>. It is extensively
        described in <Link href="/pie-plot">its dedicated section</Link>.
      </p>
      <LinkAsButton href="/pie-plot" size="sm" isFilled>
        {"Long size tutorial"}
      </LinkAsButton>
      <br />
      <br />
      <p>
        Basically, the <code>pie()</code> function of d3 is used to compute the
        start and end angles of each group.
      </p>
      <CodeBlock code={snippet2} />
      <br />
      <p>
        This allows to compute arcs thanks to the <code>arc()</code> function of
        d3. This function expects a <code>innerRadius</code> argument that
        controls the size of the inner circle of the donut chart. The only
        difference between a pie and a donut is this inner radius.
      </p>
      <CodeBlock code={snippet3} />
      <br />
      <p>
        And that's it. This array of path can be renderer with react using a{" "}
        <code>map</code> as shown in the example below.
      </p>
      <br />
      <br />
      <ChartOrSandbox
        vizName={"DonutChartBasic"}
        VizComponent={DonutChartBasicDemo}
        maxWidth={400}
        height={400}
        caption="Basic donut chart with react and d3.js"
      />
      {/*
      //
      // Legend
      //
      */}{" "}
      <h2 id="legend">Adding inline labels</h2>
      <p>
        The minimal donut chart above is completely useless as long as it does
        not display the <b>group names</b>. Adding a side legend would be
        straightforward but that's a bad practice. It's indeed very annoying for
        the reader to continuously <b>switch</b> between the legend and the
        chart.
      </p>
      <p>
        Instead I suggest to add clean <b>inline labels</b>. A little dot will
        be located on each slice <b>centroid</b>. From there a first segment
        will go out of the donut, followed by a second horizontal segment that
        goes to the label.
      </p>
      <p>
        The difficulty here is to get the position of the slice centroid and of
        the line <b>inflexion point</b>.
      </p>
      <p>
        The <code>centroid()</code> function of d3 is all we need for that. It
        gives the <code>x</code> and <code>y</code> positions of the centroid of
        an <code>arc</code>, arc that we used to build the donut slice anyway.
      </p>
      <CodeBlock code={snippet4} />
      <p>
        For more in depth explanation, please refer to the{" "}
        <Link href="/pie-plot">pie chart section</Link> that uses the exact same
        process.
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
        chart. It has some <b>limitations</b> though.
      </p>
      <p>
        If many groups are available, we will likely get some <b>overlaps</b>{" "}
        between labels, resulting in a messy figure. This could be avoided but
        would require a good amount of additional code. It is thus ignored here.
      </p>
      {/*
      //
      // Responsiveness
      //
      */}
      <ResponsiveExplanationSection chartId="donut" />
      {/*
      //
      // Inspiration
      //
      */}
      <DatavizInspirationParallaxLink chartId="donut" />
      {/*
      //
      // Hover effect
      //
      */}
      <h2 id="legend">Hover effect</h2>
      <p>
        On the graph below, hovering over a slice will smoothly highlight it,
        giving a nice polish touch to the widget.
      </p>
      <p>
        The process is quickly described on the{" "}
        <Link href="/pie-plot">pie chart hover effect</Link> section. But hover
        effect is a topic on itself. As a result, I plan to write a full
        tutorial targeting this topic only. You can{" "}
        <Link href="/subscribe">subscribe</Link> to know when it's ready!
      </p>
      <LinkAsButton size="sm" isFilled href="/subscribe">
        {"Tell me when the Hover effect post is ready!"}
      </LinkAsButton>
      <br />
      <br />
      <p>
        Meanwhile, here is a donut chart with a hover effect, together with its
        React code:
      </p>
      <ChartOrSandbox
        vizName={"DonutChartHover"}
        VizComponent={DonutChartHoverDemo}
        maxWidth={800}
        height={400}
        caption="A donut chart with clean inline legends, built thanks to the centroid function of d3.js."
      />
      {/*
      //
      // Data transition
      //
      */}
      <h2 id="data transition">Data transition</h2>
      <p>
        The <code>Pie</code> component expects a <code>data</code> prop. What
        should we do when this data changes?
      </p>
      <p>
        By default, the chart will update <b>instantly</b>, with no transition.
        Adding a <b>smooth transition</b> gives a nice polish touch to the
        graph. Try to switch between the 2 datasets below to see the animation
        in action.
      </p>
      <p>
        The code below relies on the <code>react-spring</code> library. Instead
        of rendering a <code>path</code> for each slice, it uses a{" "}
        <code>animated.path</code> component that handles the spring animation
        for us.
      </p>
      <p>
        The implementation is <b>not trivial</b>. I plan to publish a full
        tutorial on react-spring for data visualization soon. You can{" "}
        <Link href="/subscribe">subscribe here</Link> to be notified when it is
        ready.
      </p>
      <ChartOrSandbox
        vizName={"DonutDatasetTransition"}
        VizComponent={DonutDatasetTransitionDemo}
        maxWidth={800}
        height={400}
        caption="A donut chart with clean inline legends, built thanks to the centroid function of d3.js."
      />
      <p>
        <u>Note</u>: check the blue group that appears / disappears between
        dataset. This kind of <b>enter/exit pattern</b> is something to keep in
        mind when building animations.
      </p>
      {/*
      //
      // Pie chart to Barplot
      //
      */}
      <h2 id="barplot transition">Pie chart to barplot</h2>
      <p>
        Pie charts are often{" "}
        <a href="https://www.data-to-viz.com/caveat/pie.html">criticized</a>{" "}
        since angles are <b>hard to read</b>. Let's represent the same data
        using a pie chart or a <Link href="/barplot">barplot</Link>, to see
        what's the most insightful 🤷‍♂️.
      </p>
      <p>
        Note that here we animate the transition between{" "}
        <b>different shape types</b>: each arc becomes a rectangle and
        reciprocally. This is made possible thanks to the{" "}
        <a href="https://github.com/veltman/flubber">flubber</a> library, used
        in coordination with{" "}
        <a href="https://react-spring.dev/">react-spring</a>.
      </p>
      <p>
        Once more, a full tutorial is needed here. You can{" "}
        <Link href="/subscribe">subscribe here</Link> to be notified when it is
        ready. In the meanwhile, the code of this specific example is provided
        below.
      </p>
      <ChartOrSandbox
        vizName={"DonutBarplotTransition"}
        VizComponent={DonutBarplotTransitionDemo}
        maxWidth={500}
        height={400}
        caption="Transition from a pie chart to a barplot with a smooth animation using the buttons on top."
      />
      {/*
      //
      // Footer
      //
      */}
      <div className="full-bleed border-t h-0 bg-gray-100 my-3" />
      <ChartFamilySection chartFamily="partOfAWhole" />
      <div className="mt-20" />
    </Layout>
  );
}

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
