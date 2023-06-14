import React from "react";
import { Layout } from "component/Layout";
import TitleAndDescription from "component/TitleAndDescription";
import ChartFamilySection from "component/ChartFamilySection";
import { CodeBlock } from "component/UI/CodeBlock";
import { ChartOrSandbox } from "component/ChartOrSandbox";
import Link from "next/link";
import { ArcDiagramVerticalDemo } from "viz/ArcDiagramVertical/ArcDiagramVerticalDemo";
import { LinkAsButton } from "component/LinkAsButton";

const graphDescription = (
  <>
    <p>
      This tutorial is a variation around the general{" "}
      <Link href="/arc-diagram">introduction to arc diagram with react</Link>{" "}
      and d3.js. You should probably understand the concepts described there
      before reading here.
    </p>
    <p>
      This example explains how to make a <b>vertical</b> version of the{" "}
      <Link href="/arc-diagram">arc diagram</Link>. The vertical version is
      sometimes prefered as it makes it easier to read the node labels.
    </p>
    <p>
      A code sandbox is provided for the final result, but explanations target
      what's different compared to a classic horizontal arc diagram.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="How to build a vertical arc diagram with React and D3.js."
      seoDescription="A step-by-step guide to build an arc diagram. Comes with explanations, code sandboxes, and ready-to-use templates."
    >
      <TitleAndDescription
        title="Vertical arc diagram"
        description={graphDescription}
        chartType="arc"
      />
      {/*
      //
      // Plot and code
      //
      */}
      <h2 id="plot">Plot and code</h2>
      <p>
        If you are in a hurry, here is the final plot we're trying to achieve
        here, together with its code:🙇‍♂️
      </p>
      <p>
        It is a very simple vertical <b>arc diagram</b>, a variation of the
        <b>horizontal</b> version deeply described in the{" "}
        <Link href="/arc-diagram">arc diagram section</Link> of the gallery
      </p>

      <LinkAsButton isFilled size="sm" href="/arc-diagram">
        Arc section
      </LinkAsButton>
      <ChartOrSandbox
        vizName={"ArcDiagramVertical"}
        VizComponent={ArcDiagramVerticalDemo}
        maxWidth={500}
        height={500}
        caption="A vertical arc diagram made with d3.js and react."
      />

      {/*
      //
      // Vertical arcs
      //
      */}
      <h2 id="vertical arcs">Vertical arcs</h2>
      <p>
        The main difficulty when it comes to make an arc diagram is to draw{" "}
        <b>arcs</b> in SVG.
      </p>
      <p>
        The <Link href="/arc-diagram#connections">function</Link> allowing to
        draw arcs between 2 data points is a bit complicated since it requires
        to use <b>elliptical arc curves</b>.
      </p>
      <p>
        You can read more explanation about the syntax in the{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#elliptical_arc_curve">
          official doc
        </a>
        . But in the meantime here is the function I suggest to draw an arc
        connecting 2 points <code>vertically</code>:
      </p>
      <CodeBlock code={snippetFunction} />

      {/*
      //
      // Labels
      //
      */}
      <h2 id="labels">Labels</h2>
      <p>
        Note that some <b>labels</b> have been added here compared to the
        vertical version.
      </p>
      <p>
        This is the main advantage of choosing the{" "}
        <Link href="/arc-diagram">horizontal layout</Link>!
      </p>
      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="flow" />
      <div className="mt-20" />
    </Layout>
  );
}

const snippetFunction = `
const verticalArcGenerator = (
  xStart: number,
  yStart: number,
  xEnd: number,
  yEnd: number
) => {
  return [
    // the arc starts at the coordinate xStart, yStart
    "M",
    xStart,
    yStart,
    // A means we're gonna build an Elliptical Arc Curve
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#elliptical_arc_curve
    "A",
    ((yStart - yEnd) / 2) * 2, // rx: first radii of the ellipse (inflexion point)
    (yStart - yEnd) / 2, // ry: second radii of the ellipse  (inflexion point)
    0, // angle: rotation (in degrees) of the ellipse relative to the x-axis
    1, // large-arc-flag: large arc (1) or small arc (0)
    yStart < yEnd ? 1 : 0, // sweep-flag: the clockwise turning arc (1) or counterclockwise turning arc (0)
    // Position of the end of the arc
    xEnd,
    ",",
    yEnd,
  ].join(" ");
};
`.trim();
