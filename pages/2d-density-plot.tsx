import React from 'react';
import { Layout } from '../component/Layout';
import TitleAndDescription from '../component/TitleAndDescription';
import ChartFamilySection from '../component/ChartFamilySection';
import { CodeBlock } from '../component/UI/CodeBlock';
import { ChartOrSandbox } from '../component/ChartOrSandbox';
import DatavizInspirationParallaxLink from '../component/DatavizInspirationParallaxLink';
import { ResponsiveExplanationSection } from '../component/ResponsiveExplanationSection';
import Link from 'next/link';
import { Density2dHexbinDemo } from 'viz/Density2dHexbin/Density2dHexbinDemo';
import { AxisBasicDemo } from 'viz/AxisBasic/AxisBasicDemo';
import { Density2dContourDemo } from 'viz/Density2dContour/Density2dContourDemo';
import { LinkAsButton } from 'component/LinkAsButton';
import { ToDoSection } from 'component/UI/ToDoSection';

const graphDescription = (
  <>
    <p>
      A{' '}
      <a href="https://www.data-to-viz.com/graph/density2d.html">
        2D density chart
      </a>{' '}
      is a graphical representation of data that uses <b>color</b> to show the
      concentration of data points in a given area. It shows the combined
      distribution of two quantitative variables. 2D density charts are often
      used in statistical analysis and data mining to identify trends, patterns,
      and <b>correlations</b> in the data.
    </p>
    <p>
      In this tutorial, we will use the{' '}
      <a href="https://d3-graph-gallery.com/density2d.html">d3.js</a> and{' '}
      <a href="https://reactjs.org/">React</a> libraries to build a 2D density
      chart. It starts by describing how the <b>data</b> should be organized and
      how to initialize the <code>Density2d</code> component. It then explains
      how to prepare the data and compute <b>bins</b>. Once this is done, it
      shows how to render the shapes and suggests a few variations. 🙇‍♂️.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="How to build a 2d density chart with React and D3."
      seoDescription="A step-by-step guide to build your very own 2d density chart from scratch. Comes with explanations, code sandboxes, and ready-to-use templates."
    >
      <TitleAndDescription
        title={<h1>2d density chart</h1>}
        description={graphDescription}
        chartType="density2d"
      />

      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>
      <p>
        A 2d density chart is basically a variation of the{' '}
        <Link href="/scatter-plot">scatterplot</Link>, useful when the amount of
        data points is <b>huge</b>. As a result, it shares the same data
        structure.
      </p>
      <p>
        The data is an <b>array of object</b>. For each object, at least 2
        properties are required: <code>x</code> and <code>y</code>. The value of{' '}
        <code>x</code> is the position of the datapoint on the horizontal axis.
        The value of <code>y</code> is linked with the vertical axis.
      </p>
      <CodeBlock code={snippetData} />
      <p>
        Two dimensional density charts are useful with big datasets. Switch to a{' '}
        <Link href="/scatter-plot">scatterplot</Link> if you have few data
        points!
      </p>
      <LinkAsButton href="/scatter-plot" size="sm" isFilled>
        Scatterplot section
      </LinkAsButton>
      {/*
      //
      // Skeleton
      //
      */}
      <h2 id="skeleton">Component skeleton</h2>
      <p>
        The goal here is to create a <code>Density2d</code> component that will
        be stored in a <code>Density2d.tsx</code> file. This component requires
        3 props to render: a <code>width</code>, a <code>height</code>, and some{' '}
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
        <code>Density2d</code> component:
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
      // Scales
      //
      */}
      <h2 id="Scales">Scales and axes</h2>
      <p>
        Scales and axes are computed and rendered exactly as for a{' '}
        <Link href="/scatter-plot">scatterplot</Link> or a{' '}
        <Link href="/scatter-plot">bubble chart</Link>. Please refer to the
        according sections.
      </p>
      <div className="flex mb-10">
        <LinkAsButton href="/scatter-plot" size="sm">
          Scatterplot
        </LinkAsButton>
        <LinkAsButton href="/bubble-plot" size="sm" isFilled>
          Bubble plot
        </LinkAsButton>
      </div>
      <p>
        Scales and axes is a recurring topic in data visualization. I plan to
        write complete articles on the topic. You can know when it's ready by{' '}
        <Link href="/subscribe">subscribing</Link> to the project.
      </p>
      <ChartOrSandbox
        VizComponent={AxisBasicDemo}
        vizName={'AxisBasic'}
        maxWidth={600}
        height={300}
        caption={
          'How to build a bottom axis and a left axis component using React, used to render a d3 scale.'
        }
      />

      {/*
      //
      // d3-hexbin
      //
      */}
      <h2 id="data">
        Compute hexagons with the <code>d3-hexbin</code> library
      </h2>
      <p>
        We have a set of points distributed on a <b>2d coordinate</b> space. We
        want to split this space in hexagons, and compute the number of points
        in each hexagon.
      </p>
      <p>
        Fortunately, the <a href="https://github.com/d3/d3-hexbin">d3-hexbin</a>{' '}
        library has everything we need to do so. This lib is not part of the{' '}
        <Link href="https://github.com/d3/d3">main d3 bundle</Link>, install it
        with:
      </p>
      <CodeBlock code={snippetInstall} />

      <h3>&rarr; The hexagon generator</h3>
      <p>
        The <code>d3-hexbin</code> plugin comes with a <code>hexbin()</code>{' '}
        function that returns a <b>hexagon generator</b>. This hexagon generator
        is a <b>function</b>. You give it some data, it computes the hexagons.
      </p>
      <CodeBlock code={snippet2} />
      <p>
        Two arguments are passed to the <code>hexbin()</code> function:
      </p>
      <ul>
        <li>
          <code>radius</code> is the size of each hexagon
        </li>
        <li>
          <code>extent</code> is an array providing the x and y limits of our
          chart
        </li>
      </ul>
      <h3>&rarr; Hexagon format</h3>
      <p>
        The <code>hexagonGenerator</code> expects some <code>data</code> as
        input. The data must be an <b>array</b> where each item provides the{' '}
        <code>x</code> and <code>y</code> coordinates of a data point in the 2d
        space.
      </p>
      <p>You can provide this data using the following code:</p>
      <CodeBlock code={snippet3} />
      <p>
        The result is an array of arrays. Each item represents a hexagon. Each
        hexagon is composed of all the values assigned to this hexagon. So its{' '}
        <code>length</code> is useful to compute the hexagon color.
      </p>
      <p>
        Each bin has two additional attributes: <code>x</code> and{' '}
        <code>y</code> being the coordinates of the hexagon on the 2d space.
      </p>
      <CodeBlock code={snippet4} />
      <p>Let's draw those hexagons 🙇‍♂️!</p>

      {/*
      //
      // Rendering
      //
      */}
      <h2 id="bars">Drawing the hexagons</h2>
      <p>Finally! ✨</p>
      <p>
        We can now <code>map</code> through the <code>hexbinData</code> array
        and draw a <b>hexagon</b> per item.
      </p>
      <p>
        Fortunately, the <code>hexbinGenerator</code> built above comes with a{' '}
        <code>hexagon()</code> method that builds the shape of a hexagon for us.
        It's thus a breeze to render it in a <code>path</code> svg element:
      </p>
      <CodeBlock code={snippetHex} />
      <p>
        Note that <code>transform</code> is used to translate a hexagon to its
        correct position.
      </p>
      <br />
      <ChartOrSandbox
        VizComponent={Density2dHexbinDemo}
        vizName={'Density2dHexbin'}
        maxWidth={600}
        height={600}
        caption={'A hexbin density chart built with d3.js and React.'}
      />

      {/*
      //
      // Responsiveness
      //
      */}
      <ResponsiveExplanationSection chartId="density2d" />

      {/*
      //
      // Inspiration
      //
      */}
      <DatavizInspirationParallaxLink chartId="density2d" />
      {/*
      //
      // Variations
      //
      */}
      <h2 id="variations">Variations</h2>
      <p>
        The hexbin representation above is just one member of a family of
        graphics allowing to study the <b>combined distribution</b> of two
        quantitative variables. You can read more about the existing variations
        in the{' '}
        <a href="https://www.data-to-viz.com/graph/density2d.html">
          data to viz
        </a>{' '}
        project.
      </p>
      <p>
        To put it in a nutshell, <b>2d histogram</b>, <b>Gaussian KDE</b>,{' '}
        <b>2d density</b> and <b>Contour charts</b> are the most common
        variations. It is of course possible to build them all using{' '}
        <code>react</code> and <code>d3.js</code>.
      </p>
      <p>
        Here is an example with a contounr chart based on the same dataset than
        the previous example.
      </p>
      <br />
      <ChartOrSandbox
        VizComponent={Density2dContourDemo}
        vizName={'Density2dContour'}
        maxWidth={700}
        height={700}
        caption={'Contour chart made with React and D3.js.'}
      />

      <ToDoSection text="make the contour chart above looks better" />
      <ToDoSection text="add examples for 2d histograms and other variations" />
      <ToDoSection text="Add example with a zoom feature implemented" />

      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="correlation" />
      <div className="mt-20" />
    </Layout>
  );
}

const snippetData = `
const data = [
  {
    x: 2,
    y: 4
  },
  {
    x: 8,
    y: 5
  }
]
`.trim();

const snippetSkeleton = `
import * as d3 from "d3"; // we will need d3.js

type Density2dProps = {
  width: number;
  height: number;
  data: number[];
};

export const Density2d = ({ width, height, data }: Density2dProps) => {

  // read the data
  // build the scales
  // use the hexbin plugin to compute hexagons from the dataset
  // draw the hexagons

  return (
    <div>
      <svg width={width} height={height}>
        // render all the hexagons
      </svg>
    </div>
  );
};
`.trim();

const snippet2 = `
const hexbinGenerator = hexbin()
  .radius(BIN_SIZE) // hexagon size in px
  .extent([
    [0, 0],
    [boundsWidth, boundsHeight],
]);
`.trim();

const snippet3 = `
const hexbinData = hexbinGenerator(
  data.map((item) => [xScale(item.x), yScale(item.y)])
);
`.trim();

const snippetInstall = `
npm install d3-hexbin
`.trim();

const snippet4 = `
[
  [[1,1], [1,2], [2,2], x: 1.5, y: 1.5],
  [[12,14], [11,16], [9,12], x: 12, y: 12],
  ...
]
`.trim();

const snippetHex = `
const allShapes = hexbinData.map((d, i) => {
  return (
    <path
      key={i}
      d={hexbinGenerator.hexagon()}
      transform={"translate(" + d.x + "," + d.y + ")"}
      fill={colorScale(d.length)}
      ...
    />
  );
});
`.trim();
