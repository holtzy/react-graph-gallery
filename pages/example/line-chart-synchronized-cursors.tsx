import React from "react";
import { Layout } from "component/Layout";
import TitleAndDescription from "component/TitleAndDescription";
import ChartFamilySection from "component/ChartFamilySection";
import { CodeBlock } from "component/UI/CodeBlock";
import { ChartOrSandbox } from "component/ChartOrSandbox";
import Link from "next/link";
import { HistogramSeveralGroupsSplitPanelDemo } from "viz/HistogramSeveralGroupsSplitPanel/HistogramSeveralGroupsSplitPanelDemo";
import { LineChartSyncCursorDemo } from "viz/LineChartSyncCursor/LineChartSyncCursorDemo";

const graphDescription = (
  <>
    <p>
      This tutorial is a variation around the general{" "}
      <Link href="/line-chart">introduction to line chart with react</Link> and
      d3.js. You should probably understand the concepts described there before
      reading here.
    </p>
    <p>
      This example explains how to create several line charts and add a
      <b>synchronized cursor</b> on all of them. Hovering over one graph will
      display a cursor on all of them, easing the understanding of synchronized
      patterns.
    </p>
    <p>
      A code sandbox is provided for the final result, but explanations target
      what's different compared to an usual line chart.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Line charts with synchronized cursors."
      seoDescription="A step-by-step guide to build a line chart component that supports synchronized cursors with d3.js and react. Comes with explanations, code sandboxes, and ready-to-use templates."
    >
      <TitleAndDescription
        title={
          <h1>
            Line charts{" "}
            <span className="text-gray-600 font-light hidden sm:inline">
              with synchronized cursors
            </span>
          </h1>
        }
        description={graphDescription}
        chartType="line"
      />
      {/*
      //
      // Plot and code
      //
      */}
      <h2 id="plot">Plot and code</h2>
      <p>If you are in a hurry, this is what we're trying to achieve here.🙇‍♂️</p>
      <p>
        Two line charts are displayed one next to each other. It shows the
        evolution of 2 numeric valriables.
      </p>
      <p>
        Hovering over a chart will display a <b>cursor</b> that is synced with
        the other chart. This helps finding a relationship between them.
      </p>
      <ChartOrSandbox
        vizName={"LineChartSyncCursor"}
        VizComponent={LineChartSyncCursorDemo}
        height={300}
        maxWidth={900}
        caption="Hover over a chart to see a cursor on both of them, easing the time comparison."
      />
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>
      <p>
        Two dataset are used here. Both with the same format as described in the
        <Link href="line-chart">line chart section</Link> of the gallery.
      </p>
      <p>Here is a minimal example of the data structure:</p>
      <CodeBlock code={snippetData} />
      {/*
      //
      // Shared state
      //
      */}
      <h2 id="state">Shared state</h2>
      <p>
        The parent component calling the 2 <code>LineChart</code> components
        stores a <b>shared</b> state. This state can be created as follow using
        the react{" "}
        <a href="https://react.dev/reference/react/useState">useState</a> hook:
      </p>
      <CodeBlock code={snippetState} />
      <p>
        <code>cursorPosition</code> will be <code>null</code> if no charts is
        hovered over, and a <code>number</code> that provides a position in
        pixel otherwise. <code>setCursorPosition</code> is a <b>setter</b>: a
        function that updates the value of <code>cursorPosition</code>
      </p>
      <p>
        Both <code>cursorPosition</code> and <code>setCursorPosition</code> must
        be passed to the line chart component as props.
      </p>

      {/*
      //
      // Trigger state update
      //
      */}
      <h2 id="state update">Trigger state update</h2>
      <p>
        When the mouse moves over the chart area, the state must be updated
        using <code>setCursorPosition</code>
      </p>
      <p>
        To do so, a SVG <code>rect</code> element is added on top of the chart
        area. It will catch the <code>onMouseMove</code> events. This{" "}
        <code>rect</code> looks like:
      </p>
      <CodeBlock code={snippetRect} />
      <p>
        There are several strategies available when it comes to write the{" "}
        <code>onMouseMove</code> function. Here I suggest to
      </p>
      <ul>
        <li>
          use <code>getBoundingClientRect()</code> to find the position of the
          mouse in the chart area
        </li>
        <li>
          find the <b>closest</b> data point in the dataset. This requires the{" "}
          <code>invert</code> function of the d3 linear scale
        </li>
        <li>update the state after using the linear scale again</li>
      </ul>
      <CodeBlock code={snippetOnMouseMove} />

      {/*
      //
      // Animated cursor
      //
      */}
      <h2 id="cursor">Animated cursor</h2>
      <p>
        I used <b>react spring</b> to animate the cursor transition. When the
        mouse moves, the cursor position does not change instantly but moves
        smoothly to the new position.
      </p>
      <p>
        <b>Animation</b> in dataviz using React is a <b>big</b> topic. It's
        impossible to go in-depth here! I will publish a dedicated blog post on
        the topic soon. Please <Link href="subscribe">subscribe</Link> to the
        newsletter if you want to be notified.
      </p>
      <ChartOrSandbox
        vizName={"LineChartSyncCursor"}
        VizComponent={LineChartSyncCursorDemo}
        height={300}
        maxWidth={900}
        caption="Hover over a chart to see a cursor on both of them, easing the time comparison."
      />

      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="evolution" />
      <div className="mt-20" />
    </Layout>
  );
}

const snippetData = `
const data = [
  {x:1, y: 90},
  {x: 2, y: 12},
  {x: 3, , y: 34},
  {x: 4, , y: 53},
  {x: 5, , y: 98},
]
`.trim();

const snippetState = `
const [cursorPosition, setCursorPosition] = useState<number | null>(null);
`.trim();

const snippetRect = `
<rect
  x={0}
  y={0}
  width={boundsWidth}
  height={boundsHeight}
  onMouseMove={onMouseMove}
  onMouseLeave={() => setCursorPosition(null)}
  visibility={"hidden"}
  pointerEvents={"all"}
/>
`.trim();

const snippetOnMouseMove = `
const onMouseMove = (e: React.MouseEvent<SVGRectElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;

  const closest = getClosestPoint(mouseX);

  setCursorPosition(xScale(closest.x));
};
`.trim();
