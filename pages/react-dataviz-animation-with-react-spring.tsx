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

const graphDescription = (
  <p>
    This post is dedicated to <code>react-spring</code>, a javascript library
    for spring animations. It quickly explains what it is and how it works, and
    then explains how it can be used in the field of data visualization.
  </p>
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
      title="React-spring for data visualization"
      seoDescription="This blogpost explains how to use react-spring to smoothly animate transitions on your charts made with react and d3.js."
    >
      <TitleAndDescription
        title="React-spring for data visualization"
        description={graphDescription}
      />

      {/* Basic demo */}
      <div className="w-full flex flex-col justify-center items-center">
        <div
          style={{ height: 150, width: "100%", maxWidth: 500 }}
          ref={demoRef}
        >
          <ReactSpringMostBasic width={demoDim.width} height={demoDim.height} />
        </div>
        <p className="text-sm text-gray-500 max-w-md italic text-center mt-4 font-light">
          A minimal react-spring dataviz example. A viz component expect a{" "}
          <code>position</code> and a <code>color</code> prop. But it smoothly
          animates the transition.
        </p>
      </div>

      <AccordionSection title={"What is a spring animation?"} startOpen={true}>
        <p>
          Spring animations are different than typical CSS easing animation.
          They're built on spring physics, which gives a more fluid and organic
          feel. The best way to be introduced to this concept is to read Josh
          Comeau's{" "}
          <a href="https://www.joshwcomeau.com/animation/a-friendly-introduction-to-spring-physics/">
            friendly Introduction to Spring Physics
          </a>
        </p>
        <p>To quote him directly:</p>
        <TakeHome>
          Spring physics are like a secret ingredient; they make all animations
          taste better
        </TakeHome>
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
        <ChartOrSandbox
          vizName={"ReactSpringMostBasic"}
          VizComponent={ReactSpringMostBasicDemo}
          maxWidth={800}
          height={200}
          caption="A very basic animation using react and react-spring."
        />
        <p>
          The useSpring funtion can take 2 types of input: an object or a
          function
        </p>
        <ul>
          <li>
            if object, it returns an object that has the values of our animation
          </li>
          <li>
            if function, it returns an array of length 2. First item is the
            object mentionned above. item 2 is the api that controls the spring.
            api is used for imperative style
          </li>
        </ul>
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
