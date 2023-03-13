import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import ChartFamilySection from "../component/ChartFamilySection";
import { CodeBlock } from "../component/UI/CodeBlock";
import Link from "next/link";
import { ChartOrSandbox } from "component/ChartOrSandbox";
import { AxisBasicDemo } from "viz/AxisBasic/AxisBasicDemo";

const graphDescription = (
  <>
    <p>
      What is typescript and why it is awesome to use it. How are d3 functions
      typed.
    </p>
    <p>A few examples on how it works.</p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Dealing with d3 axis in a typescript environment"
      seoDescription="How to deal with d3, axes and typescript"
    >
      <TitleAndDescription
        title="D3 axis and typescript"
        description={graphDescription}
        chartType="lollipop"
      />
      {/*
      //
      // Basic linear axis
      //
      */}
      <h2 id="Basic linear scale">Most basic linear axis</h2>
      <p>
        A graph axis is based on a scale. But what is a scale? This is how the
        <a href="https://github.com/d3/d3-scale">d3-scale</a> module describes
        it:
      </p>
      <blockquote>
        Scales are a convenient abstraction for a fundamental task in
        visualization: mapping a dimension of abstract data to a visual
        representation
      </blockquote>
      <p>
        So basically a scale is a function. You provide it with an input like
        the value of a data point, and it returns another value like a position
        in pixel.
      </p>
      <p>
        Here is a very basic implementation of a scale using the{" "}
        <code>scaleLinear</code> function of d3.
      </p>
      <CodeBlock code={mostBasicScaleLinear} />
      <p>
        Scales are then used to build axis. Here is an example transforming the
        scale above in an X axis using a custom react component.
      </p>
      <ChartOrSandbox
        VizComponent={AxisBasicDemo}
        vizName={"AxisBasic"}
        maxWidth={400}
        height={300}
        caption={
          "How to build a bottom axis and a left axis component using React, used to render a d3 scale."
        }
      />
      <p>Ok, now, how to deal with this in a typescript world?</p>
      {/*
      //
      // scaleLinear and typescript
      //
      */}
      <h2 id="typing scaleLinear">
        <code>scaleLinear</code> and typescript
      </h2>
      <p>
        When we create a scale function using <code>scaleLinear</code>, it is
        equivalent as calling the function with the 3 default generics
      </p>{" "}
      <CodeBlock code={scaleLinearGenericEquivalent} />
      <p>
        Here, the first generic is the type of the data items used for the range
        of scale. The second generic is the type of the data that the scale with
        output. You can see the explanations more in depth in the{" "}
        <a href="https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/d3-scale/index.d.ts#L210">
          type definition
        </a>{" "}
        of the scaleLinear function.
      </p>
      <p>
        Now, what happens if we want to use scaleLinear to take a numeric value
        and map it to a color? In this case the range is gonna be an array of
        string. And the output is gonna be a color too. We can type it as:
      </p>
      <CodeBlock code={scaleLinearColor} />
      <br />
      {/*
      //
      // scaleOrdinal and typescript
      //
      */}
      <h2 id="typing scaleOrdinal">
        <code>scaleOrdinal</code> and typescript
      </h2>
      <p>
        Consider a finite number of groups. We need to assign a specific color
        to each group. This is called an <b>ordinal</b> scale and is implemented
        in the d3 <code>scaleOrdinal</code> function.
      </p>
      <p>
        What's needed here is thus a list of colors to use (the{" "}
        <code>range</code>) and a list of group names: the <code>domain</code>.
      </p>
      <p>To put it in a nutshell, that's how the color scale is implemented:</p>
      <CodeBlock code={snippetOrdinal} />
      <p>
        You can see how{" "}
        <a href="https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/d3-scale/index.d.ts#L2251">
          scaleOrdinal type implementation
        </a>
      </p>
      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="general" />
      <div className="mt-20" />
    </Layout>
  );
}

const mostBasicScaleLinear = `
const xScale = d3.scaleLinear()
  .domain([0, 10]) // data can go from 0 to 10
  .range([0, width]); // it will result in a value that goes from 0 to width

// xScale(0) -> 0
// xScale(10) -> width
// xScale(5) -> width / 2
`.trim();

const scaleLinearGenericEquivalent = `
// if you call
const xScale = d3.scaleLinear()

// it is equivalent to
const xScale = d3.scaleLinear<numeric, numeric, never>()
`.trim();

const scaleLinearColor = `
// typing a color scale
const colorScale = d3.scaleLinear<string, string, never>()
  .range(['blue', 'green'])
  .domain([1, 100]);
`.trim();

const snippetOrdinal = `
// List of arbitrary colors
const COLORS = ["#e0ac2b", "#e85252", "#6689c6", "#9a6fb0", "#a53253"];

// List of all group names
const allGroups = data.map((group) => group.group);

// Color scale
const colorScale = d3.scaleOrdinal<string>()
  .domain(allGroups)
  .range(COLORS);
`.trim();
