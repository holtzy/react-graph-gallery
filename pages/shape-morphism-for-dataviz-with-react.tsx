import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import Contact from "../component/Contact";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import ChartFamilySection from "../component/ChartFamilySection";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/CodeBlock";
import { TriangleToPolygonStepByStep } from "../viz/TriangleToPolygonStepByStep/TriangleToPolygonStepByStep";
import { TriangleToPolygonAnimated } from "../viz/TriangleToPolygonAnimated/TriangleToPolygonAnimated";
import { BoxplotToViolinTransition } from "../viz/BoxplotToViolinTransition/BoxplotToViolinTransition";
import { data as violinData } from "../data/distribution-multi-groups-random";

const graphDescription = (
  <p>
    Shape morphism is the art of transitioning between 2 shapes as smoothly as
    possible. This post explores how it can be useful for data visualization and
    how it can be done using <code>React</code>.
  </p>
);

const snippet1 = `
const shape1 = "M10,140 L50,60 L90,140 Z"; // triangle
const shape2 = "M350,50 L400,83 L400,116 L350,150 L300,116 L300,83"; // polygon
`.trim();

const snippet2 = `
const interpolator = interpolate(shape1, shape2);
`.trim();

const snippet3 = `
interpolator(0.2)
// M110,58L113.25,62.825L116.5,67.65L119.75,72.475L123,77.3L126.25,82.125L129.5,86.95L.......Z
`.trim();

export default function Home() {
  return (
    <Layout
      title="Shape morphism for data visualization"
      seoDescription="How to transition between 2 shapes with react for dataviz"
    >
      <TitleAndDescription
        title="Shape morphism for data visualization"
        description={graphDescription}
      />

      <AccordionSection title={"What are we trying to do"} startOpen={true}>
        <p>
          Sometimes in dataviz we want to transition between 2 chart types,
          let's say between a pie chart and a barplot. This is pretty hard since
          the shapes used for those 2 charts are very different: arc versus
          rectangle.
        </p>
        <br />
        <p>
          This is still possible thanks to a few libraries. This post suggests
          to use <code>d3.js</code> to build the start and end svg path,{" "}
          <code>flubber</code>
          to interpolate those path, <code>react-spring</code> for the animation
          and <code>react</code> for the rendering.
        </p>
        <br />
        <p>This is the kind of thing we're gonna learn to build:</p>
        <br />
        <div className="full-bleed grey-section flex justify-center flex-col">
          <div className="w-full flex justify-center">
            <BoxplotToViolinTransition
              height={400}
              width={800}
              data={violinData}
            />
          </div>
        </div>
      </AccordionSection>

      <AccordionSection
        title={"Shape morphism on the web: a review"}
        startOpen={true}
      >
        <p>
          I knew nothing about shape morphism 3 weeks ago. It took me a lot of
          effort to browse the web and find what the most appropriate tools are.
          To avoid you the hassle, here is a quick summary:
        </p>
      </AccordionSection>

      <AccordionSection
        title={"Shape interpolation with flubber"}
        startOpen={true}
      >
        <p>
          <a href="https://github.com/veltman/flubber">flubber</a> is an open
          source javascript library built by{" "}
          <a href="https://github.com/veltman">Noah Veltman</a>. Unlike most of
          the shape morphism libraries it works very well to interpolate shapes
          that are completely different and don't have the same number of nodes.
        </p>
        <br />
        <p>Let's start by creating 2 svg shapes</p>
        <CodeBlock code={snippet1} />
        <br />
        <p>
          It's very straightforward to interpolate a state between the 2 of them
          thanks to the <code>interpolate()</code> function of
          <code>flubber</code>. This function expects 2 arguments: the starting
          shape and the ending shape:
        </p>
        <CodeBlock code={snippet2} />
        <br />
        <p>
          <code>interpolate()</code> returns a function. This function accepts
          only 1 argument: a value between 0 (start) and 1 (end). It will return
          the interpolated shape for this progress.
        </p>
        <CodeBlock code={snippet3} />
        <br />
        <p>Here is a visualization of the final result</p>
        <ChartOrSandbox vizName={"TriangleToPolygonStepByStep"}>
          <TriangleToPolygonStepByStep height={200} width={400} />
        </ChartOrSandbox>
      </AccordionSection>

      <AccordionSection
        title={"Animating the transition with react-spring"}
        startOpen={true}
      >
        <p>
          Now that we know how to build an interpolated shape between a starting
          and an ending point, let's animated this transition using{" "}
          <code>react-spring</code>.
        </p>
        <ChartOrSandbox vizName={"TriangleToPolygonAnimated"}>
          <TriangleToPolygonAnimated height={200} width={400} />
        </ChartOrSandbox>
      </AccordionSection>

      <AccordionSection
        title={"Pie chart to barplot transtion"}
        startOpen={true}
      >
        <p>
          I knew nothing about shape morphism 3 weeks ago. It took me a lot of
          effort to browse the web and find what the most appropriate tools are.
          To avoid you the hassle, here is a quick summary:
        </p>
      </AccordionSection>

      <AccordionSection title={"Violin to boxplot transition"} startOpen={true}>
        <p>
          I knew nothing about shape morphism 3 weeks ago. It took me a lot of
          effort to browse the web and find what the most appropriate tools are.
          To avoid you the hassle, here is a quick summary:
        </p>
        <ChartOrSandbox vizName={"BoxplotToViolinTransition"}>
          <BoxplotToViolinTransition
            height={400}
            width={800}
            data={violinData}
          />
        </ChartOrSandbox>
      </AccordionSection>

      <hr className="full-bleed  bord er bg-gray-200 mb-3 mt-10" />

      <ChartFamilySection chartFamily="partOfAWhole" />

      <div className="mt-20" />
      <Contact />
    </Layout>
  );
}
