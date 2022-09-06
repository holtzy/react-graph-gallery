import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import ChartFamilySection from "../component/ChartFamilySection";
import Contact from "../component/Contact";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/UI/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import { CorrelogramBasicDemo } from "../viz/CorrelogramBasic/CorrelogramBasicDemo";

const graphDescription = (
  <p>
    A{" "}
    <a href="https://www.data-to-viz.com/graph/correlogram.html">correlogram</a>{" "}
    allows to study the relationship between many numeric variables. It is
    challenging to build one using react and d3.js. This page shows various
    example and provide explanations about the code.
  </p>
);

const snippet1 = `
const data = [
  {
    "country": "Afghanistan",
    "continent": "Asia",
    "lifeExp": 43.828,
    "pop": 31889923,
    "gdpPercap": 974.5803384
  },
  {
    "country": "Albania",
    "continent": "Europe",
    "lifeExp": 76.423,
    "pop": 3600523,
    "gdpPercap": 5937.029526
  },
  ...
]
`.trim();

export default function Home() {
  return (
    <Layout
      title="Correlogram with React"
      seoDescription="How to build a correlogram with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription
        title="Correlogram"
        description={graphDescription}
        chartType="correlogram"
      />

      <AccordionSection title={"The data"} startOpen={true} toc="input data">
        <p>
          Todo. Still not sure what's the best data input for this kind of
          chart. Should check open source viz libraries for what they suggest.
        </p>
        <CodeBlock code={snippet1} />
      </AccordionSection>

      <AccordionSection
        title={"Most basic correlogram"}
        startOpen={true}
        toc="basic correlogram"
      >
        <p>
          The following correlogram is built with a set of scatterplots and a
          few histograms for the diagonal. Graphs are made with the same 2
          components that are called multiple times.
        </p>
        <p>
          I find this react code much more readable than the pure{" "}
          <a href="https://d3-graph-gallery.com/graph/correlogram_histo.html">
            d3 alternative
          </a>
          .
        </p>
        <p></p>

        <ChartOrSandbox
          VizComponent={CorrelogramBasicDemo}
          vizName={"CorrelogramBasic"}
          maxWidth={700}
          height={700}
          caption="A correlogram built with react and d3.js. It shows the relationship between the 4 numeric variables of the famous iris dataset."
        />
      </AccordionSection>

      <br />
      <br />
      <br />
      <div className="full-bleed border-t h-0 bg-gray-100 my-3" />
      <ChartFamilySection chartFamily="correlation" />

      <div className="mt-20" />
      <Contact />
    </Layout>
  );
}
