import React, { useState } from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import Contact from "../component/Contact";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import ChartFamilySection from "../component/ChartFamilySection";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/CodeBlock";
import { PieChartBasic } from "../viz/PieChartBasic/PieChartBasic";
import { data } from "../data/one-value-per-group-random";
import { data as eventData } from "../data/event-list";
import { EventBarChart } from "../viz/EventBarChart/EventBarChart";

const graphDescription = (
  <p>
    The <a href="https://www.data-to-viz.com/caveat/pie.html">pie chart</a> is
    both the most common and the most criticized chart. D3.js has a{" "}
    <code>pie()</code> function that creates some svg <code>path</code> for you,
    ready to be renderered with React.
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

/*
[
  {
      "data": {"name": "Mark", "value": 90},
      "index": 1,
      "value": 90,
      "startAngle": 2.145477909768639,
      "endAngle": 4.115814765678614,
      "padAngle": 0
  }, .... same for other groups
]
*/
`.trim();

const snippet3 = `
const arcPathGenerator = d3.arc();
const arcs pie.map((p) =>
      arcPathGenerator({
        innerRadius: 0,
        outerRadius: radius,
        startAngle: p.startAngle,
        endAngle: p.endAngle,
      })
    );

/*
[
  "M151,97 A180,180,0,0,1,-148,101 L0,0Z",
  .... other groups
]
*/
`.trim();

export default function Home() {
  const [animData, setAnimData] = useState(data);

  return (
    <Layout
      title="Pie chart with React"
      seoDescription="How to build a pie chart with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription
        title="Pie chart"
        description={graphDescription}
        chartType="pie"
      />

      <AccordionSection title={"Dataset"} startOpen={true}>
        <p>
          The dataset required to build a pie chart is pretty simple. It is an
          array where each item represents a group of the pie chart. Each item
          is an object with 2 properties. They provide the group name (
          <code>name</code>) and its value (<code>value</code>).
        </p>
        <br />
        <p>
          For instance, here is the dataset used for the simple pie chart below:
        </p>
        <CodeBlock code={snippet1} />
      </AccordionSection>

      <AccordionSection title={"Most basic pie chart"} startOpen={true}>
        <p>
          As usual, the math is done thanks to d3.js, and the rendering using
          React
        </p>
        <br />
        <p>
          First of all, the <code>pie()</code> function is used to compute the
          start and end angles of each group. By default this function expects
          an array of number as input. Thus we have to tell it how to find the
          value to use in our dataset using an assesor function
        </p>
        <CodeBlock code={snippet2} />
        <br />
        <p>
          From those start and end angles we now need to build a proper string
          that we can pass as the <code>d</code> attribute of a{" "}
          <code>path</code>. This is pretty easy thanks to the{" "}
          <code>arc()</code> function of d3. This function must be applied to
          every item of the pie object created above.
        </p>
        <CodeBlock code={snippet3} />
        <br />
        <p>
          And that's it. This array of path can be renderer using react using a
          map pretty easily.
        </p>
        <br />
        <br />

        <ChartOrSandbox vizName={"PieChartBasic"}>
          <PieChartBasic data={data} height={500} width={500} />
        </ChartOrSandbox>
      </AccordionSection>

      <hr className="full-bleed  bord er bg-gray-200 my-3" />

      <ChartFamilySection chartFamily="partOfAWhole" />

      <div className="mt-20" />
      <Contact />
    </Layout>
  );
}
