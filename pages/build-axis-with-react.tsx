import React, { useRef } from 'react';
import { Layout } from '../component/Layout';
import TitleAndDescription from '../component/TitleAndDescription';
import Contact from '../component/Contact';
import { ChartOrSandbox } from '../component/ChartOrSandbox';
import ChartFamilySection from '../component/ChartFamilySection';
import { useDimensions } from '../hook/use-dimensions';
import { AxisBasic } from '../viz/AxisBasic/AxisBasic';
import { CodeBlock } from '../component/UI/CodeBlock';
import { TakeHome } from '../component/TakeHome';
import { AxisBasicDemo } from '../viz/AxisBasic/AxisBasicDemo';
import { AxisBasicD3Demo } from '../viz/AxisBasicD3/AxisBasicD3Demo';

const graphDescription = (
  <p>
    This post explains how to build axes from d3 scales for a chart. It relies
    on the <code>tick()</code> method to compute the tick positions and use
    react for the rendering. The code of the <code>BottomAxis</code> and{' '}
    <code>LeftAxis</code>
    components is provided, together with some reproducible examples.
  </p>
);

const snippet1 = `
const TICK_LENGTH = 6;

export const AxisBottom = ({ xScale, pixelsPerTick }) => {
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
        <g key={value} transform={\`translate(\${xOffset}, 0)\`}>
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

const snippet2 = `
const TICK_LENGTH = 6;

export const AxisLeft = ({ yScale, pixelsPerTick }) => {
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
      {/* Main vertical line */}
      <path
        d={["M", 0, range[0], "L", 0, range[1]].join(" ")}
        fill="none"
        stroke="currentColor"
      />

      {/* Ticks and labels */}
      {ticks.map(({ value, yOffset }) => (
        <g key={value} transform={\`translate(0, \${yOffset})\`}>
          <line x2={-TICK_LENGTH} stroke="currentColor" />
          <text
            key={value}
            style={{
              fontSize: "10px",
              textAnchor: "middle",
              transform: "translateX(-20px)",
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

export default function Home() {
  const axisRef = useRef<HTMLDivElement>(null);
  const axisDemo = useDimensions(axisRef);

  return (
    <Layout
      title="Building graph axes with React (and d3.js)"
      seoDescription="This blogpost explains how to build axes from d3 scales for a chart. It relies on the tick() method to compute the tick positions and use react for the rendering."
    >
      <TitleAndDescription
        title="Building graph axes with React (and d3.js)"
        description={graphDescription}
      />
      {/* Demo basic axis */}
      <div className="w-full flex flex-col justify-center items-center">
        <div
          style={{ height: 250, width: '100%', maxWidth: 500 }}
          ref={axisRef}
        >
          <AxisBasic width={axisDemo.width} height={axisDemo.height} />
        </div>
        <p className="text-sm text-gray-500 max-w-md italic text-center mt-4 font-light">
          This minimal example uses <code>scaleLinear()</code> to compute the
          scales, <code>ticks()</code> to compute tick positions and react to
          render the axes.
        </p>
      </div>
      {/*
      //
      //
      //
      */}
      <h2 id="bottom">Bottom Axis</h2>
      <p>
        The code snippet below builds a <code>AxisBottom</code> component. It is{' '}
        <TakeHome>
          very much inspired from{' '}
          <a href="https://wattenberger.com/blog/react-and-d3">this blogpost</a>{' '}
          by Amelia Wattenberger
        </TakeHome>
        . I've just changed a few things, notably passing a scale as input
        instead of a range and a domain.
      </p>
      <p>
        The logic mainly relies on the <code>ticks()</code> method of a d3
        scale. It takes a target number of ticks as input, find the most
        appropriate way to build smart ticks based on this target, and returns
        an array with all the tick positions.
      </p>
      <p>
        What follows is just some svg drawings based on those tick positions.
      </p>
      <CodeBlock code={snippet1} />
      {/*
      //
      //
      //
      */}
      <h2 id="left">Left</h2>
      <p>Exactly the same idea than for the bottom axis above</p>
      <CodeBlock code={snippet2} />
      {/*
      //
      //
      //
      */}
      <h2 id="margins">Margins</h2>{' '}
      <p>
        The bottom and left axes are not displays at the border of the main
        chart component. Some margins are computed by the viz component. It is
        important to understand that a chart is composed by:
      </p>
      <ul className="list-disc list-inside pl-10">
        <li>
          the global chart area, often specified by the <code>width</code> and{' '}
          <code>height</code> properties of the chart components.
        </li>
        <li>
          the "bounds" area, i.e. the area located inside the x and y axis. It
          is calculated by substracting the margins
        </li>
      </ul>
      {/*
      //
      //
      //
      */}
      <h2 id="usage">Usage</h2>{' '}
      <p>
        Once you have the bottom and left axis component described above you
        just need to call them properly. You need to compute the bounds area by
        substracting the margins to the total svg area.
      </p>
      <p>
        Don't forget to add an additional translation to the bottom axis to
        render it... at the bottom.
      </p>
      <ChartOrSandbox
        vizName={'AxisBasic'}
        VizComponent={AxisBasicDemo}
        maxWidth={600}
        height={300}
        caption="This axis is rendered without using d3.js to render."
      />
      {/*
      //
      //
      //
      */}
      <h2 id="the d3 way">Alternative: the d3 way</h2>{' '}
      <p>
        If you're a d3.js afficionados and want to deal with as little react as
        possible, you can still use the good old <code>axisBottom()</code> and{' '}
        <code>axisLeft()</code> methods of d3 and wrap them in a
        <code>useEffect()</code> hook.
      </p>
      <p>Here is an example below:</p>
      <ChartOrSandbox
        vizName={'AxisBasicD3'}
        VizComponent={AxisBasicD3Demo}
        maxWidth={600}
        height={300}
        caption={
          'This axis is rendered using d3. The d3 necessary functions are called from a useEffect'
        }
      />
      <br />
      <br />
      <hr className="full-bleed  bord er bg-gray-200 mb-3 mt-10" />
      <ChartFamilySection chartFamily="general" />
      <div className="mt-20" />
      <Contact />
    </Layout>
  );
}
