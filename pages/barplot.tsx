import React from 'react';
import { Layout } from '../component/Layout';
import TitleAndDescription from '../component/TitleAndDescription';
import ChartFamilySection from '../component/ChartFamilySection';
import { CodeBlock } from '../component/UI/CodeBlock';
import { ChartOrSandbox } from '../component/ChartOrSandbox';
import Link from 'next/link';
import { BarplotBasicDemo } from '../viz/BarplotBasic/BarplotBasicDemo';
import { ResponsiveExplanationSection } from '../component/ResponsiveExplanationSection';
import { BarplotDatasetTransitionDemo } from '../viz/BarplotDatasetTransition/BarplotDatasetTransitionDemo';
import GraphGallery from 'component/GraphGallery';

const graphDescription = (
  <>
    <p>
      A <a href="https://www.data-to-viz.com/graph/barplot.html">barplot</a>{' '}
      displays a numeric value for several groups of a dataset using rectangles.
      This page is a step-by-step guide on how to build your own barplot for the
      web, using <a href="https://reactjs.org/">React</a> and{' '}
      <a href="https://d3-graph-gallery.com/barplot.html">D3.js</a>.
    </p>
    <p>
      It starts with very basic concepts like <b>data structure</b>,{' '}
      <b>scales</b> and svg rectangle <b>rendering</b>. It then shows how to add
      interactivity to the chart with <b>hover effects</b>. Last but not least
      it explains how to build variations like the <b>stacked barplot</b>.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Barplot with React"
      seoDescription="How to build a barplot with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription
        title="Barplot"
        description={graphDescription}
        chartType="barplot"
      />
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>{' '}
      <p>
        The dataset required to build a barplot is usually an array where each
        item is an object providing the <code>name</code> and the{' '}
        <code>value</code> of the group.
      </p>
      <br />
      <p>Here is a minimal example</p>
      <CodeBlock code={snippet1} />
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
        The goal here is to create a <code>Barplot</code> component that will be
        stored in a <code>Barplot.tsx</code> file. This component requires 3
        props to render: a <code>width</code>, a <code>height</code>, and some{' '}
        <code>data</code>.
      </p>
      <p>
        The shape of the <code>data</code> is described above. The{' '}
        <code>width</code> and <code>height</code> will be used to rendering a{' '}
        <code>svg</code> element in the DOM, in which we will insert the
        barplot.
      </p>
      <p>
        To put it in a nutshell, that's the skeleton of our <code>Barplot</code>{' '}
        component:
      </p>
      <CodeBlock code={snippetSkeleton} />
      <p>
        It's fundamental to understand that with this code organization, d3.js
        will be used to prepare the svg <code>circle</code>, but it's react that
        will render them in the <code>return()</code> statement. We won't use d3
        methods like <code>append</code> that you can find in usual{' '}
        <a href="https://d3-graph-gallery.com/barplot.html">d3.js examples</a>.
      </p>
      {/*
      //
      // Scales
      //
      */}
      <h2 id="Scales">Scales</h2>
      <p>
        A <b>scale</b> is a function that transforms a <b>dimension</b> (like
        our <code>value</code> or our group <code>name</code>) in a{' '}
        <b>position</b> in pixels.
      </p>
      <p>
        Building a barplot requires 2 scales of 2 kinds. The first will
        transform the group <code>value</code> in a bar length. The second will
        transform the group <code>name</code> in a position.
      </p>
      <h3>&rarr; Linear scale for the bar length</h3>
      <p>
        D3.js comes with a handful set of{' '}
        <a href="https://github.com/d3/d3-scale">predefined scales</a>.{' '}
        <code>scaleLinear</code> is what we need for the bar length. Here is a
        quick overview on how to build and use a linear scale:
      </p>
      <CodeBlock code={snippetLinearScale} />
      <p>
        Since we are building a <b>horizontal</b> barplot here, this scale will
        be used by the <b>X</b> axis.
      </p>
      <p>
        To dig more into d3 scales, visit this{' '}
        <a href="https://d3-graph-gallery.com/graph/custom_axis.html">
          dedicated page
        </a>
        . It's a crucial concept that will be used everywhere in this website.
      </p>
      <h3>&rarr; Band scale for the group position</h3>
      <p>
        A <a href="https://github.com/d3/d3-scale#scaleBand">band scale</a> will
        be used to control the position of each rectangle on the Y axis. It is
        computed with the <code>scaleBand()</code> function of d3.js. It
        attributes a band of pixels to each group.
      </p>
      <p>
        For instance, calling the band scale with <code>yScale("A")</code> will
        return <code>0</code>, and <code>yScale.bandwidth()</code> will return
        the width of the band (e.g. <code>11px</code>).
      </p>
      <p>
        Note: the <code>padding</code> argument controls the space between bars.
      </p>
      <CodeBlock code={snippetBandScale} />
      {/*
      //
      // Rectangles
      //
      */}
      <h2 id="basic barplot">Basic barplot</h2>
      <p>
        We now have all the ingredients to build a basic barplot with react, all
        being pretty close to the{' '}
        <a href="https://d3-graph-gallery.com/barplot">d3-only examples</a>.
      </p>
      <p>
        For each item in the dataset, create a SVG <code>rect</code> element.
        Its vertical position can be retrieved from the group <code>name</code>{' '}
        thanks to the band scale. It's size is retrieved using the{' '}
        <code>xScale</code> and its <code>value</code>.
      </p>
      <p>
        Note that using the same amount of information it is straightforward to
        add a label for the name and one for the value.
      </p>
      <ChartOrSandbox
        vizName={'BarplotBasic'}
        VizComponent={BarplotBasicDemo}
        height={500}
        maxWidth={500}
        caption="Most basic barplot built with d3.js for scales, and react for rendering"
      />
      {/*
      //
      // Responsiveness
      //
      */}
      <ResponsiveExplanationSection chartId="barplot" />
      {/*
      //
      // Transition
      //
      */}
      <h2 id="transition">Transition</h2>
      <p>
        When the dataset updates, it adds a nice touch to{' '}
        <b>smoothly animate</b> the transition. In the example below, changing
        the dataset will update the <b>bar sizes</b> and their <b>positions</b>{' '}
        on the Y axis to keep the ranking accurate.
      </p>
      <p>
        Animation is a complicated topic in dataviz. We have to deal with{' '}
        <b>updates</b> (an element changes its features), <b>enter</b> (a new
        element appears) and <b>exit</b> (an element is not present anymore)
        patterns.
      </p>
      <p>
        I suggest to rely on the <code>react-spring</code> library to help here.
        Please check this{' '}
        <Link href="example/barplot-data-transition-animation">
          dedicated blogpost
        </Link>{' '}
        to get explanations about the code of this example.
      </p>
      <ChartOrSandbox
        vizName={'BarplotDatasetTransition'}
        VizComponent={BarplotDatasetTransitionDemo}
        height={400}
        maxWidth={600}
        caption="Most basic barplot built with d3.js for scales, and react for rendering"
      />
      {/*
      //
      // Stacking
      //
      */}
      <h2 id="stacking">Stacking</h2>
      <p>
        A <b>stacked barplot</b> is a variation of a barplot where an{' '}
        <b>additional level of grouping</b> is represented. Each bar represent
        the value of a <code>group</code>, for instance how much each my friend
        spent in the last month. Each bar is then subdivided, each part
        representing the value of a <code>subgroup</code>, for instance the
        category of expense.
      </p>
      <p>
        D3 comes with a very handy <code>stack()</code> function. The 2
        tutorials below explain how this function works, and how to use it to
        render a clean stacked barplot.
      </p>
      <GraphGallery
        images={[
          'barplot-stacked-horizontal.png',
          'barplot-stacked-vertical.png',
        ]}
      />
      {/*
      //
      // Vertical
      //
      */}
      <h2 id="vertical">Vertical barplot</h2>{' '}
      <p>
        The vertical option is less common since it makes is much{' '}
        <b>harder to read the labels</b>. But if you really need it, it is just
        a matter of swaping the X and Y axes of the previous example.
      </p>
      <p>
        This example will be publish soon, please{' '}
        <Link href="/subscribe">subscribe</Link> below if you want to be
        notified.
      </p>
      {/*
      //
      // Hover effect
      //
      */}
      <h2 id="hover effect">Hover effect</h2>{' '}
      <p>
        This example will be publish soon, please{' '}
        <Link href="subscribe">subscribe</Link> to the newsletter if you want to
        be notified.
      </p>
      {/*
      //
      // Variations
      //
      */}
      <h2 id="variations">Variations</h2>
      <p>
        Let's go beyond the basic barcharts. Click on the overview images below
        to get details and code.
      </p>
      <br />
      <GraphGallery images={['donut-barplot-transition.gif']} />
      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="ranking" />
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

const snippetSkeleton = `
import * as d3 from "d3"; // we will need d3.js

type BarplotProps = {
  width: number;
  height: number;
  data: { name: string; y: number }[];
};

export const Barplot = ({ width, height, data }: BarplotProps) => {

  // read the data
  // do some stuff with d3
  // compute all the <rect>

  return (
    <div>
      <svg width={width} height={height}>
        // render all the <rect>
      </svg>
    </div>
  );
};
`.trim();

const snippetLinearScale = `
const scale = d3.scaleLinear()
  .domain([0, 10]) // data goes from 0 to 10
  .range([0, 200]); // axis goes from 0 to 200

scale(0); // 0 -> item with a value of 0 will have a bar of length 0
scale(5); // 100 -> bar of length 100
scale(10); // 200 -> bar of length 200
`.trim();

const snippetBandScale = `
const yScale = d3
    .scaleBand()
    .range([0, boundsHeight])
    .domain(allGroups)
    .padding(0.01);

// yScale("A") -> 0
// yScale.bandwidth() -> 11
`.trim();
