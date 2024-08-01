import React, { useRef } from 'react';
import { Layout } from '../component/Layout';
import TitleAndDescription from '../component/TitleAndDescription';
import Contact from '../component/Contact';
import { ChartOrSandbox } from '../component/ChartOrSandbox';
import ChartFamilySection from '../component/ChartFamilySection';
import { AccordionSection } from '../component/AccordionSection';
import { CodeBlock } from '../component/UI/CodeBlock';
import { data as densityChartData } from '../data/one-numeric-variable-random';
import { useDimensions } from '../hook/use-dimensions';
import { ViolinBasicDemo } from '../viz/ViolinBasic/ViolinBasicDemo';
import { DensityChart } from '../viz/DensityChartBasic/DensityChart';
import Link from 'next/link';
import { DensityChartBasicDemo } from 'viz/DensityChartBasic/DensityChartBasicDemo';
import { CodeSandbox } from 'component/CodeSandbox';

const graphDescription = (
  <>
    <p>
      Most of the visualization components in this gallery accept{' '}
      <code>width</code> and <code>height</code> properties.
    </p>
    <p>
      However, we often don't know the exact dimensions we need for our
      visualizations; we just want them to <b>fit their container</b>.
    </p>
    <p>
      This post explains how to make a chart <b>responsive</b>. It provides the
      code for a <b>hook</b> that detects changes in a <code>div</code>'s
      dimensions and explains how to inject its returned values into a
      visualization component.
    </p>
  </>
);

export default function Home() {
  const densityChartRef = useRef<HTMLDivElement>(null);
  const densityChartSize = useDimensions(densityChartRef);

  return (
    <Layout
      title="How to build a responsive chart with React and d3.js"
      seoDescription="How to build a responsive chart with React and d3.js"
    >
      <TitleAndDescription
        title="How to build a responsive chart with React and d3.js"
        description={graphDescription}
      />
      {/* Demo density chart */}
      <div className="w-full flex flex-col justify-center items-center">
        <div style={{ height: 120, width: '100%' }} ref={densityChartRef}>
          <DensityChart
            width={densityChartSize.width}
            height={densityChartSize.height}
            data={densityChartData}
          />
        </div>
        <p className="text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light">
          This <Link href="/density-plot">density chart</Link> is responsive!
          Resize your window to see how the graph fits its container.
        </p>
      </div>
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">😢 Unresponsive chart</h2>
      <p>
        When building a chart with JavaScript, knowing its dimensions —{' '}
        <code>width</code> and <code>height</code> — is essential. These
        dimensions are needed to compute scales, draw axes, and determine where
        to place shapes.
      </p>
      <p>
        Consequently, a visualization component always expects{' '}
        <code>width</code> and <code>height</code>
        properties.
      </p>
      <p>
        Consider a simple <Link href="/density-plot">density plot</Link>, for
        example. The code looks like this:
      </p>
      <CodeBlock
        code={`
import * as d3 from "d3";

type DensityProps = {
  width: number; // 🙁 not responsive!
  height: number; // 🙁 not responsive!
  data: number[];
};

export const DensityPlot = ({ width, height, data }: DensityProps) => {

  // read the data, make scales, compute svg elements using the dimensions

  return (
    <div>
      <svg width={width} height={height}> // pass the dimensions to the svg area
        // render the shape
      </svg>
    </div>
  );
};
`.trim()}
      />
      <p>On a narrow screen, this chart may be cut.</p>
      <p>
        So, how can we <b>make it responsive</b>?
      </p>
      {/*
      //
      // Hook
      //
      */}
      <h2 id="dimension hook">🎣 Hook to get the container dimensions</h2>
      <p>
        The visualization component is going to be <b>wrapped</b> in a
        responsive <code>div</code>. We need a way to retrieve this container's
        dimensions.
      </p>
      <p>
        To achieve this, let's create a hook called <code>useDimensions</code>.
      </p>
      <p>
        A hook is a special function that lets you use state and other React
        features in functional components, as explained{' '}
        <a href="https://reactjs.org/docs/hooks-intro.html">
          in the documentation
        </a>
        .
      </p>
      <p>That's how the hook looks like:</p>
      <CodeBlock code={snippet1} />
      <p>
        This hook is essentially a function that checks the{' '}
        <code>offsetWidth</code> and <code>offsetHeight</code> of a provided{' '}
        <code>ref</code>.
      </p>
      <br />
      <p>
        An event listener for the <code>resize</code> event is added to the{' '}
        <code>window</code> to ensure the dimensions are updated when the window
        size changes.
      </p>
      {/*
      //
      // Use the hook
      //
      */}
      <h2 id="use the hook">💪 Use the hook</h2>
      <p>
        Start by creating a <code>ref</code> using the React{' '}
        <code>useRef()</code> function.
      </p>
      <p>
        A <code>ref</code> allows you to target and interact with a specific
        HTML element in the DOM of your application.
      </p>
      <CodeBlock code={snippet2} />
      <br />
      <p>
        Then, pass this newly created <code>chartRef</code> to the hook:
      </p>
      <CodeBlock code={snippet3} />
      <br />
      <p>
        Finally, pass the <code>chartRef</code> to the container you want to
        monitor.
      </p>
      <CodeBlock code={snippet4} />
      <p>
        You now have an object called <code>chartSize</code> with two
        properties: <code>height</code> and <code>width</code>. These properties
        can be used in your chart component. 🔥
      </p>
      <blockquote>
        Pro tip: Before building a responsive visualization, use{' '}
        <code>console.log()</code> to check the <code>chartSize</code> object
        and ensure everything is working correctly.
      </blockquote>

      {/*
      //
      // Use the hook
      //
      */}
      <h2 id="application">📊 Application</h2>
      <p>
        You’re all set! Just pass the values from <code>chartSize</code> to the
        visualization component, and it will become responsive.
      </p>
      <p>Here is a full example with code:</p>
      <br />

      <div style={{ maxWidth: 2000 }} className="full-bleed w-full z-50">
        <CodeSandbox vizName={'DensityChartResponsive'} />
      </div>

      <AccordionSection title={'Caveat'} startOpen={true}>
        <p>
          Remember that the element we are tracking needs to have a{' '}
          <code>height</code> and a <code>width</code>. Otherwise the hook will
          basically return nothing.
        </p>
        <h3>
          &rarr; Container is displayed as <code>inline</code>
        </h3>
        <p>
          An html elemente that is displayed as <code>inline</code> (
          <code>display: inline;</code>) cannot have a width and height.{' '}
          <code>span</code>
          elements are inline by default.
        </p>
        <h3>&rarr; By default, a div has no height</h3>
        <p>
          By default, the width of a div is 100%, and its height fits its
          content. Which means that with no content, there is no height.
        </p>
        <h3>&rarr; Width 100% is ignored, flex example</h3>
        <p>
          By default, the width of a div is 100%, and its height fits its
          content. Which means that with no content, there is no height.
        </p>
        <h3>&rarr; Mind the border</h3>
        <p>Josh Comeau post about border being part of the main box.</p>
      </AccordionSection>
      <br />
      <br />
      <hr className="full-bleed  bord er bg-gray-200 mb-3 mt-10" />
      <ChartFamilySection chartFamily="general" />
      <div className="mt-20" />
      <Contact />
    </Layout>
  );
}

const snippet1 = `
import { useEffect, useLayoutEffect, useState } from "react";

// Hook to retrieve the dimensions of a div.
// react-graph-gallery.com
export const useDimensions = (targetRef: React.RefObject<HTMLDivElement>) => {

  const getDimensions = () => {
    return {
      width: targetRef.current ? targetRef.current.offsetWidth : 0,
      height: targetRef.current ? targetRef.current.offsetHeight : 0
    };
  };

  const [dimensions, setDimensions] = useState(getDimensions);

  const handleResize = () => {
    setDimensions(getDimensions());
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useLayoutEffect(() => {
    handleResize();
  }, []);

  return dimensions;
}
`.trim();

const snippet2 = `
const chartRef = useRef(null);
`.trim();

const snippet3 = `
const chartSize = useDimensions(chartRef);
`.trim();

const snippet4 = `
return(
  <div ref={chartRef}>
    <MyChartComponent
      height={chartSize.height}
      width={chartSize.width}
  </div>
)
`.trim();
