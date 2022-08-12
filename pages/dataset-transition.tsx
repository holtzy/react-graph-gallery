import React, { useRef } from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import Contact from "../component/Contact";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import ChartFamilySection from "../component/ChartFamilySection";
import { AccordionSection } from "../component/AccordionSection";
import { useDimensions } from "../hook/use-dimensions";
import { TakeHome } from "../component/TakeHome";
import { ReactSpringMostBasic } from "../viz/ReactSpringMostBasic/ReactSpringMostBasic";
import { ReactSpringAxis } from "../viz/ReactSpringAxis/ReactSpringAxis";
import { ReactSpringMostBasicDemo } from "../viz/ReactSpringMostBasic/ReactSpringMostBasicDemo";
import { ReactSpringAxisDemo } from "../viz/ReactSpringAxis/ReactSpringAxisDemo";
import { DonutDatasetTransition } from "../viz/DonutDatasetTransition/DonutDatasetTransition";

const graphDescription = (
  <p>How to smoothly transition from a dataset to the other.</p>
);

const snippet1 = `
const TICK_LENGTH = 6;

export const AxisBottom = ({ xScale, pixelsPerTick }) => {

`.trim();

export default function Home() {
  const demoRef = useRef<HTMLDivElement>(null);
  const demoDim = useDimensions(demoRef);

  return (
    <Layout
      title="Smooth dataset transition"
      seoDescription="This blogpost explains how to animate the a dataset transition using react-spring."
    >
      <TitleAndDescription
        title="Animated dataset transition"
        description={graphDescription}
      />

      {/* Basic demo */}
      <div className="w-full flex flex-col justify-center items-center">
        <div
          style={{ height: 250, width: "100%", maxWidth: 500 }}
          ref={demoRef}
        >
          <DonutDatasetTransition
            width={demoDim.width}
            height={demoDim.height}
          />
        </div>
        <p className="text-sm text-gray-500 max-w-md italic text-center mt-8 font-light">
          A minimal react-spring dataviz example. A viz component expect a{" "}
          <code>position</code> and a <code>color</code> prop. But it smoothly
          animates the transition.
        </p>
      </div>

      <AccordionSection title={"Barplot transition"} startOpen={true}>
        <p>
          Consider a change where dataset has the same structure, just the
          values change. Same number of items.
        </p>
        <ChartOrSandbox
          vizName={"ReactSpringMostBasic"}
          VizComponent={ReactSpringMostBasicDemo}
          maxWidth={800}
          height={200}
          caption="A very basic animation using react and react-spring."
        />
      </AccordionSection>

      <AccordionSection
        title={"Most basic react spring example"}
        startOpen={true}
      >
        <p>
          The best tool to build a spring animation in the react world is{" "}
          <a href="https://react-spring.io/">react-spring</a>, a library
          dedicated to it. If you're not familiar with it already you probably
          want to take a look at their{" "}
          <a href="https://react-spring.io/">home page</a>.
        </p>
        <p>
          Let's start with a basic example showing how to animate a very basic
          viz component that just renders a circle.
        </p>
      </AccordionSection>

      <AccordionSection title={"Animating axes"} startOpen={true}>
        <p>
          A common hassle is to animate axes, since it's a lot of svg elements.
        </p>
        <ChartOrSandbox
          vizName={"ReactSpringAxis"}
          VizComponent={ReactSpringAxisDemo}
          maxWidth={800}
          height={200}
          caption="A very basic animation using react and react-spring."
        />
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
