import React from 'react';
import { Layout } from '../component/Layout';
import TitleAndDescription from '../component/TitleAndDescription';
import ChartFamilySection from '../component/ChartFamilySection';
import { CodeBlock } from '../component/UI/CodeBlock';
import { ChartOrSandbox } from '../component/ChartOrSandbox';
import Link from 'next/link';
import DatavizInspirationParallaxLink from '../component/DatavizInspirationParallaxLink';
import { LollipopBasicDemo } from '../viz/LollipopBasic/LollipopBasicDemo';
import { ResponsiveExplanationSection } from 'component/ResponsiveExplanationSection';
import { LollipopDumbbellDemo } from 'viz/LollipopDumbbell/LollipopDumbbellDemo';
import { LollipopDatasetTransitionDemo } from 'viz/LollipopDatasetTransition/LollipopDatasetTransitionDemo';
import { LollipopHoverEffectDemo } from 'viz/LollipopHoverEffect/LollipopHoverEffectDemo';
import GraphGallery from 'component/GraphGallery';

const graphDescription = (
  <>
    <p>
      A{' '}
      <a href="https://www.data-to-viz.com/graph/lollipop.html">
        lollipop plot
      </a>{' '}
      is a variation of the more common <Link href="barplot">barplot</Link>.
      This page is a step-by-step guide on how to build your own lollipop for
      the web, using <a href="https://reactjs.org/">React</a> and{' '}
      <a href="https://d3-graph-gallery.com/histogram">D3.js</a>.
    </p>
    <p>
      It starts by describing how the <b>data</b> should be organized and how to
      initialize the <b>lollipop component</b>. It explains how to build the{' '}
      <b>scales</b> and <b>axes</b> and how to add the shapes. A few variations
      are described and a focus is made on the <b>hover interaction</b>. 🙇‍♂️.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Lollipop plot with React"
      seoDescription="How to build a lollipop plot with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription
        title="Lollipop plot"
        description={graphDescription}
        chartType="lollipop"
      />
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>
      <p>
        The dataset required to build a lollipop is usually an array where each
        item is an object providing the <code>name</code> and the{' '}
        <code>value</code> of the group.
      </p>
      <br />
      <p>Here is a minimal example:</p>
      <CodeBlock code={snippetData} />
      <p>
        Note: if your data is in <code>.csv</code> format, you can translate it
        thanks to the <code>d3.csv()</code> function as suggested{' '}
        <a href="https://d3-graph-gallery.com/graph/barplot_horizontal.html">
          here
        </a>
        .
      </p>

      {/*
      //
      // Skeleton
      //
      */}
      <h2 id="skeleton">Component skeleton</h2>
      <p>
        The goal here is to create a <code>Lollipop</code> component that will
        be stored in a <code>Lollipop.tsx</code> file. This component requires 3
        props to render: a <code>width</code>, a <code>height</code>, and some{' '}
        <code>data</code>.
      </p>
      <p>
        The shape of the <code>data</code> is described above. The{' '}
        <code>width</code> and <code>height</code> will be used to render an{' '}
        <code>svg</code> element in the DOM, in which we will insert the
        histogram.
      </p>
      <p>
        To put it in a nutshell, that's the skeleton of our{' '}
        <code>Lollipop</code> component:
      </p>
      <CodeBlock code={snippetSkeleton} />
      <p>
        It's fundamental to understand that with this code organization, d3.js
        will be used to prepare the SVG <code>circle</code>, but it's React that
        will render them in the <code>return()</code> statement. We won't use d3
        methods like <code>append</code> that you can find in usual{' '}
        <a href="https://www.d3-graph-gallery.com">d3.js examples</a>.
      </p>

      {/*
      //
      // Basic
      //
      */}
      <h2 id="basic">Most basic lollipop</h2>
      <p>
        A lollipop chart is a variation of the better known{' '}
        <Link href="barplot">barplot</Link>. The implementation of a barplot
        with react is extensively described in the{' '}
        <Link href="barplot">barplot section</Link> of the gallery. So I will
        just provide a quick recap here.
      </p>
      <p>
        To put it in a nutshell, <b>2 scales</b> must be created. The x axis
        transforms a numeric value in a position in pixel: it is a linear scale
        built with the <code>scaleLinear()</code> function of d3. The y axis
        transforms a group name in a position in pixel: it is a band scale built
        with <code>scaleBand()</code>.
      </p>
      <p>
        Once the scales are available, <b>loop</b> through each item of the
        dataset. Instead of drawing a rectangle for each item, draw a line and a
        circle. Instead of adding a proper X and Y axes, I suggest to create a
        grid manually and to draw labels at an arbitrary position.
      </p>
      <ChartOrSandbox
        vizName={'LollipopBasic'}
        VizComponent={LollipopBasicDemo}
        height={400}
        maxWidth={600}
        caption="Most basic Lollipop built with d3.js for scales, and react for rendering"
      />

      {/*
      //
      // Responsiveness
      //
      */}
      <ResponsiveExplanationSection chartId="lollipop" />

      {/*
      //
      // Inspiration
      //
      */}
      <DatavizInspirationParallaxLink chartId="lollipop" />

      {/*
      //
      // Dumbbell version
      //
      */}
      <h2 id="dumbbell">Dumbbel plot</h2>
      <p>
        A{' '}
        <a href="https://www.data-to-viz.com/graph/lollipop.html">
          dumbbell plot
        </a>
        , also known as a cleveland plot or a connected dot plot, is a visual
        representation of the <b>difference</b> or <b>change</b> between two
        related variables. It consists of two endpoints, represented by circles
        or dots, connected by a horizontal line, which represents the magnitude
        of the difference or change.{' '}
      </p>
      <p>
        This type of plot is commonly used in scientific research to display the
        effect of an intervention or treatment on a particular outcome, or to
        compare two different groups or time periods. The plot allows for{' '}
        <b>easy comparison</b> of the magnitude and direction of change between
        the two variables.
      </p>
      <p>
        The implementation is very close to the{' '}
        <a href="#basic">basic lollipop</a> chart described above. The dataset
        provides 2 data points for each item in the dataset: <code>value1</code>{' '}
        and <code>value2</code>. The scales and axes are exactly the same.
        Instead of drawing 1 line and 1 circle, 2 circles are joined by the
        line.
      </p>
      <ChartOrSandbox
        vizName={'LollipopDumbbell'}
        VizComponent={LollipopDumbbellDemo}
        height={400}
        maxWidth={600}
        caption="A basic yet clean dumbbell plot built with d3.js and React"
      />

      {/*
      //
      // Hover Effect version
      //
      */}
      <h2 id="hover effect">Hover effect</h2>
      <p>
        The circles can be quite <b>far from their label</b> for the biggest
        values on the chart (see Mark below). Adding an <b>hover interaction</b>{' '}
        on the lollipop charts allows to <b>highlight a specific row</b>. As a
        result, the label/data point connection becomes more obvious.
      </p>
      <p>
        There are various strategies to implement such an hover effect. Here, I
        suggest to do everything in <b>css</b> using{' '}
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes">
          pseudo classes
        </a>
        , and targetting svg elements only.
      </p>
      <p>Two different things happen when a row is hovered:</p>
      <ul>
        <li>
          All other rows are <b>faded out</b>. Their <code>opacity</code> is
          lowered to <code>.3</code>
        </li>
        <li>
          A <b>grey rectangle</b> that wraps the row is drawn.
        </li>
      </ul>
      <p>
        &rarr; For the first effect, a <code>rowsContainer</code> class is added
        to the element that wraps all rows. When it is hovered hover (
        <code>rowsContainer:hover</code>), everything that's inside it has a
        lower opacity. But a specific rule is added at the hovered row level to
        keep it with a strong opacity. To put it in a nutshell, css looks like:
      </p>
      <CodeBlock code={snippetCssDim} />
      <p>
        &rarr; For the second effect, <b>2 svg rectangles</b> must be drawn. The
        first one fills the <b>full</b> width and height of the row. It is the
        one that triggers the mouse event. (It is important to remember that a
        svg <code>g</code> element does <b>not</b> trigger mouse events. Only
        what is drawn inside it does). The second rectangle is the one that we
        see. We can add some <b>vertical padding</b> to it since it is not use
        for mouse detection.
      </p>
      <ChartOrSandbox
        vizName={'LollipopHoverEffect'}
        VizComponent={LollipopHoverEffectDemo}
        height={400}
        maxWidth={600}
        caption="Try to hover a row in the lollipop above to reveal the hover interaction."
      />

      {/*
      //
      // Data transition
      //
      */}
      <h2 id="data transition">Data transition</h2>
      <p>
        It is very common to deal with <b>various variables</b> and compare the
        behaviour of some data items for them. It adds a nice touch to the graph
        to smoothly transition between 2 states using a quick <b>animation</b>.
      </p>
      <p>
        For the example below I rely on the{' '}
        <a href="https://react-spring.dev/">react-spring</a> library. This lib
        allows to quickly create spring animations using javascript. It results
        in a very a <b>natural transition</b> that can be <b>interrupted</b>{' '}
        without restarting from 0. (try to toggle between datasets quickly).
      </p>
      <p>
        It would be too long to explain the code here. Instead, I'm currently
        writing a set of dedicated tutorials. Please{' '}
        <Link href="/subscribe">subscribe to the newsletter</Link> to know when
        this will be released.
      </p>
      <ChartOrSandbox
        vizName={'LollipopDatasetTransition'}
        VizComponent={LollipopDatasetTransitionDemo}
        height={400}
        maxWidth={600}
        caption="A lollipop chart with smooth transition between dataset."
      />

      {/*
      //
      // Variation
      //
      */}
      <h2 id="Variation">Variation</h2>
      <p>
        Check a <b>few other examples</b> of the gallery involving lollipop
        plots:
      </p>
      <GraphGallery images={['radar-chart-animation.png']} />

      <br />
      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="ranking" />
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

type LollipopProps = {
  width: number;
  height: number;
  data: number[];
};

export const Lollipop = ({ width, height, data }: LollipopProps) => {

  // read the data
  // build the scales
  // build the lines and circles

  return (
    <div>
      <svg width={width} height={height}>
        // render axes
        // render all the lines and rects
      </svg>
    </div>
  );
};
`.trim();

const snippetCssDim = `
/* Row has an opacity of 1 by default */
.row {
  opacity: 1;
  cursor: pointer;
}

/* But if the container is hovered somewhere, opacity is decreased to .3 */
.rowsContainer:hover .row {
  opacity: 0.3;
}

/* Except for the specific row that is hovered hover that keeps its opacity to 1 */
.rowsContainer .row:hover {
  opacity: 1;
}
`.trim();
