import React, { useRef } from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import Contact from "../component/Contact";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import ChartFamilySection from "../component/ChartFamilySection";
import { AccordionSection } from "../component/AccordionSection";
import { useDimensions } from "../hook/use-dimensions";
import { DonutDatasetTransition } from "../viz/DonutDatasetTransition/DonutDatasetTransition";
import { BarplotDatasetTransitionDemo } from "../viz/BarplotDatasetTransition/BarplotDatasetTransitionDemo";

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
          vizName={"BarplotDatasetTransition"}
          VizComponent={BarplotDatasetTransitionDemo}
          maxWidth={800}
          height={450}
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
