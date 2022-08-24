import React, { useState } from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import Contact from "../component/Contact";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import ChartFamilySection from "../component/ChartFamilySection";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/UI/CodeBlock";
import { data } from "../data/one-value-per-group-random";
import { DonutChartBasicDemo } from "../viz/DonutChartBasic/DonutChartBasicDemo";
import Link from "next/link";
import { DonutChartLegendDemo } from "../viz/DonutChartLegend/DonutChartLegendDemo";

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

export default function Home() {
  const [animData, setAnimData] = useState(data);

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
          not display the group names. Adding a legend would be straightforward
          but that's a bad practice.
        </p>
        <br />
        <p>Let's instead add some inline legend.</p>
        <CodeBlock code={snippet1} />
        <ChartOrSandbox
          vizName={"DonutChartLegend"}
          VizComponent={DonutChartLegendDemo}
          maxWidth={800}
          height={400}
          caption="basic donut chart with react and d3.js"
        />
      </AccordionSection>

      <div className="full-bleed border-t h-0 bg-gray-100 my-3" />
      <ChartFamilySection chartFamily="partOfAWhole" />

      <div className="mt-20" />
      <Contact />
    </Layout>
  );
}
