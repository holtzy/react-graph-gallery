import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import ChartFamilySection from "../component/ChartFamilySection";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/UI/CodeBlock";
import { PieChartBasicDemo } from "../viz/PieChartBasic/PieChartBasicDemo";

const graphDescription = (
  <p>
    The <a href="https://www.data-to-viz.com/caveat/pie.html">pie chart</a> is
    both the most common and the most criticized chart. D3.js has a{" "}
    <code>pie()</code> function that creates some svg <code>path</code> for you,
    ready to be renderered with React.
  </p>
);

export default function Home() {
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
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>{" "}
      <p>
        The dataset required to build a pie chart is pretty simple. It is an
        array where each item represents a group of the pie chart. Each item is
        an object with 2 properties. They provide the group name (
        <code>name</code>) and its value (<code>value</code>).
      </p>
      <br />
      <p>
        For instance, here is the dataset used for the simple pie chart below:
      </p>
      <CodeBlock code={snippetData} />
      {/*
      //
      // Skeleton
      //
      */}
      <h2 id="skeleton">Component skeleton</h2>
      <p>
        The goal here is to create a <code>PieChart</code> component that will
        be stored in a <code>PieChart.tsx</code> file. This component requires 3
        props to render: a <code>width</code>, a <code>height</code>, and some{" "}
        <code>data</code>.
      </p>
      <p>
        The shape of the <code>data</code> is described above. The{" "}
        <code>width</code> and <code>height</code> will be used to render an{" "}
        <code>svg</code> element in the DOM, in which we will insert the pie
        chart.
      </p>
      <p>
        To put it in a nutshell, that's the skeleton of our{" "}
        <code>PieChart</code> component:
      </p>
      <CodeBlock code={snippetSkeleton} />
      <p>
        It's fundamental to understand that with this code organization, d3.js
        will be used to prepare the SVG arcs, but it's React that will render
        them in the <code>return()</code> statement. We won't use d3 methods
        like <code>append</code> that you can find in usual{" "}
        <a href="https://www.d3-graph-gallery.com">d3.js examples</a>.
      </p>
      {/*
      //
      // Data to arcs
      //
      */}
      <h2 id="build arcs">From data to arcs</h2>
      <p>
        As usual, the math is done thanks to d3.js, and the rendering using
        React
      </p>
      <h3>&rarr; A pie chart is a set of arcs</h3>
      <p>Explain the concept of arcs</p>
      <h3>
        &rarr; <code>d3.pie()</code> to compute arc details
      </h3>
      <p>
        First of all, the <code>pie()</code> function is used to compute the
        start and end angles of each group. By default this function expects an
        array of number as input. Thus we have to tell it how to find the value
        to use in our dataset using an assesor function
      </p>
      <CodeBlock code={snippet2} />
      <h3>
        &rarr; <code>d3.arc()</code> to compute the svg path
      </h3>
      <p>
        From those start and end angles we now need to build a proper string
        that we can pass as the <code>d</code> attribute of a <code>path</code>.
        This is pretty easy thanks to the <code>arc()</code> function of d3.
        This function must be applied to every item of the pie object created
        above.
      </p>
      <CodeBlock code={snippet3} />
      {/*
      //
      // Rendering
      //
      */}
      <h2 id="basic pie">Basic pie chart</h2>
      <p>
        And that's it. This array of path can be renderer using react using a
        map pretty easily.
      </p>
      <ChartOrSandbox
        vizName={"PieChartBasic"}
        VizComponent={PieChartBasicDemo}
        maxWidth={400}
        height={400}
        caption="basic pie chart with react and d3.js"
      />
      {/*
      //
      // Warning
      //
      */}
      <h2 id="warning">Warning</h2>
      {/*
      //
      // Legend
      //
      */}
      <h2 id="legend">Legend</h2>
      <p>Copy donut. Explain it must be inline</p>
      {/*
      //
      // Hover effect
      //
      */}
      <h2 id="hover effect">Hover effect</h2>
      {/*
      //
      // Data transition
      //
      */}
      <h2 id="data transition">Data transition</h2>
      <p>Copy donut. Explain it must be inline</p>
      <div className="full-bleed border-t h-0 bg-gray-100 my-3" />
      <ChartFamilySection chartFamily="partOfAWhole" />
      <div className="mt-20" />
    </Layout>
  );
}

const snippetData = `
const data = [
  {name:"Mark", value: 90},
  {name:"Robert", value: 12},
  {name:"Emily", value: 34},
  {name:"Marion", value: 53},
  {name:"Nicolas", value: 98},
]
`.trim();

const snippetSkeleton = `
import * as d3 from "d3"; // we will need d3.js

type PieChartProps = {
  width: number;
  height: number;
  data: {name: string, value: number}[];
};

export const PieChart = ({ width, height, data }: PieChartProps) => {

  // read the data
  // generate position of each slice with d3.pie()
  // build the arcs

  return (
    <div>
      <svg width={width} height={height}>
        // render all the arcs
      </svg>
    </div>
  );
};
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
