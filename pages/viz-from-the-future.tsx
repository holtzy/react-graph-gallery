import React, { useRef } from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import Contact from "../component/Contact";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import ChartFamilySection from "../component/ChartFamilySection";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/UI/CodeBlock";
import { FuturisticColorDemo } from "../viz/FuturisticColor/FuturisticColorDemo";
import { FuturisticColorSvgDemo } from "../viz/FuturisticColorSvg/FuturisticColorSvgDemo";

const graphDescription = <p>Building a viz from the future?</p>;

const snippet1 = `
export const useDimensions = (targetRef: React.RefObject<HTMLDivElement>) => {

  const getDimensions = () => {
    return {
      width: targetRef.current ? targetRef.current.offsetWidth : 0,
      height: targetRef.current ? targetRef.current.offsetHeight : 0
    };

}
`.trim();

export default function Home() {
  return (
    <Layout
      title="How to build a responsive chart with React and d3.js"
      seoDescription="How to build a responsive chart with React and d3.js"
    >
      <TitleAndDescription
        title="A viz from the future"
        description={graphDescription}
      />

      <AccordionSection
        title={"What is a viz from the future?"}
        startOpen={true}
      >
        <p>You know minority report?</p>
        <p>
          <a href="https://www.behance.net/gallery/92170213/FUI-HUD-Screens">
            This video
          </a>{" "}
          is what I mean
        </p>
        <ul>
          <li>Dark mode</li>
          <li>Flashy, Neon color</li>
          <li>Glowing shapes</li>
          <li>Gradient</li>
          <li>Animation</li>
        </ul>
      </AccordionSection>

      <AccordionSection title={"Glowing div with box-shadow"} startOpen={true}>
        <p>
          Can be done with overlapping <code>box-shadow</code>.
        </p>
        <p>
          Official doc is{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow">
            here
          </a>
        </p>
        <p>
          A box shadow is described by X and Y offsets relative to the element,
          blur and spread radius, and color.
        </p>
        <p>
          With <code>inset</code>, I can put the shadow inside of the shape
        </p>
        <p>shadows are drawn one of top of each other.</p>
        <ChartOrSandbox
          vizName={"FuturisticColor"}
          VizComponent={FuturisticColorDemo}
          maxWidth={900}
          height={400}
        />
        <p>
          But there is an issue: <code>box-shadow</code> does not exist for svg.
        </p>
      </AccordionSection>

      <AccordionSection title={"Glowing svg with ..."} startOpen={true}>
        <p>How can I do.</p>
        <p>Two main ways: svg filter and css filter</p>
        <p>
          css filter is easy, it works like box-shadows that is described above
        </p>
        <p>
          BUT, it does not work with inset, so we need another solution for
          inside shadow.
        </p>
        <ChartOrSandbox
          vizName={"FuturisticColorSvg"}
          VizComponent={FuturisticColorSvgDemo}
          maxWidth={900}
          height={400}
        />
        <p>But there is an issue: how to do for canvas</p>
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
