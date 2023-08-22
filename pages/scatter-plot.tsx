import React from 'react';
import { Layout } from '../component/Layout';
import TitleAndDescription from '../component/TitleAndDescription';
import ChartFamilySection from '../component/ChartFamilySection';
import { CodeBlock } from '../component/UI/CodeBlock';
import { ChartOrSandbox } from '../component/ChartOrSandbox';
import { ScatterplotBasicDemo } from '../viz/ScatterplotBasic/ScatterplotBasicDemo';
import { ScatterplotClimateCrisisDemo } from '../viz/ScatterplotClimateCrisis/ScatterplotClimateCrisisDemo';
import { AxisBasicDemo } from '../viz/AxisBasic/AxisBasicDemo';
import { ScatterplotHoverHighlightDemo } from '../viz/ScatterplotHoverHighlight/ScatterplotHoverHighlightDemo';
import { ResponsiveExplanationSection } from '../component/ResponsiveExplanationSection';
import DatavizInspirationParallaxLink from '../component/DatavizInspirationParallaxLink';
import { Accordion } from '../component/UI/Accordion';
import { ScatterplotTooltipDemo } from '../viz/ScatterplotTooltip/ScatterplotTooltipDemo';
import Link from 'next/link';
import { SubscribeForm } from '../component/SubscribeForm';
import GraphGallery from 'component/GraphGallery';

const graphDescription = (
  <>
    <p>
      A <a href="https://www.data-to-viz.com/graph/scatter.html">scatterplot</a>{' '}
      displays the relationship between 2 numeric variables. This page is a
      step-by-step guide on how to build your own scatterplot for the web, using{' '}
      <a href="https://reactjs.org/">React</a> and{' '}
      <a href="https://www.d3-graph-gallery.com">D3.js</a>.
    </p>
    <p>
      It starts with very basic concepts like <b>data structure</b>,{' '}
      <b>scales</b> and svg circle <b>rendering</b>. It then shows how to add
      interactivity to the chart with <b>hover effects</b> and <b>tooltips</b>.
      At the end of the post, you should be able to build you own
      ready-to-publish scatterplot 🙇‍♂️.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="How to build a scatter plot with React and D3."
      seoDescription="A step-by-step guide to build your very own scatterplot from scratch. Comes with explanations, code sandboxes, and ready-to-use templates."
    >
      <TitleAndDescription
        title={
          <h1>
            Scatterplot{' '}
            <span className="text-gray-600 font-light hidden sm:inline">
              with React and d3.js
            </span>
          </h1>
        }
        description={graphDescription}
        chartType="scatter"
      />

      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>
      <p>
        The dataset used to build a scatterplot is usually an{' '}
        <b>array of objects</b>.
      </p>
      <p>
        For each object, at least 2 properties are required: <code>x</code> and{' '}
        <code>y</code>. The value of <code>x</code> will control the position of
        the datapoint on the horizontal axis. The value of <code>y</code> will
        be linked with the vertical axis.
      </p>
      <CodeBlock code={snippetData} />
      <p>
        We will see later in this guide that some additional properties can
        become useful. For instance, a third numeric value could be added as a{' '}
        <code>size</code> property, and a categorical property could be used as
        a <code>group</code> to control the <b>color</b>.
      </p>
      <p>
        This tutorial starts by using dummy data for the most simple examples.
        It then uses the famous{' '}
        <a href="https://www.data-to-viz.com/story/ThreeNum.html">gapminder</a>{' '}
        dataset that provides the <b>life expectancy</b> and the{' '}
        <b>population size</b> for every country.
      </p>

      {/*
      //
      // Skeleton
      //
      */}
      <h2 id="skeleton">Component skeleton</h2>
      <p>
        The goal here is to create a <code>Scatterplot</code> component that
        will be stored in a <code>Scatterplot.tsx</code> file. This component
        requires 3 props to render: a <code>width</code>, a <code>height</code>,
        and some <code>data</code>.
      </p>
      <p>
        The shape of the <code>data</code> is described above. The{' '}
        <code>width</code> and <code>height</code> will be used to rendering a{' '}
        <code>svg</code> element in the DOM, in which we will insert the
        scatterplot.
      </p>
      <p>
        To put it in a nutshell, that's the skeleton of our{' '}
        <code>Scatterplot</code> component:
      </p>
      <CodeBlock code={snippetSkeleton} />
      <p>
        It's fundamental to understand that with this code organization, d3.js
        will be used to prepare the svg <code>circle</code>, but it's react that
        will render them in the <code>return()</code> statement. We won't use d3
        methods like <code>append</code> that you can find in usual{' '}
        <a href="https://www.d3-graph-gallery.com">d3.js examples</a>.
      </p>

      {/*
      //
      // Axes
      //
      */}
      <h2 id="scales and axes">Scales and axes</h2>
      <h3>&rarr; Scales</h3>
      <p>
        Building a scatterplot requires to transform a <b>dimension</b> (a
        numeric variable like life expectancy) in a <b>position in pixels</b>.
        This is done using a fundamental dataviz concept called <b>scale</b>.
      </p>
      <p>
        D3.js comes with a handful set of{' '}
        <a href="https://github.com/d3/d3-scale">predefined scales</a>.{' '}
        <code>scaleLinear</code> is what we need for the X and Y axis. Here is a
        quick overview on how to build and use a scale:
      </p>
      <CodeBlock code={snippet5} />
      <p>
        To dig more into d3 scales, visit this{' '}
        <a href="https://d3-graph-gallery.com/graph/custom_axis.html">
          dedicated page
        </a>
        . It's a crucial concept that will be used everywhere in this website.
      </p>

      <h3>&rarr; Axes</h3>
      <p>
        Axes are rather complicated elements. They are composed of the main{' '}
        <b>segment</b>, several <b>ticks</b> that each have a <b>label</b>, and
        are often decorated with a <b>title</b>.
      </p>
      <p>
        D3.js offers some powerful{' '}
        <a href="https://d3-graph-gallery.com/graph/custom_axis.html">
          functions
        </a>{' '}
        to draw those axes for you, based on the scales discussed above. For
        instance, one could call <code>axisBottom()</code> in a{' '}
        <code>useEffect</code> hook to imperatively draw the X axis into a
        specific DOM element. But this comes with some caveats and is thus not
        the option used in this gallery.
      </p>
      <p>
        Instead, I suggest creating the axes from scratch and storing them in 2
        react components called <code>AxisBottom</code> and{' '}
        <code>AxisLeft</code>. Those components expect a d3 scale as input and
        do all the svg drawing for us.
      </p>
      <ChartOrSandbox
        VizComponent={AxisBasicDemo}
        vizName={'AxisBasic'}
        maxWidth={500}
        height={300}
        caption={
          <p>
            Compute scales to map numeric values to a 2d canvas. Use custom
            react components to render axes with react from this scales.
          </p>
        }
      />
      <p>
        The code for those X and Y axis components is provided below. The
        following examples will show how straightforward it is to tweak them to
        reach other <b>chart styles</b>.
      </p>
      <Accordion startOpen={false} title="code for the X axis react component">
        <CodeBlock code={snippetXAxis} />
      </Accordion>
      <Accordion startOpen={false} title="code for the Y axis react component">
        <CodeBlock code={snippetYAxis} />
      </Accordion>
      <p>
        <br />
        <u>Note</u>: do not forget to use the <code>crispEdges</code> value of
        the <code>shape-rendering</code> svg attribute. Otherwise the vertical
        and horizontal segments might be blurry.
      </p>

      {/*
      //
      // Add circles
      //
      */}
      <h2 id="circles">Add circles</h2>
      <p>
        We are now pretty close to the first scatterplot. There is just one more
        critical part missing: <b>markers</b>.
      </p>
      <p>
        To add them, we have to <code>map()</code> on the data input and add an
        svg <code>circle</code> for each. That's the code snippet that needs to
        be added:
      </p>
      <CodeBlock code={snippet4} />
      <p>
        <b>That's it!</b> 🎉
      </p>
      <p>
        Calling the <code>allShapes</code> object in the <code>return()</code>{' '}
        statement of the component will add as many circles as needed.
      </p>
      <p>
        Note that styling attributes are written as prop here. In production,
        you should consider adding a <code>class</code> to those circles and
        setting it using css.
      </p>
      <ChartOrSandbox
        VizComponent={ScatterplotBasicDemo}
        vizName={'ScatterplotBasic'}
        maxWidth={500}
        height={500}
        caption="Add a svg circle for each item of the dataset to get a first scatterplot"
      />
      <p>
        That's not the best scatterplot in the world yet, but it's definitely a{' '}
        <b>first working version</b>.
      </p>

      {/*
      //
      // Responsiveness
      //
      */}
      <ResponsiveExplanationSection chartId="scatter" />

      {/*
      //
      // Tooltip
      //
      */}
      <h2 id="tooltip">Tooltip</h2>
      <p>
        There is a very common <b>frustration</b> with scatterplots: you're
        interested in a specific data point (let's say it's out of the general
        trend for instance), but you <b>ignore everything</b> about this item.
      </p>
      <p>
        This is when tooltips come into play. You can add as much information as
        you want to it, making the chart much more insightful.
      </p>
      <p>
        In the following chart based on the{' '}
        <a href="https://www.data-to-viz.com/story/ThreeNum.html">gapminder</a>{' '}
        dataset, don't you want to know what are the countries with the highest
        life expectancy or GDP per capita? Labeling all circles would result in
        a very <b>cluttered</b> figure, so let's learn how to add tooltips
        instead.
      </p>
      <ChartOrSandbox
        VizComponent={ScatterplotTooltipDemo}
        vizName={'ScatterplotTooltip'}
        maxWidth={500}
        height={500}
        caption="Scatterplot with tooltip. Hover over a circle to get the corresponding country name."
      />
      <p>
        There are <b>many different approaches</b> to building tooltips, and I'm{' '}
        <Link href="/subscribe">preparing a whole dedicated blog post</Link> on
        the topic.
      </p>
      <p>
        Here I suggest starting with an internal state using the{' '}
        <code>useState</code> hook. <code>interactionData</code> is an object
        providing everything you need to draw a tooltip. It usually has 2{' '}
        <code>xPos</code> and <code>yPos</code> properties that are the position
        of the tooltip. It then has as many props as needed to fill the tooltip.
        (I'm just adding the country name in my example)
      </p>
      <CodeBlock code={snippetTooltip1} />
      <p>
        <code>setInteractiondata</code> is a function allowing to update this
        state. We can use it on each circle to update{' '}
        <code>interactionData</code> each time it is hovered over:
      </p>
      <CodeBlock code={snippetTooltip2} />
      <p>
        We can now create a <code>Tooltip</code> component that will render only
        when the <code>interactionData</code> is not <code>null</code>. It is
        usually more convenient to render the tooltip using <code>html</code>,
        not <code>svg</code> (it is easier to customize it).
      </p>
      <p>
        To do so, the tooltip is rendered in an <code>absolute</code> positioned
        div that is drawn exactly on top of the chart area, excluding axes. This
        is how to <code>return</code> statement of our <code>Scatterplot</code>{' '}
        component now looks like:
      </p>
      <CodeBlock code={snippetTooltip3} />
      <p>
        Now you can add whatever content in the <code>Tooltip</code> component.
        Check the code below the example above to see an example.
      </p>
      <p className="text-gray-400">
        This was a rather succint explanation on tooltips. A more{' '}
        <Link href="/subscribe">in-depth explanation</Link> will be published
        soon.
      </p>

      {/*
      //
      // Hover effects
      //
      */}
      <h2 id="hover effect">Hover effect</h2>
      <p>
        Showing a tooltip on hover is helpful, but it's often a nice touch to
        add a <b>hover effect</b>. Hover effects on scatterplots are usually
        used for 2 main reasons:
      </p>
      <ul>
        <li>
          Highlight <b>one circle</b>: makes sure the tooltip you're reading is
          associated with the circle you're targeting.
        </li>
        <li>
          Highlight <b>a group</b>: it's often interesting to see all the
          related points in the dataset.
        </li>
      </ul>
      <p>
        Let's implement both on the chart below. Hovering over a country will
        fade all circles except the ones of the same continent.
      </p>
      <ChartOrSandbox
        VizComponent={ScatterplotHoverHighlightDemo}
        vizName={'ScatterplotHoverHighlight'}
        maxWidth={500}
        height={500}
        caption="Scatterplot with hover effect: hover over a circle to highlight it and its group"
      />
      <p>
        As for the tooltip example above, everything starts with an internal
        state (called <code>hoveredGroup</code>) that stores which circle is
        hovered hover.
      </p>
      <CodeBlock code={snippetHover1} />
      <p>
        Now, this state needs to be updated when a user hovers over the circle.{' '}
        <code>setHoveredGroup</code> can be passed as a callback to the{' '}
        <code>onMouseOver</code> attribute of each circle.
      </p>
      <p>
        On top of this, some specific css classes can be attributed to circles
        depending on the circle that is hovered hover. In the example above, a
        class called <code>dimmed</code> is added to circles that must
        disappear.
      </p>
      <p>To put it in a nutshell, the circles are created as follows:</p>
      <CodeBlock code={snippetHover2} />
      <p>
        Last but not least, some css needs to be added to customize the circle
        depending on if they are in default, <code>.dimmed</code> or{' '}
        <code>:hover</code> mode.
      </p>
      <p>
        Note that the <code>filter: saturate(0)</code> is a good way to dim
        unwanted circles. Also, playing with <code>transition-delay</code> and{' '}
        <code>transition-duration</code> adds to animate the transition is a
        nice touch you should consider. Check the code below the example to see
        the full css.
      </p>
      <p className="text-gray-400 mt-8">
        The hover effect is another big topic in data visualization. A dedicated
        post will be published soon on the topic, feel free to{' '}
        <Link href="/subscribe">subscribe</Link> to know when.
      </p>

      {/*
      //
      // Inspiration
      //
      */}
      <DatavizInspirationParallaxLink chartId="scatter" />

      {/*
      //
      // Real life
      //
      */}
      <h2 id="real life">Real-life application</h2>
      <p>Let's apply the concepts learned above to a real-life example.</p>
      <p>
        I like this scatterplot originally published on the data wrapper{' '}
        <a href="https://blog.datawrapper.de/climate-risk-readiness-responsibility/">
          blog
        </a>
        . It shows a strong correlation between vulnerability to climate change
        and CO2 emissions.
      </p>
      <br />
      <p>
        The chart has several features that are interesting to reproduce fom a
        technical point of view:
      </p>
      <ul>
        <li>
          Custom <b>annotation</b>: only a fraction of the country names are
          written
        </li>
        <li>
          Hover effect: the hovered country is highlighted with a black stroke.
          After a short delay, countries of other groups are dimmed. Note that
          the effect is triggered once the mouse approaches the marker, no need
          to be perfectly on top.
        </li>
        <li>Tooltip: highly customized and linked to the mouse position</li>
      </ul>
      <ChartOrSandbox
        VizComponent={ScatterplotClimateCrisisDemo}
        vizName={'ScatterplotClimateCrisis'}
        maxWidth={700}
        height={900}
        caption={
          <span>
            Reproduction of a chart originally published by{' '}
            <a href="https://blog.datawrapper.de/climate-risk-readiness-responsibility/">
              Data Wrapper
            </a>{' '}
            using react and d3.js.
          </span>
        }
      />

      {/*
      //
      // Variations
      //
      */}
      <h2 id="variations">Variations</h2>
      <p>
        The scatterplot examples described above are just the <b>beginning</b>{' '}
        of your journey. There is an infinite world of customization that is
        open to you. You can also explore{' '}
        <Link href="/">related chart types</Link> that can be a good fit for
        your data:
      </p>
      <p>Click on the overview below to get details and code.</p>
      <br />
      <GraphGallery
        images={[
          'bubble-plot-with-legend.png',
          '2d-density-plot.png',
          'correlogramBasic.png',
          'scatterplot-tooltip-with-voronoi-for-closest-point-detection.gif',
          'scatterplot-basic-canvas.png',
        ]}
      />

      {/*
      //
      // Useful links
      //
      */}
      <h2>Useful links</h2>
      <p>The following links have been useful to create this page:</p>
      <ul>
        <li>
          <i>Building axes in d3.js</i> and the <i>scatterplot section</i> from
          the{' '}
          <a href="https://d3-graph-gallery.com/graph/custom_axis.html">
            d3 graph gallery
          </a>
        </li>
        <li>
          <a href="https://github.com/d3/d3-scale">Official doc</a> about
          scales.{' '}
        </li>
        <li>
          <i>Using React with D3.js</i> on Amelia Wattenberger's{' '}
          <a href="https://wattenberger.com/blog/react-and-d3">blog</a>.
        </li>
        <li>
          This{' '}
          <a href="https://stackoverflow.com/questions/49058890/how-to-get-a-react-components-size-height-width-before-render">
            stack overflow discussion
          </a>{' '}
          about react component's size.
        </li>
      </ul>

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

const snippetXAxis = `
import { useMemo } from "react";
import { ScaleLinear } from "d3";

type AxisBottomProps = {
  xScale: ScaleLinear<number, number>;
  pixelsPerTick: number;
};

// tick length
const TICK_LENGTH = 6;

export const AxisBottom = ({ xScale, pixelsPerTick }: AxisBottomProps) => {
  const range = xScale.range();

  const ticks = useMemo(() => {
    const width = range[1] - range[0];
    const numberOfTicksTarget = Math.floor(width / pixelsPerTick);

    return xScale.ticks(numberOfTicksTarget).map((value) => ({
      value,
      xOffset: xScale(value),
    }));
  }, [xScale]);

  return (
    <>
      {/* Main horizontal line */}
      <path
        d={["M", range[0], 0, "L", range[1], 0].join(" ")}
        fill="none"
        stroke="currentColor"
      />

      {/* Ticks and labels */}
      {ticks.map(({ value, xOffset }) => (
        <g key={value} transform={'translate(\${xOffset}, 0)'}>
          <line y2={TICK_LENGTH} stroke="currentColor" />
          <text
            key={value}
            style={{
              fontSize: "10px",
              textAnchor: "middle",
              transform: "translateY(20px)",
            }}
          >
            {value}
          </text>
        </g>
      ))}
    </>
  );
};
`.trim();

const snippetYAxis = `
import { useMemo } from "react";
import { ScaleLinear } from "d3";

type AxisLeftProps = {
  yScale: ScaleLinear<number, number>;
  pixelsPerTick: number;
  width: number;
};

const TICK_LENGTH = 10;

export const AxisLeft = ({ yScale, pixelsPerTick, width }: AxisLeftProps) => {
  const range = yScale.range();

  const ticks = useMemo(() => {
    const height = range[0] - range[1];
    const numberOfTicksTarget = Math.floor(height / pixelsPerTick);

    return yScale.ticks(numberOfTicksTarget).map((value) => ({
      value,
      yOffset: yScale(value),
    }));
  }, [yScale]);

  return (
    <>
      {/* Ticks and labels */}
      {ticks.map(({ value, yOffset }) => (
        <g
          key={value}
          transform={"translate(0, {yOffset})"} // TODO struggling with back ticks
          shapeRendering={"crispEdges"}
        >
          <line
            x1={-TICK_LENGTH}
            x2={width + TICK_LENGTH}
            stroke="#D2D7D3"
            strokeWidth={0.5}
          />
          <text
            key={value}
            style={{
              fontSize: "10px",
              textAnchor: "middle",
              transform: "translateX(-20px)",
              fill: "#D2D7D3",
            }}
          >
            {value}
          </text>
        </g>
      ))}
    </>
  );
};
`.trim();

const snippet4 = `
const allShapes = data.map((d, i) => {
  return (
    <circle
      key={i}
      r={7} // radius
      cx={xScale(d.x)} // position on the X axis
      cy={yScale(d.y)} // on the Y axis
      opacity={1}
      stroke="#cb1dd1"
      fill="#cb1dd1"
      fillOpacity={0.2}
      strokeWidth={1}
    />
  );
});
`.trim();

const snippet5 = `
const scale = d3.scaleLinear()
  .domain([0, 10]) // data goes from 0 to 10
  .range([0, 200]); // axis goes from 0 to 200

scale(0); // 0 -> item with a value of 0 will be at the extreme left of the axis
scale(5); // 100 -> middle of the axis
scale(10); // 200 -> extreme right
`.trim();

const snippetSkeleton = `
import * as d3 from "d3"; // we will need d3.js

type ScatterplotProps = {
  width: number;
  height: number;
  data: { x: number; y: number }[];
};

export const Scatterplot = ({ width, height, data }: ScatterplotProps) => {

  // read the data
  // do some stuff with d3
  // compute all the <circle>

  return (
    <div>
      <svg width={width} height={height}>
        // render all the <circle>
      </svg>
    </div>
  );
};
`.trim();

const snippetTooltip1 = `
const [interactionData, setInteractiondata] = useState<InteractionData | null>(null);
`.trim();

const snippetTooltip2 = `
<circle
  r={8}
  cx={xScale(d.x)}
  cy={yScale(d.y)}
  onMouseEnter={() => // Each time the circle is hovered hover...
    setInteractionData({ // ... update the interactionData state with the circle information
      xPos: xScale(d.x),
      yPos: yScale(d.y),
      name: d.subGroup,
    })
  }
  onMouseLeave={() => setInteractionData(null)} // When the user stops hovering, reset the interactionData to null
/>
`.trim();

const snippetTooltip3 = `
return (
  <div style={{ position: "relative" }}>
    <svg width={width} height={height}>
      // axes and circles go here
    </svg>

    {/* Tooltip */}
    <div
      style={{
        width: boundsWidth, // the width of the chart area excluding axes = width - left margin
        height: boundsHeight,
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        marginLeft: MARGIN.left,
        marginTop: MARGIN.top,
      }}
    >
      <Tooltip interactionData={interactionData} />
    </div>
`.trim();

const snippetHover1 = `
const [hoveredGroup, setHoveredGroup] = useState<string | null>(null);
`.trim();

const snippetHover2 = `
const allShapes = data.map((d, i) => {
  const className = // class if the circle depends on the hover state
    hoveredGroup && d.group !== hoveredGroup
      ? styles.scatterplotCircle + " " + styles.dimmed
      : styles.scatterplotCircle;

  return (
    <circle
      key={i}
      r={5}
      cx={xScale(d.x)}
      cy={yScale(d.y)}
      className={className} // class is attributed here
      stroke={colorScale(d.group)}
      fill={colorScale(d.group)}
      onMouseOver={() => setHoveredGroup(d.group)} // callback to update the state
      onMouseLeave={() => setHoveredGroup(null)} // and to set it back to null
    />
  );
});
`.trim();
