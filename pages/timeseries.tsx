import React from 'react';
import { Layout } from '../component/Layout';
import TitleAndDescription from '../component/TitleAndDescription';
import ChartFamilySection from '../component/ChartFamilySection';
import { CodeBlock } from '../component/UI/CodeBlock';
import { ChartOrSandbox } from '../component/ChartOrSandbox';
import Link from 'next/link';
import { Accordion } from 'component/UI/Accordion';
import { AxisTimeD3Demo } from 'viz/AxisTimeD3/AxisTimeD3Demo';
import { LineChartSyncCursorDemo } from 'viz/LineChartSyncCursor/LineChartSyncCursorDemo';
import { LinkAsButton } from 'component/LinkAsButton';
import { LineChartTimeDemo } from 'viz/LineChartTime/LineChartTimeDemo';
import GraphGallery from 'component/GraphGallery';

const graphDescription = (
  <>
    <p>
      This section does not target a specific chart type, even though timeseries
      are often represented as <Link href="/line-chart">line</Link> charts or{' '}
      <Link href="/area">area</Link> charts.
    </p>
    <p>
      Instead, it provides a tips and tricks to deal with charts that represent
      the evolution in <b>time</b> of a numeric variable. For instance, it
      provides hints on how to deal with <b>dates</b>, how to <b>pan</b> on a
      chart and more
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Timeseries| The React Graph Gallery"
      seoDescription="How to deal with timeseries with React and D3.js. A set of re-usable components coming with editable code and explanations."
    >
      <TitleAndDescription
        title="Timeseries"
        description={graphDescription}
        chartType="timeseries"
      />
      {/*
      //
      // Link to related section
      //
      */}
      <h2 id="chart types">Useful chart types</h2>{' '}
      <p>
        This page is <b>not</b> about a specific chart type. Instead it provides
        hints on how to deal with <b>time</b>.
      </p>
      <p>
        Check the graph sections that are used to visualize timeseries below if
        there is a specific chart type you want to make.
      </p>
      <br />
      <GraphGallery
        images={[
          'line-chart-basic.png',
          'heatmapBasic.png',
          'streamgraph-basic.png',
        ]}
      />
      {/*
      //
      // The Date format
      //
      */}
      <h2 id="date format">The Date format</h2>{' '}
      <p>
        The first struggle when dealing with timeseries is to work with the{' '}
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">
          javascript Date format
        </a>
        . A <code>Date</code> represents a single moment in time and is usually
        stored as a <code>string</code> in the input dataset.
      </p>
      <p>
        Here is an <b>FAQ</b> about the <code>Date</code> format. I constantly
        forget how this works and come back here for reference. Note that it
        heavily relies on the{' '}
        <a href="https://github.com/d3/d3-time-format">d3-time-format module</a>{' '}
        that provides great helpers.
      </p>
      <Accordion
        startOpen={false}
        title={
          <span>
            Transform a <b>string</b> into a <b>date</b>
          </span>
        }
      >
        <p>
          In your dataset, the date of each data point is probably stored as a
          string, like <code>2015-06-01</code> for instance.
        </p>
        <p>
          In order to manipulate and plot those dates, you need to transform it
          into a{' '}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">
            javascript date format
          </a>
          .
        </p>
        <CodeBlock code={snippetParser} />
      </Accordion>
      <Accordion
        startOpen={false}
        title={
          <span>
            Transform a <b>date</b> into a <b>string</b>
          </span>
        }
      >
        <p>
          Once you have a timestamp at the <code>Date</code> format, you might
          want to display it on the screen using a specific format.
        </p>
        <CodeBlock code={snippetFormat} />
      </Accordion>
      <Accordion
        startOpen={false}
        title={
          <span>
            What is the <b>current date</b>
          </span>
        }
      >
        <p>
          You can use the <code>Date.now()</code> function. Note that the date
          is returned as a <code>number</code>.
        </p>
        <CodeBlock code={snippetNow} />
      </Accordion>
      {/*
      //
      // The Time Axis
      //
      */}
      <h2 id="time axis">Building a time axis</h2>
      <p>
        A very common task when it comes to build timeseries viz is to draw a{' '}
        <b>time axis</b>. Fortunately, d3 has amazing helper functions allowing
        to create and draw temporal scales.
      </p>
      <p>
        All the magic is stored in the <code>d3-scale</code> module, and more
        precisely in the{' '}
        <a href="https://github.com/d3/d3-scale#scaleTime">scaleTime</a>{' '}
        function.
      </p>
      <p>Building a time scale can be summarized as follow:</p>
      <CodeBlock code={snippetAxis} />
      <p>
        Following this code block <code>xScale</code> is a function. You give it
        a <code>Date</code>, it returns a <code>position in pixels</code>
      </p>
      <p>
        {' '}
        You can finally use this scale to draw the X axis using your favorite
        method:
      </p>
      <ul>
        <li>create your own react component</li>
        <li>
          call <code>d3.axisBottom()</code> in a <code>useEffect</code>
        </li>
      </ul>
      <p>
        I'm preparing a full post on axes with d3 and react,{' '}
        <Link href="/subscribe">subscribe</Link> to the newsletter if you want
        to be notified when it's out!
      </p>
      <LinkAsButton size="sm" href="/subscribe" isFilled>
        More on axes
      </LinkAsButton>
      <ChartOrSandbox
        vizName={'AxisTimeD3'}
        VizComponent={AxisTimeD3Demo}
        height={250}
        maxWidth={600}
        caption="A basic time axis build with d3.js and react."
      />
      <p>
        <code>d3</code> is very smart at picking the <b>right label format</b>.
        If you're dealing with a very long period of time (years), it will
        display years. If you're dealing with a month, it will display days. And
        so on. It is very convenient. The logic controlling this formatting is
        provided <a href="https://gist.github.com/mbostock/4149176">here</a>.
      </p>
      <p>
        Note that you can <b>customize</b> how dates are formatted along the X
        axis thanks to the <code>tickFormat</code> function.
      </p>
      {/*
      //
      // Line chart application
      //
      */}
      <h2 id="line chart">Line chart application</h2>
      <p>
        If you already understood the content of the{' '}
        <Link href="line-chart">line chart section</Link> of the gallery, you
        just have to use a <code>scaleTime</code> instead of a{' '}
        <code>scaleLinear</code> and that's it, you have your first{' '}
        <b>timeseries</b> visualization. 😋
      </p>
      <LinkAsButton size="sm" href="/line-chart" isFilled>
        Line chart section
      </LinkAsButton>
      <ChartOrSandbox
        vizName={'LineChartTime'}
        VizComponent={LineChartTimeDemo}
        height={300}
        maxWidth={900}
        caption="A first timeseries line chart made thanks to the scaleTime function of d3."
      />
      {/*
      //
      // Line chart with several groups
      //
      */}
      {/* <h2 id="multi group">Line chart with several groups</h2>
      <p>Add notes about the spaghetti issue</p>
      <ChartOrSandbox
        vizName={"LineChartDatasetTransition"}
        VizComponent={LineChartPageViewsDemo}
        height={400}
        maxWidth={600}
        caption="Click on the buttons to trigger a smooth transition between the 2 line charts."
      /> */}
      {/*
      //
      // Synced cursors
      //
      */}
      <h2 id="synced cursor">Synchronized cursor</h2>
      <p>
        Another pretty common task when dealing with timeseries is to add a{' '}
        <b>synchronized cursor</b> on all charts.
      </p>
      <p>
        This makes the dashboard more <b>insightful</b>: hovering over an
        interesting part of a chart reveals where the timestamp is localized on
        other charts <b>instantly</b>.
      </p>
      <p>
        The implementation required to build a shared state between all charts
        of the webpage. Hovering a specific chart will update this state and
        thus update all other plots. This process is extensively described in
        this{' '}
        <Link href="/example/line-chart-synchronized-cursors">
          synchronized cursor for timeseries
        </Link>{' '}
        post.{' '}
      </p>
      <LinkAsButton
        href="/example/line-chart-synchronized-cursors"
        isFilled
        size="sm"
      >
        {'Read full post'}
      </LinkAsButton>
      <ChartOrSandbox
        vizName={'LineChartSyncCursor'}
        VizComponent={LineChartSyncCursorDemo}
        height={300}
        maxWidth={900}
        caption="Hover over a chart to see a cursor on both of them, easing the time comparison."
      />
      {/*
      //
      // Link to related section
      //
      */}
      <h2 id="gallery">Gallery of timeseries example</h2>
      <p>
        On top of the generic use-cases presented above, here is a gallery of
        chart examples involving <b>timeseries</b> visualization:
      </p>
      <br />
      <GraphGallery images={['timeseries-moving-average.png']} />
      {/*
      //
      // Panning
      //
      */}
      {/* <h2 id="panning">Axis panning</h2>
      <div className="full-bleed border-t h-0 bg-gray-100 my-3" />
      <ChartOrSandbox
        vizName={"LineChartPanningDemo"}
        VizComponent={LineChartPanningDemo}
        height={300}
        maxWidth={600}
        caption="Hover over a chart to see a cursor on both of them, easing the time comparison."
      /> */}
      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="evolution" />
      <div className="mt-20" />
    </Layout>
  );
}

const snippetParser = `
// import the timeParse function from d3
import { timeParse } from "d3";

// create a time parser function that works for our time format
const customTimeParser = timeParse("%Y-%m-%d");

// convert a string into a date
const string = "2015-06-01"
const date = customTimeParser(string)

// console.log(date)
// Mon Jun 01 2015 00:00:00 GMT+0200 (Central European Summer Time)
}
`.trim();

const snippetFormat = `
// import the timeParse function from d3
import { timeFormat } from "d3";

// create a time parser function that works for our time format
const customTimeFormatter = timeFormat("%B %d, %Y");

// convert a string into a date
const date = new Date
const string = customTimeFormatter(date)

// console.log(string)
// "June 30, 2015"
}
`.trim();

const snippetNow = `
const now = Date.now()

// console.log(now)
// 1685004151406

const nowInDateFormat = new Date(now)

// console.log(nowInDateFormat)
// Thu May 25 2023 10:42:31 GMT+0200 (Central European Summer Time)
}
`.trim();

const snippetAxis = `
// Start and end of the axis must be in the Date format
const start = new Date("2020-12-01");
const end = new Date("2023-06-01");

// Use scaleTime() to create a time scale
const xScale = d3.scaleTime()
  .domain([start, end])
  .range([0, width]);
`.trim();
