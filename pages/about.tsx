import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import Contact from "../component/Contact";
import { AxisBasicD3Demo } from "../viz/AxisBasicD3/AxisBasicD3Demo";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import { ScatterplotBasicDemo } from "../viz/ScatterplotBasic/ScatterplotBasicDemo";
import Link from "next/link";

const graphDescription = (
  <p className="text-gray-400">
    <i>
      A love story &#8211; So <del>simple</del> <b>powerful</b> yet so{" "}
      <b>complicated</b>
    </i>
  </p>
);

export default function Home() {
  return (
    <Layout
      title="About the gallery"
      seoDescription="How to build an area chart with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription
        title="React + D3.js = ❤️"
        description={graphDescription}
      />
      <p>
        A few years ago I created the{" "}
        <a href="https://www.d3-graph-gallery.com">d3 graph gallery</a>, a
        website showcasing hundreds of simple charts made with{" "}
        <a href="https://d3js.org/">d3.js</a>. It worked well! Thousands of
        people use it daily to learn d3. 🎉
      </p>
      <p>
        Since then, <a href="https://reactjs.org/">React</a> became the{" "}
        <a href="https://gist.github.com/tkrotoff/b1caa4c3a185629299ec234d2314e190">
          most popular
        </a>{" "}
        framework to build user interfaces. This rose a question:{" "}
        <b>how to build a chart in react</b>? That's a complicated question with
        many answers. Here are the 3 most common approaches.
      </p>

      <h2>3 ways to draw a chart in react</h2>

      <h3>&rarr; 1️⃣ Charting libraries</h3>
      <p>
        There is a <b>myriad</b> of charting libraries offering react components
        for every chart type.{" "}
        <a href="https://www.highcharts.com/">HighChart</a>,{" "}
        <a href="https://github.com/recharts/recharts">ReCharts</a>,{" "}
        <a href="https://uber.github.io/react-vis/">React-viz</a>,{" "}
        <a href="https://github.com/observablehq/plot">plot</a>,{" "}
        <a href="https://airbnb.io/visx/">visX</a> and so many more. Those
        libraries are awesome: you'll get a working chart in minutes using them.
      </p>
      <p>
        But <b>simplicity comes with a cost</b>: the time you saved in the first
        place will be lost when you'll try to reach a high level of
        customization.
      </p>
      <p>
        If you want to build something <b>unique</b>, you need to draw shapes
        one by one.
      </p>

      <h3>
        &rarr; 2️⃣ D3 for rendering in a <code>useEffect</code> hook
      </h3>
      <p>
        If you're familiar with d3.js already, it's possible to use any of its
        examples (from a <a href="https://bl.ocks.org/">block</a> or the{" "}
        <a href="https://www.d3-graph-gallery.com">gallery</a>) by using a{" "}
        <code>useEffect</code> hook.
      </p>
      <p>
        Basically, you can create a <code>div</code> in the DOM using react. You
        can then use the drawing methods of the{" "}
        <a href="https://github.com/d3/d3-selection">d3-selection</a> module
        like <code>append</code> or <code>axisBottom</code> to target this{" "}
        <code>div</code>, and add the content of the chart.
      </p>
      <p>Let's apply this to draw axes:</p>
      <ChartOrSandbox
        vizName={"AxisBasicD3"}
        VizComponent={AxisBasicD3Demo}
        maxWidth={600}
        height={300}
        caption={
          "You can use all the d3 knowlege you have in a useEffect hook to build the graph in a react context."
        }
      />
      <p>
        This <b>works</b> but comes with some <b>caveats</b>. To put it in a
        nutshell you now have 2 tools trying to <b>control the DOM</b>: react
        and d3. That's hard to maintain for large applications.
      </p>

      <h3>&rarr; 3️⃣ D3 for maths, React for rendering</h3>
      <p>
        This gallery suggests using <b>d3.js only for the math</b> utils it
        provides. And to add entries to the DOM using react, like for any other
        UI element.
      </p>
      <p>
        Let's say we want to build a <a href="scatter-plot">scatterplot</a>. The{" "}
        <code>scaleLinear</code> function of d3.js is used to build the scales.
        Now that we can easily know the position of a circle on the screen, we
        can just loop through all data items and render them as a{" "}
        <code>circle</code> svg element.
      </p>
      <ChartOrSandbox
        VizComponent={ScatterplotBasicDemo}
        vizName={"ScatterplotBasic"}
        maxWidth={500}
        height={500}
        caption="Use d3.js to compute the scales. Use React to render the circles."
      />

      <h2>Learn concepts, Get templates</h2>
      <p>
        This gallery is all about using the power of the <b>d3</b> math utils
        and the <b>react</b> rendering engine.
      </p>
      <p>
        The first goal is to <b>teach the concepts</b>. Many examples are
        provided for each chart type. Each one targets a specific theme like
        color, axis, responsiveness, hover effect, or tooltips.
      </p>
      <p>
        The second goal is to <b>provide templates</b> for each viz type.
        Building a viz from scratch is time-consuming, so better tweak an
        existing example.
      </p>
      <p>
        All graph examples come with an explanation and a <b>code sandbox</b>{" "}
        allowing you to play with the code.
      </p>

      <p className="mt-8 mb-12">
        I built this website with ❤️. I hope it will help you create{" "}
        <a href="https://www.dataviz-inspiration.com">stunning vizs</a> in a
        minimum amount of time. Reach me on{" "}
        <a href="https://twitter.com/R_Graph_Gallery">Twitter</a>, contribute on{" "}
        <a href="https://github.com/holtzy/react-graph-gallery">github</a> and
        subscribe to the <Link href="/subscribe">newsletter</Link> to know when
        new chart types are published!
      </p>
    </Layout>
  );
}
