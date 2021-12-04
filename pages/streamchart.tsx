import React, { useState } from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import Contact from "../component/Contact";
import { LinkAsButton } from "../component/LinkAsButton";
import { Button } from "../component/Button";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import ChartFamilySection from "../component/ChartFamilySection";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/CodeBlock";
import { PieChartBasic } from "../viz/PieChartBasic/PieChartBasic";
import { data } from "../data/group-evolution-first-name";

const graphDescription = (
  <p>
    A <a href="https://www.data-to-viz.com/caveat/pie.html">stream chart</a>{" "}
    displays the evolution of several groups using nice flowing shapes
  </p>
);

const snippet1 = `
const data = [
    {
      "year": 1880,
      "Amanda": 241,
      "Ashley": 0,
      "Betty": 117,
      "Deborah": 12,
      "Dorothy": 112,
      "Helen": 636,
      "Linda": 27,
      "Patricia": 0
    },
    ....
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
      title="Streamgraph with React"
      seoDescription="How to build a streamgraph with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription
        title="Stream graph"
        description={graphDescription}
        chartType="stream"
      />

      <AccordionSection title={"Dataset"} startOpen={true}>
        <p>
          Different solution. Here I use an array of object. Each object is a
          timestamp, providing the value of each group
        </p>
        <br />
        <CodeBlock code={snippet1} />
      </AccordionSection>

      <AccordionSection title={"Most basic streamgraph"} startOpen={true}>
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
        <br />
        <p>
          And that's it. This array of path can be renderer using react using a
          map pretty easily.
        </p>
        <br />
        <br />

        <ChartOrSandbox vizName={"PieChartBasic"}>
          <StreamGraphBasic data={data} height={500} width={500} />
        </ChartOrSandbox>
      </AccordionSection>

      <hr className="full-bleed  bord er bg-gray-200 my-3" />

      <ChartFamilySection chartFamily="partOfAWhole" />

      <div className="mt-20" />
      <Contact />
    </Layout>
  );
}
