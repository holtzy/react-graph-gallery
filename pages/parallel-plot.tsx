import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import ChartFamilySection from "../component/ChartFamilySection";
import { CodeBlock } from "../component/UI/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import DatavizInspirationParallaxLink from "../component/DatavizInspirationParallaxLink";
import { ResponsiveExplanationSection } from "../component/ResponsiveExplanationSection";
import Link from "next/link";
import { ParallelCoordinateBasicDemo } from "viz/ParallelCoordinateBasic/ParallelCoordinateDemo";
import { ParallelCoordinateAxesOnlyDemo } from "viz/ParallelCoordinateAxesOnly/ParallelCoordinateAxesOnlyDemo";

const graphDescription = (
  <>
    <p>
      A{" "}
      <a href="https://www.data-to-viz.com/graph/parallel.html">
        parallel coordinate chart
      </a>{" "}
      is a type of visualization used to represent <b>multivariate</b> data on a
      two-dimensional plane by plotting each variable as a separate axis
      arranged in <b>parallel</b>, and then <b>connecting</b> the data points
      with lines.{" "}
    </p>
    <p>
      This page is a step-by-step guide on how to build your own parallel
      coordinate chart for the web, using{" "}
      <a href="https://reactjs.org/">React</a> (for rendering) and{" "}
      <a href="https://d3-graph-gallery.com/histogram">D3.js</a> (to compute the
      axis, and shape coordinates).
    </p>
    <p>
      It starts by describing how the <b>data</b> should be organized and how to
      initialize the <b>parallel coordinate component</b>. It then explains how
      to compute axis dynamically, and plot the lines and axis. Once this is
      done, it shows how to deal with scaling and how to add an interactive
      legend. 🙇‍♂️.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Parallel Coordinate chart | React graph gallery"
      seoDescription="A step-by-step guide on how to build your very own parallel coordinate react component from scratch. Comes with explanations, code sandboxes, and ready-to-use templates."
    >
      <TitleAndDescription
        title={<h1>Parallel coordinates </h1>}
        description={graphDescription}
        chartType="parallel"
      />
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>
      <p>
        The dataset provides several <b>numeric</b> values for a set of data
        points. It can also add some <b>categorical</b> variables that can be
        added to customize the marker colors.
      </p>
      <p>
        The suggested data structure is an array of <code>object</code>, where
        each object is a data point. It can have as many numeric properties as
        needed.
      </p>
      <br />
      <p>Here is a minimal example of the data structure:</p>
      <CodeBlock code={snippetData} />
      <p>
        Note: this is the same data format as for a{" "}
        <Link href="/correlogram">correlogram</Link>
      </p>
      {/*
      //
      // Skeleton
      //
      */}
      <h2 id="skeleton">Component skeleton</h2>
      <p>
        The goal here is to create a <code>ParallelCoordinate</code> component
        that will be stored in a <code>ParallelCoordinate.tsx</code> file. This
        component requires 4 props to render: a <code>width</code>, a{" "}
        <code>height</code>, some <code>data</code> and an array providing the
        name of the variables to display.
      </p>
      <p>
        The shape of the <code>data</code> is described above. The{" "}
        <code>width</code> and <code>height</code> will be used to render an{" "}
        <code>svg</code> element in the DOM, in which we will insert the
        histogram.
      </p>
      <p>
        To put it in a nutshell, that's the skeleton of our{" "}
        <code>ParallelCoordinate</code> component:
      </p>
      <CodeBlock code={snippetSkeleton} />
      <p>
        It's fundamental to understand that with this code organization, d3.js
        will be used to prepare the SVG <code>circle</code>, but it's React that
        will render them in the <code>return()</code> statement. We won't use d3
        methods like <code>append</code> that you can find in usual{" "}
        <a href="https://www.d3-graph-gallery.com">d3.js examples</a>.
      </p>

      {/*
      //
      // Scales
      //
      */}
      <h2 id="Scales">Scales and Axes</h2>
      <p>
        Building a parallel coordinate charts requires several <b>scales</b> and{" "}
        <b>axes</b>.
      </p>
      <p>
        D3.js comes with a handful set of{" "}
        <a href="https://github.com/d3/d3-scale">predefined scales</a>.{" "}
        <code>scalePoint</code> and <code>scaleLinear</code> are the ones we are
        goint to use here.
      </p>

      <h3>&rarr; X Scale</h3>
      <p>
        We need only 1 X scale. This scale is gonna provide a position in pixels
        for each variable name of the dataset. Remember that a parallel
        coordinate chart displays several vertical lines, one per variable. The
        X scale is displayed <b>horizontally</b>. It covers the{" "}
        <code>width</code> of the <code>svg</code> container, and its domain
        goes from the <code>min</code> to the <code>max</code> of the dataset.
      </p>
      <CodeBlock code={snippetXScale} />
      <h3>&rarr; Y Scale</h3>
      <p>
        The Y scale is displayed <b>vertically</b>. It shows how many items are
        available in each bin. To compute it you need to find the bucket with
        the highest number of items. Something like:
      </p>
      <CodeBlock code={snippetYScale} />
      <ChartOrSandbox
        VizComponent={ParallelCoordinateAxesOnlyDemo}
        vizName={"ParallelCoordinateAxesOnly"}
        maxWidth={600}
        height={400}
        caption={
          "Values of the dataset as distributed into bins. Bins are represented as rectangles. Data wrangling is made with d3.js, rendering with react."
        }
      />

      {/*
      //
      // Lines
      //
      */}
      <h2 id="bars">Drawing the lines</h2>
      <p>Finally! ✨</p>
      <p>
        We can now <code>map</code> through the bucket object and draw a{" "}
        <b>rectangle</b> per bucket thanks to the scales computed above.
      </p>
      <p>The code looks like this:</p>
      <CodeBlock code={snippetRects} />
      <p>
        Remember that the <code>x</code> and <code>y</code> attributes of the
        svg <code>rect</code> element provide the x and y position of the top
        left corner of the rectangle (see{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/rect">
          doc
        </a>
        ). This is why the rectangle <code>height</code> is computed by
        subtracting <code>yScale(bucket.length)</code> from the total{" "}
        <code>height</code>.
      </p>
      <br />
      <ChartOrSandbox
        VizComponent={ParallelCoordinateBasicDemo}
        vizName={"ParallelCoordinateBasic"}
        maxWidth={600}
        height={400}
        caption={
          "Values of the dataset as distributed into bins. Bins are represented as rectangles. Data wrangling is made with d3.js, rendering with react."
        }
      />

      {/*
      //
      // Responsiveness
      //
      */}
      <ResponsiveExplanationSection chartId="parallel" />
      {/*
      //
      // Inspiration
      //
      */}
      <DatavizInspirationParallaxLink chartId="parallel" />

      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="ranking" />
      <div className="mt-20" />
    </Layout>
  );
}

const snippetData = `
const data = [
  {var1: 5.1, var2: 3.5, ..., group: 'setosa'},
  {var1: 4.9, var2: 3.0, ..., group: 'setosa'},
  ...
]
`.trim();

const snippetSkeleton = `
import * as d3 from "d3"; // we will need d3.js

type DataItem = {
  [variable: string]: number;
} & { group: string };


type ParallelCoordinateProps = {
  width: number;
  height: number;
  data: DataItem[];
  variables: string[]
};

export const ParallelCoordinate = ({ width, height, data, variables }: ParallelCoordinateProps) => {

  // read the data & get a list of groups
  // build X scale
  // build Y scales: 1 per variable
  // build color scales
  // loop through variables to add axes
  // loop through data items and through variables to draw lines

  return (
    <div>
      <svg width={width} height={height}>
        // render all the <lines>
      </svg>
    </div>
  );
};
`.trim();

const snippetXScale = `
const xScale = d3
  .scalePoint<Variable>()
  .range([0, boundsWidth])
  .domain(variables)
  .padding(0);
`.trim();

const snippetYScale = `
const yScale = useMemo(() => {

  const max = Math.max(...buckets.map((bucket) => bucket?.length));

  return d3.scaleLinear()
    .range([height, 0])
    .domain([0, max]);

  }, [data, height]);
`.trim();

const snippetRects = `
const allRects = buckets.map((bucket, i) => {
  return (
    <rect
      key={i}
      fill="#69b3a2"
      stroke="black"
      x={xScale(bucket.x0)}
      width={xScale(bucket.x1) - xScale(bucket.x0)}
      y={yScale(bucket.length)}
      height={height - yScale(bucket.length)}
    />
  );
});
`.trim();

const snippetRectangle = `
import { useSpring, animated } from "@react-spring/web";

type RectangleProps = {
  width: number;
  height: number;
  x: number;
  y: number;
};

export const Rectangle = (props: RectangleProps) => {
  const { x, y, width, height } = props;

  const springProps = useSpring({
    to: { x, y, width, height },
    config: {
      friction: 30,
    },
    delay: x,
  });

  if (y === undefined) {
    return null;
  }

  return (
    <animated.rect
      x={springProps.x}
      y={springProps.y}
      width={springProps.width}
      height={springProps.height}
      opacity={0.7}
      stroke="#9d174d"
      fill="#9d174d"
      fillOpacity={0.3}
      strokeWidth={1}
      rx={1}
    />
  );
};
`.trim();
