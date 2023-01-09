import React from "react";
import { Layout } from "component/Layout";
import TitleAndDescription from "component/TitleAndDescription";
import ChartFamilySection from "component/ChartFamilySection";
import { CodeBlock } from "component/UI/CodeBlock";
import { ChartOrSandbox } from "component/ChartOrSandbox";
import Link from "next/link";
import { BarplotDatasetTransitionDemo } from "viz/BarplotDatasetTransition/BarplotDatasetTransitionDemo";

const graphDescription = (
  <>
    <p>
      This tutorial is a variation around the general{" "}
      <Link href="/barplot">introduction to barplot with react</Link> and d3.js.
      You should probably understand the concepts described there before digging
      into <b>animation</b>.
    </p>
    <p>
      This example focus on how to transition between datasets. It explains how
      to animate the change thanks to the{" "}
      <a href="https://www.react-spring.dev/">react-spring</a> library.
    </p>
    <p>
      A code sandbox is provided for the final result, but explanations target
      what's different compared to an usual barplot.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Barplot with smooth dataset transition."
      seoDescription="A step-by-step guide to build your barplot with smooth data transition component. Comes with explanations, code sandboxes, and ready-to-use templates."
    >
      <TitleAndDescription
        title={
          <h1>
            Barplot{" "}
            <span className="text-gray-600 font-light hidden sm:inline">
              with animated dataset transition
            </span>
          </h1>
        }
        description={graphDescription}
        chartType="barplot"
      />
      {/*
      //
      // Plot and code
      //
      */}
      <h2 id="plot">Plot and code</h2>
      <p>
        If you are in a hurry, this is what we're trying to achieve here 🙇‍♂️. The
        value of <b>several individuals</b> is represented, with one bar per
        individual. It's just a <Link href="barplot"> horizontal barplot</Link>.
      </p>
      <p>
        It is possible to switch from one dataset to another using the buttons
        above the chart. A few notes on the 3 usual animation patterns:
      </p>
      <ul>
        <li>
          <b>update</b>: bars smoothly update their rank and size when the data
          changes. So does their label.
        </li>
        <li>
          <b>enter</b>: when the chart first loads, bar starts from 0 and grows
          to its real size. This is also true for items that are available in
          the new dataset but not in the previous. Check <code>Christophe</code>{" "}
          when you switch to data 2.
        </li>
        <li>
          <b>exit</b>: when an item is not available in the next dataset, it
          disappears with no animation (see <code>Paul</code> when switching to
          data2).
        </li>
      </ul>
      <ChartOrSandbox
        vizName={"BarplotDatasetTransition"}
        VizComponent={BarplotDatasetTransitionDemo}
        height={400}
        maxWidth={600}
        caption="Barplot with smooth transition between dataset"
      />
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>
      <p>
        The dataset used here is exactly the same as the one used for the{" "}
        <Link href="/barplot#data">simple barplot</Link>. Note that 2 similar
        datasets are used: <code>data1</code> and <code>data2</code>.
      </p>
      {/*
      //
      // Animation
      //
      */}
      <h2 id="animation">Animation</h2>
      <p>
        Most of the code is similar to the basic{" "}
        <Link href="/barplot#basic&20barplot">barplot component</Link>. But
        instead of building one <code>rect</code> per item in the dataset, a{" "}
        <code>BarItem</code> component is called to render a rectangle that
        supports animation.
      </p>
      <p>
        The <Link href="https://www.react-spring.dev/">react-spring</Link>{" "}
        library is used to create a <b>spring</b> animation. The rectangle
        properties are passed to a <code>useSpring</code> hook that will build
        the animation for us.
      </p>
      <p>
        This is how the <code>BarItem</code> component looks like:
      </p>
      <CodeBlock code={snippetBar} />
      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="distribution" />
      <div className="mt-20" />
    </Layout>
  );
}

const snippetBar = `
import { useSpring, animated } from "@react-spring/web";

type BarItemProps = {
  name: string;
  value: number;
  barHeight: number;
  barWidth: number;
  x: number;
  y: number;
};

type AnimatedProps = {
  barWidth: number;
  value: number;
  valueOpacity: number;
  y: number;
};

export const BarItem = (props: BarItemProps) => {
  const { name, value, barHeight, barWidth, x, y } = props;

  const springProps = useSpring<AnimatedProps>({
    // the 'from' properties will be used only to animate the initialization of the component
    // if you put nothing it will be initialized with the first prop that is provided
    from: {
      value: 0,
      barWidth: 0,
      valueOpacity: 0,
    },
    to: {
      value: value,
      barWidth: barWidth,
      valueOpacity: barWidth > 80 ? 1 : 0,
      y,
    },
    config: {
      friction: 100,
    },
  });

  return (
    <g>
      <animated.rect
        x={x}
        y={springProps.y}
        width={springProps.barWidth}
        height={barHeight}
        opacity={0.7}
        stroke="#9d174d"
        fill="#9d174d"
        fillOpacity={0.3}
        strokeWidth={1}
        rx={1}
      />
      <animated.text
        x={springProps.barWidth?.to((width) => width - 7)}
        y={springProps.y?.to((y) => y + barHeight / 2)}
        textAnchor="end"
        alignmentBaseline="central"
        fontSize={12}
        opacity={springProps.valueOpacity}
      >
        {springProps.value?.to((value) => value.toFixed(0))}
      </animated.text>
      <animated.text
        x={x + 7}
        y={springProps.y?.to((y) => y + barHeight / 2)}
        textAnchor="start"
        alignmentBaseline="central"
        fontSize={12}
      >
        {name}
      </animated.text>
    </g>
  );
};
`.trim();
