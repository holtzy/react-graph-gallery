import React, { useRef } from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import Contact from "../component/Contact";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import ChartFamilySection from "../component/ChartFamilySection";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/CodeBlock";
import { FuturisticColorDemo } from "../viz/FuturisticColor/FuturisticColorDemo";

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
        <ul>
          <li>Dark mode</li>
          <li>Flashy, Neon color</li>
          <li>Glowing shapes</li>
          <li>Gradient</li>
          <li>Animation</li>
        </ul>
      </AccordionSection>

      <AccordionSection title={"Glowing"} startOpen={true}>
        <p>
          Can be done with overlapping <code>box-shadow</code>. How to do it in
          svg? In canvas?
        </p>

        <ChartOrSandbox
          vizName={"FuturisticColor"}
          VizComponent={FuturisticColorDemo}
          maxWidth={600}
          height={400}
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
